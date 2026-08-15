import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import { useAppTheme } from '../../../hooks/useAppTheme';
import createStyles from './styles';
import {
  AppInput,
  CustomButton,
  Loader,
  ScreenLayout,
} from '../../../component';

import { Images } from '../../../assets/images';
import { Icons } from '../../../assets/icons';

import { showToast } from '../../../utils/toast';

import { POST_FORM } from '../../../api/request';
import { ApiEndPoint } from '../../../api/endPoints';
import { localStorage, storageKeys } from '../../../storage/storage';

const LoginScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const { tokens } = theme;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  console.log('errors', errors);

  const [passVisible, setPassVisible] = useState(true);
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (key, value) => {
    setInput(prev => ({
      ...prev,
      [key]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [key]: '',
    }));
  };

  const handleRightPress = () => {
    setPassVisible(prev => !prev);
  };

  const validate = () => {
    const validationErrors = {};

    if (!input.username.trim()) {
      validationErrors.username = 'Please enter username';
    } else if (input.username.trim().length < 4) {
      validationErrors.username = 'Username must be at least 4 characters';
    }

    if (!input.password.trim()) {
      validationErrors.password = 'Please enter password';
    } else if (input.password.trim().length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) {
      return;
    }

    try {
      const params = {
        username: input.username.trim(),
        password: input.password.trim(),
      };

      setLoading(true);
      const res = await POST_FORM(ApiEndPoint.LoGIN, params);
      console.log('ressss', res);

      if (res?.status === 200) {
        showToast('success', 'Success', res?.message);
        navigation.navigate('OtpRequest', {
          name: input.username.trim(),
          pass: input?.password.trim(),
        });
      } else {
        showToast('error', 'Error', res?.message || 'Login faild');
      }
    } catch (error) {
      console.log('FETCH ERROR =>', error);
      if (error.offline) {
        return;
      }
      showToast('error', 'Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenLayout paddingHorizontalStyle={0} innerContainer={styles.container}>
      <Loader visible={loading} />
      <View style={styles.logoBox}>
        <Image
          source={Images.logoLatest}
          style={styles.logoImg}
          resizeMode="contain"
        />
      </View>

      <LinearGradient
        colors={[tokens.colors.white, tokens.colors.lightPrimary]}
        style={styles.homeContainer}
      >
        <Text style={styles.loginText}>Login In</Text>
        <Text style={[styles.loginText, styles.decText]}>
          Login to access Recharge Pay services
        </Text>
        <AppInput
          placeholderText={'Enter username'}
          inputBoxStyle={[
            styles.inputBox,
            {
              marginTop: theme.tokens.spacing.xl,
            },
          ]}
          leftIcon={Icons.userIcon}
          leftIconStyle={styles.leftIconStyle}
          value={input.username}
          handleChange={text => handleChange('username', text)}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}
        <AppInput
          placeholderText={'Enter password'}
          inputBoxStyle={[
            styles.inputBox,
            {
              marginTop: tokens.spacing.md,
            },
          ]}
          leftIcon={Icons.passwordIcon}
          leftUc
          value={input.password}
          leftIconStyle={styles.leftIconStyle}
          handleChange={text => handleChange('password', text)}
          rightIcon={
            !passVisible ? Icons.showPasswordIcon : Icons.hidePasswordIcon
          }
          secureTextEntry={passVisible}
          rightIconPress={handleRightPress}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        <CustomButton
          title="Send OTP"
          style={{
            width: '90%',
            marginTop: tokens.spacing.xl,
          }}
          onPress={handleLogin}
        />

        <View style={styles.mainBoxSupport}>
          <View style={styles.earPhoneBox}>
            <Image
              source={Icons.earPhone}
              tintColor={'#0E8D39'}
              style={styles.earPhone}
            />
          </View>

          <View>
            <Text style={styles.helpLineTest}>Helpline Support</Text>

            <Text style={styles.supportNuber}>+91 9612351141</Text>
          </View>
        </View>
        <Text style={styles.versionText}>Version 1.0</Text>
      </LinearGradient>
    </ScreenLayout>
  );
};

export default LoginScreen;

// // const fakeToken = 'static-token-123456';
// // dispatch(loginSuccess(fakeToken)); style={styles.RechazText}
// // Alert.alert('success');
// // navigation.navigate('MainTab');

// // <View style={styles.inputContainer}>
// //   <PhoneIcon name="call-outline" size={20} />
// //   <TextInput
// //     placeholder="Enter Mobile Number"
// //     style={styles.input}
// //     placeholderTextColor={tokens.colors.placeHolderColor}
// //   />
// // </View>

// // loading={loading}

// {
//   /* List */
// }
// // <FlatList
// //   data={rechargeHistory}
// //   keyExtractor={(item) => item.RecId}
// //   renderItem={renderItem}
// //   showsVerticalScrollIndicator={false}
// //   ListEmptyComponent={EmptyComponent}
// //   contentContainerStyle={styles.contentContainer}
// // />
