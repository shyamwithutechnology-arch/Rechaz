import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../types/navigation';
import ProfileScreen from '../../screens/profile';
import EditProfileScreen from '../../screens/editProfile/EditProfileScreen';

const Stack = createNativeStackNavigator<MainTabParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
