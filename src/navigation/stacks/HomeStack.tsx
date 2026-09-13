import React from 'react';
import HomeScreen from '../../screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../types/navigation';
import DiagnosticScreen from '../../screens/dignostic/DiagnosticScreen';
import AddpatientDetailsScreen from '../../screens/patientDetails/AddpatientDetailsScreen';
import CheckOutScreen from '../../screens/checkout/CheckOutScreen';
import PaymentDetailScreen from '../../screens/paymentDetails/PaymentDetailScreen';
import SuccessScreen from '../../screens/success/SuccessScreen';
import MedicalEquipmentScreen from '../../screens/medicalEquipmentModule/MedicalEquipment/MedicalEquipmentScreen';
import MedicineDetailsScreen from '../../screens/medicalEquipmentModule/medicineDetails/MedicineDetailsScreen';
import ShoppingCartScreen from '../../screens/medicalEquipmentModule/shoppingCart/ShoppingCartScreen';
import MyOrderScreen from '../../screens/medicalEquipmentModule/myOrder';
import NotificationScreen from '../../screens/notification/NotificationScreen';
import AccountHistoryScreen from '../../screens/history/accountHistory/AccountHistoryScreen';

// const Stack = createStaticNavigation();
const Stack = createNativeStackNavigator<MainTabParamList>();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Diagnostic" component={DiagnosticScreen} />
      <Stack.Screen
        name="AddpatientDetails"
        component={AddpatientDetailsScreen}
      />
      <Stack.Screen name="CheckOut" component={CheckOutScreen} />
      <Stack.Screen name="PaymentDetail" component={PaymentDetailScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen
        name="MedicalEquipment"
        component={MedicalEquipmentScreen}
      />
      <Stack.Screen name="MedicineDetails" component={MedicineDetailsScreen} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Stack.Screen name="MyOrder" component={MyOrderScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="AccountHistory" component={AccountHistoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
