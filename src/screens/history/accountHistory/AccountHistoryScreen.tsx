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

const AccountHistoryScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<null | string>('');
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
    return (
      // <View style={styles.card}>
      //   <View style={styles.headerRow}>
      //     <View>
      //       {item?.operator && (
      //         <Text style={styles.title}>Mobile Recharge</Text>
      //       )}
      //       <Text style={styles.operator}>{item.operator}</Text>
      //     </View>

      //     <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
      //       <Text style={[styles.statusText, { color: statusStyle.color }]}>
      //         {item.status}
      //       </Text>
      //     </View>
      //   </View>

      //   <View style={styles.infoRow}>
      //     <Text style={styles.label}>Mobile No.</Text>
      //     <Text style={styles.value}>{item.mobile}</Text>
      //   </View>

      //   <View style={styles.infoRow}>
      //     <Text style={styles.label}>Ref ID</Text>
      //     <Text style={styles.value}>{item.ref_id}</Text>
      //   </View>

      //   <View style={styles.infoRow}>
      //     <Text style={styles.label}>Amount</Text>
      //     <Text style={styles.amount}>₹{Number(item.amount).toFixed(0)}</Text>
      //   </View>

      //   <View style={styles.footer}>
      //     <Text style={styles.date}>
      //       {formatDateDayMonthShortYear(item.date)}
      //     </Text>
      //   </View>
      // </View>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item?.sname || 'Mobile Recharge'}</Text>

            {/* <Text style={styles.transactionId}>
              Transaction ID: {item?.DT_RowId || item?.id || '-'}
            </Text> */}
          </View>

          <View
            style={[
              styles.typeBox,
              item?.type === 'Debit' ? styles.debitBox : styles.creditBox,
            ]}
          >
            <Text
              style={[
                styles.typeText,
                item?.type === 'Debit' ? styles.debitText : styles.creditText,
              ]}
            >
              {item?.type || '-'}
            </Text>
          </View>
        </View>

        {/* Mobile Number */}
        {item?.rechargemobile && (
          <View style={styles.infoRow}>
            <Text style={styles.label}>Mobile No.</Text>

            <Text style={styles.value}>
              {item?.rechargemobile?.trim() || '-'}
            </Text>
          </View>
        )}

        {/* Remark */}
        <View style={styles.amountRow}>
          <Text style={styles.label}>Description</Text>

          <Text style={styles.remark} numberOfLines={2}>
            {item?.remark?.trim() || '-'}
          </Text>
        </View>

        {/* Amount */}
        <View style={styles.amountRow}>
          <Text style={styles.amountLabel}>Amount</Text>

          <Text
            style={[
              styles.amount,
              // item?.type === 'Debit' ? styles.debitAmount : ,
              // styles.creditAmount
            ]}
          >
            {item?.type === 'Debit' ? '- ' : '+ '}₹
            {Number(item?.amount || 0).toFixed(2)}
          </Text>
        </View>

        {/* Balance */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceItem}>
            <Text style={styles.label}>Before Balance</Text>

            <Text style={styles.balanceValue}>
              ₹{Number(item?.before_balance || 0).toFixed(2)}
            </Text>
          </View>

          {/* <View style={styles.balanceDivider} /> */}

          <View style={styles.balanceItem}>
            <Text style={styles.label}>Updated Balance</Text>

            <Text style={styles.balanceValue}>
              ₹{Number(item?.updated_balance || 0).toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.date}>
            {formatDateDayMonthShortYear(item?.date)}
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

  const handleHistory = async (id, token) => {
    const params = {
      userId: id,
      // fromDate: '2026-08-20',
      // toDate: '2026-08-29',
      tokenid: token,
      device_type: 'App',
      user_type: '6',
    };
    console.log('account ', params);

    try {
      setLoading(true);
      const response = await POST_FORM(ApiEndPoint.accountHistory, params);
      console.log('account history =>ssss', response);
      if (response?.status === 1) {
        setRechargeHistory(response?.data);
      } else {
        showToast('error', 'Error', response?.message);
        setRechargeHistory([]);
      }
    } catch (error) {
      console.log('eesssssss', error);

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
      let User_token = await localStorage.getItem(storageKeys.userToken);
      setToken(User_token);

      if (formatedData?.id && User_token) {
        await handleHistory(formatedData?.id, User_token);
      }
    };
    getId();
  }, []);

  //  useEffect(() => {
  //     const getId = async () => {
  //       let localData = await localStorage.getItem(storageKeys.userData);
  //       let formatedData = localData ? JSON.parse(localData) : null;
  //       setToken(User_token);
  //       if (formatedData?.id) {
  //         setUserId(formatedData?.id);
  //       }
  //       console.log('formatedData', formatedData);
  //     };
  //     getId();
  //   }, []);

  return (
    <ScreenLayout
      header={<AppHeader title="Account History" onPress={handleBackPress} />}
      paddingHorizontalStyle={0}
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

export default AccountHistoryScreen;
