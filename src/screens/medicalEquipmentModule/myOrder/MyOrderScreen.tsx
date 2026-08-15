// import React, { useRef, useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Pressable,
//   FlatList,
//   Animated,
//   Easing,
//   Image,
// } from 'react-native';
// import { ScreenLayout, AppHeader } from '../../../component';
// import { useAppTheme } from '../../../hooks/useAppTheme';
// import { createStyles } from './styles';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Icons } from '../../../assets/icons';

// const ORDER_DATA = [
//   {
//     id: '1',
//     orderId: '#90897',
//     date: 'October 19 2026',
//     items: 10,
//     amount: '₹1600.90',
//     expanded: true,
//     delivered: false,
//     tracking: [
//       {
//         title: 'Order placed',
//         date: 'Oct 19 2026',
//         completed: true,
//       },
//       {
//         title: 'Order confirmed',
//         date: 'Oct 20 2026',
//         completed: true,
//       },
//       {
//         title: 'Order shipped',
//         date: 'Oct 20 2026',
//         completed: true,
//       },
//       {
//         title: 'Out for delivery',
//         date: 'pending',
//         completed: false,
//       },
//       {
//         title: 'Order delivered',
//         date: 'pending',
//         completed: false,
//       },
//     ],
//   },
//   {
//     id: '2',
//     orderId: '#90897',
//     date: 'October 19 2025',
//     items: 10,
//     amount: '₹1600.90',
//     expanded: false,
//     delivered: false,
//   },
//   {
//     id: '3',
//     orderId: '#90897',
//     date: 'October 19 2025',
//     items: 10,
//     amount: '₹1600.90',
//     expanded: false,
//     delivered: true,
//     deliveredDate: 'Aug 29 2025',
//   },
//   {
//     id: '4',
//     orderId: '#90897',
//     date: 'October 19 2025',
//     items: 10,
//     amount: '₹1600.90',
//     expanded: false,
//     delivered: true,
//     deliveredDate: 'Aug 29 2025',
//   },
// ];

// const AnimatedProgress = ({ delay }: any) => {
//   const animatedHeight = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(animatedHeight, {
//       toValue: 1,
//       duration: 700,
//       delay,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     }).start();
//   }, []);

//   return (
//     <Animated.View
//       style={{
//         width: 2,
//         height: animatedHeight.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 50],
//         }),
//         backgroundColor: '#11B5A4',
//         marginLeft: 1,
//       }}
//     />
//   );
// };

// const TrackingRow = ({ item, index, last }: any) => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         paddingHorizontal: 20,
//       }}
//     >
//       <View style={{ alignItems: 'center' }}>
//         <Animated.View
//           style={{
//             width: 16,
//             height: 16,
//             borderRadius: 20,
//             backgroundColor: item.completed ? '#11B5A4' : '#E5E5E5',
//           }}
//         />

//         {!last && item.completed && <AnimatedProgress delay={index * 250} />}

//         {!last && !item.completed && (
//           <View
//             style={{
//               width: 2,
//               height: 50,
//               backgroundColor: '#E5E5E5',
//               marginLeft: 7,
//             }}
//           />
//         )}
//       </View>

//       <View
//         style={{
//           flex: 1,
//           marginLeft: 16,
//           paddingBottom: 20,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: '700',
//             color: item.completed ? '#111' : '#9D9D9D',
//           }}
//         >
//           {item.title}
//         </Text>

//         <Text
//           style={{
//             fontSize: 15,
//             color: item.completed ? '#8C8C8C' : '#AFAFAF',
//           }}
//         >
//           {item.date}
//         </Text>
//       </View>
//     </View>
//   );
// };

// const OrderCard = ({ item, styles }: any) => {
//   const [expand, setExpand] = useState(item.expanded);

//   return (
// <View
//   style={{
//     backgroundColor: '#fff',
//     marginHorizontal: 16,
//     marginBottom: 18,
//     borderRadius: 24,
//     borderWidth: 1,
//     borderColor: '#D5ECE7',
//     overflow: 'hidden',
//   }}
// >
//   <Pressable
//     onPress={() => setExpand(!expand)}
//     style={{
//       flexDirection: 'row',
//       alignItems: 'center',
//       padding: 18,
//     }}
//   >
//     <View
//       style={{
//         width: 92,
//         height: 92,
//         borderRadius: 100,
//         backgroundColor: '#E5F6F3',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <MaterialCommunityIcons
//         name="package-variant-closed"
//         size={48}
//         color="#11B5A4"
//       />
//     </View>

//     <View style={{ flex: 1, marginLeft: 18 }}>
//       <Text
//         style={{
//           fontSize: 18,
//           fontWeight: '800',
//           color: '#111',
//         }}
//       >
//         Order {item.orderId}
//       </Text>

