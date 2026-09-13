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
import { CustomInfo } from '../../../utils/errorHandle';

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
      console.log('parama', params);

      setLoading(true);
      const res = await POST_FORM(ApiEndPoint.LoGIN, params);
      console.log('ressss', res);

      if (res?.status === 200) {
        showToast('success', 'Success', res?.message);
        navigation.navigate('OtpRequest', {
          name: input.username.trim(),
          pass: input?.password.trim(),
        });
      } else if (res?.status === 400) {
        CustomInfo(res?.message || 'Wrong credentials');
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

        {/* <View style={styles.mainBoxSupport}>
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
        </View> */}
        <Text style={styles.versionText}>Version 1.0</Text>
      </LinearGradient>
    </ScreenLayout>
  );
};

export default LoginScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import { createStyles } from './styles';
// import { AppHeader, Loader, ScreenLayout } from '../../../component';
// import { showToast } from '../../../utils/toast';
// import { formatDateDayMonthShortYear } from '../../../utils/date';
// import { useAppTheme } from '../../../hooks/useAppTheme';
// import { POST_FORM } from '../../../api/request';
// import { ApiEndPoint } from '../../../api/endPoints';
// import { localStorage, storageKeys } from '../../../storage/storage';

// const AccountHistoryScreen = ({ navigation }) => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);

//   const [rechargeHistory, setRechargeHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   console.log('rechargeHistory', rechargeHistory);

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case 'Success':
//         return {
//           bg: '#E6F9F1',
//           color: '#0E8D39',
//         };
//       case 'Faild':
//         return {
//           bg: '#FFECEC',
//           color: '#F04438',
//         };
//       default:
//         return {
//           color: '#F79009',
//           bg: '#FFF6E5',
//         };
//     }
//   };

//   const renderItem = ({ item }: any) => {
//     const statusStyle = getStatusStyle(item.status);
//     return (
//       <View style={styles.card}>
//         <View style={styles.headerRow}>
//           <View>
//             {item?.operator && (
//               <Text style={styles.title}>Mobile Recharge</Text>
//             )}
//             <Text style={styles.operator}>{item.operator}</Text>
//           </View>

//           <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
//             <Text style={[styles.statusText, { color: statusStyle.color }]}>
//               {item.status}
//             </Text>
//           </View>
//         </View>

//         <View style={styles.infoRow}>
//           <Text style={styles.label}>Mobile No.</Text>
//           <Text style={styles.value}>{item.mobile}</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Text style={styles.label}>Ref ID</Text>
//           <Text style={styles.value}>{item.ref_id}</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Text style={styles.label}>Amount</Text>
//           <Text style={styles.amount}>₹{Number(item.amount).toFixed(0)}</Text>
//         </View>

//         <View style={styles.footer}>
//           <Text style={styles.date}>
//             {formatDateDayMonthShortYear(item.date)}
//           </Text>
//         </View>
//       </View>
//     );
//   };

//   const EmptyComponent = () => (
//     <View style={styles.emptyBox}>
//       <Text style={styles.emptyText}>No Transactions Found</Text>
//     </View>
//   );

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const handleHistory = async id => {
//     const params = {
//       userId: '11556',
//       fromDate: '2026-08-20',
//       toDate: '2026-08-29',
//       tokenid:
//         'a0406e00f00c7fe8b79784eb026b27b721857829e6d0cb53ea70d3b33760dd34',
//       device_type: 'App',
//       user_type: '6',
//     };

//     try {
//       setLoading(true);
//       const response = await POST_FORM(ApiEndPoint.accountHistory, params);
//       console.log('account history =>ssss', response);
//       if (response?.status === 200) {
//         setRechargeHistory(response?.data);
//       } else {
//         showToast('error', 'Error', response?.message);
//         setRechargeHistory([]);
//       }
//     } catch (error) {
//       showToast('error', 'Error', 'Something went wrong');
//       if (error.offline) {
//         return;
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const getId = async () => {
//       let localData = await localStorage.getItem(storageKeys.userData);
//       let formatedData = localData ? JSON.parse(localData) : null;
//       // if (formatedData?.id) {
//       await handleHistory(formatedData?.id);
//       // }
//     };
//     getId();
//   }, []);

//   return (
//     <ScreenLayout
//       header={<AppHeader title="History" onPress={handleBackPress} />}
//     >
//       <Loader visible={loading} />
//       {/* List */}
//       <FlatList
//         data={rechargeHistory}
//         keyExtractor={item => item?.id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//         ListEmptyComponent={EmptyComponent}
//         contentContainerStyle={styles.contentContainer}
//       />
//     </ScreenLayout>
//   );
// };

// export default AccountHistoryScreen;
