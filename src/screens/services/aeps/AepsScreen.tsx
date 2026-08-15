// import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// import React, { useState } from 'react';
// import {
//   ScreenLayout,
//   AppHeader,
//   AppInput,
//   CustomDropDown,
//   Loader,
// } from '../../../component';
// import { Icons } from '../../../assets/icons';
// import { showToast } from '../../../utils/toast';
// import { POST_FORM } from '../../../api/request';
// import { ApiEndPoint } from '../../../api/endPoints';
// import { useAppTheme } from '../../../hooks/useAppTheme';
// import { createStyles } from './styles';

// const AepsScreen = ({ navigation }) => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [txnType, setTxnType] = useState(null);

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const [input, setInput] = useState({
//     username: '',
//     password: '',
//     mobile: '',
//     aadhar: '',
//     bankPipe: '',
//   });

//   const handleChange = (key, value) => {
//     setInput(prev => ({
//       ...prev,
//       [key]: value,
//     }));

//     setErrors(prev => ({
//       ...prev,
//       [key]: '',
//     }));
//   };

//   const transactionList = [
//     {
//       label: 'Cash Withdrawal',
//       value: 'CW',
//     },
//     {
//       label: 'Balance Enquiry',
//       value: 'BE',
//     },
//     {
//       label: 'Mini Statement',
//       value: 'MS',
//     },
//     {
//       label: 'Aadhaar Pay',
//       value: 'AP',
//     },
//   ];

//   const deviceList = [
//     {
//       label: 'Mantra',
//       value: 'mantra',
//     },
//     {
//       label: 'Morpho',
//       value: 'morpho',
//     },
//     {
//       label: 'SecuGen',
//       value: 'secugen',
//     },
//     {
//       label: 'Startek',
//       value: 'startek',
//     },
//     {
//       label: 'Precision',
//       value: 'precision',
//     },
//     {
//       label: 'NEXT',
//       value: 'next',
//     },
//     {
//       label: 'Other',
//       value: 'other',
//     },
//   ];

//   const bankList = [
//     {
//       label: 'State Bank of India',
//       value: 'SBI',
//     },
//     {
//       label: 'Punjab National Bank',
//       value: 'PNB',
//     },
//     {
//       label: 'UCO Bank',
//       value: 'UCO',
//     },
//     {
//       label: 'Bank of Baroda',
//       value: 'BOB',
//     },
//     {
//       label: 'Canara Bank',
//       value: 'CANARA',
//     },
//     {
//       label: 'Union Bank of India',
//       value: 'UNION',
//     },
//     {
//       label: 'Axis Bank',
//       value: 'AXIS',
//     },
//     {
//       label: 'HDFC Bank',
//       value: 'HDFC',
//     },
//     {
//       label: 'ICICI Bank',
//       value: 'ICICI',
//     },
//     {
//       label: 'Kotak Mahindra Bank',
//       value: 'KOTAK',
//     },
//   ];

//   const bankPipeList = [
//     {
//       label: 'Jio (bank6)',
//       value: 'bank6',
//     },
//     {
//       label: 'Spice Money',
//       value: 'spice',
//     },
//     {
//       label: 'PaySprint',
//       value: 'paysprint',
//     },
//     {
//       label: 'FingPay',
//       value: 'fingpay',
//     },
//   ];

//   const validate = () => {
//     const validationErrors = {};

//     if (!input.username.trim()) {
//       validationErrors.username = 'Please enter username';
//     } else if (input.username.trim().length < 4) {
//       validationErrors.username = 'Username must be at least 4 characters';
//     }

//     if (!input.password.trim()) {
//       validationErrors.password = 'Please enter password';
//     } else if (input.password.trim().length < 6) {
//       validationErrors.password = 'Password must be at least 6 characters';
//     }

//     setErrors(validationErrors);

//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validate()) {
//       return;
//     }

//     try {
//       const params = {
//         username: input.username.trim(),
//         password: input.password.trim(),
//         otp: '123456',
//       };

//       setLoading(true);
//       const res = await POST_FORM(ApiEndPoint.LoGIN, params);

//       if (res?.status === 200) {
//         showToast('success', 'Success', res?.message);
//       } else {
//         showToast('error', 'Error', res?.message || 'Login faild');
//       }
//     } catch (error) {
//       console.log('FETCH ERROR =>', error);
//       if (error.offline) {
//         return;
//       }
//       showToast('error', 'Error', 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScreenLayout
//       innerContainer={{ backgroundColor: '#F5F7FB' }}
//       header={<AppHeader title="AEPS" onPress={handleBackPress} />}
//     >
//       <Loader visible={loading} />

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.container}
//       >
//         {/* Wallet */}

//         <View style={styles.walletCard}>
//           <View>
//             <Text style={styles.walletTitle}>Wallet Balance</Text>
//             <Text style={styles.walletAmount}>₹ 5.90</Text>
//           </View>

//           <TouchableOpacity style={styles.addBalanceButton}>
//             <Text style={styles.addBalanceText}>+ Add Balance</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Device */}

//         <Text style={styles.label}>Device Type</Text>

//         <View style={styles.deviceContainer}>
//           {deviceList.map(item => (
//             <TouchableOpacity
//               key={item.id}
//               style={[
//                 styles.deviceItem,
//                 selectedDevice == item.name && styles.activeDevice,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.deviceText,
//                   selectedDevice == item.name && styles.activeDeviceText,
//                 ]}
//               >
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Transaction */}
//         <CustomDropDown
//           data={transactionList}
//           value={txnType}
//           onChange={item => setTxnType(item)}
//           placeholder="Select Transaction Type"
//         />

