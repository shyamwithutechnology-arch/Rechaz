import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import { AppHeader, Loader, ScreenLayout } from '../../component';
import { Icons } from '../../assets/icons';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';

// vector icon
import Icon from 'react-native-vector-icons/Octicons';
import { verticalScale } from '../../utils/responsiveSize';
import { GET, POST_FORM } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import { showToast } from '../../utils/toast';
import ImageSlider from '../../component/slider/ImageSlider';
import { localStorage, storageKeys } from '../../storage/storage';
import { formatDateDayMonthShortYear } from '../../utils/date';
import TextTicker from 'react-native-text-ticker';
import { Error } from '../../utils/errorHandle';

const HomeScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const [slider, setSlider] = useState({});
  const [dashBoardDetails, setDashBoardDetails] = useState({});
  console.log('dashBoardDetails', dashBoardDetails);

  const [wallet, setWallet] = useState<any>({});
  const [rechargeHistory, setRechargeHistory] = useState([]);

  const backPressCount = useRef(0);

  const handleBack = () => {
    navigation.goBack();
  };

  const fetchUsebyid = async id => {
    try {
      setLoading(true);

      const res = await POST_FORM(ApiEndPoint.getusebyid, {
        user_id: id,
      });

      if (res.status === '200') {
        setWallet(res?.data);
      } else {
        showToast('error', 'Error', res?.message);
      }
    } catch (err) {
      showToast('error', 'Error', 'Something went wrong');
      if (err.offline) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchSlider = async () => {
    try {
      setLoading(true);

      const res = await GET(ApiEndPoint.slider);

      if (res.status === 200) {
        setSlider(res);
      } else {
        showToast('error', 'Error', res?.message);
      }
    } catch (err) {
      showToast('error', 'Error', 'Something went wrong');
      if (err.offline) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Success':
        return {
          bg: '#E6F9F1',
          color: '#0E8D39',
        };
      case 'Faild':
        return {
          bg: '#FFECEC',
          color: '#F04438',
        };
      default:
        return {
          color: '#F79009',
          bg: '#FFF6E5',
        };
    }
  };

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userData);
      let formatedData = localData ? JSON.parse(localData) : null;
      await fetchSlider();
      await fetchUsebyid(formatedData?.email);
    };
    getId();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (backPressCount.current === 0) {
          backPressCount.current = 1;
          ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
          setTimeout(() => {
            backPressCount.current = 0;
          }, 2000);

          return true;
        }

        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  const handleHistory = async id => {
    const params = {
      userId: id,
      fromDate: '',
      toDate: '',
    };

    try {
      setLoading(true);
      const response = await POST_FORM(
        ApiEndPoint.mobileRechargeViewAll,
        params,
      );
      console.log('Recharge Report =>ssss', response);
      if (response?.status === 200) {
        setRechargeHistory(response?.data?.slice(0, 2));
      } else {
        showToast('error', 'Error', response?.message);
        setRechargeHistory([]);
      }
    } catch (error) {
      showToast('error', 'Error', 'Something went wrong');
      if (error.offline) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchNotifation = async () => {
    try {
      setLoading(true);
      const response = await GET(ApiEndPoint.notification);
      console.log('notification', response);
      if (response?.status === 200) {
        setNotification(response?.message);
      } else {
        showToast('error', 'Error', response?.message);
        setNotification('');
      }
    } catch (error) {
      showToast('error', 'Error', 'Something went wrong');
      if (error.offline) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleWalletBallece = async id => {
    try {
      setLoading(true);
      const params = {
        userid: id,
        user_type: 6,
      };
      const response = await POST_FORM(ApiEndPoint.dashoboardReport, params);
      if (response?.status === true) {
        setDashBoardDetails(response?.data);
      } else {
        Error(response?.message);
        setDashBoardDetails({});
      }
    } catch (error) {
      if (error.offline) {
        return;
      }
      Error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userData);
      let formatedData = localData ? JSON.parse(localData) : null;
      await fetchNotifation();
      if (formatedData?.id) {
        await handleWalletBallece(formatedData?.id);
        await handleHistory(formatedData?.id);
      }
    };
    getId();
  }, []);

  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      header={<AppHeader title="Home" onPress={handleBack} />}
    >
      <Loader visible={loading} />

      {/* HEADER */}
      {/* <View style={styles.notificationAndUserBox}>
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
        </Pressable>
      </View> */}

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
              <View style={styles.topNotification}>
                <TextTicker
                  style={styles.messText}
                  duration={50000}
                  loop
                  bounce={false}
                  repeatSpacer={500}
                  marqueeDelay={1000}
                >
                  {notification}
                </TextTicker>
              </View>

              <ImageSlider images={slider} />

              <LinearGradient
                colors={['#0E8D39', '#0e8d3885']}
                style={styles.walletCard}
              >
                <Text style={styles.walletTitle}>Wallet Balance</Text>
                <Text style={styles.walletAmount}>
                  ₹{Number(wallet?.user_balance || 0).toFixed(0)}
                </Text>
                <View style={styles.walletBottomRow}>
                  <View style={styles.totalBusinessBox}>
                    <Text style={styles.walletLabel}>Total Business</Text>
                    <Text style={styles.walletValue}>
                      ₹
                      {Number(
                        dashBoardDetails?.total_mobile_recharge?.[0]?.amount ||
                          0,
                      ).toFixed(2)}
                      {/* ₹{dashBoardDetails?.total_mobile_recharge[0]?.amount} */}
                    </Text>
                  </View>

                  <View style={styles.totalBusinessBox}>
                    <Text style={styles.walletLabel}>
                      Total Commission(Today)
                    </Text>

                    <Text style={styles.walletValue}>
                      0{' '}
                      {/* {Number(
                        dashBoardDetails?.total_mobile_recharge?.[0]?.amount ||
                          0,
                      ).toFixed(2)} */}
                    </Text>
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
                    <Text style={styles.walletValue}>
                      ₹{' '}
                      {Number(
                        dashBoardDetails?.total_mobile_recharge?.[0]?.amount ||
                          0,
                      ).toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.totalBusinessBox}>
                    <Text style={styles.walletLabel}>Today Commission</Text>
                    <Text style={styles.walletValue}>
                      0{' '}
                      {/* ₹{' '}
                      {Number(
                        dashBoardDetails?.today_total_debit_business?.[0]
                          ?.amount || 0,
                      ).toFixed(2)} */}
                    </Text>
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
              </View>

              {rechargeHistory.map(item => {
                const statusStyle = getStatusStyle(item.status);
                return (
                  <View style={styles.card}>
                    <View style={styles.headerRow}>
                      <View>
                        {item?.operator && (
                          <Text style={styles.title}>Mobile Recharge</Text>
                        )}
                        <Text style={styles.operator}>{item.operator}</Text>
                      </View>

                      <View
                        style={[
                          styles.statusBox,
                          { backgroundColor: statusStyle.bg },
                        ]}
                      >
                        <Text
                          style={[
                            styles.statusText,
                            { color: statusStyle.color },
                          ]}
                        >
                          {item.status}
                        </Text>
                      </View>
                    </View>
                    {item?.canumber && (
                      <View style={styles.infoRow}>
                        <Text style={styles.label}>Mobile No.</Text>
                        <Text style={styles.value}>{item?.canumber}</Text>
                      </View>
                    )}

                    <View style={styles.infoRow}>
                      <Text style={styles.label}>Ref ID</Text>
                      <Text style={styles.value}>{item?.ref_id}</Text>
                    </View>

                    <View style={styles.infoRow}>
                      <Text style={styles.label}>Amount</Text>
                      <Text style={styles.amount}>
                        ₹{Number(item?.amount).toFixed(0)}
                      </Text>
                    </View>

                    <View style={styles.footer}>
                      <Text style={styles.date}>
                        {formatDateDayMonthShortYear(item?.date)}
                      </Text>
                    </View>
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
