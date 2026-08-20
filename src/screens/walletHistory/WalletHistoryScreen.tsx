import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { AppHeader, Loader, ScreenLayout } from '../../component';
import { verticalScale } from '../../utils/responsiveSize';
import { localStorage, storageKeys } from '../../storage/storage';
import { POST_FORM } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import { showToast } from '../../utils/toast';
import { formatDateDayMonthShortYear } from '../../utils/date';

const HISTORY_DATA = [
  {
    id: '1',
    title: 'Mobile Number',
    amount: '3000.00',
    adharNo: '845839495939',
    mobNo: '9358495930',
    TxnId: '1776093436',
    bankName: 'Bank Of Baroda',
    transactionType: 'Balance Enquiry',
    UserId: 'EDBRT11513',
    userName: 'Rajan',
    userMob: '8426066920',
    OutLateName: 'PAL MONEY TRANSFER',
    date: '19 Dec 2026, 05:00 PM',
    status: 'SUCCESS',
    reason: '59-Your bank has declined this transaction as suspected fraud',
  },
  {
    id: '2',
    title: 'Mobile Number',
    amount: '2000.00',
    adharNo: '845839495939',
    mobNo: '9358495930',
    TxnId: '1776093436',
    bankName: 'Bank Of Baroda',
    transactionType: 'Balance Enquiry',
    UserId: 'EDBRT11513',
    userName: 'Rajan',
    userMob: '8426066920',
    OutLateName: 'PAL MONEY TRANSFER',
    date: '17 Dec 2025, 05:00 PM',
    status: 'FAILED',
    reason: '58-Your bank has declined this transaction as suspected fraud',
  },
  {
    id: '3',
    title: 'Mobile Number',
    amount: '1000.00',
    adharNo: '845839495939',
    mobNo: '9358495930',
    TxnId: '1776093436',
    bankName: 'Bank Of Baroda',
    transactionType: 'Balance Enquiry',
    UserId: 'EDBRT11513',
    userName: 'Rajan',
    userMob: '8426066920',
    OutLateName: 'PAL MONEY TRANSFER',
    date: '17 Dec 2025, 05:00 PM',
    status: 'SUCCESS',
    reason: '49-Your bank has declined this transaction as suspected fraud',
  },
];

const WalletHistoryScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'SUCCESS':
        return {
          bg: '#E6F9F1',
          color: '#12B76A',
        };
      case 'FAILED':
        return {
          bg: '#FFECEC',
          color: '#F04438',
        };
      default:
        return {
          bg: '#FFF6E5',
          color: '#F79009',
        };
    }
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
      if (response?.status === 200) {
        setRechargeHistory(response?.data?.slice(0, 5));
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

  // const renderItem = ({ item }) => {
  //   const statusStyle = getStatusStyle(item.status);
  //   return (
  //     <View style={styles.card}>
  //       <View style={styles.headerRow}>
  //         <Text style={styles.transactionType}>{item.transactionType}</Text>

  //         <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
  //           <Text style={[styles.statusText, { color: statusStyle.color }]}>
  //             {item.status}
  //           </Text>
  //         </View>
  //       </View>

  //       <View style={styles.divider} />

  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>Txn ID</Text>
  //         <Text style={styles.value}>{item.TxnId}</Text>
  //       </View>
  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>Amount</Text>
  //         <Text style={styles.value}>{item.amount}</Text>
  //       </View>

  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>Aadhaar</Text>
  //         <Text style={styles.value}>
  //           XXXX XXXX {item.adharNo.slice(-4)}
  //           {'   '}
  //         </Text>
  //       </View>

  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>Mobile</Text>
  //         <Text style={styles.value}>{item.mobNo}</Text>
  //       </View>

  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>Bank</Text>
  //         <Text style={styles.value}>{item.bankName}</Text>
  //       </View>

  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>User</Text>
  //         <Text style={styles.value}>
  //           {item.userName} ({item.UserId})
  //         </Text>
  //       </View>

  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>Outlet</Text>
  //         <Text style={styles.value}>{item.OutLateName}</Text>
  //       </View>

  //       <View style={styles.infoRow}>
  //         <Text style={styles.label}>Reason</Text>
  //         <Text style={styles.value}>{item.reason}</Text>
  //       </View>

  //       <View style={styles.footer}>
  //         <Text style={styles.date}>{item.date}</Text>
  //       </View>
  //     </View>
  //   );
  // };
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

  return (
    <ScreenLayout
      header={<AppHeader title="Wallet History" onPress={handleBackPress} />}
    >
      <Loader visible={loading} />

      {/* List */}
      <FlatList
        data={rechargeHistory}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{
          paddingBottom: 20,
          paddingVertical: verticalScale(20),
        }}
      />
    </ScreenLayout>
  );
};

export default WalletHistoryScreen;
