import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { fonts } from '../../../theme';
import { createStyles } from './styles';
import { AppHeader, ScreenLayout } from '../../../component';
import { verticalScale } from '../../../utils/responsiveSize';

const HISTORY_DATA = [
  {
    id: '1',
    AccountNo: '002390200010924',
    IFSC: 'YESB0000001',
    referenceId: '1773994762',
    customerMob: '7355043143',
    TxnType: 'Account Verification',
    TxnAmount: '1',
    GstCarge: '100.00',
    DebitAmount: '4.00',
    UTRNo: '607913015472',
    RefNo: '1773994762',
    userId: '11533',
    userName: 'Rajan',
    date: '19 Dec 2026, 05:00 PM',
    status: 'SUCCESS',
  },
  {
    id: '2',
    AccountNo: '002390200010924',
    IFSC: 'YESB0000001',
    referenceId: '1773994762',
    customerMob: '7355043143',
    TxnType: 'Account Verification',
    TxnAmount: '1',
    GstCarge: '100.00',
    DebitAmount: '4.00',
    UTRNo: '607913015472',
    RefNo: '1773994762',
    userId: '11533',
    userName: 'Rajan',
    date: '19 Dec 2026, 05:00 PM',
    status: 'SUCCESS',
  },
  {
    id: '3',
    AccountNo: '002390200010924',
    IFSC: 'YESB0000001',
    referenceId: '1773994762',
    customerMob: '7355043143',
    TxnType: 'Account Verification',
    TxnAmount: '1',
    GstCarge: '100.00',
    DebitAmount: '4.00',
    UTRNo: '607913015472',
    RefNo: '1773994762',
    userId: '11533',
    userName: 'Rajan',
    date: '19 Dec 2026, 05:00 PM',
    status: 'SUCCESS',
  },
  {
    id: '4',
    AccountNo: '002390200010924',
    IFSC: 'YESB0000001',
    referenceId: '1773994762',
    customerMob: '7355043143',
    TxnType: 'Account Verification',
    TxnAmount: '1',
    GstCarge: '100.00',
    DebitAmount: '4.00',
    UTRNo: '607913015472',
    RefNo: '1773994762',
    userId: '11533',
    userName: 'Rajan',
    date: '19 Dec 2026, 05:00 PM',
    status: 'FAILED',
  },
];

const DMTServiceHistoryScreen = ({ navigation }) => {
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
          <Text style={styles.transactionType}>{item.TxnType}</Text>

          <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {item.status}
            </Text>
          </View>
        </View>

        {/* Amount (IMPORTANT) */}
        <Text style={styles.amount}>₹ {item.DebitAmount}</Text>

        <View style={styles.divider} />

        {/* Account */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Account</Text>
          <Text style={styles.value}>********{item.AccountNo.slice(-4)}</Text>
        </View>

        {/* IFSC */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>IFSC</Text>
          <Text style={styles.value}>{item.IFSC}</Text>
        </View>

        {/* UTR */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>UTR No</Text>
          <Text style={styles.value}>{item.UTRNo}</Text>
        </View>

        {/* Reference */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Reference ID</Text>
          <Text style={styles.value}>{item.RefNo}</Text>
        </View>

        {/* Mobile */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Customer Mobile</Text>
          <Text style={styles.value}>{item.customerMob}</Text>
        </View>

        {/* User */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>User</Text>
          <Text style={styles.value}>
            {item.userName} ({item.userId})
          </Text>
        </View>

        {/* Footer */}
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

export default DMTServiceHistoryScreen;
