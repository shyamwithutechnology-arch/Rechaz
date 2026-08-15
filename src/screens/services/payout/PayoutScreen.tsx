import { View, Text, Pressable } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AppHeader,
  AppInput,
  CustomDropDown,
  ScreenLayout,
  Loader,
  CustomButton,
} from '../../../component';
import { createStyles } from '../addNewBank/styles';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { verticalScale } from '../../../utils/responsiveSize';
import { POST_FORM, RECHARGE_POST } from '../../../api/request';
import { ApiEndPoint } from '../../../api/endPoints';
import { showToast } from '../../../utils/toast';
import { apikey } from '../../../api/axios';
import { localStorage, storageKeys } from '../../../storage/storage';

const PayoutScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [bank, setBank] = useState('');
  const [amount, setAmount] = useState('');
  const [transActionMode, setTransActionMode] = useState('');
  const [transActionPassword, setTransActionPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [bankList, setBankList] = useState([]);

  const initialErrors = {
    bank: '',
    mode: '',
    amount: '',
    transActionPassword: '',
  };
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = val => {
    setBank(val);

    if (errors.bank) {
      setErrors(prev => ({
        ...prev,
        bank: '',
      }));
    }
  };

  const handleTransAction = val => {
    setTransActionMode(val);

    if (errors.mode) {
      setErrors(prev => ({
        ...prev,
        mode: '',
      }));
    }
  };

  const handleAmount = val => {
    const numericValue = val.replace(/[^0-9]/g, '');

    setAmount(numericValue);

    if (errors.amount) {
      setErrors(prev => ({
        ...prev,
        amount: '',
      }));
    }
  };

  const handleTransActionPass = val => {
    setTransActionPassword(val);

    if (errors.transActionPassword) {
      setErrors(prev => ({
        ...prev,
        transActionPassword: '',
      }));
    }
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

  const fetchBank = async id => {
    try {
      const params = {
        apiKey: apikey,
        submerchantid: String(id),
      };
      const res = await RECHARGE_POST(ApiEndPoint.bankList, params);
      if (res?.data.status === true) {
        setBankList(res?.data?.data);
      } else {
        showToast('success', 'Success', res?.message);
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

  const validateForm = () => {
    const newErrors = {
      bank: '',
      mode: '',
      amount: '',
      transActionPassword: '',
    };

    let isValid = true;

    if (!bank) {
      newErrors.bank = 'Please select a bank account';
      isValid = false;
    }

    if (!transActionMode) {
      newErrors.mode = 'Please select transaction mode';
      isValid = false;
    }

    if (!amount) {
      newErrors.amount = 'Please enter amount';
      isValid = false;
    } else if (Number(amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
      isValid = false;
    }

    if (!transActionPassword.trim()) {
      newErrors.transActionPassword = 'Please enter transaction password';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const hanldePayoutDoTrasaction = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const params = {
        apiKey: apikey,
        bene_id: bank,
        refid: '12345',
        amount: amount,
        mode: transActionMode,
      };
      const res = await RECHARGE_POST(ApiEndPoint.payoutDoTrasaction, params);
      if (res?.status === true) {
        showToast('success', 'Success', res?.message || 'Payment Success');
      } else {
        showToast('success', 'Success', res?.message);
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

  const formatedBank = useMemo(
    () =>
      bankList.map(({ bankname, beneid }) => ({
        label: bankname,
        value: beneid,
      })),
    [bankList],
  );

  useEffect(() => {
    const getId = async () => {
      const id = await localStorage.getItem(storageKeys.userId);
      if (id) {
        fetchBank(id);
      }
    };
    getId();
  }, []);

  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      innerContainer={styles.innerContainer}
      header={<AppHeader title="Payout" onPress={handleGoBack} />}
    >
      <Loader visible={loading} />

      <View style={styles.homeContainer}>
        <Pressable
          style={styles.addNewBank}
          onPress={() => navigation.navigate('AddNewBank')}
        >
          <Text style={styles.addNewBanck}>Add Bank</Text>
        </Pressable>

        <Text style={[styles.payoutText, { marginTop: verticalScale(4) }]}>
          Bank Account*
        </Text>

        <CustomDropDown
          data={formatedBank}
          value={bank}
          onChange={handleChange}
        />

        {errors.bank ? (
          <Text style={styles.errorText}>{errors.bank}</Text>
        ) : null}

        <Text style={styles.payoutText}>Mode*</Text>
        <CustomDropDown
          data={paymentMode}
          value={transActionMode}
          onChange={handleTransAction}
          placeholder="Select Mode"
        />

        {errors.mode ? (
          <Text style={styles.errorText}>{errors.mode}</Text>
        ) : null}
        <Text style={styles.payoutText}>Amount*</Text>
        <AppInput
          value={amount}
          handleChange={handleAmount}
          placeholderText="Please enter amount"
          keyboardType={'numeric'}
        />

        {errors.amount ? (
          <Text style={styles.errorText}>{errors.amount}</Text>
        ) : null}

        <Text style={styles.payoutText}>Transaction Password*</Text>
        <AppInput
          value={transActionPassword}
          handleChange={handleTransActionPass}
          placeholderText="Please enter transaction password"
        />

        {errors.transActionPassword ? (
          <Text style={styles.errorText}>{errors.transActionPassword}</Text>
        ) : null}
        <CustomButton
          title="Submit"
          style={styles.btnStyle}
          onPress={hanldePayoutDoTrasaction}
        />
      </View>
    </ScreenLayout>
  );
};

export default PayoutScreen;
