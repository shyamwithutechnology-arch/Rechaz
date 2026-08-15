import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/Login';
import SplashScreen from '../screens/Auth/Splash';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import OtpRequestScreen from '../screens/Auth/optRequest/OtpRequestScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OtpRequest" component={OtpRequestScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
// <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
// <Stack.Screen name="SplashScreen" component={SplashScreen} />
