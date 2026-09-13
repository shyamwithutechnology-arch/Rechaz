import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import {
  AppHeader,
  AppInput,
  AppModal,
  CustomButton,
  CustomDropDown,
  Loader,
  ScreenLayout,
} from '../../component';
import { POST_FORM, RECHARGE_GET } from '../../api/request';
import Icon from 'react-native-vector-icons/Ionicons';
import { ApiEndPoint } from '../../api/endPoints';
import AppDatePicker from '../../component/appDatePicker/AppDatePicker';
import {
  formatDateDayMonthShortYear,
  formatDateDDMMYYYY,
} from '../../utils/date';
import { localStorage, storageKeys } from '../../storage/storage';
import { getNumericValue } from '../../utils/validation';
import { Error, Success } from '../../utils/errorHandle';

type InputState = {
  amount: string;
  receiptNo: string;
  remark: string;
};

const WalletScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [date, setDate] = useState(new Date());
  const [dateVisible, setDateVisible] = useState(false);
  const [wallet, setWallet] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState({
    amount: '',
    receiptNo: '',
    remark: '',
  });

  const [error, setError] = useState({
    amount: '',
    receiptNo: '',
    remark: '',
    paymentType: '',
  });

  const hanldeInputChange = (field: keyof InputState, value: string) => {
    let formattedValue = value;

    if (field === 'amount') {
      // Allow only numbers and one decimal point
      formattedValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }

    setInput(prev => ({
      ...prev,
      [field]: formattedValue,
    }));

    setError(prev => ({
      ...prev,
      [field]: '',
    }));
  };

  const handleDateClose = () => {
    setDateVisible(false);
  };

  const handleDateOpen = () => {
    setDateVisible(true);
  };

  const [transactionType, setTransactionType] = useState(null);

  const transactionData = [
    {
      label: 'Cash',
      value: 'Cash',
    },
    {
      label: 'Online',
      value: 'Online',
    },
    {
      label: 'UPI',
      value: 'UPI',
    },
    {
      label: 'Bank Transfer',
      value: 'Bank Transfer',
    },
    {
      label: 'Card',
      value: 'Card',
    },
    {
      label: 'Cheque',
      value: 'Cheque',
    },
  ];

  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleTransaction = val => {
    setTransactionType(val);

    setError(prev => ({
      ...prev,
      paymentType: '',
    }));
  };
  const handleBackPress = () => navigation.goBack();

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
          <Text style={styles.value}>{item.canumber}</Text>
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

  // const addPaymentRequest = async () => {
  //   try {
  //     setLoading(true);

  //     const res = await GET(ApiEndPoint.addPaymentRequest, {
  //       apiKey: apikey,
  //     });
  //     if (res.status === true) {
  //       setWalletHistory(res?.data);
  //     }
  //   } catch (error) {
  //     showToast('error', 'Error', 'Something went wrong');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
        Error(response?.message);

        setRechargeHistory([]);
      }
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      if (error.offline) {
        return;
      }
      Error(err?.message);
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

  const fetchUsebyid = async id => {
    try {
      setLoading(true);

      const res = await POST_FORM(ApiEndPoint.getusebyid, {
        user_id: id,
      });

      if (res.status === '200') {
        setWallet(res?.data);
      } else {
        Error(res?.message);
      }
    } catch (err) {
      if (err.offline) {
        return;
      }
      Error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    const validationErrors = {
      amount: '',
      receiptNo: '',
      remark: '',
      paymentType: '',
    };

    if (!input.amount?.trim()) {
      validationErrors.amount = 'Please enter amount';
    }

    if (!transactionType) {
      validationErrors.paymentType = 'Please select type';
    }
    if (!input?.receiptNo?.trim()) {
      validationErrors.receiptNo = 'Please enter receipt no';
    }

    setError(validationErrors);
    return Object.values(validationErrors).every(value => value === '');
  };

  const paymentRequest = async () => {
    if (!validate()) {
      return;
    }
    try {
      const params = {
        user_id: id,
        bank_id: '1',
        deposit_date: date ? formatDateDDMMYYYY(date) : '',
        payment_mode: transactionType,
        amount: input.amount,
        receipt_no: input?.receiptNo,
        remark: input?.remark,
      };

      setLoading(true);
      const res = await POST_FORM(ApiEndPoint.fundRequest, params);
      setLoading(true);
      if (res?.status === 200) {
        setInput({
          amount: '',
          receiptNo: '',
          remark: '',
        });

        Success(res?.message || 'Amount add successfully');

        setTransactionType(null);
        setModalVisible(false);
      } else {
        Error(err?.message);
      }
    } catch (err) {
      if (err?.offline) {
        return;
      }
      Error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userData);
      let formatedData = localData ? JSON.parse(localData) : null;
      await fetchUsebyid(formatedData?.email);
      setId(formatedData?.id);
    };
    getId();
  }, []);

  return (
    <ScreenLayout
      header={<AppHeader title="Wallet" onPress={handleBackPress} />}
    >
      <Loader visible={loading} />
      <FlatList
        data={rechargeHistory}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.historyContainer}
        ListHeaderComponent={
          <>
            <View style={styles.balanceCard}>
              <View style={styles.walletBoxRow}>
                <View>
                  <Text style={styles.balanceLabel}>Wallet</Text>
                  <Text style={styles.balanceAmount}>
                    ₹{wallet?.user_balance}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.primaryBtn}
                  onPress={handleModalOpen}
                >
                  <Text style={styles.btnText}>Add Money</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Recent Activity</Text>
          </>
        }
      />

      <AppModal
        visible={modalVisible}
        onClose={handleModalClose}
        scrollable={true}
      >
        <Pressable
          style={styles.closeButton}
          onPress={handleModalClose}
          hitSlop={10}
        >
          <Icon
            name="close"
            size={theme.moderateScale(24)}
            color={theme.tokens.colors.black}
          />
        </Pressable>

        <Text style={styles.amoutnText}>Amount</Text>
        <AppInput
          value={input.amount}
          handleChange={value => hanldeInputChange('amount', value)}
          keyboardType="decimal-pad"
          placeholderText="0.00"
        />
        {error?.amount && <Text style={styles.errorText}>{error?.amount}</Text>}

        <Text style={[styles.amoutnText, styles.transactionType]}>
          Transaction Type
        </Text>

        <CustomDropDown
          data={transactionData}
          value={transactionType}
          onChange={handleTransaction}
          placeholder="Select Type"
        />

        {error?.paymentType && (
          <Text style={styles.errorText}>{error?.paymentType}</Text>
        )}

        <Text style={[styles.amoutnText, styles.transactionType]}>
          Deposit Date
        </Text>
        <Pressable style={styles.inputBox} onPress={handleDateOpen}>
          <Text style={styles.dateText}>
            {date ? formatDateDDMMYYYY(date) : 'Select Date'}
          </Text>
        </Pressable>

        <Text style={[styles.amoutnText, styles.transactionType]}>
          Receipt No
        </Text>
        <AppInput
          value={input.receiptNo}
          handleChange={value =>
            hanldeInputChange('receiptNo', getNumericValue(value))
          }
          keyboardType="numeric"
        />
        {error?.receiptNo && (
          <Text style={styles.errorText}>{error?.receiptNo}</Text>
        )}

        <Text style={[styles.amoutnText, styles.transactionType]}>
          Remark (Optional)
        </Text>

        <AppInput
          value={input.remark}
          multiline={true}
          handleChange={value => hanldeInputChange('remark', value)}
        />

        {error?.remark && <Text style={styles.errorText}>{error?.remark}</Text>}

        <AppDatePicker
          value={date}
          onChange={setDate}
          visible={dateVisible}
          onClose={handleDateClose}
          minimumDate={new Date()}
        />

        <CustomButton
          title="Submit"
          style={styles.subBtn}
          onPress={paymentRequest}
        />
      </AppModal>
    </ScreenLayout>
  );
};

export default WalletScreen;
