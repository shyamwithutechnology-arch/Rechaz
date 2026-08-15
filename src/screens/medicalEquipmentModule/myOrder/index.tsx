import React from 'react';
import { View, FlatList } from 'react-native';
import { ScreenLayout, AppHeader } from '../../../component';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import OrderCard from './component/OrderCard/OrderCard';

const MyOrderScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const ORDER_DATA = [
    {
      id: '1',
      orderId: '#90897',
      date: 'October 19 2026',
      items: 10,
      amount: '₹1600.90',
      expanded: true,
      delivered: false,
      tracking: [
        {
          title: 'Order placed',
          date: 'Oct 19 2026',
          completed: true,
        },
        {
          title: 'Order confirmed',
          date: 'Oct 20 2026',
          completed: true,
        },
        {
          title: 'Order shipped',
          date: 'Oct 20 2026',
          completed: true,
        },
        {
          title: 'Out for delivery',
          date: 'pending',
          completed: false,
        },
        {
          title: 'Order delivered',
          date: 'pending',
          completed: false,
        },
      ],
    },
    {
      id: '2',
      orderId: '#90897',
      date: 'October 19 2025',
      items: 10,
      amount: '₹1600.90',
      expanded: false,
      delivered: false,
    },
    {
      id: '3',
      orderId: '#90897',
      date: 'October 19 2025',
      items: 10,
      amount: '₹1600.90',
      expanded: false,
      delivered: true,
      deliveredDate: 'Aug 29 2025',
    },
    {
      id: '4',
      orderId: '#90897',
      date: 'October 19 2025',
      items: 10,
      amount: '₹1600.90',
      expanded: false,
      delivered: true,
      deliveredDate: 'Aug 29 2025',
    },
  ];

  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      innerContainer={styles.container}
      header={
        <AppHeader
          title="My Orders"
          onPress={() => navigation.goBack()}
          cartCount={0}
        />
      }
    >
      <View style={styles.homeContainer}>
        <FlatList
          data={ORDER_DATA}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => <OrderCard item={item} />}
        />
      </View>
    </ScreenLayout>
  );
};

export default MyOrderScreen;
