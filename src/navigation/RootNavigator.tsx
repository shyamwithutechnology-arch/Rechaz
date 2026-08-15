// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

// import AuthStack from './AuthStack';
// import MainTab from './MainTab';
// import SplashScreen from '../screens/Auth/Splash';

// import { useAuthBootstrap } from '../hooks/useAuthBootstrap';

// const Stack = createNativeStackNavigator();

// const RootNavigator = () => {
//   const appState = useAuthBootstrap();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {/* Always first */}
//         <Stack.Screen name="Splash">
//           {props => <SplashScreen {...props} appState={appState} />}
//         </Stack.Screen>

//         {/* Auth flow */}
//         {appState === 'auth' && (
//           <Stack.Screen name="AuthStack" component={AuthStack} />
//         )}

//         {/* App flow */}
//         {appState === 'app' && (
//           <Stack.Screen name="MainTab" component={MainTab} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;

import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthStack from './AuthStack';
import SplashScreen from '../screens/Auth/Splash';
import { RootState } from '../redux/RootReducer/rootReducer';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import MainTab from './MainTab/MainTab';
import AppDrawer from './AppDrawer';
import PrivacyPolicyScreen from '../screens/privacyPolicy/PrivacyPolicyScreen';
import TermAndConditionScreen from '../screens/termAndCondition/TermAndConditionScreen';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!appReady) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? (
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}

      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />

      <Stack.Screen
        name="TermandconditionScreen"
        component={TermAndConditionScreen}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;

// const RootNavigator = () => {
//   const isLogin = useSelector((state: RootState) => state.auth.isLogin);
//   const [appReady, setAppReady] = React.useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setAppReady(true);
//     }, 1200); // splash duration only once
//   }, []);

//   if (!appReady) {
//     return <SplashScreen />;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {isLogin ? (
//           <Stack.Screen name="AppDrawer" component={AppDrawer} />
//         ) : (
//           <Stack.Screen name="AuthStack" component={AuthStack} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// <Stack.Screen name="MainTab" component={MainTab} />
// <Stack.Screen name="Onboarding" component={OnboardingScreen} />

// import React, { useState } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AppDrawer from './AppDrawer';
// import { NavigationContainer } from '@react-navigation/native';
// import MainTab from './MainTab';
// import AuthStack from './AuthStack';
// import SplashScreen from '../screens/Auth/Splash';
// import HomeStack from './stacks/HomeStack';

// const Stack = createNativeStackNavigator();
// const RootNavigator = () => {
//   const [loading, setIsLoading] = useState(false);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="AuthStack" component={AuthStack} />
//         <Stack.Screen name="MainTab" component={MainTab} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;

// // <Stack.Screen name="MainTab" component={MainTab} />
// // <Stack.Screen name="AuthStack" component={AuthStack} />
// // <Stack.Screen name="AuthnStack" component={AuthnStack} />
