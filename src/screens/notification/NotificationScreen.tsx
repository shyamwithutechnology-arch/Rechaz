import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AppHeader, Loader, ScreenLayout } from '../../component';
import { showToast } from '../../utils/toast';
import { formatDateDayMonthShortYear } from '../../utils/date';
import { useAppTheme } from '../../hooks/useAppTheme';
import { GET, POST_FORM } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import { localStorage, storageKeys } from '../../storage/storage';
import { createStyles } from './styles';

const NotificationScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('rechargeHistory', notification);

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
            {/* <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {item.status}
            </Text> */}
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

  const fetchNotifation = async () => {
    try {
      setLoading(true);
      const response = await GET(ApiEndPoint.notification);
      // console.log('Recharge Report =>ssss', response);
      if (response?.status === 200) {
        setNotification(response?.data);
      } else {
        showToast('error', 'Error', response?.message);
        setNotification([]);
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
        data={notification}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={styles.contentContainer}
      />
    </ScreenLayout>
  );
};

export default NotificationScreen;
