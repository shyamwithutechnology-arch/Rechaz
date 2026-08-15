import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import { AppHeader, ScreenLayout } from '../../../component';
import { verticalScale } from '../../../utils/responsiveSize';

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

const DTHRechargeScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
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
          <Text style={styles.transactionType}>{item.operator}</Text>

          <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {item.status}
            </Text>
          </View>
        </View>

        {/* Amount highlight */}
        <Text style={styles.amount}>{item.amount}</Text>

        <View style={styles.divider} />

        {/* Info */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>DTH No</Text>
          <Text style={styles.value}>{item.DTHNo}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Txn ID</Text>
          <Text style={styles.value}>{item.TxnId}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Mobile</Text>
          <Text style={styles.value}>{item.mobNo}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>User</Text>
          <Text style={styles.value}>
            {item.userName} ({item.UserId})
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Outlet</Text>
          <Text style={styles.value}>{item.outletName}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.date}>{item.date}</Text>
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
      header={<AppHeader title="DTH History" onPress={handleBackPress} />}
    >
      {/* List */}
      <FlatList
        data={HISTORY_DATA}
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

export default DTHRechargeScreen;
