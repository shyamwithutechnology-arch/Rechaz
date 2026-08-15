import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconLogOut from 'react-native-vector-icons/AntDesign';
import { Images } from '../../assets/images';
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme';
import { Icons } from '../../assets/icons';
import { logout } from '../../redux/Slices/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { localStorage, storageKeys } from '../../storage/storage';

const menuItems = [
  { title: 'My Profile', icon: 'person-outline', route: 'Profile' },
  // { title: 'History', icon: 'document-text-outline', route: 'History' },
  // {
  //   title: "History",
  //   icon: "list-outline",
  //   route: "History",
  // children: [
  //   {
  //     title: "Mobile Recharge History",
  //     screen: "MobileRechargeHistory",
  //   },
  // {
  //   title: 'DTH Recharge History',
  //   screen: 'DTHRecharge',
  // },
  // {
  //   title: 'Aeps History',
  //   screen: 'AepsHistory',
  // },
  // {
  //   title: 'DMT(Money Transfer) History',
  //   screen: 'DMTServiceHistory',
  // },
  // {
  //   title: 'PayOut History',
  //   screen: 'PayOutHistory',
  // },
  // ],
  // },

  { title: 'History', icon: 'list-outline', route: 'MobileRechargeHistory' },
  { title: 'Wallet', icon: 'wallet-outline', route: 'Wallet' },
  // {
  //   title: 'Payment Request List',
  //   icon: 'receipt-outline',
  //   route: 'PaymentRequestList',
  // },
  { title: 'Services', icon: 'medkit-outline', route: 'Service' },
  // {
  //   title: 'Merchant Onboard',
  //   icon: 'business-outline',
  //   route: 'MerchantOnboard',
  // },
  // {
  //   title: 'Wallet History',
  //   icon: 'wallet-outline',
  //   route: 'WalletHistory',
  // },
  {
    title: 'Bank List',
    icon: 'list-outline',
    route: 'BankList',
  },
  {
    title: 'Fund Request',
    icon: 'receipt-outline',
    route: 'FundRequest',
  },
  { title: 'About Us', icon: 'information-circle-outline', route: 'AboutUs' },
  {
    title: 'Terms & Conditions',
    icon: 'document-text-outline',
    route: 'TermAndCondition',
  },
  {
    title: 'Privacy Policy',
    icon: 'shield-checkmark-outline',
    route: 'PrivacyPolicy',
  },
  // { title: 'Help & Support', icon: 'headset-outline', route: 'HelpAndSupport' },
  // {
  //   title: 'Notifications',
  //   icon: 'notifications-outline',
  //   route: 'Notification',
  // },
  // {
  //   title: 'SupportTicketScreen',
  //   icon: 'notifications-outline',
  //   route: 'SupportTicket',
  // },
  // {
  //   title: 'NewTicketScreen',
  //   icon: 'notifications-outline',
  //   route: 'NewTicket',
  // },
];

const nestedRoutes = {
  Profile: { screen: 'ProfileStack', inner: 'Profile' },
  // History: { screen: 'History', inner: 'History' },
  Service: { screen: 'ServiceStack', inner: 'Service' },
  Wallet: { screen: 'Wallet', inner: 'Wallet' },
};

