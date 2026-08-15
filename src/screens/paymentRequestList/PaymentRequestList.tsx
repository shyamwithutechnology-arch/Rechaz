import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScreenLayout, AppHeader, Loader } from '../../component';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { RECHARGE_GET } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import { showToast } from '../../utils/toast';
import { apikey } from '../../api/axios';
import { formatDateDDMMYYYY } from '../../utils/date';
import { fonts } from '../../theme';

const paymentData = [
  {
    id: '1',
    utr: 'UTR12345678',
    txnType: 'Recharge',
    amount: '500',
    date: '31 May 2026',
    time: '07:20 PM',
    status: 'Pending',
  },
  {
    id: '2',
    utr: 'UTR22334455',
    txnType: 'DTM',
    amount: '1000',
    date: '30 May 2026',
    time: '04:10 PM',
    status: 'Success',
  },
];

const PaymentRequestList = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [loading, setLoading] = useState(false);
  const [PaymentRequestData, setPaymentRequestData] = useState([]);

  const formatDate = date => {
    if (!date) return '';

    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  const formatTime = date => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // false = 24-hour format
    };

    return new Date(date).toLocaleTimeString('en-GB', options);
  };
  const fetchWalletBalance = async () => {
    try {
      setLoading(true);

      const res = await RECHARGE_GET(
        'https://apidev.excisofttech.com/api/v1/addPaymentRequestList.php?apiKey=AFOSeMg5M2xBqavvQBEPDNgNOibj0mLk&txnType=mobile_recharge_wallet',
      );
      // const res = await RECHARGE_GET(ApiEndPoint.fetchPaymentRequest, {
      //   apiKey: apikey,
      //   txnType: 'mobile_recharge_wallet',
      // });
      if (res.success === true) {
        setPaymentRequestData(res?.data);
      }
    } catch (error) {
      showToast('error', 'Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.ticketCard}>
      <View style={styles.rowBetween}>
        <Text style={styles.titleText}>{item?.TxnType}</Text>

        <Text
          style={[
            styles.statusText,
            item.status === 'Success'
              ? styles.successText
              : item.status === 'Pending'
              ? styles.pendingText
              : styles.faildText,
          ]}
        >
          {item.status}
        </Text>
      </View>

      <View style={styles.line} />

      <View style={styles.infoRow}>
        <Text style={styles.label}>UTR No</Text>
        <Text style={styles.value}>{item.Ref_TxnId}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Amount</Text>
        <Text style={styles.amount}>₹ {item?.Amount}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{formatDate(item?.RequestDate)}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{formatTime(item?.RequestDate)}</Text>
      </View>
    </View>
  );

  return (
    <ScreenLayout
      header={
        <AppHeader
          title="Payment Requests "
          onPress={() => navigation.goBack()}
        />
      }
    >
      <Loader visible={loading} />
      <FlatList
        data={PaymentRequestData ?? []}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.paymentRequesContainer}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: theme.tokens.fontSize.sm,
                  color: theme.tokens.colors.black,
                  fontFamily: fonts.UrbanistMedium,
                }}
              >
                No data found
              </Text>
            </View>
          );
        }}
      />
    </ScreenLayout>
  );
};

export default PaymentRequestList;
