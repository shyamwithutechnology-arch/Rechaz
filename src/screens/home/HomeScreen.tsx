// import React, { useEffect, useState } from 'react';
// import { FlatList, Image, Pressable, Text, View } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { Loader, ScreenLayout } from '../../component';
// import { Images } from '../../assets/images';
// import { Icons } from '../../assets/icons';
// import { useAppTheme } from '../../hooks/useAppTheme';
// import { createStyles } from './styles';

// // vector icon
// import DateIcon from 'react-native-vector-icons/Fontisto';
// import { colors } from '../../theme';
// import { moderateScale, verticalScale } from '../../utils/responsiveSize';
// import HomeBannerSlider from './component/homebanner/HomeBannerSlider';
// import AppDatePicker from '../../component/appDatePicker/AppDatePicker';
// import { RECHARGE_GET } from '../../api/request';
// import { ApiEndPoint } from '../../api/endPoints';
// import { showToast } from '../../utils/toast';
// import { apikey } from '../../api/axios';

// const HomeScreen = ({ navigation }: any) => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);
//   const insets = useSafeAreaInsets();
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [wallet, setWallet] = useState({});
//   console.log('wallet', wallet);

//   const formattedDate = date.toLocaleDateString('en-GB', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   });

//   const handleDate = () => {
//     setShow(true);
//   };

//   const closeDatePicker = () => {
//     setShow(false);
//   };

//   const cartCount = 8;

//   // -------------------- BANNERS --------------------

//   const banners = [
//     { id: '1', image: Images.homeBannerImg },
//     { id: '2', image: Images.homeBannerImg1 },
//     { id: '3', image: Images.homeBannerImg2 },
//   ];

//   // -------------------- TRANSACTIONS --------------------

//   const transactionData = [
//     {
//       id: 1,
//       title: 'Mobile Recharge',
//       totalTransAction: '₹10,000',
//       todayTransAction: '₹1000',
//       icon: Icons.mobileRechargeIcon,
//       bgColor: '#EEF5FF',
//       testColor: '#286CBF',
//       type: 'Mob',
//     },
//     {
//       id: 2,
//       title: 'DTH Recharge',
//       totalTransAction: '20,000',
//       todayTransAction: '₹2000',
//       icon: Icons.dthRechargeIcon,
//       bgColor: '#EFF9F1',
//       testColor: theme.tokens.colors.green,
//       type: 'DMT',
//     },
//     {
//       id: 3,
//       title: 'AEPS',
//       totalTransAction: '₹28,450.00',
//       todayTransAction: '₹5,450',
//       icon: Icons.successIcon,
//       bgColor: '#F4F2FD',
//       testColor: '#8934FD',
//       type: 'AEPS',
//     },
//     {
//       id: 4,
//       title: 'Bill Payment',
//       totalTransAction: '2,50,00',
//       todayTransAction: '5000',
//       icon: Icons.dthRechargeIcon,
//       bgColor: '#EEF5FF',
//       testColor: '#F37B06',
//       type: 'Bill',
//     },
//     {
//       id: 5,
//       title: 'Ticket Booking',
//       totalTransAction: '₹44,000',
//       todayTransAction: '₹400',
//       icon: Icons.dthRechargeIcon,
//       bgColor: '#EEF5FF',
//       testColor: '#E63A65',
//       type: 'Ticket',
//     },
//     {
//       id: 6,
//       title: 'Bus Booking',
//       totalTransAction: '₹35,000',
//       todayTransAction: '₹1200',
//       icon: Icons.dthRechargeIcon,
//       bgColor: '#EEF5FF',
//       testColor: '#286CBF',
//       type: 'Book',
//     },
//   ];

//   // -------------------- RECENT TRANSACTIONS --------------------

//   const recentTransactions = [
//     {
//       id: 1,
//       name: 'Mobile Recharge',
//       amount: '- ₹399',
//       status: 'Success',
//       icon: Icons.mobileRechargeIcon,
//     },
//     {
//       id: 2,
//       name: 'Electricity Bill',
//       amount: '- ₹1,250',
//       status: 'Success',
//       icon: Icons.electricityIcon,
//     },
//     {
//       id: 3,
//       name: 'Money Transfer',
//       amount: '+ ₹5,000',
//       status: 'Received',
//       icon: Icons.dmtIcon,
//     },
//   ];

