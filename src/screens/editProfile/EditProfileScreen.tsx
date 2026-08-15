import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import {
  ScreenLayout,
  AppHeader,
  AppInput,
  CustomButton,
} from '../../component/index';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Icons } from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../../assets/images';

const EditProfileScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScreenLayout innerContainer={styles.container} paddingHorizontalStyle={0}>
      <AppHeader
        title="Edit Profile"
        onPress={handleBackPress}
        rightIcon={Icons.headerOutlineIcon}
        onRightPress={() => {}}
      />
      <View style={styles.homeContainer}>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'Manoj Deshmukh'}
            leftIcon={Icons.editUser}
            leftIconStyle={styles.leftIcon}
          />
        </View>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'User@gmail.com'}
            leftIcon={Icons.eMail}
            leftIconStyle={styles.leftIconEmail}
          />
        </View>
        <View style={styles.inputBox}>
          <AppInput
            placeholderText={'+91-9876541238'}
            leftIcon={Icons.phoneIcon}
            leftIconStyle={styles.leftIconCall}
          />
        </View>
        <View style={[styles.inputBox]}>
          <AppInput
            placeholderText={
              '15 Corner, Sector 10 Shopping Center Vijay Path Crossing, Madhyam Marg, Mansarovar, Jaipur, Rajasthan 302020'
            }
            leftIcon={Icons.mapIcon}
            inputBoxStyle={{
              paddingBottom: theme.tokens.spacing.xxl,
            }}
            leftIconStyle={styles.leftIconEmail}
            multiline={true}
          />
        </View>

        <CustomButton title="Edit Profile" style={styles.btnStyle} />

        <LinearGradient
          colors={['rgba(19, 186, 172, 0.13)', 'rgba(214, 234, 232, 1)']}
          style={styles.needHelpBox}
        >
          <View>
            <Text style={styles.needText}>Need Help?</Text>
            <Text style={styles.contextText}>
              Contact to our team for help.
            </Text>
            <Pressable style={styles.createTicketBtn}>
              <Text style={styles.createTicket}>Create Ticket</Text>
            </Pressable>
          </View>
          <View style={styles.helpImgBox}>
            <Image
              source={Images.helpSupportImg}
              style={styles.helpImg}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </View>
    </ScreenLayout>
  );
};

export default EditProfileScreen;
