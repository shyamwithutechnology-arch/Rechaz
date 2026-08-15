import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../types/navigation';
import ServiceScreen from '../../screens/services';
import MobileRechargeScreen from '../../screens/mobileRecharge';
import DTHRechargeScreen from '../../screens/dthRecharge/DTHRechargeScreen';
import AllServicesScreen from '../../screens/services/allServices/AllServicesScreen';
import BillPaymentScreen from '../../screens/services/billPayment/BillPaymentScreen';
import TicketBookingScreen from '../../screens/services/ticketBooking/TicketBookingScreen';
import PaymentSuccessScreen from '../../screens/paymentSuccess/PaymentSuccessScreen';
import MoneyTransferScreen from '../../screens/services/moneyTransfer/MoneyTransferScreen';
import PayoutScreen from '../../screens/services/payout/PayoutScreen';
import AddNewBankScreen from '../../screens/services/addNewBank/AddNewBankScreen';
import AepsScreen from '../../screens/services/aeps/AepsScreen';

const Stack = createNativeStackNavigator<MainTabParamList>();

const ServiceStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Service" component={ServiceScreen} />
      <Stack.Screen name="MobileRecharge" component={MobileRechargeScreen} />
      <Stack.Screen name="DTHRecharge" component={DTHRechargeScreen} />
      <Stack.Screen name="AllServices" component={AllServicesScreen} />
      <Stack.Screen name="MoneyTransfer" component={MoneyTransferScreen} />
      <Stack.Screen
        name="BillPayment"
        component={BillPaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TicketBooking"
        component={TicketBookingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      <Stack.Screen name="Payout" component={PayoutScreen} />
      <Stack.Screen name="AddNewBank" component={AddNewBankScreen} />
      <Stack.Screen name="Aeps" component={AepsScreen} />
    </Stack.Navigator>
  );
};

export default ServiceStack;