//   // -------------------- MAIN --------------------

//   const fetchWalletBalance = async () => {
//     try {
//       setLoading(true);

//       const res = await RECHARGE_GET(ApiEndPoint.api_balance, {
//         apiKey: apikey,
//       });
//       if (res.status === true) {
//         setWallet(res?.data);
//       }
//     } catch (error) {
//       showToast('error', 'Error', 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchWalletBalance();
//   }, []);

//   return (
//     <ScreenLayout paddingHorizontalStyle={0}>
//       <Loader visible={loading} />

//       {/* HEADER */}
//       <View style={styles.notificationAndUserBox}>
//         <View>
//           <Text style={styles.userName}>Welcome Back</Text>
//           <Text style={styles.userText}>Manage your transactions easily</Text>
//         </View>

//         <View style={styles.headerRow}>
//           <Pressable
//             style={[
//               styles.notificationBox,
//               {
//                 marginRight: theme.tokens.spacing.sm,
//               },
//             ]}
//           >
//             <Image
//               source={Icons.notification}
//               style={styles.notificationIcon}
//               resizeMode="contain"
//             />

//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>
//                 {cartCount > 9 ? '9+' : cartCount}
//               </Text>
//             </View>
//           </Pressable>

//           <Pressable style={styles.notificationBox}>
//             <Image
//               source={Icons.questionMarkIcon}
//               style={styles.notificationIcon}
//               resizeMode="contain"
//             />
//           </Pressable>
//         </View>
//       </View>

//       <View style={styles.homeContaine}>
//         <FlatList
//           data={[1]}
//           renderItem={() => null}
//           keyExtractor={(_, index) => index.toString()}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingBottom: insets.bottom + theme.tokens.spacing.xxl,
//           }}
//           ListHeaderComponent={
//             <>
//               <LinearGradient
//                 colors={['#0C8485', '#14B8A6']}
//                 style={styles.walletCard}
//               >
//                 <HomeBannerSlider banners={banners} loading={false} />

//                 <Text style={styles.walletTitle}>Wallet Balance</Text>
//                 <Text style={styles.walletAmount}>₹{wallet?.Total}</Text>
//                 <View style={styles.walletBottomRow}>
//                   <View>
//                     s<Text style={styles.walletLabel}>Total Business</Text>
//                     <Text style={styles.walletValue}>₹1,20,000</Text>
//                   </View>

//                   <View>
//                     <Text style={styles.walletLabel}>
//                       Total Commission(Today)
//                     </Text>

//                     <Text style={styles.walletValue}>₹5,000</Text>
//                   </View>
//                 </View>

//                 <View
//                   style={[
//                     styles.walletBottomRow,
//                     { marginTop: verticalScale(10) },
//                   ]}
//                 >
//                   <View>
//                     <Text style={styles.walletLabel}>Today Business</Text>

//                     <Text style={styles.walletValue}>₹20,000</Text>
//                   </View>
//                   <View>
//                     <Text style={styles.walletLabel}>Today Commission</Text>
//                     <Text style={styles.walletValue}>₹200</Text>
//                   </View>
//                 </View>
//               </LinearGradient>

//               {/* TRANSACTION OVERVIEW */}

//               <View style={styles.myBookingBox}>
//                 <Text style={styles.myBookingText}>Services Overview</Text>

//                 <Pressable style={styles.dateRow} onPress={handleDate}>
//                   <DateIcon
//                     name="date"
//                     color={colors.blackDark}
//                     size={moderateScale(13)}
//                   />
//                   <Text style={styles.dateText}> {formattedDate}</Text>
//                   <Image
//                     source={Icons.downArrowIcon}
//                     resizeMode="contain"
//                     style={styles.downArrowIcon}
//                   />
//                 </Pressable>

//                 <AppDatePicker
//                   visible={show}
//                   value={date ?? new Date()}
//                   onChange={setDate}
//                   onClose={closeDatePicker}
//                 />
//               </View>

