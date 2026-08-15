import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
  SectionList,
} from "react-native";

import {
  ScreenLayout,
  AppInput,
  AppHeader,
  AppModal,
  Loader,
} from "../../component";

import { useAppTheme } from "../../hooks/useAppTheme";
import { createStyles } from "./styles";
import { Icons } from "../../assets/icons";
import { verticalScale } from "../../utils/responsiveSize";
import { RECHARGE_GET } from "../../api/request";
import { showToast } from "../../utils/toast";
import { apikey } from "../../api/axios";
import { ApiEndPoint } from "../../api/endPoints";
import { useRoute } from "@react-navigation/native";

const MobileRechargeScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const route = useRoute();
  const { RechargeAmount = null, MobNumber = "" } = route?.params || {};

  const [loading, setLoading] = useState(false);
  const [showPlans, setShowPlans] = useState(true);
  const [number, setNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [state, setState] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState('');

  console.log("state", state);

  const [operatorId, setOperatorId] = useState("");
  const [circleId, setCircleId] = useState("");

  const [rechargePlane, setRechargePlane] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [amount, setAmount] = useState("");
  const [visible, setVisible] = useState(false);
  const debounceRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  const circleData = [
    { circleName: "UP(West)", circleCode: 97 },
    { circleName: "PUNJAB", circleCode: 2 },
    { circleName: "HP", circleCode: 3 },
    { circleName: "HARYANA", circleCode: 96 },
    { circleName: "J&K", circleCode: 55 },
    { circleName: "UP(East)", circleCode: 54 },
    { circleName: "MUMBAI", circleCode: 92 },
    { circleName: "MAHARASHTRA", circleCode: 90 },
    { circleName: "GUJARAT", circleCode: 98 },
    { circleName: "RAJASTHAN", circleCode: 70 },
    { circleName: "KOLKATTA", circleCode: 31 },
    { circleName: "West Bengal", circleCode: 51 },
    { circleName: "ORISSA", circleCode: 53 },
    { circleName: "ASSAM", circleCode: 56 },
    { circleName: "NESA", circleCode: 16 },
    { circleName: "BIHAR", circleCode: 52 },
    { circleName: "KARNATAKA", circleCode: 6 },
    { circleName: "CHENNAI", circleCode: 40 },
    { circleName: "TAMIL NADU", circleCode: 94 },
    { circleName: "KERALA", circleCode: 95 },
    { circleName: "AP", circleCode: 49 },
    { circleName: "SIKKIM", circleCode: 99 },
    { circleName: "TRIPURA", circleCode: 100 },
    { circleName: "Chhattisgarh", circleCode: 101 },
    { circleName: "GOA", circleCode: 102 },
    { circleName: "MEGHALAY", circleCode: 103 },
    { circleName: "MIZZORAM", circleCode: 104 },
    { circleName: "JHARKHAND", circleCode: 105 },
  ];

  const operateIdData = [
    { id: 1, name: "AIRTEL" },
    { id: 2, name: "IDEA" },
    { id: 3, name: "BSNL Topup" },
    { id: 4, name: "BSNL Special" },
    { id: 5, name: "JIO" },
    { id: 6, name: "VODAFONE" },
    { id: 7, name: "AIRTEL DTH" },
    { id: 8, name: "DISH TV" },
    { id: 9, name: "RELIANCE BIGTV" },
    { id: 10, name: "SUN DIRECT" },
    { id: 11, name: "TATA SKY" },
    { id: 12, name: "VIDEOCON D2H" },
  ];

  // const filterOperateId = operateIdData.find(
  //   item => item?.name === operator),
  // );

  const filterOperateId = operateIdData.find((item) => item?.name === operator);

  const selectedCircle = circleData.find(
    (item) => item.circleName.toLowerCase() === state?.toLowerCase(),
  );

  const circle_id = selectedCircle?.circleCode;
  const operator_id = filterOperateId?.id;

  const handleToggleDescription = (index) => {
    setExpandedId((prev) => (prev === index ? null : index));
  };

  const handleSetAmount = useCallback((value) => {
    setAmount(value);
    setShowPlans(false);
  }, []);

  const handleAmount = useCallback((text) => {
    setAmount(text);

    if (text.trim()) {
      setShowPlans(false);
    } else {
      setShowPlans(true);
    }
  }, []);

  const validate = () => {
    const errors = {};

    if (!number.trim()) {
      showToast("error", "Error", "Enter mobile number");
      return false;
    }

    if (number.trim().length < 10) {
      showToast("error", "Error", "Enter valid 10 digit number");
      return false;
    }

    return true;
  };
  const fetchPlans = useCallback(async (op, circle, mobile) => {
    try {
      setLoading(true);

      const res = await RECHARGE_GET(
        "user_api_service/recharge/get_offers.php",
        {
          apikey,
          mobile,
          operator: op,
          circle,
        },
      );

      if (res?.STATUS === "0") {
        // const formattedPlans = Object.entries(res?.RDATA || {}).map(
        //   ([title, plans]) => ({
        //     title,
        //     data: plans,
        //   }),
        // );
        // setRechargePlane(formattedPlans);
        const formattedPlans = Object.entries(res?.RDATA || {}).map(
          ([title, plans]) => ({
            title,
            data: plans,
          }),
        );
        setRechargePlane(formattedPlans);

        if (formattedPlans.length > 0) {
          setSelectedCategory(formattedPlans[0].title);
        }
      } else {
        showToast("error", "Error", "Plan not found");
      }
    } catch (erorr) {
      console.log("errrwwww", erorr);

      if (error?.offline) {
        return;
      }
      showToast("error", "Error", "SomeThing went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleMobilenumber = useCallback(
    async (mobileValue) => {
      const cleanNumber = mobileValue?.replace(/\D/g, "").trim();

      if (!cleanNumber || cleanNumber.length !== 10) {
        showToast("error", "Error", "Enter valid 10 digit mobile number");
        return;
      }
      try {
        setLoading(true);

        const res = await RECHARGE_GET(
          "user_api_service/recharge/get_mobile_operator_circle.php",
          {
            apikey,
            mobile: cleanNumber,
          },
        );

        console.log("ressssqqqqq", res);

        if (res?.STATUS === "1") {
          setOperator(res?.Operator || "");
          setState(res?.Circle || "");
          setOperatorId(res?.OpCode || "");
          setCircleId(res?.CircleCode || "");

          await fetchPlans(res?.OpCode, res?.CircleCode, cleanNumber);
        }
      } catch (e) {
        console.log("aaaaerr", e);

        showToast("error", "Error", "SomeThing went wrong");
        if (error?.offline) {
          return;
        }
      } finally {
        setLoading(false);
      }
    },
    [fetchPlans],
  );

  const handleSucces = async () => {
    // random ref id every call
    const refTxnId = `REF${Date.now()}${Math.floor(Math.random() * 10000)}`;

    try {
      setLoading(true);
      const res = await RECHARGE_GET(ApiEndPoint.do_recharge, {
        apikey,
        mobile: number,
        operator_id: operatorId,
        circle_id: circleId,
        amount,
        RefTxnId: refTxnId,
      });

      console.log("resaaaaaaaaa", res);
      console.log("pramaaaaa", {
        apikey,
        mobile: number,
        operator_id: operatorId,
        circle_id: circleId,
        amount,
        RefTxnId: refTxnId,
      });

      if (res?.STATUS === 1) {
        showToast("success", "Success", res?.MESSAGE);
        navigation.navigate("PaymentSuccess", {
          paymentStatus: res?.STATUS,
          amount: amount,
        });
      } else {
        showToast("error", "Error", res?.MESSAGE);
        navigation.navigate("PaymentSuccess", { paymentStatus: res?.STATUS });
      }
    } catch (error) {
      showToast("error", "Error", "SomeThing went wrong");
      if (error?.offline) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNumber = useCallback(
    (value) => {
      setNumber(value);
      const cleanNumber = value?.replace(/\D/g, "").trim();

      if (cleanNumber.length === 10) {
        handleMobilenumber(cleanNumber);
      }
    },
    [handleMobilenumber],
  );

  const renderOfferList = ({ item, index }) => {
    const isExpanded = expandedId === index;
    console.log("item?.rs", item?.rs);

    const description = item?.desc || "";

    const shortText =
      description.length > 100
        ? `${description.slice(0, 100)}...`
        : description;

    return (
      <Pressable
        style={styles.amountBox}
        onPress={() => handleSetAmount(String(item?.rs))}
      >
        <View style={styles.offerPlanBox}>
          <View style={styles.rowBoxMain}>
            <View style={styles.rowBox}>
              <View style={styles.rupperBox}>
                <Image
                  source={Icons.ruppersIcon}
                  resizeMode="contain"
                  style={styles.ruppersIcon}
                />

                <Text style={styles.priceText}>{item?.rs}</Text>
              </View>

              <View style={styles.validitBox}>
                <Text style={styles.validityText}>Validity</Text>

                <Text style={styles.validtyTime}>{item?.validity}</Text>
              </View>

              <View>
                <Text style={styles.validityText}>Data</Text>

                <Text style={styles.validtyTime}>{item?.validity}</Text>
              </View>
            </View>

            <Image
              source={Icons.nextIcon}
              resizeMode="contain"
              style={styles.nextIcon}
            />
          </View>

          <Text style={styles.dexText}>
            {isExpanded ? description : shortText}
          </Text>

          {description.length > 50 && (
            <TouchableOpacity onPress={() => handleToggleDescription(index)}>
              <Text style={styles.seeMoreText}>
                {isExpanded ? "See Less" : "See More"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Pressable>
    );
  };

  // const currentPlans =
  //   rechargePlane.find(item => item.title === selectedCategory)?.data || [];
  const currentPlans =
    rechargePlane.find(
      (item) => item.title === (selectedCategory || rechargePlane?.[0]?.title),
    )?.data || [];

  useEffect(() => {
    // if (MobNumber) {
    //   handleNumber(MobNumber);

    //   if (RechargeAmount !== undefined && RechargeAmount !== null) {
    //     setAmount(String(RechargeAmount));
    //     setShowPlans(false);
    //   }
    // }
    if (MobNumber && RechargeAmount) {
      handleNumber(MobNumber);
      setAmount(String(RechargeAmount));
      setShowPlans(false);
      return;
    }
  }, [MobNumber, RechargeAmount]);

  // useEffect(() => {
  //   if (rechargePlane.length > 0 && !selectedCategory) {
  //     setSelectedCategory(rechargePlane[0]?.title);
  //   }
  // }, [rechargePlane, number]);

  return (
    <ScreenLayout
      header={
        <AppHeader
          title="Mobile Recharge"
          onPress={() => navigation.goBack()}
        />
      }
      innerContainer={styles.innerContainer}
    >
      <Loader visible={loading} />
      {/* ✅ INPUT (FIXED BLUR ISSUE) */}
      <AppInput
        placeholderText="Enter mobile number"
        value={number}
        handleChange={handleNumber}
        leftIcon={Icons.phoneIcon}
        leftIconStyle={styles.leftIconStyle}
        keyboardType="number-pad"
        // onSubmitEditing={() => handleMobilenumber(number)}
        inputBoxStyle={{
          marginTop: verticalScale(10),
        }}
      />

      {rechargePlane.length > 0 && (
        <>
          <AppInput
            placeholderText="Enter operator"
            value={operator}
            editable={false}
            leftIcon={Icons.operatorIcon}
            leftIconStyle={styles.leftIconStyle}
            inputBoxStyle={{
              marginTop: verticalScale(15),
            }}
          />

          <AppInput
            placeholderText="Enter state"
            value={state}
            editable={false}
            leftIcon={Icons.stateIcon}
            leftIconStyle={styles.leftIconStyle}
            inputBoxStyle={{
              marginTop: verticalScale(15),
              marginBottom: verticalScale(10),
            }}
          />

          <AppInput
            placeholderText="Enter amount"
            value={amount}
            handleChange={handleAmount}
            leftIcon={Icons.amountIcon}
            leftIconStyle={styles.leftIconStyle}
            keyboardType="numeric"
            inputBoxStyle={styles.amountBottom}
          />
        </>
      )}

      {showPlans && rechargePlane.length > 0 && (
        <>
          {/* Categories */}
          <View style={styles.categoryContainer}>
            <FlatList
              horizontal
              data={rechargePlane}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => {
                const isSelected = selectedCategory === item.title;
                return (
                  <TouchableOpacity
                    style={[
                      styles.categoryTab,
                      isSelected && styles.activeCategoryTab,
                    ]}
                    onPress={() => setSelectedCategory(item.title)}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        isSelected && styles.activeCategoryText,
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* Plans */}
          <FlatList
            data={currentPlans}
            renderItem={renderOfferList}
            keyExtractor={(item, index) => `${item.rs}-${index}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.planContainer}
          />
        </>
      )}

      {amount && !showPlans && (
        <View>
          <Pressable
            style={styles.seePlanBtn}
            onPress={() => {
              setShowPlans(true);
            }}
          >
            <Text style={styles.seePlanText}>See Plans</Text>
          </Pressable>

          <Pressable style={styles.proceedBtn} onPress={handleSucces}>
            <Text style={styles.proceedText}>Proceed to Recharge</Text>
          </Pressable>
        </View>
      )}

      {
        // <Text onPress={() => navigation.navigate('PaymentSuccess')}> sucess</Text>
      }
    </ScreenLayout>
  );
};
export default MobileRechargeScreen;

//   <Pressable style={styles.seePlanBtn}>
//    <Text style={styles.seePlanText}>See Plans</Text>
//  </Pressable>

//  {amount && (
// <Pressable style={styles.proceedBtn}>
//      <Text style={styles.proceedText}>Proceed to Recharge</Text>
//    </Pressable>
//  )}
