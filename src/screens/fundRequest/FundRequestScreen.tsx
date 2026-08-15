import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';
import { createStyles } from './styles';
import { AppHeader, ScreenLayout, Loader } from '../../component';
import { verticalScale } from '../../utils/responsiveSize';
import { POST_FORM } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import { showToast } from '../../utils/toast';
import { localStorage, storageKeys } from '../../storage/storage';

const HISTORY_DATA = [
  {
    id: '1',
    operator: 'VIDEOCON D2H',
    DTHNo: '201699730',
    amount: '₹3000.00',
    referenceId: '69db7caea7be0',
    mobNo: '9358495930',
    TxnId: '1010100005889017',
    UserId: 'EDBRT11513',
    outletName: 'PAL MONEY TRANSFER',
    userName: 'Rajan',
    userMob: '8426066920',
    date: '19 Dec 2026, 05:00 PM',
    status: 'SUCCESS',
  },
  {
    id: '2',
    operator: 'VIDEOCON D2H',
    DTHNo: '201699730',
    amount: '₹3000.00',
    referenceId: '69db7caea7be0',
    mobNo: '9358495930',
    TxnId: '1010100005889017',
    UserId: 'EDBRT11513',
    outletName: 'PAL MONEY TRANSFER',
    userName: 'Rajan',
    userMob: '8426066920',
    date: '19 Dec 2026, 05:00 PM',
    status: 'FAILED',
  },
  {
    id: '1',
    operator: 'VIDEOCON D2H',
    DTHNo: '201699730',
    amount: '₹3000.00',
    referenceId: '69db7caea7be0',
    mobNo: '9358495930',
    TxnId: '1010100005889017',
    UserId: 'EDBRT11513',
    outletName: 'PAL MONEY TRANSFER',
    userName: 'Rajan',
    userMob: '8426066920',
    date: '19 Dec 2026, 05:00 PM',
    status: 'SUCCESS',
  },
];

const FundRequestScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [loading, setLoading] = useState(false);
  const [funRequestList, setFunRequestList] = useState([]);
  console.log('funRequestListfunRequestList', funRequestList);

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

  const renderItem = ({ item }) => {
    const statusStyle = getStatusStyle(item.status);

    return (
      <View style={styles.card}>
        {/* Top */}
        <View style={styles.headerRow}>
          <Text style={styles.transactionType}>{item.firm_name}</Text>

          <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {item.status}
            </Text>
          </View>
        </View>

        {/* Amount highlight */}
        <Text style={styles.amount}>₹{item.amount}</Text>

        <View style={styles.divider} />

        {/* Info */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Payment Mode</Text>
          <Text style={styles.value}>{item.payment_mode}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Bank Name</Text>
          <Text style={styles.value}>{item.bank_name}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Deposit Date</Text>
          <Text style={styles.value}>{item.deposit_date}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Receipt no.</Text>
          <Text style={styles.value}>{item.receipt_no}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.date}>{item.created_at}</Text>
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

  const paymentRequest = async id => {
    try {
      setLoading(true);
      const res = await POST_FORM(ApiEndPoint.fundRequestList, { user_id: id });
      console.log('resww', res);

      if (res) {
        setFunRequestList(res?.data);
      }
    } catch (error) {
      showToast('error', 'Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUserId = async () => {
      const userData = await localStorage.getItem(storageKeys.userData);
      const formatedData = userData ? JSON.parse(userData) : '';
      console.log('formatedData', formatedData);

      await paymentRequest(formatedData?.id);
    };
    getUserId();
  }, []);

  return (
    <ScreenLayout
      header={<AppHeader title="Fund Request" onPress={handleBackPress} />}
    >
      <Loader visible={loading} />
      {/* List */}
      <FlatList
        data={funRequestList}
        keyExtractor={item => item.id}
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

export default FundRequestScreen;