//               <FlatList
//                 data={transactionData}
//                 scrollEnabled={false}
//                 keyExtractor={item => item.id.toString()}
//                 renderItem={({ item }) => {
//                   return (
//                     <View
//                       style={[
//                         styles.transactionCard,
//                         { backgroundColor: item.bgColor },
//                       ]}
//                     >
//                       <View style={styles.serviceBottom}>
//                         <View style={styles.servicerBox}>
//                           <Image
//                             source={item?.icon}
//                             style={styles.servicerIcon}
//                             resizeMode="contain"
//                           />
//                         </View>
//                         <View
//                           style={[
//                             styles.aepsBox,
//                             { backgroundColor: item?.testColor },
//                           ]}
//                         >
//                           <Text style={styles.servicesSmall}>{item?.type}</Text>
//                         </View>
//                       </View>
//                       <View>
//                         <Text style={styles.serviceText}>{item?.title}</Text>
//                         <View style={styles.recentLeftRow}>
//                           <View>
//                             <Text style={styles.todayText}>
//                               Transaction(Total)
//                             </Text>
//                             <Text
//                               style={[
//                                 styles.transactionTitle,
//                                 { color: item.testColor },
//                               ]}
//                             >
//                               {item.totalTransAction}
//                             </Text>

//                             <View style={styles.peopleRow}>
//                               <Image
//                                 source={Icons.peopleIcon}
//                                 resizeMode="contain"
//                                 style={styles.peopleIcon}
//                               />
//                               <Text style={styles.todayText}> 152</Text>
//                             </View>
//                           </View>

//                           <View style={styles.baseLineBorder} />

//                           <View>
//                             <Text style={styles.todayText}>
//                               Transaction(Today)
//                             </Text>
//                             <Text
//                               style={[
//                                 styles.transactionTitle,
//                                 { color: item.testColor },
//                               ]}
//                             >
//                               {item.totalTransAction}
//                             </Text>

//                             <View style={styles.peopleRow}>
//                               <Image
//                                 source={Icons.peopleIcon}
//                                 resizeMode="contain"
//                                 style={styles.peopleIcon}
//                               />
//                               <Text style={styles.todayText}> 152</Text>
//                             </View>
//                           </View>
//                         </View>
//                       </View>

//                       <Image
//                         source={Icons.downArrowIcon}
//                         style={styles.downArrowIcon}
//                       />
//                     </View>
//                   );
//                 }}
//               />

//               {/* RECENT TRANSACTIONS */}
//               <View style={styles.myBookingBox}>
//                 <Text style={styles.myBookingText}>Recent Transactions</Text>
//                 <Text style={styles.seeAllText}>View All</Text>
//               </View>

//               {recentTransactions.map(item => {
//                 return (
//                   <View key={item.id} style={styles.recentCard}>
//                     <View style={styles.recentLeftRow}>
//                       <View style={styles.recentIconBox}>
//                         <Image
//                           source={item.icon}
//                           style={styles.recentIcon}
//                           resizeMode="contain"
//                         />
//                       </View>

//                       <View>
//                         <Text style={styles.recentTitle}>{item.name}</Text>

//                         <Text style={styles.recentStatus}>{item.status}</Text>
//                       </View>
//                     </View>

//                     <Text style={styles.recentAmount}>{item.amount}</Text>
//                   </View>
//                 );
//               })}
//             </>
//           }
//         />
//       </View>
//     </ScreenLayout>
//   );
// };

// export default HomeScreen;

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BackHandler,
  FlatList,
  Image,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

import { AppHeader, Loader, ScreenLayout } from "../../component";
import { Images } from "../../assets/images";
import { Icons } from "../../assets/icons";
import { useAppTheme } from "../../hooks/useAppTheme";
import { createStyles } from "./styles";

// vector icon
import DateIcon from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/Octicons";
import { colors } from "../../theme";
import { moderateScale, verticalScale } from "../../utils/responsiveSize";
import AppDatePicker from "../../component/appDatePicker/AppDatePicker";
import { POST_FORM, RECHARGE_GET } from "../../api/request";
import { ApiEndPoint } from "../../api/endPoints";
import { showToast } from "../../utils/toast";
import { apikey } from "../../api/axios";
import ImageSlider from "../../component/slider/ImageSlider";
import { localStorage, storageKeys } from "../../storage/storage";

