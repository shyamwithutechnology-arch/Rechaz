import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';
import { createStyles } from './styles';
import { AppHeader, ScreenLayout } from '../../component';
import { verticalScale } from '../../utils/responsiveSize';

const HISTORY_DATA = [
  {
    id: '1',
    title: 'Mobile Recharge',
    number: '9999999999',
    amount: 199,
    status: 'SUCCESS',
    date: '06 May 2026',
  },
  {
    id: '2',
    title: 'DTH Recharge',
    number: '1234567890',
    amount: 399,
    status: 'PENDING',
    date: '05 May 2026',
  },
  {
    id: '3',
    title: 'Electricity Bill',
    number: 'RR-45821',
    amount: 899,
    status: 'FAILED',
    date: '04 May 2026',
  },
];

const HistoryScreen = ({ navigation }) => {
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

  const renderItem = ({ item }: any) => {
    const statusStyle = getStatusStyle(item.status);

    return (
      <View
        style={[styles.card, { borderColor: theme.tokens.colors.lightPrimary }]}
      >
        {/* Top Row */}
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={[styles.statusBox, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {item.status}
            </Text>
          </View>
        </View>

        {/* Middle */}
        <Text style={styles.subText}>{item.number}</Text>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <Text style={styles.date}>{item.date}</Text>

          <Text style={styles.amount}>₹{item.amount}</Text>
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
      header={<AppHeader title=" History" onPress={handleBackPress} />}
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

export default HistoryScreen;
