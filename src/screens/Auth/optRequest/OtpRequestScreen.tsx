import React, { useState, useEffect } from "react";
import { Image, Text, View, Keyboard } from "react-native";
import { ScreenLayout } from "../../../component/ScreenContainer/ScreenLayout";
import { useAppTheme } from "../../../hooks/useAppTheme";
import LinearGradient from "react-native-linear-gradient";
import { createStyles } from "./styles";
import { CustomButton, OTPInput } from "../../../component";
import { useAppDispatch } from "../../../redux/hooks";
import { loginSuccess } from "../../../redux/Slices/authSlice";
import { Images } from "../../../assets/images";
import { Icons } from "../../../assets/icons";
import { useRoute } from "@react-navigation/native";
import { POST_FORM } from "../../../api/request";
import { ApiEndPoint } from "../../../api/endPoints";
import { showToast } from "../../../utils/toast";
import { localStorage, storageKeys } from "../../../storage/storage";

const OtpRequestScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const routes = useRoute();

  const { name, pass } = routes?.params;
  const styles = createStyles(theme);

  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    otp: "",
  });

  const validation = () => {
    const validationError = {};
    const formattedOtp = otp.trim();

    if (!formattedOtp) {
      validationError.otp = "Please enter OTP";
    } else if (formattedOtp.length !== 6) {
      validationError.otp = "Please enter valid 6 digit OTP";
    }
    // else if (formattedOtp !== "123456") {
    //   validationError.otp = "Please enter valid OTP";
    // }
    setErrors(validationError);
    return Object.keys(validationError).length === 0;
  };

  const handleOptVerified = async () => {
    if (!validation()) {
      return;
    }

    try {
      const params = {
        username: name,
        password: pass,
        otp,
      };

      setLoading(true);
      const res = await POST_FORM(ApiEndPoint.LoGIN, params);

      if (res?.status === 200) {
        showToast("success", "Success", res?.message);
        // const fakeToken = 'static-token-123456';
        // dispatch(loginSuccess(fakeToken));
        await localStorage.setItem(storageKeys.userToken, res?.token);
        await localStorage.setItem(
          storageKeys.userData,
          JSON.stringify(res?.data),
        );

        dispatch(loginSuccess(res?.token));
      } else {
        showToast("error", "Error", res?.message || "OTP Verification faild");
      }
    } catch (error) {
      console.log("FETCH ERROR =>", error);
      if (error.offline) {
        return;
      }
      showToast("error", "Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <ScreenLayout paddingHorizontalStyle={0} innerContainer={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={Images.logoLatest}
          style={styles.logoImg}
          resizeMode="contain"
        />
      </View>

      <LinearGradient
        colors={[theme.tokens.colors.white, theme.tokens.colors.lightPrimary]}
        style={styles.innerContainer}
      >
        <View>
          <Text style={styles.loginText}>OTP Request</Text>
          <Text style={[styles.loginText, styles.decText]}>
            Login to access Reacharge Pay services
          </Text>
          <OTPInput onChangeOtp={setOtp} />
          {errors.otp && <Text style={styles.errorText}>{errors.otp}</Text>}

          <Text style={styles.optSendText}>.</Text>

          <CustomButton
            title="Verify & Login"
            style={{ width: "90%" }}
            onPress={handleOptVerified}
          />
          <Text style={styles.changeText}>Change Number</Text>
        </View>

        {!keyboardVisible && (
          <>
            <View style={styles.mainBoxSupport}>
              <View style={styles.earPhoneBox}>
                <Image
                  source={Icons.earPhone}
                  tintColor={"#0E8D39"}
                  style={styles.earPhone}
                />
              </View>

              <View>
                <Text style={styles.helpLineTest}>Helpline Support</Text>
                <Text style={styles.supportNuber}>+91 9612351141</Text>
              </View>
            </View>
            <Text style={styles.versionText}>Version:1.0</Text>
          </>
        )}
      </LinearGradient>
    </ScreenLayout>
  );
};

export default OtpRequestScreen;
