import { View, Text } from 'react-native';
import React from 'react';
import {
  AppHeader,
  AppInput,
  CustomButton,
  ScreenLayout,
} from '../../../component';
import { useRoute } from '@react-navigation/native';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';

const TicketBookingScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const route = useRoute();
  const { title } = route?.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScreenLayout
      header={<AppHeader title={title} onPress={handleBackPress} />}
    >
      <Text style={styles.amoutText}>Amount*</Text>
      <AppInput placeholderText="0.00" keyboardType="numeric" />

      <Text style={styles.amoutText}>Remarks*</Text>
      <AppInput placeholderText="Enter your Remarks..." />
      <Text style={styles.anAmountText}>
        An amount of Rs. 0.00 will be debited from your wallet.
      </Text>

      <CustomButton title="Purchase Service" style={styles.purchaseBtn} />
    </ScreenLayout>
  );
};

export default TicketBookingScreen;
