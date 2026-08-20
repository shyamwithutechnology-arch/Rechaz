import React, { useEffect, useRef } from 'react';
import {
  Animated,
  BackHandler,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import { ScreenLayout, AppHeader, CustomButton } from '../../component';
import { formatDateWithTime } from '../../utils/date';
import { useAppTheme } from '../../hooks/useAppTheme';
import LinearGradient from 'react-native-linear-gradient';
import { Icons } from '../../assets/icons';
import { createStyles } from './styles';
import { useRoute } from '@react-navigation/native';

type Props = {
  navigation: any;
};

const PaymentSuccessScreen = ({ navigation }: Props) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const route = useRoute();
  const { paymentStatus, amount } = route.params;
  // let paymentStatus = 1;
  const today = new Date();

  const date = today.toLocaleDateString('en-IN');

  const time = today.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const successScale = useRef(new Animated.Value(1)).current;
  const successOpacity = useRef(new Animated.Value(0)).current;

  const handleReceipt = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Service');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(successScale, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }),

      Animated.timing(successOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    const startSuccessAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.spring(successScale, {
            toValue: 1.15,
            friction: 3,
            tension: 80,
            useNativeDriver: true,
          }),

          Animated.spring(successScale, {
            toValue: 1,
            friction: 3,
            tension: 80,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    startSuccessAnimation();
    return () => {
      successScale.stopAnimation();
    };
  }, [successScale]);

  return (
    <ScreenLayout paddingHorizontalStyle={0} innerContainer={styles.container}>
      <LinearGradient
        colors={['#fff', '#D6EAE8', '#D6EAE8', '#D6EAE8', '#D6EAE8']}
        style={styles.homeContainer}
      >
        <View style={styles.ticketCard}>
          <Animated.View
            style={{
              transform: [
                {
                  scale: successScale,
                },
              ],
            }}
          >
            <View
              style={[
                styles.rightIconBox,
                {
                  backgroundColor:
                    paymentStatus === 1 ? styles.successBg : 'red',
                },
              ]}
            >
              <Image
                source={
                  paymentStatus === 1 ? Icons.checkIcon : Icons.cancelIcon
                }
                style={[
                  paymentStatus === 1 ? styles.success : styles.faildIcon,
                ]}
                ressizeMode="contain"
                tintColor={
                  paymentStatus === 1 ? '#fff' : theme.tokens.colors.white
                }
              />
            </View>
          </Animated.View>

          <Text style={styles.paymentSuccessText}>
            {paymentStatus === 1 ? 'Payment Success!' : 'Payment Failed'}
          </Text>
          <Text style={styles.yourPayment}>
            Your payment has been{' '}
            {paymentStatus === 1 ? 'successfully done' : 'failed'}.
          </Text>
          <View style={styles.leftCurve} />
          <View style={styles.rightCurve} />

          <View style={styles.dexLine} />

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>OrderId</Text>
            <Text style={styles.orderCareText}>#orderRecharge4578</Text>
          </View>

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>Reference ID</Text>
            <Text style={styles.orderCareText}>#refIdz8878</Text>
          </View>

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>Transaction ID</Text>
            <Text style={styles.orderCareText}>#trnsz8878</Text>
          </View>

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>Date</Text>
            <Text style={styles.orderCareText}>{date}</Text>
          </View>

          <View style={styles.orderBox}>
            <Text style={styles.orderIdText}>Time</Text>
            <Text style={styles.orderCareText}>{time}</Text>
          </View>
          <View style={[styles.orderBox]}>
            <Text style={styles.orderIdText}>Payment Method</Text>
            <Text style={styles.orderCareText}>Wallet</Text>
          </View>
          <View style={[styles.orderBox, { marginBottom: 0 }]}>
            <Text style={styles.orderIdText}>Status</Text>
            <Text
              style={[
                styles.orderCareText,
                paymentStatus === 1 ? styles.successText : styles.faildText,
              ]}
            >
              {paymentStatus === 1 ? 'Success' : 'Faild'}
            </Text>
          </View>

          <View style={styles.dexLine} />

          <View
            style={[styles.orderBox, { marginBottom: theme.tokens.spacing.sm }]}
          >
            <Text style={styles.orderIdText}>Amount</Text>
            <Text style={styles.orderCareText}>₹ {amount ?? 0}/-</Text>
          </View>
        </View>
      </LinearGradient>
    </ScreenLayout>
  );
};

export default PaymentSuccessScreen;

//  <CustomButton
//             title="Home"
//             style={styles.btnBox}
//             onPress={handleReceipt}
//           />
