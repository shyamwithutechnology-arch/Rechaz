import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';
import ProfileStack from '../stacks/ProfileStack';
import BookingScreen from '../../screens/booking/BookingScreen';
import CustomTabBar from './CustomTabBar';
import WalletScreen from '../../screens/wallet/WalletScreen';
import ServiceScreen from '../../screens/services/ServiceScreen';
import HistoryScreen from '../../screens/history/HistoryScreen';
import ServiceStack from '../stacks/ServiceStack';
import MobileRechargeScreen from '../../screens/mobileRecharge';
import { MobileRechargeHistoryScreen } from '../../screens/history/mobileRechargeHistory';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="ServiceStack"
        component={ServiceStack}
        options={{ popToTopOnBlur: true }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ popToTopOnBlur: true }}
      />
      <Tab.Screen
        name="History"
        component={MobileRechargeHistoryScreen}
        options={{ popToTopOnBlur: true }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ popToTopOnBlur: true }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ popToTopOnBlur: true }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeStack from '../stacks/HomeStack';
// import ProfileStack from '../stacks/ProfileStack';
// import BookingScreen from '../../screens/booking/BookingScreen';
// import ServiceScreen from '../../screens/services/ServiceScreen';

// const Tab = createBottomTabNavigator();

// const MainTab = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="HomeStack" component={HomeStack} />
//       <Tab.Screen name="ProfileStack" component={ProfileStack} />
//       <Tab.Screen name="Booking" component={BookingScreen} />
//       <Tab.Screen name="Service" component={ServiceScreen} />
//     </Tab.Navigator>
//   );
// };

// export default MainTab;
