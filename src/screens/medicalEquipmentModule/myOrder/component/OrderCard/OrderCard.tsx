import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TrackingRow from '../TrackingRow/TrackingRow';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { Icons } from '../../../../../assets/icons';
import { createStyles } from './styles';
import { fonts } from '../../../../../theme';

const OrderCard = ({ item }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [expand, setExpand] = useState(item.expanded);

  return (
    <View style={styles.orderMainBox}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.orderRow}>
        <View style={styles.orderCricle}>
          <Image
            source={Icons.orderIcon}
            style={styles.orderIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentMainBox}>
          <Text style={styles.orderId}>Order {item.orderId}</Text>

          <Text style={styles.placeOrderText}>Placed on {item.date}</Text>

          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              Items:{' '}
              <Text style={[styles.itemText, styles.itemSemiBold]}>
                {item.items}
              </Text>
            </Text>
            <Text style={(styles.itemText, styles.itemLeft)}>
              Items:{' '}
              <Text style={[styles.itemText, styles.itemSemiBold]}>
                {item.amount}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.upDownBox}>
          <Image
            source={Icons.upDownIcon}
            style={[
              styles.downUpStyle,
              { transform: [{ rotate: expand ? '180deg' : '0deg' }] },
            ]}
            resizeMode="contain"
          />
        </View>
      </Pressable>

      {expand && item.tracking && (
        <View style={styles.orderTrakingBox}>
          {item.tracking.map((track: any, index: number) => (
            <TrackingRow
              key={index}
              item={track}
              index={index}
              last={index === item.tracking.length - 1}
            />
          ))}
        </View>
      )}

      {!expand && item.delivered && (
        <View style={styles.orderDeliveredBox}>
          <View style={styles.orderDeliveredRow}>
            <View style={styles.deliveredCircle} />

            <Text style={styles.orderDeliveredText}>Order Delivered</Text>
          </View>

          <Text style={styles.dateText}>{item.deliveredDate}</Text>
        </View>
      )}
    </View>
  );
};

export default React.memo(OrderCard);
