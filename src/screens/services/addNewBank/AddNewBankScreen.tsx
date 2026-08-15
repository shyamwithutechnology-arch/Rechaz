import { View, Text, Pressable } from 'react-native';
import React, { useCallback, useState } from 'react';
import {
  AppHeader,
  AppInput,
  CustomButton,
  CustomDropDown,
  ScreenLayout,
} from '../../../component';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { verticalScale } from '../../../utils/responsiveSize';
import { createStyles } from './styles';
import { apikey } from '../../../api/axios';
import { POST_FORM } from '../../../api/request';
import { ApiEndPoint } from '../../../api/endPoints';
import { showToast } from '../../../utils/toast';

const AddNewBankScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [bank, setBank] = useState('');
  const [amount, setAmount] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [iFSCCode, setIFSCCode] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [transActionMode, setTransActionMode] = useState('');
  const [transActionPassword, setTransActionPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTransActionPass = val => {
    setTransActionPassword(val);
  };

  const handleChange = val => {
    setBank(val);
  };

  const handleTransAction = val => {
    setTransActionMode(val);
  };

  const handleAmount = val => {
    setAmount(val);
  };
  const handleAccountNo = val => {
    setAccountNo(val);
  };
  const handleIfscCode = val => {
    setIFSCCode(val);
  };
  const handleAccountHolder = val => {
    setAccountHolder(val);
  };

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const bankAccount = [
    { label: 'SBI', value: 'sbi' },
    { label: 'HDFC', value: 'hdfc' },
    { label: 'ICICI', value: 'icici' },
    { label: 'Axis Bank', value: 'axis' },
    { label: 'PNB', value: 'pnb' },
  ];

  const paymentMode = [
    { label: 'IMPS', value: 'IMPS' },
    // { label: 'RTGS', value: 'RTGS' },
    { label: 'NEFT', value: 'NEFT' },
  ];

  const handleAddBank = async () => {
    try {
      const params = {
        apiKey: apikey,
        bank_id: 1177,
        submerchantid: 'JPON0056',
        account_no: 123654789654,
        ifsc_code: 34525235,
        holder_name: 'shyam',
      };

      setLoading(true);
      const response = await POST_FORM(ApiEndPoint.addBank, params);
      if (response.status === true) {
        showToast(
          'success',
          'Success',
          response?.message || 'Account Detailed saved successfully',
        );
      } else {
        showToast(
          'success',
          'Success',
          response?.message || 'Account Detailed faild',
        );
      }
    } catch (error) {
      if (error.offline) {
        return;
      }
      showToast('error', 'Error', 'Something went wrong' || error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      innerContainer={styles.innerContainer}
      header={<AppHeader title="Add New Bank" onPress={handleGoBack} />}
    >
      <View style={styles.homeContainer}>
        <Text style={[styles.payoutText, { marginTop: verticalScale(4) }]}>
          Bank*
        </Text>

        <CustomDropDown
          data={bankAccount}
          value={bank}
          onChange={handleChange}
          placeholder="Select Bank"
        />

        <Text style={styles.payoutText}>Account No*</Text>
        <AppInput
          value={accountNo}
          handleChange={handleAccountNo}
          placeholderText="Enter Account No"
        />

        <Text style={styles.payoutText}>IFSC Code*</Text>
        <AppInput
          value={iFSCCode}
          handleChange={handleIfscCode}
          placeholderText="Enter IFSC Code"
        />
        <Text style={styles.payoutText}>Account Holder Name*</Text>
        <AppInput
          value={accountHolder}
          handleChange={handleAccountHolder}
          placeholderText="Enter Account Holder Name"
        />

        <Text style={styles.payoutText}>Transaction Password*</Text>
        <AppInput
          value={transActionPassword}
          handleChange={handleTransActionPass}
          placeholderText="Please enter transaction password"
          inputBoxStyle={styles.inputBoxStyle}
        />
        <CustomButton
          title="Submit"
          style={styles.btnStyle}
          onPress={handleAddBank}
        />
      </View>
    </ScreenLayout>
  );
};

export default AddNewBankScreen;
