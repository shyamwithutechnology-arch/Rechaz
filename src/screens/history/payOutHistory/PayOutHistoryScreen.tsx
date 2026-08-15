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
    accountName: 'MANISH PAL',
    accountNo: '002390200010924',
    referenceId: '69900e6e0d336',
    amount: '25000.00',
    message: 'Payout Successfully received',
    user: 'Rajan',
    date: '17 Dec 2025, 05:00 PM',
    status: 'SUCCESS',
  },
  {
    id: '2',
    accountName: 'RAHUL KUMAR',
    accountNo: '002390200010924',
    referenceId: '69900e6e0d336',
    amount: '25000.00',
    message: 'Payout Successfully received',
    user: 'Rajan',
    date: '17 Dec 2025, 05:00 PM',
    status: 'FAILED',
  },
  {
    id: '3',
    accountName: 'RAVI SHARMA',
    accountNo: '002390200010924',
    referenceId: '69900e6e0d336',
    amount: '25000.00',
    message: 'Payout Successfully received',
    user: 'Rajan',
    date: '17 Dec 2025, 05:00 PM',
    status: 'SUCCESS',
  },
  {
    id: '4',
    accountName: 'MANISH KUMAR',
    accountNo: '002390200010924',
    referenceId: '69900e6e0d336',
    amount: '25000.00',
    message: 'Payout Successfully received',
    user: 'Rajan',
    date: '17 Dec 2025, 05:00 PM',
    status: 'SUCCESS',
  },
];

const PayOutHistoryScreen = ({ navigation }) => {
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
        {/* Top Row */}
        <View style={styles.headerRow}>
          <Text style={styles.transactionType}>{item.accountName}</Text>

          <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {item.status}
            </Text>
          </View>
        </View>

        {/* Amount (IMPORTANT - highlight) */}
        <Text style={styles.amount}>₹ {item.amount}</Text>

        <View style={styles.divider} />

        {/* Details */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Account No</Text>
          <Text style={styles.value}>********{item?.accountNo?.slice(-4)}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Reference ID</Text>
          <Text style={styles.value}>{item.referenceId}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Message</Text>
          <Text style={styles.value}>{item.message}</Text>
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
      header={<AppHeader title="PayOut History" onPress={handleBackPress} />}
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

export default PayOutHistoryScreen;
