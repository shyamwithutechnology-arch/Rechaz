import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { AppHeader, Loader, ScreenLayout } from '../../component';
import { GET, POST_FORM } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import { showToast } from '../../utils/toast';

const BankListScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [bankList, setBankList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('bankListww', bankList);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case '1':
        return {
          bg: '#E6F9F1',
          color: '#12B76A',
        };
      case '0':
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

  // <Text style={styles.subText}>ee</Text>
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>{item?.bank_name || '-'}</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.bottomRow}>
          <Text style={styles.date}>Account No.</Text>
          <Text style={styles.date}>{item?.acc_no || '-'}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.date}>IFSC </Text>

          <Text style={styles.date}>{item?.ifsc_code || '-'}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.date}>Branch </Text>

          <Text style={styles.date}>{item?.branch_add || '-'}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.date}>Account Holder Name </Text>

          <Text style={styles.date}>{item?.holder_name || '-'} </Text>
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

  const handleBankList = async () => {
    try {
      setLoading(true);
      const res = await GET(ApiEndPoint.bankList);
      if (res?.status === '200') {
        setBankList(res?.data);
      } else {
        showToast('error', 'Error', res?.message || 'Bank faild');
      }
    } catch (error) {
      if (error.offline) {
        return;
      }
      showToast('error', 'Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleBankList();
  }, []);

  return (
    <ScreenLayout
      header={<AppHeader title="Bank " onPress={handleBackPress} />}
    >
      <Loader visible={loading} />

      <FlatList
        data={bankList}
        keyExtractor={item => item.RecId}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={styles.contentContainer}
      />
    </ScreenLayout>
  );
};

export default BankListScreen;
