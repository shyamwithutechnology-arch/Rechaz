import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { createStyles } from './styles';
import { AppHeader, Loader, ScreenLayout } from '../../../component';
import { showToast } from '../../../utils/toast';
import { formatDateDayMonthShortYear } from '../../../utils/date';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { POST_FORM } from '../../../api/request';
import { ApiEndPoint } from '../../../api/endPoints';
import { localStorage, storageKeys } from '../../../storage/storage';

const MobileRechargeHistoryScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('rechargeHistory', rechargeHistory);

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

  const renderItem = ({ item }: any) => {
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

          <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {item.status}
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Mobile No.</Text>
          <Text style={styles.value}>{item.mobile}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Ref ID</Text>
          <Text style={styles.value}>{item.ref_id}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.amount}>₹{Number(item.amount).toFixed(0)}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.date}>
            {formatDateDayMonthShortYear(item.date)}
          </Text>
        </View>
      </View>
    );
  };

  const EmptyComponent = () => (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyText}>No Transactions Found</Text>
    </View>
  );

  const handleBackPress = () => {
    navigation.goBack();
  };

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
        setRechargeHistory(response?.data);
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

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userData);
      let formatedData = localData ? JSON.parse(localData) : null;
      if (formatedData?.id) {
        await handleHistory(formatedData?.id);
      }
    };
    getId();
  }, []);

  return (
    <ScreenLayout
      header={<AppHeader title="History" onPress={handleBackPress} />}
    >
      <Loader visible={loading} />
      {/* List */}
      <FlatList
        data={rechargeHistory}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={styles.contentContainer}
      />
    </ScreenLayout>
  );
};

export default MobileRechargeHistoryScreen;

// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import { createStyles } from './styles';
// import { AppHeader, Loader, ScreenLayout } from '../../../component';
// import { apikey } from '../../../api/axios';
// import { showToast } from '../../../utils/toast';
// import { formatDateDayMonthShortYear } from '../../../utils/date';
// import { useAppTheme } from '../../../hooks/useAppTheme';

// const HISTORY_DATA = [
//   {
//     id: '1',
//     title: 'Mobile Recharge',
//     number: '9999999999',
//     amount: 199,
//     status: 'SUCCESS',
//     date: '06 May 2026',
//   },
//   {
//     id: '2',
//     title: 'DTH Recharge',
//     number: '1234567890',
//     amount: 399,
//     status: 'PENDING',
//     date: '05 May 2026',
//   },
//   {
//     id: '3',
//     title: 'Electricity Bill',
//     number: 'RR-45821',
//     amount: 899,
//     status: 'FAILED',
//     date: '04 May 2026',
//   },
// ];

// const MobileRechargeHistoryScreen = ({ navigation }) => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);

//   const [rechargeHistory, setRechargeHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   console.log('rechargeHistory', rechargeHistory);

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case '1':
//         return {
//           bg: '#E6F9F1',
//           color: '#12B76A',
//         };
//       case '0':
//         return {
//           bg: '#FFECEC',
//           color: '#F04438',
//         };
//       default:
//         return {
//           color: '#F79009',
//           bg: '#FFF6E5',
//         };
//     }
//   };

//   const renderItem = ({ item }: any) => {
//     const statusStyle = getStatusStyle(item.Status);
//     console.log('items', item);

//     return (
//       <View
//         style={[styles.card, { borderColor: theme.tokens.colors.lightPrimary }]}
//       >
//         {/* Top Row */}
//         <View style={styles.row}>
//           <Text style={styles.title}>Mobile Recharge</Text>

//           <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
//             <Text style={[styles.statusText, { color: statusStyle.color }]}>
//               {item.Status === '1'
//                 ? 'Success'
//                 : item.status === '0'
//                 ? 'Faild'
//                 : 'Pending'}
//             </Text>
//           </View>
//         </View>

//         {/* Middle */}
//         <Text style={styles.subText}>{item?.CustomerNo}</Text>

//         {/* Bottom Row */}
//         <View style={styles.bottomRow}>
//           <Text style={styles.date}>
//             {formatDateDayMonthShortYear(item?.RecDate)}
//           </Text>

//           <Text style={styles.amount}>₹{item.Amount}</Text>
//         </View>
//       </View>
//     );
//   };

//   const EmptyComponent = () => (
//     <View style={styles.emptyBox}>
//       <Text style={styles.emptyText}>No Transactions Found</Text>
//     </View>
//   );

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const handleRechargeReport = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         'https://apidev.excisofttech.com/api/v1/recharge_report.php?apiKey=VT0UVOrek5gLJVTYBuHZwYJHnVI5juDI',
//         {
//           method: 'GET',
//           redirect: 'follow',
//         },
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`);
//       }

//       const result = await response.json();
//       setRechargeHistory(result?.data);
//       console.log('Recharge Report =>', result);
//     } catch (error) {
//       showToast('error', 'Error', 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     handleRechargeReport();
//   }, []);

//   return (
//     <ScreenLayout
//       header={<AppHeader title="History" onPress={handleBackPress} />}
//     >
//       <Loader visible={loading} />
//       {/* List */}
//       <FlatList
//         data={rechargeHistory}
//         keyExtractor={item => item.RecId}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//         ListEmptyComponent={EmptyComponent}
//         contentContainerStyle={styles.contentContainer}
//       />
//     </ScreenLayout>
//   );
// };

// export default MobileRechargeHistoryScreen;
