import React, { useCallback, useEffect, useRef } from "react";
import {
  BackHandler,
  FlatList,
  Image,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { ScreenLayout } from "../../component";
import { Images } from "../../assets/images";
import { Icons } from "../../assets/icons";
import { useAppTheme } from "../../hooks/useAppTheme";
import { createStyles } from "./styles";

import HomeBannerSlider from "./component/homebanner/HomeBannerSlider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { showToast } from "../../utils/toast";
import ImageSlider from "../../component/slider/ImageSlider";
import { localStorage, storageKeys } from "../../storage/storage";

const ServiceScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const insets = useSafeAreaInsets();
  const backPressCount = useRef(0);

  const cartCount = 0;

  // -------------------- BANNERS --------------------

  const banners = [
    { id: "1", image: Images.homeBannerImg1 },
    { id: "2", image: Images.homeBannerImg1 },
    // { id: "2", image: Images.homeBannerImg2 },
    // { id: '3', image: Images.homeBannerImg1 },
  ];

  // -------------------- SERVICES --------------------

  const rechargeServices = [
    {
      id: 1,
      service: "Mobile Recharge",
      image: Icons.mobileRechargeIcon,
      routes: "MobileRecharge",
    },
    // {
    //   id: 2,
    //   service: 'DTH Recharge',
    //   image: Icons.dthRechargeIcon,
    //   routes: 'DTHRecharge',
    // },
    // {
    //   id: 3,
    //   service: 'Fastag',
    //   image: Icons.fastTagIcon,
    //   routes: 'Fastag',
    // },
  ];

  // const ticketBookingServices = [
  //   {
  //     id: 1,
  //     service: 'Flight',
  //     image: Icons.planeIcon,
  //     routes: 'Flight Booking',
  //   },
  //   {
  //     id: 2,
  //     service: 'Bus',
  //     image: Icons.busIcon,
  //     routes: 'Bus Booking',
  //   },
  //   {
  //     id: 3,
  //     service: 'Train',
  //     image: Icons.trainIcon,
  //     routes: 'Train Booking',
  //   },
  //   {
  //     id: 4,
  //     service: 'Hotel',
  //     image: Icons.hotelIcon,
  //     routes: 'Hotel Booking',
  //   },
  // ];

  // // will payment services
  // const willPaymentServices = [
  //   {
  //     id: 1,
  //     service: 'Broadband',
  //     image: Icons.broadbandIcon,
  //     routes: 'broadband',
  //   },
  //   {
  //     id: 2,
  //     service: 'Electricity',
  //     image: Icons.electricityIcon,
  //     routes: 'electricity',
  //   },
  //   {
  //     id: 3,
  //     service: 'Cabletv',
  //     image: Icons.cabletvIcon,
  //     routes: 'cabletv',
  //   },
  //   {
  //     id: 4,
  //     service: 'Gas',
  //     image: Icons.gas,
  //     routes: 'gas',
  //   },
  //   {
  //     id: 5,
  //     service: 'Credit Card',
  //     image: Icons.creditcard,
  //     routes: 'creditCards',
  //   },
  //   {
  //     id: 6,
  //     service: 'Donation',
  //     image: Icons.donation,
  //     routes: 'donation',
  //   },
  //   {
  //     id: 7,
  //     service: 'Hospital',
  //     image: Icons.hospital,
  //     routes: 'hospital',
  //   },
  //   {
  //     id: 8,
  //     service: 'Housing Society',
  //     image: Icons.housingsocietyss,
  //     routes: 'housingSociety',
  //   },
  //   {
  //     id: 9,
  //     service: 'Education Fees',
  //     image: Icons.educationfees,
  //     routes: 'educationFees',
  //   },
  //   {
  //     id: 10,
  //     service: 'Landline Postpaid',
  //     image: Icons.landlinepostpaidss,
  //     routes: 'landlinePostpaid',
  //   },
  //   {
  //     id: 11,
  //     service: 'Loan Repayment',
  //     image: Icons.loanrepayment,
  //     routes: 'loanRepaymentIcon',
  //   },
  //   {
  //     id: 12,
  //     service: 'Mobile Prepaid',
  //     image: Icons.mobilepostpaid,
  //     routes: 'mobilePrepaid',
  //   },
  //   {
  //     id: 13,
  //     service: 'Rental',
  //     image: Icons.rentalss,
  //     routes: 'rental',
  //   },
  //   {
  //     id: 14,
  //     service: 'Subsription',
  //     image: Icons.subscription,
  //     routes: 'Subsription',
  //   },
  // ];

  // // -------------------- BOOKINGS --------------------

  // const finacialServices = [
  //   {
  //     id: 1,
  //     service: 'AEPS',
  //     image: Icons.AepeIcon,
  //     routes: 'Aeps',
  //   },
  //   {
  //     id: 2,
  //     service: 'Money transfer(DMT) ',
  //     image: Icons.dmtIcon,
  //     routes: 'MoneyTransfer',
  //   },
  //   {
  //     id: 3,
  //     service: 'Payout',
  //     image: Icons.payOutIcon,
  //     routes: 'Payout',
  //   },
  // ];

  // -------------------- HANDLERS --------------------

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  // -------------------- RENDER SERVICE ITEM --------------------

  const renderServiceItem = ({ item }: any) => {
    console.log("itemsssss", item);
    return (
      <Pressable
        style={styles.serviceWrapper}
        onPress={() =>
          item?.routes === "Fastag"
            ? showToast("success", "Success", "Comming soon")
            : navigation.navigate("ServiceStack", {
                screen: item?.routes,
              })
        }
      >
        <Image
          source={item?.image}
          style={styles.serviceIcon}
          resizeMode="contain"
        />
        <Text style={styles.serviceText}>{item?.service}</Text>
      </Pressable>
    );
  };

  // -------------------- SECTION HEADER --------------------

  const SectionHeader = ({
    title,
    onPress,
  }: {
    title: string;
    onPress?: () => void;
  }) => (
    <View style={styles.myBookingBox}>
      <Text style={styles.myBookingText}>{title}</Text>
      {
        // <Pressable onPress={() => navigation.navigate("PaymentSuccess")}>
        //   <Text style={styles.seeAllText}>See All</Text>
        // </Pressable>
      }
    </View>
  );

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

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userToken);
      // let formatedData = localData ? JSON.parse(localData) : null;
      console.log("formatedData", localData);
    };
    getId();
  }, []);
  return (
    <ScreenLayout paddingHorizontalStyle={0}>
      {/* TOP HEADER */}
      <View style={styles.notificationAndUserBox}>
        <View style={styles.headerRow}>
          <Pressable onPress={handleOpenDrawer}>
            <Image
              source={Icons.drawerIcon}
              style={styles.notificationIcon}
              resizeMode="contain"
            />
          </Pressable>

          <Text style={styles.servicesText}>Services</Text>
        </View>

        <View style={styles.headerRow}>
          <Pressable
            style={[
              styles.notificationBox,
              {
                marginRight: theme.tokens.spacing.sm,
              },
            ]}
            onPress={() => showToast("info", "Comming soon this feture ")}
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
      </View>

      <FlatList
        data={rechargeServices}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: theme.tokens.spacing.xxl,
          paddingHorizontal: theme.tokens.spacing.md,
        }}
        // ---------------- HEADER ----------------
        ListHeaderComponent={
          <View style={styles.headerMainBox}>
            <ImageSlider images={banners} />

            <SectionHeader
              title="Recharge Service"
              onPress={() =>
                navigation.navigate("AllServices", {
                  title: "Recharge Services",
                  services: rechargeServices,
                })
              }
            />
          </View>
        }
      />
    </ScreenLayout>
  );
};