// ✅ FIXED: Changed named import to Default Import
// import HomeBannerSlider from './component/homebanner/HomeBannerSlider';

const HomeScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const insets = useSafeAreaInsets();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState<any>({});
  const backPressCount = useRef(0);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleDate = () => {
    setShow(true);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const closeDatePicker = () => {
    setShow(false);
  };

  const cartCount = 0;

  // -------------------- BANNERS --------------------

  const banners = [
    // { id: "1", image: Images.homeBannerImg },
    // { id: "2", image: Images.homeBannerImg },
    { id: "1", image: Images.homeBannerImg1 },
    { id: "2", image: Images.homeBannerImg1 },
    // { id: "3", image: Images.homeBannerImg2 },
  ];

  // -------------------- TRANSACTIONS --------------------

  const transactionData = [
    {
      id: 1,
      title: "Mobile Recharge",
      totalTransAction: "₹0",
      todayTransAction: "₹0",
      icon: Icons.mobileRechargeIcon,
      bgColor: "#EEF5FF",
      testColor: "#286CBF",
      type: "Mob",
    },
    // {
    //   id: 2,
    //   title: 'DTH Recharge',
    //   totalTransAction: '₹0',
    //   todayTransAction: '₹0',
    //   icon: Icons.dthRechargeIcon,
    //   bgColor: '#EFF9F1',
    //   testColor: theme.tokens.colors.green,
    //   type: 'DMT',
    // },
    // {
    //   id: 3,
    //   title: 'AEPS',
    //   totalTransAction: '₹28,450.00',
    //   todayTransAction: '₹5,450',
    //   icon: Icons.successIcon,
    //   bgColor: '#F4F2FD',
    //   testColor: '#8934FD',
    //   type: 'AEPS',
    // },
    // {
    //   id: 4,
    //   title: 'Bill Payment',
    //   totalTransAction: '₹2,50,000',
    //   todayTransAction: '₹5000',
    //   icon: Icons.dthRechargeIcon,
    //   bgColor: '#EEF5FF',
    //   testColor: '#F37B06',
    //   type: 'Bill',
    // },
    // {
    //   id: 5,
    //   title: 'Ticket Booking',
    //   totalTransAction: '₹44,000',
    //   todayTransAction: '₹400',
    //   icon: Icons.dthRechargeIcon,
    //   bgColor: '#EEF5FF',
    //   testColor: '#E63A65',
    //   type: 'Ticket',
    // },
    // {
    //   id: 6,
    //   title: 'Bus Booking',
    //   totalTransAction: '₹35,000',
    //   todayTransAction: '₹1200',
    //   icon: Icons.dthRechargeIcon,
    //   bgColor: '#EEF5FF',
    //   testColor: '#286CBF',
    //   type: 'Book',
    // },
  ];

  // -------------------- RECENT TRANSACTIONS --------------------

  const recentTransactions = [
    {
      id: 1,
      name: "Mobile Recharge",
      amount: "₹399",
      status: "Success",
      icon: Icons.mobileRechargeIcon,
    },
    {
      id: 2,
      name: "Mobile Recharge",
      amount: "₹749",
      status: "Success",
      icon: Icons.mobileRechargeIcon,
    },
    {
      id: 3,
      name: "Mobile Recharge",
      amount: "₹299",
      status: "Success",
      icon: Icons.mobileRechargeIcon,
    },
    // {
    //   id: 2,
    //   name: "Electricity Bill",
    //   amount: "₹1,250",
    //   status: "Success",
    //   icon: Icons.electricityIcon,
    // },
    // {
    //   id: 3,
    //   name: "Money Transfer",
    //   amount: "₹5,000",
    //   status: "Received",
    //   icon: Icons.dmtIcon,
    // },
  ];

  // -------------------- MAIN --------------------

  const fetchUsebyid = async (id) => {
    try {
      setLoading(true);

      const res = await POST_FORM(ApiEndPoint.getusebyid, {
        user_id: id,
      });

      if (res.status === "200") {
        setWallet(res?.data);
      } else {
        showToast("error", "Error", res?.message);
      }
    } catch (err) {
      showToast("error", "Error", "Something went wrong");
      if (err.offline) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  // const fetchWalletBalance = async () => {
  //   try {
  //     setLoading(true);

  //     const res = await RECHARGE_GET(ApiEndPoint.api_balance, {
  //       apiKey: apikey,
  //     });
  //     if (res?.status === true) {
  //       setWallet(res?.data);
  //     }
  //   } catch (error) {
  //     showToast('error', 'Error', 'Something went wrong');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchWalletBalance();
  // }, []);

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userData);
      let formatedData = localData ? JSON.parse(localData) : null;
      await fetchUsebyid(formatedData?.email);
    };
    getId();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (backPressCount.current === 0) {
          backPressCount.current = 1;
          ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
          setTimeout(() => {
            backPressCount.current = 0;
          }, 2000);

          return true;
        }

        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  // rightIcon={Icons.notification}
  // rightIconBoxStyle={styles.rightIconBoxStyle}
  // rightIconStyle={styles.rightIconStyle}
  return (
    <ScreenLayout paddingHorizontalStyle={0}>
      <Loader visible={loading} />

      {/* HEADER */}
      <View style={styles.notificationAndUserBox}>
        <Pressable style={styles.backIcon} onPress={handleBack}>
          <Icon name="arrow-left" color="#000" size={theme.moderateScale(20)} />
        </Pressable>

        <Pressable
          style={[
            styles.notificationBox,
            {
              marginRight: theme.tokens.spacing.sm,
            },
          ]}
        >
          <Image
            source={Icons.notification}
            style={styles.notificationIcon}
            resizeMode="contain"
          />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {cartCount > 9 ? "9+" : cartCount}
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.homeContaine}>
        <FlatList
          data={[1]}
          renderItem={() => null}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: insets.bottom + theme.tokens.spacing.xxl,
          }}
          ListHeaderComponent={
            <View style={styles.bannerTop}>
              <ImageSlider images={banners} />

              <LinearGradient
                colors={["#0C8485", "#14B8A6"]}
                style={styles.walletCard}
              >
                <Text style={styles.walletTitle}>Wallet Balance</Text>
                <Text style={styles.walletAmount}>
                  ₹{Number(wallet?.user_balance || 0).toFixed(0)}
                </Text>
                <View style={styles.walletBottomRow}>
                  <View style={styles.totalBusinessBox}>
                    <Text style={styles.walletLabel}>Total Business</Text>
                    <Text style={styles.walletValue}>₹0</Text>
                  </View>

                  <View style={styles.totalBusinessBox}>
                    <Text style={styles.walletLabel}>
                      Total Commission(Today)
                    </Text>

                    <Text style={styles.walletValue}>₹0</Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.walletBottomRow,
                    { marginTop: verticalScale(10) },
                  ]}
                >
                  <View style={styles.totalBusinessBox}>
                    <Text style={styles.walletLabel}>Today Business</Text>
                    <Text style={styles.walletValue}>₹0</Text>
                  </View>
                  <View style={styles.totalBusinessBox}>
                    <Text style={styles.walletLabel}>Today Commission</Text>
                    <Text style={styles.walletValue}>₹0</Text>
                  </View>
                </View>
              </LinearGradient>

              {/* TRANSACTION OVERVIEW */}

              {
                // <View style={styles.myBookingBox}>
                //   <Text style={styles.myBookingText}>Services Overview</Text>
                //   <Pressable style={styles.dateRow} onPress={handleDate}>
                //     <DateIcon
                //       name="date"
                //       color={colors.blackDark}
                //       size={moderateScale(13)}
                //     />
                //     <Text style={styles.dateText}> {formattedDate}</Text>
                //     <Image
                //       source={Icons.downArrowIcon}
                //       resizeMode="contain"
                //       style={styles.downArrowIcon}
                //     />
                //   </Pressable>
                //   <AppDatePicker
                //     visible={show}
                //     value={date ?? new Date()}
                //     onChange={setDate}
                //     onClose={closeDatePicker}
                //   />
                // </View>
                // <FlatList
                //   data={transactionData}
                //   scrollEnabled={false}
                //   keyExtractor={(item) => item.id.toString()}
                //   renderItem={({ item }) => {
                //     return (
                //       <View
                //         style={[
                //           styles.transactionCard,
                //           { backgroundColor: item.bgColor },
                //         ]}
                //       >
                //         <View style={styles.serviceBottom}>
                //           <View style={styles.servicerBox}>
                //             <Image
                //               source={item?.icon}
                //               style={styles.servicerIcon}
                //               resizeMode="contain"
                //             />
                //           </View>
                //           <View
                //             style={[
                //               styles.aepsBox,
                //               { backgroundColor: item?.testColor },
                //             ]}
                //           >
                //             <Text style={styles.servicesSmall}>{item?.type}</Text>
                //           </View>
                //         </View>
                //         <View>
                //           <Text style={styles.serviceText}>{item?.title}</Text>
                //           <View style={styles.recentLeftRow}>
                //             <View>
                //               <Text style={styles.todayText}>
                //                 Transaction(Total)
                //               </Text>
                //               <Text
                //                 style={[
                //                   styles.transactionTitle,
                //                   { color: item.testColor },
                //                 ]}
                //               >
                //                 {item.totalTransAction}
                //               </Text>
                //               <View style={styles.peopleRow}>
                //                 <Image
                //                   source={Icons.peopleIcon}
                //                   resizeMode="contain"
                //                   style={styles.peopleIcon}
                //                 />
                //                 <Text style={styles.todayText}> 0</Text>
                //               </View>
                //             </View>
                //             <View style={styles.baseLineBorder} />
                //             <View>
                //               <Text style={styles.todayText}>
                //                 Transaction(Today)
                //               </Text>
                //               {/* ✅ FIXED: Changed item.totalTransAction to item.todayTransAction */}
                //               <Text
                //                 style={[
                //                   styles.transactionTitle,
                //                   { color: item.testColor },
                //                 ]}
                //               >
                //                 {item.todayTransAction}
                //               </Text>
                //               <View style={styles.peopleRow}>
                //                 <Image
                //                   source={Icons.peopleIcon}
                //                   resizeMode="contain"
                //                   style={styles.peopleIcon}
                //                 />
                //                 <Text style={styles.todayText}> 0</Text>
                //               </View>
                //             </View>
                //           </View>
                //         </View>
                //         <Image
                //           source={Icons.downArrowIcon}
                //           tintColor={theme.tokens.colors.lightGray}
                //           style={styles.downArrowIcon}
                //           resizeMode="contain"
                //         />
                //       </View>
                //     );
                //   }}
                // />
              }
              {/* RECENT TRANSACTIONS */}
              <View style={styles.myBookingBox}>
                <Text style={styles.myBookingText}>Recent Transactions</Text>
                <Text style={styles.seeAllText}>View All</Text>
              </View>

              {recentTransactions.map((item) => {
                return (
                  <View key={item.id} style={styles.recentCard}>
                    <View style={styles.recentLeftRow}>
                      <View style={styles.recentIconBox}>
                        <Image
                          source={item.icon}
                          style={styles.recentIcon}
                          resizeMode="contain"
                        />
                      </View>

                      <View>
                        <Text style={styles.recentTitle}>{item.name}</Text>

                        <Text style={styles.recentStatus}>{item.status}</Text>
                      </View>
                    </View>

                    <Text style={styles.recentAmount}>{item.amount}</Text>
                  </View>
                );
              })}
            </View>
          }
        />
      </View>
    </ScreenLayout>
  );
};

export default HomeScreen;

// <View style={styles.notificationAndUserBox}>
//         {
//           // <View>
//           //   <Text style={styles.userName}>Welcome Back</Text>
//           //   <Text style={styles.userText}>Manage your transactions easily</Text>
//           // </View>
//         }

//         <View style={styles.headerRow}>
//           <Pressable
//             style={[
//               styles.notificationBox,
//               {
//                 marginRight: theme.tokens.spacing.sm,
//               },
//             ]}
//           >
//             <Image
//               source={Icons.notification}
//               style={styles.notificationIcon}
//               resizeMode="contain"
//             />

//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>
//                 {cartCount > 9 ? '9+' : cartCount}
//               </Text>
//             </View>
//           </Pressable>

//           <Pressable style={styles.notificationBox}>
//             <Image
//               source={Icons.questionMarkIcon}
//               style={styles.notificationIcon}
//               resizeMode="contain"
//             />
//           </Pressable>
//         </View>
//       </View>