const CustomDrawerContent = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();

  const [expandedMenu, setExpandedMenu] = useState(null);
  const [userData, setUserData] = useState(null);
  console.log('userData', userData);

  const handleLogOut = () => {
    navigation.closeDrawer();
    dispatch(logout());
  };

  const handleExpand = title => {
    setExpandedMenu(prev => (prev === title ? null : title));
  };

  const handleChildNavigation = child => {
    navigation.closeDrawer();
    navigation.navigate(child.screen);
    // navigation.navigate('MainTab', {
    //   screen: 'History',
    //   params: {
    //     screen: child.screen,
    //   },
    // });
  };

  const handleNavigation = item => {
    const route = nestedRoutes[item.route];

    if (route) {
      navigation.navigate('MainTab', {
        screen: route.screen,
        params: {
          screen: route.inner,
        },
      });
      navigation.closeDrawer();
    } else {
      navigation.navigate(item.route);
      navigation.closeDrawer();
    }
  };

  useFocusEffect(
    useCallback(() => {
      const getUserData = async () => {
        const localData = await localStorage.getItem(storageKeys.userData);
        const formtedData = JSON.parse(localData);

        if (formtedData) {
          setUserData(formtedData);
        }
      };

      getUserData();
    }, []),
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <LinearGradient
        colors={[
          theme.tokens.colors.primaryGradientStart,
          theme.tokens.colors.primaryGradientEnd,
        ]}
        style={styles.header}
      >
        <View style={styles.headerInnerBox}>
          <Pressable style={styles.imageBox}>
            <Image
              source={Images.logoLatest} // change path
              style={styles.avatar}
              resizeMode="contain"
            />
          </Pressable>
          <View>
            <Text style={styles.name}>{userData?.name}</Text>
            <Text style={styles.role}>{userData?.mobile}</Text>
          </View>
        </View>

        {/* CLOSE BUTTON */}
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.closeDrawer()}
        >
          <Icon name="close" size={theme.moderateScale(20)} color="#000" />
        </TouchableOpacity>
      </LinearGradient>

      {/* MENU */}
      {
        // <ScrollView showsVerticalScrollIndicator={false}>
        //   {menuItems.map((item, index) => (
        //     <TouchableOpacity
        //       key={index}
        //       style={styles.menuItem}
        //       onPress={() => handleNavigation(item)}
        //     >
        //       <View style={styles.menuLeft}>
        //         <Icon
        //           name={item.icon}
        //           size={theme.moderateScale(20)}
        //           color="#1FAF9A"
        //         />
        //         <Text style={styles.menuText}>{item.title}</Text>
        //       </View>
        //       <Icon name="chevron-forward" size={18} color="#999" />
        //     </TouchableOpacity>
        //   ))}
        //   {/* LOGOUT */}
        //   <TouchableOpacity style={styles.logout} onPress={handleLogOut}>
        //     <View style={styles.logoutIcon}>
        //       <Image
        //         source={Icons.logOutIcon}
        //         style={styles.logOutICon}
        //         resizeMode="contain"
        //       />
        //     </View>
        //     <Text style={styles.logoutText}>Logout My Account</Text>
        //   </TouchableOpacity>
        //   {/* HELP CARD */}
        //   <View style={styles.helpCard}>
        //     <Icon
        //       name="headset-outline"
        //       size={theme.moderateScale(20)}
        //       color="#1FAF9A"
        //     />
        //     <Text style={styles.helpText}>
        //       Feel free to ask. We are ready to Help
        //     </Text>
        //   </View>
        // </ScrollView>
      }

      <ScrollView showsVerticalScrollIndicator={false}>
        {menuItems.map((item, index) => {
          const isExpanded = expandedMenu === item.title;
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  // if (item.children) {
                  //   handleExpand(item.title);
                  // } else {
                  handleNavigation(item);
                  // }
                }}
              >
                <View style={styles.menuLeft}>
                  <Icon
                    name={item.icon}
                    size={theme.moderateScale(20)}
                    color="#0E8D39"
                  />
                  <Text style={styles.menuText}>{item.title}</Text>
                </View>

                <Icon
                  name={
                    item.children
                      ? isExpanded
                        ? 'chevron-down'
                        : 'chevron-forward'
                      : 'chevron-forward'
                  }
                  size={18}
                  color="#999"
                />
              </TouchableOpacity>

              {/* dropdown children */}
              {isExpanded &&
                item.children?.map((child, childIndex) => (
                  <TouchableOpacity
                    key={childIndex}
                    style={styles.subMenuItem}
                    onPress={() => handleChildNavigation(child)}
                  >
                    <Text style={styles.subMenuText}>{child.title}</Text>
                  </TouchableOpacity>
                ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CustomDrawerContent;