export default ServiceScreen;

// ---------------- FOOTER ----------------

// ListFooterComponent={
//   <>
//     {/* MY BOOKINGS */}

//     <SectionHeader
//       title="Financial Services"
//       onPress={() =>
//         navigation.navigate('AllServices', {
//           title: 'Financial Services',
//           services: finacialServices,
//         })
//       }
//     />

//     <FlatList
//       data={finacialServices}
//       renderItem={renderFinacialServices}
//       keyExtractor={item => item.id.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={{
//         paddingRight: theme.tokens.spacing.sm,
//       }}
//     />

//     {/* TICKET BOOKING */}

//     <SectionHeader
//       title="Ticket Booking Services"
//       onPress={() =>
//         navigation.navigate('AllServices', {
//           title: 'Ticket Booking Services',
//           services: ticketBookingServices,
//           screen: 'TicketBooking',
//         })
//       }
//     />

//     <FlatList
//       data={ticketBookingServices}
//       renderItem={renderTicketBooking}
//       keyExtractor={item => item.id.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={{
//         paddingRight: insets.bottom + theme.tokens.spacing.xxl,
//       }}
//     />

//     {/* TICKET BOOKING */}

//     <SectionHeader
//       title="Bill Payment Services"
//       onPress={() =>
//         navigation.navigate('AllServices', {
//           title: 'Bill Payment Services',
//           services: willPaymentServices,
//         })
//       }
//     />
//     <FlatList
//       data={willPaymentServices}
//       renderItem={renderBillPaymentItem}
//       keyExtractor={item => item.id.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={{
//         paddingRight: theme.tokens.spacing.md,
//         paddingBottom: insets.bottom + theme.tokens.spacing.xxl,
//       }}
//     />
//   </>
// }

// <Pressable style={styles.notificationBox}>
//             <Image
//               source={Icons.questionMarkIcon}
//               style={styles.notificationIcon}
//               resizeMode="contain"
//             />
//           </Pressable>