//         <AppInput
//           placeholderText="Enter Mobile Number"
//           keyboardType="number-pad"
//           value={input.mobile}
//           handleChange={text => handleChange('mobile', text)}
//         />

//         {errors.mobile && <Text style={styles.error}>{errors.mobile}</Text>}

//         <AppInput
//           placeholderText="Enter Aadhaar Number"
//           keyboardType="number-pad"
//           value={input.aadhar}
//           handleChange={text => handleChange('aadhar', text)}
//         />

//         {errors.aadhar && <Text style={styles.error}>{errors.aadhar}</Text>}

//         <CustomDropDown
//           data={bankList}
//           value={bank}
//           onChange={value => setBank(value)}
//           placeholder="Select Bank"
//         />

//         <AppInput
//           placeholderText="Bank Pipe"
//           value={input.bankPipe}
//           handleChange={text => handleChange('bankPipe', text)}
//         />

//         {/* Finger */}

//         <TouchableOpacity style={styles.bioCard}>
//           <Image source={Icons.fingerPrint} style={styles.bioImage} />

//           <Text style={styles.bioText}>Tap to Capture Fingerprint</Text>
//         </TouchableOpacity>

//         {/* Consent */}

//         <TouchableOpacity style={styles.checkRow}>
//           <View style={styles.checkBox} />

//           <Text style={styles.checkText}>
//             I agree to share my Aadhaar details for UIDAI authentication.
//           </Text>
//         </TouchableOpacity>

//         {/* Button */}

//         <CustomButton title="Proceed" onPress={handleSubmit} />

//         {/* Security */}

//         <View style={styles.securityCard}>
//           <Image source={Icons.shield} style={styles.securityIcon} />

//           <View style={{ flex: 1 }}>
//             <Text style={styles.securityTitle}>Your transaction is secure</Text>

//             <Text style={styles.securitySub}>
//               Protected with bank level encryption
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </ScreenLayout>
//   );
// };

// export default AepsScreen;

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import {
  ScreenLayout,
  AppHeader,
  AppInput,
  CustomDropDown,
  Loader,
  CustomButton, // 1. Added missing import
} from '../../../component';
import { Icons } from '../../../assets/icons';
import { showToast } from '../../../utils/toast';
import { POST_FORM } from '../../../api/request';
import { ApiEndPoint } from '../../../api/endPoints';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import { verticalScale } from '../../../utils/responsiveSize';
import ChekcIcon from 'react-native-vector-icons/FontAwesome6';

const AepsScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [txnType, setTxnType] = useState(null);
  const [bankcPipe, setBankPipe] = useState(null);

  // 2. Added missing state variables
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [bank, setBank] = useState(null);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const [input, setInput] = useState({
    mobile: '',
    aadhar: '',
    bankPipe: '',
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

  const handleTransition = item => {
    // If your dropdown expects a string value instead of an object:
    setTxnType(item);

    // Clear the error gracefully without blocking the UI thread
    if (errors.txnType) {
      setErrors(prev => ({ ...prev, txnType: '' }));
    }
  };

  const handlePipes = item => {
    // If your dropdown expects a string value instead of an object:
    setBankPipe(item);

    // Clear the error gracefully without blocking the UI thread
    if (errors.bankPipe) {
      setErrors(prev => ({ ...prev, bankPipe: '' }));
    }
  };

  const handleDeviceSelect = item => {
    setSelectedDevice(item.value);
    setErrors(prev => ({ ...prev, device: '' }));
  };

  const handleConsentChecked = () => {
    setConsentChecked(pre => !pre);
  };

  const transactionList = [
    { label: 'Cash Withdrawal', value: 'CW' },
    { label: 'Balance Enquiry', value: 'BE' },
    { label: 'Mini Statement', value: 'MS' },
    { label: 'Aadhaar Pay', value: 'AP' },
  ];

  const banckPipeData = [
    { label: 'Jio(bank6)', value: 'Jio(bank6)' },
    { label: 'CITY(bank6)', value: 'CITY(bank6)' },
    { label: 'NSDL(bank3)', value: 'NSDL(bank3)' },
    { label: 'Fino(bank2)', value: 'Fino(bank2)' },
  ];

  const deviceList = [
    { label: 'Mantra', value: 'mantra' },
    { label: 'Morpho', value: 'morpho' },
    { label: 'Secu', value: 'secugen' },
    { label: 'Startek', value: 'startek' },
    { label: 'Precision', value: 'precision' },
    { label: 'NEXT', value: 'next' },
    { label: 'Other', value: 'other' },
  ];

  const bankList = [
    { label: 'State Bank of India', value: 'SBI' },
    { label: 'Punjab National Bank', value: 'PNB' },
    { label: 'UCO Bank', value: 'UCO' },
    { label: 'Bank of Baroda', value: 'BOB' },
    { label: 'Canara Bank', value: 'CANARA' },
    { label: 'Union Bank of India', value: 'UNION' },
    { label: 'Axis Bank', value: 'AXIS' },
    { label: 'HDFC Bank', value: 'HDFC' },
    { label: 'ICICI Bank', value: 'ICICI' },
    { label: 'Kotak Mahindra Bank', value: 'KOTAK' },
  ];

  // 3. Updated validation logic to match your form inputs
  const validate = () => {
    const validationErrors = {};

    if (!txnType) {
      validationErrors.txnType = 'Please select transaction type';
    }
    if (!selectedDevice) {
      validationErrors.device = 'Please select a device';
    }
    if (!input.mobile.trim() || input.mobile.trim().length !== 10) {
      validationErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!input.aadhar.trim() || input.aadhar.trim().length !== 12) {
      validationErrors.aadhar = 'Please enter a valid 12-digit Aadhaar number';
    }
    if (!bank) {
      validationErrors.bank = 'Please select a bank';
    }
    if (!consentChecked) {
      showToast(
        'error',
        'Consent Required',
        'Please accept the consent checkbox',
      );
      return false;
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

    try {
      const params = {
        transactionType: txnType?.value,
        deviceType: selectedDevice,
        mobile: input.mobile.trim(),
        aadhar: input.aadhar.trim(),
        bank: bank?.value,
        bankPipe: input.bankPipe.trim(),
      };

      setLoading(true);
      // Replace with your actual AEPS API endpoint
      const res = await POST_FORM(ApiEndPoint.AEPS_TRANSACTION, params);

      if (res?.status === 200) {
        showToast(
          'success',
          'Success',
          res?.message || 'Transaction Successful',
        );
      } else {
        showToast('error', 'Error', res?.message || 'Transaction failed');
      }
    } catch (error) {
      console.log('FETCH ERROR =>', error);
      if (error.offline) return;
      showToast('error', 'Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenLayout
      innerContainer={styles.homeContainer}
      header={<AppHeader title="AEPS" onPress={handleBackPress} />}
      scroll={true}
    >
      <Loader visible={loading} />

      {/* Device */}
      <Text style={styles.label}>Device Type*</Text>
      <View
        style={[styles.deviceContainer, errors.device && { marginBottom: 0 }]}
      >
        {deviceList.map(item => (
          <TouchableOpacity
            key={item.value}
            onPress={() => handleDeviceSelect(item)}
            style={[
              styles.deviceItem,
              selectedDevice === item.value && styles.activeDevice,
            ]}
          >
            <Text
              style={[
                styles.deviceText,
                selectedDevice === item.value && styles.activeDeviceText,
              ]}
            >
              {item.label} {/* Fixed: changed item.name to item.label */}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {errors.device && (
        <Text style={[styles.error, styles.deviceTypeError]}>
          {errors.device}
        </Text>
      )}

      {/* Transaction */}
      <Text style={styles.label}>Txn Type*</Text>
      <CustomDropDown
        data={transactionList}
        value={txnType}
        onChange={handleTransition}
        placeholder="Select Transaction Type"
      />
      {errors.txnType && <Text style={styles.error}>{errors.txnType}</Text>}
      <Text style={[styles.label, styles.mobileNumberTop]}>Mobile Number*</Text>

      <AppInput
        placeholderText="Enter Mobile Number"
        keyboardType="number-pad"
        value={input.mobile}
        maxLength={10}
        handleChange={text => handleChange('mobile', text)}
      />
      {errors.mobile && <Text style={styles.error}>{errors.mobile}</Text>}

      <Text style={[styles.label, styles.mobileNumberTop]}>Aadhar Number*</Text>
      <AppInput
        placeholderText="Enter Aadhaar Number"
        keyboardType="number-pad"
        value={input.aadhar}
        maxLength={12}
        handleChange={text => handleChange('aadhar', text)}
      />
      {errors.aadhar && <Text style={styles.error}>{errors.aadhar}</Text>}

      <Text style={[styles.label, styles.mobileNumberTop]}>Bank Name*</Text>
      <CustomDropDown
        data={bankList}
        value={bank}
        onChange={value => {
          setBank(value);
          setErrors(prev => ({ ...prev, bank: '' }));
        }}
        placeholder="Select Bank"
      />
      {errors.bank && <Text style={styles.error}>{errors.bank}</Text>}

      <Text style={[styles.label, styles.mobileNumberTop]}>Bank Pipe*</Text>
      <CustomDropDown
        data={banckPipeData}
        value={bankcPipe}
        onChange={handlePipes}
        placeholder="Select Bank"
      />
      {errors.bankcPipe && <Text style={styles.error}>{errors.bankcPipe}</Text>}

      <Text style={[styles.label, styles.mobileNumberTop]}>Biometrics*</Text>
      <Image
        source={Icons?.fingerprintIcon}
        resizeMode="contain"
        style={styles.fingerprintIcon}
      />

      <Pressable style={styles.checkRow} onPress={handleConsentChecked}>
        <View style={styles.checkBox}>
          {consentChecked && (
            <ChekcIcon
              name="check"
              color="#fff"
              size={theme.moderateScale(16)}
            />
          )}
        </View>
        <Text style={styles.checkText}>
          I agree to share my Aadhaar details for UIDAI authentication.
        </Text>
      </Pressable>

      <CustomButton title="Proceed" onPress={handleSubmit} />

      <View style={styles.securityCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.securityTitle}>Your transaction is secure</Text>
          <Text style={styles.securitySub}>
            Protected with bank level encryption
          </Text>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default AepsScreen;
