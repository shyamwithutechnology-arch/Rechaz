import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './MainTab/MainTab';
import ProfileStack from './stacks/ProfileStack';
import { CustomDrawerContent } from '../component';
import privacyPolicyScreen from '../screens/privacyPolicy/PrivacyPolicyScreen';
import TermAndConditionScreen from '../screens/termAndCondition/TermAndConditionScreen';
import AboutUsScreen from '../screens/aboutUs/AboutUsScreen';
import MyTicketScreen from '../screens/Support/MyTicketScreen';
import HelpAndSupportScreen from '../screens/helpAndSupport/HelpAndSupportScreen';
import SupportTicketScreen from '../screens/supportTicket/SupportTicketScreen';
import NewTicketScreen from '../screens/newTicket/NewTicketScreen';
import PaymentRequestList from '../screens/paymentRequestList/PaymentRequestList';
import MerchantOnboardScreen from '../screens/merchantOnboard/MerchantOnboardScreen';
import { AepsHistoryScreen } from '../screens/history/aepsHistory';
import { PayOutHistoryScreen } from '../screens/history/payOutHistory';
import { MobileRechargeHistoryScreen } from '../screens/history/mobileRechargeHistory';
import WalletHistoryScreen from '../screens/walletHistory/WalletHistoryScreen';
import DTHRechargeScreen from '../screens/history/DTHRecharge/DTHRechargeScreen';
import { DMTServiceHistoryScreen } from '../screens/history/DMTServiceHistory';
import { FundRequestScreen } from '../screens/fundRequest';
import BankListScreen from '../screens/banklist/BankListScreen';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainTab" component={MainTab} />
      <Drawer.Screen name="PrivacyPolicy" component={privacyPolicyScreen} />
      <Drawer.Screen
        name="TermAndCondition"
        component={TermAndConditionScreen}
      />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
      <Drawer.Screen name="MyTicket" component={MyTicketScreen} />
      <Drawer.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
      <Drawer.Screen name="SupportTicket" component={SupportTicketScreen} />
      <Drawer.Screen name="NewTicket" component={NewTicketScreen} />
      <Drawer.Screen name="PaymentRequestList" component={PaymentRequestList} />
      <Drawer.Screen name="MerchantOnboard" component={MerchantOnboardScreen} />
      {/* History */}
      <Drawer.Screen
        name="MobileRechargeHistory"
        component={MobileRechargeHistoryScreen}
      />
      <Drawer.Screen name="AepsHistory" component={AepsHistoryScreen} />
      <Drawer.Screen name="PayOutHistory" component={PayOutHistoryScreen} />
      <Drawer.Screen name="WalletHistory" component={WalletHistoryScreen} />
      <Drawer.Screen name="DTHRecharge" component={DTHRechargeScreen} />
      <Drawer.Screen
        name="DMTServiceHistory"
        component={DMTServiceHistoryScreen}
      />
      <Drawer.Screen name="FundRequest" component={FundRequestScreen} />
      <Drawer.Screen name="BankList" component={BankListScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MainTab from './MainTab/MainTab';
// import ProfileStack from './stacks/ProfileStack';
// import { CustomDrawerContent } from '../component';

// const Drawer = createDrawerNavigator();

// const AppDrawer = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => {
//         <CustomDrawerContent {...props} />;
//       }}
//     >
//       <Drawer.Screen name="MainTab" component={MainTab} />
//       <Drawer.Screen name="Profile" component={ProfileStack} />
//     </Drawer.Navigator>
//   );
// };

// export default AppDrawer;
