import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {
  ScreenLayout,
  AppHeader,
  AppInput,
  CustomDropDown,
  Loader,
  CustomButton,
} from '../../component';

import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { showToast } from '../../utils/toast';

const MerchantOnboardScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [adharNumber, setAdharNumber] = useState('842646088250');
  const [retalerId, setRetalerId] = useState('tyxne2030405');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCheckStatus = () => {
    showToast(
      'success',
      'Success',
      'Please wait for 24 hours. Your onboarding will be completed within this time.',
    );
  };

  return (
    <ScreenLayout
      innerContainer={styles.homeContainer}
      header={<AppHeader title="Merchant Onboard" onPress={handleBackPress} />}
      scroll={true}
    >
      <Text style={[styles.label, styles.mobileNumberTop]}>Adhar Number*</Text>
      <AppInput
        placeholderText="Enter Adhar Number"
        keyboardType="number-pad"
        value={adharNumber}
        maxLength={12}
      />
      <Text style={[styles.label, styles.mobileNumberTop]}>Retaler Id*</Text>
      <AppInput
        placeholderText="Enter Retaler Id Number"
        keyboardType="number-pad"
        value={retalerId}
      />

      <CustomButton
        title="Submit Onboarding"
        onPress={handleCheckStatus}
        style={styles.btnBox}
      />
    </ScreenLayout>
  );
};

export default MerchantOnboardScreen;
// <Pressable style={styles.merchantBtn} onPress={handleCheckStatus}>
//       <Text style={styles.checkStatusText}>Check Status</Text>
//     </Pressable>
