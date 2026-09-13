import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';

import {
  ScreenLayout,
  AppHeader,
  CustomButton,
  AppInput,
  Loader,
} from '../../component';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Icons } from '../../assets/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import BackIcon from 'react-native-vector-icons/Octicons';
import LogOutIcon from 'react-native-vector-icons/AntDesign';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/Slices/authSlice';
import { ApiEndPoint } from '../../api/endPoints';
import { POST_FORM } from '../../api/request';
import { showToast } from '../../utils/toast';
import { localStorage, storageKeys } from '../../storage/storage';
import LogoutModal from './component/logoutModal/logOutModal';
import { getNumericValue } from '../../utils/validation';

const ProfileScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [logoutVisible, setLogoutVisible] = useState(false);
  console.log('profileData', profileData);
  console.log('token', token);

  const [input, setInput] = useState({
    name: '',
    furmName: '',
    fatherName: '',
    email: '',
    number: '',
    address: '',
    state: '',
    city: '',
    dob: '',
    panNo: '',
    aadhar: '',
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (field: keyof typeof input, value: string) => {
    setInput(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleLogOutVisible = () => {
    setLogoutVisible(true);
  };

  const handleLogOutClose = () => {
    setLogoutVisible(false);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const getProfile = async (id, token) => {
    try {
      const params = {
        user_id: id,
        tokenid: token,
        device_type: 'App',
      };
      setLoading(true);

      const res = await POST_FORM(ApiEndPoint.profile, params);
      setProfileData(res?.message);
    } catch (err) {
      if (err.offline) {
        return;
      }
      showToast('error', 'Error', err?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // updateMyProfile
  const handleUpdateProfile = async () => {
    try {
      const params = {
        name: input.name,
        firm_name: input.furmName,
        email: input.email,
        father_name: input.fatherName,
        dob: input.dob,
        pan: input.panNo,
        aadhar: input.aadhar,
        address: input.address,
        state: input.state,
        city: input.city,
        user_id: userId,
      };

      setLoading(true);
      const res = await POST_FORM(ApiEndPoint.updateMyProfile, params);
      showToast('success', 'Success', res?.message);
      await getProfile(userId, token);
      // setProfileData(res?.message);
    } catch (err) {
      if (err.offline) {
        return;
      }
      showToast('error', 'Error', err?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (profileData) {
      setInput({
        name: profileData?.Dtl?.name ?? '',
        furmName: profileData?.Dtl?.firm_name ?? '',
        fatherName: profileData?.profile_details?.father_name ?? '',
        number: profileData?.Dtl?.mobile ?? '',
        email: profileData?.Dtl?.email ?? '',
        panNo: profileData?.profile_details?.pan ?? '',
        aadhar: profileData?.profile_details?.aadhar ?? '',
        city: profileData?.profile_details?.city ?? '',
        state: profileData?.profile_details?.state ?? '',
        address: profileData?.profile_details?.address ?? '',
        dob: profileData?.profile_details?.dob ?? '',
      });
    }
  }, [profileData]);
  console.log(
    'profileData?.profile_details?.father_name',
    profileData?.profile_details,
  );

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userData);
      let token = await localStorage.getItem(storageKeys.userToken);
      let formatedData = localData ? JSON.parse(localData) : null;
      setUserId(formatedData?.id);
      setToken(token);
      if (formatedData?.id && token) {
        await getProfile(formatedData?.id, token);
      }
    };
    getId();
  }, []);

  // <LogOutIcon name={'logout'} size={15} color={'red'} />
  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      header={
        <AppHeader
          title="Profile"
          onPress={handleBack}
          onRightPress={handleLogOutVisible}
          rightIcon={Icons.logOutIcon}
          rightIconStyle={{ tintColor: 'red' }}
        />
      }
      scroll={true}
      innerContainer={styles.innerContainer}
    >
      <Loader visible={loading} />
      <View style={styles.homeContainer}>
        <Text
          style={styles.nameText}
          onPress={() => showToast('error', 'Success', 'Book fatch faild')}
        >
          Name
        </Text>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your name'}
            leftIcon={Icons.editUser}
            leftIconStyle={styles.leftIcon}
            value={input.name}
            handleChange={text => handleInputChange('name', text)}
          />
        </View>
        <Text style={styles.nameText}>Furm Name</Text>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your furm name'}
            leftIcon={Icons.editUser}
            leftIconStyle={styles.leftIcon}
            value={input.furmName}
            handleChange={text => handleInputChange('furmName', text)}
          />
        </View>
        <Text style={styles.nameText}>Father Name</Text>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your father name'}
            leftIcon={Icons.editUser}
            leftIconStyle={styles.leftIcon}
            value={input.fatherName}
            handleChange={text => handleInputChange('fatherName', text)}
          />
        </View>

        <Text style={styles.nameText}>Email</Text>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your email'}
            leftIcon={Icons.eMail}
            leftIconStyle={styles.leftIconEmail}
            value={input.email}
            handleChange={text => handleInputChange('email', text)}
          />
        </View>

        <Text style={styles.nameText}>Mobile no.</Text>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your phone numbe'}
            leftIcon={Icons.phoneIcon}
            leftIconStyle={styles.leftIconCall}
            // inputText={styles.inputText}
            value={input.number}
            maxLength={10}
            keyboardType="number-pad"
            handleChange={text =>
              handleInputChange('number', getNumericValue(text))
            }
          />
        </View>

        <Text style={styles.nameText}>PAN Card no.</Text>

        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your panCard no.'}
            leftIcon={Icons.panCardIcon}
            leftIconStyle={styles.leftIconCall}
            value={input.panNo}
            maxLength={10}
            autoCapitalize={'characters'}
            handleChange={text => handleInputChange('panNo', text)}
          />
        </View>

        <Text style={styles.nameText}>Aadhaar Card no.</Text>

        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your AadharCard no.'}
            leftIcon={Icons.AadharCardIcon}
            leftIconStyle={styles.leftIconCall}
            value={input.aadhar}
            handleChange={text =>
              handleInputChange('aadhar', getNumericValue(text))
            }
            maxLength={12}
            keyboardType="number-pad"
          />
        </View>

        <Text style={styles.nameText}>State</Text>

        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your state'}
            leftIconStyle={styles.leftIconCall}
            value={input.state}
            handleChange={text => handleInputChange('state', text)}
          />
        </View>
        <Text style={styles.nameText}>City</Text>

        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Enter your city'}
            leftIconStyle={styles.leftIconCall}
            value={input.city}
            handleChange={text => handleInputChange('city', text)}
          />
        </View>

        <Text style={styles.nameText}>Address</Text>

        <View style={[styles.inputBox]}>
          <AppInput
            placeholderText={'Enter your address'}
            leftIcon={Icons.mapIcon}
            inputBoxStyle={{
              paddingBottom: theme.tokens.spacing.xxl,
            }}
            leftIconStyle={styles.leftIconEmail}
            multiline={true}
            value={input.address}
            handleChange={text => handleInputChange('address', text)}
          />
        </View>
        <CustomButton
          title="Edit Profile"
          style={styles.btnStyle}
          onPress={handleUpdateProfile}
        />
        {/* Logout
        // <Pressable style={styles.logoutBtn} onPress={handleLogOut}>
        //   <Image
        //     source={Icons.logOutIcon}
        //     tintColor={theme.tokens.colors.red}
        //     style={styles.logoutIcon}
        //   />
        //   <Text style={styles.logoutText}>Logout</Text>
        // </Pressable>
         */}
        <LogoutModal
          visible={logoutVisible}
          onClose={handleLogOutClose}
          handleLodOut={handleLogOut}
        />
      </View>
    </ScreenLayout>
  );
};

export default ProfileScreen;
