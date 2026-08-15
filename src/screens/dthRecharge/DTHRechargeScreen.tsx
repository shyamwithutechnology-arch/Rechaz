import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import {
  AppHeader,
  AppInput,
  CustomButton,
  CustomDropDown,
  Loader,
  ScreenLayout,
} from '../../component';
import { useRoute } from '@react-navigation/native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { RECHARGE_GET } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import { apikey } from '../../api/axios';
import { showToast } from '../../utils/toast';

const TicketBookingScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const route = useRoute();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [input, setInput] = useState({
    dthNumber: '',
    amount: '',
  });
  const [errors, setErrors] = useState({
    dthNumber: '',
    amount: '',
  });

  const handleOnChange = (key: string, value) => {
    let updatedValue = value;

    if (key === 'amount' || key === 'dthNumber') {
      updatedValue = value.replace(/[^0-9]/g, '');
    }
    setInput(pre => ({ ...pre, [key]: updatedValue }));
    setErrors(prev => ({
      ...prev,
      [key]: '',
    }));
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSelectOperator = val => {
    setValue(val);
    setIsSubmitted(false);
  };

  const data = [
    { id: 1, label: 'AIRTEL DTH', value: '7' },
    { id: 2, label: 'DISH TV', value: '8' },
    { id: 3, label: 'RELIANCE BIGTV', value: '9' },
    { id: 4, label: 'SUN DIRECT', value: '10' },
  ];

  const validation = () => {
    const newErrors = {
      dthNumber: '',
      operator: '',
      amount: '',
    };

    if (!input.dthNumber.trim()) {
      newErrors.dthNumber = 'Please enter DTH number';
    }

    if (!value) {
      newErrors.operator = 'Please select an operator';
    }

    if (!input.amount.trim()) {
      newErrors.amount = 'Please enter recharge amount';
    } else if (Number(input.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

  const handleDthRecharge = async () => {
    setIsSubmitted(true);
    if (!validation()) {
      return;
    }
    try {
      setLoading(true);
      const res = await RECHARGE_GET(ApiEndPoint.doRecharge, {
        apiKey: apikey,
        ca_number: input.dthNumber,
        operator_id: value,
        amount: input.amount,
      });

      console.log('parama', apikey, input.dthNumber, value, input.amount);
      console.log('resqqqqqqqqqq', res);
      if (res.STATUS === 1) {
        showToast(
          'success',
          'Success',
          res?.MESSAGE || 'Request is successful (Test Mode).',
        );
      } else {
        showToast(
          'error',
          'Error',
          res?.MESSAGE || 'Request is successful (Test Mode).',
        );
      }
    } catch (error) {
      console.log('errrr', error);

      showToast('error', 'Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenLayout
      header={<AppHeader title={'DTH Recharge'} onPress={handleBackPress} />}
    >
      <Loader visible={loading} />
      <View style={styles.dropDownContainer}>
        <Text style={[styles.amoutText, styles.dthNumberText]}>
          DTH Number*
        </Text>
        <AppInput
          placeholderText="Enter customer DTH No"
          keyboardType="numeric"
          value={input.dthNumber}
          handleChange={value => handleOnChange('dthNumber', value)}
        />
        {errors.dthNumber ? (
          <Text style={styles.errorText}>{errors.dthNumber}</Text>
        ) : null}
      </View>

      <View style={styles.dropDownContainer}>
        <Text style={styles.amoutText}>Operator List*</Text>
        <CustomDropDown
          data={data}
          value={value}
          onChange={handleSelectOperator}
          placeholder="Select"
        />
        {isSubmitted && !value ? (
          <Text style={styles.errorText}>Please select operator</Text>
        ) : null}
      </View>

      <Text style={styles.amoutText}>Recharge Amount*</Text>
      <AppInput
        placeholderText="Enter amount"
        keyboardType="numeric"
        value={input.amount}
        handleChange={value => handleOnChange('amount', value)}
      />
      {errors.amount ? (
        <Text style={styles.errorText}>{errors.amount}</Text>
      ) : null}
      <CustomButton
        title="Submit"
        style={styles.purchaseBtn}
        onPress={handleDthRecharge}
      />
    </ScreenLayout>
  );
};

export default TicketBookingScreen;