//       <Text
//         style={{
//           fontSize: 15,
//           color: '#8B8B8B',
//           marginTop: 4,
//         }}
//       >
//         Placed on {item.date}
//       </Text>

//       <View
//         style={{
//           flexDirection: 'row',
//           marginTop: 10,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 16,
//             color: '#111',
//             fontWeight: '600',
//           }}
//         >
//           Items: {item.items}
//         </Text>

//         <Text
//           style={{
//             fontSize: 16,
//             color: '#111',
//             fontWeight: '700',
//             marginLeft: 24,
//           }}
//         >
//           Items: {item.amount}
//         </Text>
//       </View>
//     </View>

//     <View
//       style={{
//         width: 34,
//         height: 34,
//         borderRadius: 100,
//         borderWidth: 2,
//         borderColor: '#11B5A4',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Image
//         source={Icons.upDownIcon}
//         style={[
//           styles.downUpStyle,
//           { transform: [{ rotate: expand ? '180deg' : '0deg' }] },
//         ]}
//         resizeMode="contain"
//       />
//     </View>
//   </Pressable>

//   {expand && item.tracking && (
//     <View
//       style={{
//         borderTopWidth: 1,
//         borderTopColor: '#ECECEC',
//         paddingTop: 20,
//       }}
//     >
//       {item.tracking.map((track: any, index: number) => (
//         <TrackingRow
//           key={index}
//           item={track}
//           index={index}
//           last={index === item.tracking.length - 1}
//         />
//       ))}
//     </View>
//   )}

//   {!expand && item.delivered && (
//     <View
//       style={{
//         borderTopWidth: 1,
//         borderTopColor: '#ECECEC',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 22,
//         paddingVertical: 20,
//       }}
//     >
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//         }}
//       >
//         <View
//           style={{
//             width: 16,
//             height: 16,
//             borderRadius: 20,
//             backgroundColor: '#E5E5E5',
//           }}
//         />

//         <Text
//           style={{
//             marginLeft: 12,
//             fontSize: 16,
//             color: '#8D8D8D',
//             fontWeight: '700',
//           }}
//         >
//           Order Delivered
//         </Text>
//       </View>

//       <Text
//         style={{
//           fontSize: 16,
//           color: '#8D8D8D',
//         }}
//       >
//         {item.deliveredDate}
//       </Text>
//     </View>
//   )}
// </View>
//   );
// };

// const MyOrderScreen = ({ navigation }: any) => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);
//   const insets = useSafeAreaInsets();

//   return (
//     <ScreenLayout
//       innerContainer={styles.container}
//       paddingHorizontalStyle={0}
//       header={
//         <AppHeader
//           title="My Orders"
//           onPress={() => navigation.goBack()}
//           cartCount={0}
//         />
//       }
//     >
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#F7F8F8',
//         }}
//       >
//         <FlatList
//           data={ORDER_DATA}
//           keyExtractor={item => item.id}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingTop: theme.tokens.spacing.md,
//             paddingBottom: theme.tokens.spacing.mdPlus,
//           }}
//           renderItem={({ item }) => <OrderCard item={item} styles={styles} />}
//           renderItem={OrderCard}
//         />
//       </View>
//     </ScreenLayout>
//   );
// };

// export default MyOrderScreen;

// // <AntDesign name={expand ? 'up' : 'down'} size={16} color="#11B5A4" />
// // import React, { useState } from 'react';
// // import { View, Text, Pressable, Image, FlatList, Alert } from 'react-native';
// // import { ScreenLayout, AppHeader } from '../../../component';
// // import { useAppTheme } from '../../../hooks/useAppTheme';
// // import { createStyles } from './styles';
// // import { Images } from '../../../assets/images';
// // import Icon from 'react-native-vector-icons/Octicons';
// // import { Icons } from '../../../assets/icons';
// // import WishListIcon from 'react-native-vector-icons/Feather';
// // import ShareIcon from 'react-native-vector-icons/EvilIcons';
// // import RightIcon from 'react-native-vector-icons/EvilIcons';
// // import StarIcon from 'react-native-vector-icons/AntDesign';
// // import { useSafeAreaInsets } from 'react-native-safe-area-context';
// // import { fonts } from '../../../theme';
// // import AddIcon from 'react-native-vector-icons/MaterialIcons';
// // import RateIcon from 'react-native-vector-icons/MaterialIcons';

// // const MyOrderScreen = ({ navigation }) => {
// //   const theme = useAppTheme();
// //   const styles = createStyles(theme);
// //   const insets = useSafeAreaInsets();

// //   const [quantity, setQuantity] = useState(1);

