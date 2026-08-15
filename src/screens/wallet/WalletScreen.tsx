import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
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
import { ApiEndPoint } from '../../api/endPoints';
import { apikey } from '../../api/axios';
import { showToast } from '../../utils/toast';
import { Icons } from '../../assets/icons';
import AppDatePicker from '../../component/appDatePicker/AppDatePicker';
import { formatDateDDMMYYYY } from '../../utils/date';
import { localStorage, storageKeys } from '../../storage/storage';

type InputState = {
  amount: string;
  receiptNo: string;
  remark: string;
};

const WalletScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateVisible, setDateVisible] = useState(false);
  const [wallet, setWallet] = useState({});

  const [walletHistory, setWalletHistory] = useState([]);
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

  // const hanldeInputChange = (field: keyof typeof input, value: string) => {
  //   let amount = field === 'amount' ? value.replace(/[^0-9]/g, '') : value;
  //   setInput(prev => ({
  //     ...prev,
  //     [field]: amount,
  //   }));
  // };

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
  // const handleAmount = val => {
  //   setAmount(val);

  //   setError(prev => ({
  //     ...prev,
  //     amount: val?.trim() ? '' : 'Please enter amount',
  //   }));
  // };

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

  const formatDateTime = dateString => {
    const date = new Date(dateString.replace(' ', 'T'));

    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return `${formattedDate} | ${formattedTime}`;
  };

  const handleOperator = operator => {
    if (operator === 'VODAFONE') {
      return Icons.viLogoIcon;
    } else if (operator === 'AIRTEL') {
      return Icons.airtelIcon;
    } else if (operator === 'BSNL') {
      return Icons.bsnlLogo;
    } else if (operator === 'JIO') {
      return Icons.bsnlLogo;
    }
  };

  const renderTxn = ({ item }: any) => {
    return (
      <View style={styles.txnCard}>
        <View style={styles.transHistray}>
          <View style={styles.logoBranch}>
            <Image
              source={handleOperator(item?.operator_id)}
              style={styles.aritelLogo}
            />
          </View>
          <View style={styles.centerContent}>
            <Text style={styles.mobileRechateText}>{item?.mobile_no}</Text>
            <Text style={styles.deductText}>{item?.deduct_reason}</Text>
            <Text style={[styles.txnTitle, styles.txntText]}>
              Txn ID : {item?.transaction_id}
            </Text>
            <Text style={styles.txnTitle}>
              {formatDateTime(item?.transaction_date)}
            </Text>
          </View>
        </View>

        {
          // <View style={styles.transHistray}>
          //   <Text style={styles.txnTitle}>Opening Balance</Text>
          //   <Text style={[styles.txnAmount, styles.beforeBalenceText]}>
          //     ₹{item?.before_balance}
          //   </Text>
          // </View>
          // <View style={styles.transHistray}>
          //   <Text style={styles.txnTitle}>Current Balance</Text>
          //   <Text style={[styles.txnAmount, styles.beforeBalenceText]}>
          //     ₹{item?.updated_balance}
          //   </Text>
          // </View>
          // <View style={styles.transHistray}>
          //   <Text style={styles.txnTitle}>Status</Text>
          //   <Text
          //     style={[
          //       styles.txnAmount,
          //       item.status === '1' ? styles.successText : styles.faildText,
          //     ]}
          //   >
          //     {item?.status === '1' ? 'Success' : 'Faild'}
          //   </Text>
          // </View>
        }
        <View>
          <Text style={[styles.txnAmount, styles.amountTextColor]}>
            {item?.deduct_reason === 'Mobile Recharge'
              ? `-₹${item?.deduct_amount}`
              : `+₹${item?.deduct_amount}`}
          </Text>
          {
            // {item?.deduct_reason === 'Mobile Recharge' && (
          }
          <Text
            style={[
              styles.txnAmount,
              item.status === '1' ? styles.successText : styles.faildText,
            ]}
          >
            {item?.status === '1' ? 'Success' : 'Faild'}
          </Text>
          {
            // )}/
          }
          <Text style={[styles.deductText, styles.deductTextSpace]}>
            Balance : {item?.updated_balance}
          </Text>

          <Pressable
            style={styles.repeteBox}
            onPress={() => {
              navigation.navigate('ServiceStack', {
                screen: 'MobileRecharge',
                params: {
                  RechargeAmount: item?.deduct_amount,
                  MobNumber: item?.mobile_no,
                },
              });
            }}
          >
            <Image
              source={Icons.repeatIcon}
              style={styles.repeateIcon}
              resizeMode="contain"
            />
            <Text style={styles.repeatText}> Repeat</Text>
          </Pressable>
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

  const fetchWalletHistory = async () => {
    try {
      setLoading(true);
      const res = await RECHARGE_GET(ApiEndPoint.apiWalletHistory, {
        apiKey: apikey,
      });

      if (res.status === true) {
        setWalletHistory(res?.data);
      }
    } catch (err) {
      if (err.offline) {
        return;
      }
      showToast('error', 'Error', err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsebyid = async id => {
    try {
      setLoading(true);

      const res = await POST_FORM(ApiEndPoint.getusebyid, {
        user_id: id,
      });

      if (res.status === '200') {
        setWallet(res?.data);
      } else {
        showToast('error', 'Error', res?.message);
      }
    } catch (err) {
      showToast('error', 'Error', 'Something went wrong');
      if (err.offline) {
        return;
      }
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

    // if (!input?.remark?.trim()) {
    //   validationErrors.remark = 'Please enter remark';
    // }

    setError(validationErrors);
    return Object.values(validationErrors).every(value => value === '');
  };

  const paymentRequest = async () => {
    if (!validate()) {
      return;
    }
    try {
      const params = {
        user_id: '11556',
        bank_id: '1',
        deposit_date: date ? formatDateDDMMYYYY(date) : '',
        payment_mode: transactionType,
        amount: input.amount,
        receipt_no: input?.receiptNo,
        remark: input?.remark,
      };
      setLoading(true);
      const res = await POST_FORM(ApiEndPoint.fundRequest, params);
      console.log('ressssss', res);

      setLoading(true);
      if (res?.status === 200) {
        setInput({
          amount: '',
          receiptNo: '',
          remark: '',
        });
        showToast(
          'success',
          'Success',
          res?.message || 'Amount add successfully',
        );

        setTransactionType(null);
        setModalVisible(false);
      } else {
        showToast('error', 'Error', res?.message || 'Something went wrong');
      }
    } catch (err) {
      if (err?.offline) {
        return;
      }
      showToast('error', 'Error', err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getWallet = async () => {
      await fetchWalletHistory();
    };
    getWallet();
  }, []);

  useEffect(() => {
    const getId = async () => {
      let localData = await localStorage.getItem(storageKeys.userData);
      let formatedData = localData ? JSON.parse(localData) : null;
      await fetchUsebyid(formatedData?.email);
    };
    getId();
  }, []);

  return (
    <ScreenLayout
      header={<AppHeader title="My Wallet" onPress={handleBackPress} />}
    >
      <Loader visible={loading} />
      <FlatList
        data={walletHistory}
        keyExtractor={i => i.id}
        renderItem={renderTxn}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.historyContainer}
        ListHeaderComponent={
          <>
            {/* ================= BALANCE CARD ================= */}
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

            {/* ================= RECENT ================= */}
            <Text style={styles.sectionTitle}>Recent Activity</Text>
          </>
        }
      />

      <AppModal visible={modalVisible} onClose={handleModalClose} scrollable>
        <Text style={styles.amoutnText}>Amount</Text>
        <AppInput
          value={input.amount}
          handleChange={value => hanldeInputChange('amount', value)}
          keyboardType="decimal-pad" // Shows numeric keyboard with decimal on iOS/Android
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
          handleChange={value => hanldeInputChange('receiptNo', value)}
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
