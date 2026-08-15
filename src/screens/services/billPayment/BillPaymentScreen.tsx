import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';

import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import {
  AppHeader,
  AppModal,
  CustomDropDown,
  ScreenLayout,
} from '../../../component';
import { Icons } from '../../../assets/icons';

const BillPaymentScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [customerId, setCustomerId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');

  // Variable state
  const [selectedOperator, setSelectedOperator] = useState('');

  // Dropdown data
  const providerList = [
    {
      id: 1,
      label: 'Andhra Pradesh Central Power Distribution Corporation Limited',
      value: 'Andhra Pradesh Central Power Distribution Corporation Limited',
    },
    {
      id: 2,
      label: 'Assam Power Distribution Company Ltd (NON-RAPDR)',
      value: 'Assam Power Distribution Company Ltd (NON-RAPDR)',
    },
    {
      id: 3,
      label: 'Assam Power Distribution Company Ltd- Smart Prepaid Recharge',
      value: 'Assam Power Distribution Company Ltd- Smart Prepaid Recharge',
    },
    {
      id: 4,
      label: 'Ajmer Vidyut Vitran Nigam Limited (AVVNL)',
      value: 'Ajmer Vidyut Vitran Nigam Limited (AVVNL)',
    },
    {
      id: 5,
      label: 'Bangalore Electricity Supply Co. Ltd (BESCOM)',
      value: 'Bangalore Electricity Supply Co. Ltd (BESCOM)',
    },
    {
      id: 6,
      label: 'BSES Rajdhani Prepaid Meter Recharge',
      value: 'BSES Rajdhani Prepaid Meter Recharge',
    },
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProceed = () => {
    console.log({
      customerId,
      mobileNumber,
      amount,
    });
  };

  return (
    <ScreenLayout
      innerContainer={{ backgroundColor: '#fff' }}
      header={<AppHeader title="Bill Payment" onPress={handleBackPress} />}
    >
      {/* FORM */}

      <View style={styles.formContainer}>
        <CustomDropDown
          data={providerList}
          value={selectedOperator}
          placeholder="Select Provider"
          onChange={item => {
            setSelectedOperator(item.value);
            console.log(item.value);
          }}
        />
        {
          // <Text style={styles.label}>Customer ID</Text>
          // <TextInput
          //   placeholder="Enter customer ID"
          //   value={customerId}
          //   onChangeText={setCustomerId}
          //   style={styles.input}
          // />
          // <Text style={styles.label}>Mobile Number</Text>
          // <TextInput
          //   placeholder="Enter mobile number"
          //   value={mobileNumber}
          //   onChangeText={setMobileNumber}
          //   keyboardType="number-pad"
          //   style={styles.input}
          // />
          // <Text style={styles.label}>Amount</Text>
          // <TextInput
          //   placeholder="Enter amount"
          //   value={amount}
          //   onChangeText={setAmount}
          //   keyboardType="number-pad"
          //   style={styles.input}
          // />
          // <Pressable style={styles.payButton} onPress={handleProceed}>
          //   <Text style={styles.payButtonText}>Proceed Payment</Text>
          // </Pressable>
        }
      </View>
    </ScreenLayout>
  );
};

export default BillPaymentScreen;
