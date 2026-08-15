import React, { useEffect } from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import { ScreenLayout, AppHeader, CustomButton } from '../../component';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Icons } from '../../assets/icons';

type Props = {
  navigation: any;
};

const SuccessScreen = ({ navigation }: Props) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Home');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ScreenLayout paddingHorizontalStyle={0} innerContainer={styles.container}>
      <LinearGradient
        colors={['#fff', '#D6EAE8', '#D6EAE8', '#D6EAE8', '#D6EAE8']}
        style={styles.homeContainer}
      >
        <View style={styles.ticketCard}>
          <View style={styles.rightIconBox}>
            <Image
              source={Icons.successIcon}
              style={styles.success}
              ressizeMode="contain"
            />
          </View>

          <Text style={styles.paymentSuccessText}>Payment Success!</Text>
          <Text style={styles.yourPayment}>
            Your payment has been successfully done.
          </Text>

          <View style={styles.leftCurve} />
          <View style={styles.rightCurve} />

          <View style={styles.dexLine} />

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>OrderId</Text>
            <Text style={styles.orderCareText}>#ordercare4578</Text>
          </View>

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>OrderId</Text>
            <Text style={styles.orderCareText}>#ordercare4578</Text>
          </View>

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>Date</Text>
            <Text style={styles.orderCareText}>April 22, 2026</Text>
          </View>

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>Time</Text>
            <Text style={styles.orderCareText}>07:80 AM</Text>
          </View>
          <View style={[styles.orderBox, { marginBottom: 0 }]}>
            <Text style={styles.orderIdText}>Payment Method</Text>
            <Text style={styles.orderCareText}>Credit Card</Text>
          </View>

          <View style={styles.dexLine} />

          <View
            style={[styles.orderBox, { marginBottom: theme.tokens.spacing.sm }]}
          >
            <Text style={styles.orderIdText}>Amount</Text>
            <Text style={styles.orderCareText}>₹ 840/-</Text>
          </View>

          <View style={styles.dexLine1} />

          <Pressable style={styles.getPdfBtn}>
            <Image
              source={Icons.downLoadIcon}
              style={styles.downLoadIcon}
              resizeMode="contain"
            />
            <Text style={styles.getPdfText}> {'  '}Get PDF Receipt</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </ScreenLayout>
  );
};

export default SuccessScreen;