// //   const wishlistData = [
// //     {
// //       id: 1,
// //       img: Images.medicineImg1,
// //       title: 'Dolo 650 Tablet',
// //       actualAmount: '₹29.10',
// //       IncludedOffer: '(₹550)',
// //       offier: '25% off',
// //     },
// //     {
// //       id: 2,
// //       img: Images.medicineImg2,
// //       title: 'Finax Tablet',
// //       actualAmount: '₹589',
// //       IncludedOffer: '(₹710)',
// //       offier: '17% off',
// //     },
// //     {
// //       id: 3,
// //       img: Images.medicineImg3,
// //       title: 'Disprin Regular 325 mg, 10 Tablets',
// //       actualAmount: '₹29.10',
// //       IncludedOffer: '(₹550)',
// //       offier: '25% off',
// //     },
// //     {
// //       id: 4,
// //       img: Images.medicineImg4,
// //       title: 'Topcare, Allergy Relief Soft Gels Dye Free, 24 Count',
// //       actualAmount: '2818',
// //       IncludedOffer: '(₹710)',
// //       offier: '17% off',
// //     },

// //     {
// //       id: 5,
// //       img: Images.medicineImg1,
// //       title: 'Dolo 650 Tablet',
// //       actualAmount: '₹29.10',
// //       IncludedOffer: '(₹550)',
// //       offier: '25% off',
// //     },
// //     {
// //       id: 6,
// //       img: Images.medicineImg2,
// //       title: 'Finax Tablet',
// //       actualAmount: '₹589',
// //       IncludedOffer: '(₹710)',
// //       offier: '17% off',
// //     },
// //     {
// //       id: 7,
// //       img: Images.medicineImg3,
// //       title: 'Disprin Regular 325 mg, 10 Tablets',
// //       actualAmount: '₹29.10',
// //       IncludedOffer: '(₹550)',
// //       offier: '25% off',
// //     },
// //     {
// //       id: 8,
// //       img: Images.medicineImg4,
// //       title: 'Topcare, Allergy Relief Soft Gels Dye Free, 24 Count',
// //       actualAmount: '2818',
// //       IncludedOffer: '(₹710)',
// //       offier: '17% off',
// //     },
// //   ];
// //   const handleBackPress = () => {
// //     navigation.goBack();
// //   };

// //   const handleDecrease = () => {
// //     if (quantity > 1) {
// //       setQuantity(pre => pre - 1);
// //     }
// //   };
// //   const handleIncrease = () => {
// //     setQuantity(pre => pre + 1);
// //   };

// //   const renderItem = ({ item }) => {
// //     return (
// //       <Pressable style={styles.medicineBox}>
// //         <Image
// //           source={item?.img}
// //           style={styles.medicineImg}
// //           resizeMode="contain"
// //         />
// //         <View style={styles.cardcontentBox}>
// //           <Text style={styles.titleStyle}>{item?.title}</Text>
// //           <Text style={styles.medicineText}>Medicine Tablet 1mg</Text>
// //           <View style={styles.ratingRow}>
// //             {[1, 2, 3, 4, 5].map(item => (
// //               <RateIcon
// //                 key={item}
// //                 name="star-border"
// //                 size={theme.moderateScale(18)}
// //                 color="#FFC107"
// //               />
// //             ))}
// //             <Text style={styles.ratingText}>
// //               4.8{' '}
// //               <Text style={[styles.ratingText, styles.ratingGrayText]}>
// //                 (21)
// //               </Text>
// //             </Text>
// //           </View>
// //           <View style={styles.lineBox} />
// //           <View style={styles.amountRow}>
// //             <Text style={styles.offiredText}>{item?.actualAmount}</Text>
// //             <Text
// //               style={[
// //                 styles.includerText,
// //                 { textDecorationLine: 'line-through' },
// //               ]}
// //             >
// //               {' '}
// //               {item?.IncludedOffer}{' '}
// //             </Text>
// //             <Text style={[styles.includerText, { color: '#19B44D' }]}>
// //               {item?.offier}
// //             </Text>

// //             <Pressable style={styles.plusBox}>
// //               <AddIcon name="add" size={theme.moderateScale(18)} color="#fff" />
// //             </Pressable>
// //           </View>
// //         </View>
// //         <Pressable style={styles.relatedWisListBox}>
// //           <WishListIcon
// //             name="heart"
// //             color={theme.tokens.colors.blackDark}
// //             size={theme.moderateScale(11)}
// //           />
// //         </Pressable>
// //       </Pressable>
// //     );
// //   };
// //   return (
// //     <ScreenLayout
// //       paddingHorizontalStyle={0}
// //       innerContainer={styles.container}
// //       header={
// //         <AppHeader title="My Orders" onPress={handleBackPress} cartCount={0} />
// //       }
// //     >
// //       <View
// //         style={[
// //           styles.homeContainer,
// //           { paddingBottom: insets.bottom + theme.tokens.spacing.xxl },
// //         ]}
// //       >
// //         <View style={styles.orderBox}>
// //           <Text>dsfasf</Text>
// //         </View>
// //       </View>
// //     </ScreenLayout>
// //   );
// // };

// // export default MyOrderScreen;
