import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { AppHeader, Loader, ScreenLayout } from '../../component';
import { Icons } from '../../assets/icons';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { showToast } from '../../utils/toast';
import ImageSlider from '../../component/slider/ImageSlider';
import { GET } from '../../api/request';
import { ApiEndPoint } from '../../api/endPoints';
import TextTicker from 'react-native-text-ticker';
import { Error } from '../../utils/errorHandle';

const ServiceScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const backPressCount = useRef(0);
  const [slider, setSlider] = useState({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');

  const rechargeServices = [
    {
      id: 1,
      service: 'Mobile Recharge',
      image: Icons.mobileRechargeIcon,
      routes: 'MobileRecharge',
    },
    // {
    //   id: 2,
    //   service: 'DTH Recharge',
    //   image: Icons.dthRechargeIcon,
    //   routes: 'DTHRecharge',
    // },
    // {
    //   id: 3,
    //   service: 'Fastag',
    //   image: Icons.fastTagIcon,
    //   routes: 'Fastag',
    // },
  ];

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  const renderServiceItem = ({ item }: any) => {
    return (
      <Pressable
        style={styles.serviceWrapper}
        onPress={() =>
          item?.routes === 'Fastag'
            ? showToast('success', 'Success', 'Comming soon')
            : navigation.navigate('ServiceStack', {
                screen: item?.routes,
              })
        }
      >
        <Image
          source={item?.image}
          style={styles.serviceIcon}
          resizeMode="contain"
        />
        <Text style={styles.serviceText}>{item?.service}</Text>
      </Pressable>
    );
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const SectionHeader = ({
    title,
    onPress,
  }: {
    title: string;
    onPress?: () => void;
  }) => (
    <View style={styles.myBookingBox}>
      <Text style={styles.myBookingText}>{title}</Text>
      {
        // <Pressable onPress={() => navigation.navigate("PaymentSuccess")}>
        //   <Text style={styles.seeAllText}>See All</Text>
        // </Pressable>
      }
    </View>
  );

  const fetchSlider = async () => {
    try {
      setLoading(true);

      const res = await GET(ApiEndPoint.slider);

      if (res.status === 200) {
        setSlider(res);
      } else {
        Error(res?.message);
      }
    } catch (err) {
      Error(error?.message);

      if (err.offline) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchNotifation = async () => {
    try {
      setLoading(true);
      const response = await GET(ApiEndPoint.notification);
      if (response?.status === 200) {
        setNotification(response?.message);
      } else {
        Error(response?.message);
        setNotification('');
      }
    } catch (error) {
      if (error.offline) {
        return;
      }
      Error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (backPressCount.current === 0) {
          backPressCount.current = 1;
          ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
          setTimeout(() => {
            backPressCount.current = 0;
          }, 2000);

          return true;
        }

        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  useEffect(() => {
    const getId = async () => {
      await fetchSlider();
      await fetchNotifation();
    };
    getId();
  }, []);

  return (
    <ScreenLayout paddingHorizontalStyle={0}>
      <Loader visible={loading} />

      {/* TOP HEADER */}
      <View style={styles.notificationAndUserBox}>
        <View style={styles.headerRow}>
          <Pressable onPress={handleOpenDrawer}>
            <Image
              source={Icons.drawerIcon}
              style={styles.notificationIcon}
              resizeMode="contain"
            />
          </Pressable>

          <Text style={styles.servicesText}>Services</Text>
        </View>

        {/* <View style={styles.headerRow}>
          <Pressable
            style={[
              styles.notificationBox,
              {
                marginRight: theme.tokens.spacing.sm,
              },
            ]}
            onPress={() => showToast('info', 'Comming soon this feture ')}
          >
            <Image
              source={Icons.notification}
              style={styles.notificationIcon}
              resizeMode="contain"
            />

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {cartCount > 9 ? '9+' : cartCount}
              </Text>
            </View>
          </Pressable>
        </View> */}
      </View>

      <FlatList
        data={rechargeServices}
        renderItem={renderServiceItem}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: theme.tokens.spacing.xxl,
          paddingHorizontal: theme.tokens.spacing.md,
        }}
        ListHeaderComponent={
          <View style={styles.headerMainBox}>
            <View style={styles.topNotification}>
              <TextTicker
                style={styles.messText}
                duration={50000}
                loop
                bounce={false}
                repeatSpacer={500}
                marqueeDelay={1000}
              >
                {notification}
              </TextTicker>
            </View>

            <ImageSlider images={slider} />

            <SectionHeader
              title="Recharge Service"
              onPress={() =>
                navigation.navigate('AllServices', {
                  title: 'Recharge Services',
                  services: rechargeServices,
                })
              }
            />
          </View>
        }
      />
    </ScreenLayout>
  );
};

export default ServiceScreen;
