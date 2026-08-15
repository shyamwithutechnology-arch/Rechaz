import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import IconHistory from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { fonts } from '../../theme';

// const TAB_HEIGHT = 76;

const CustomTabBar = ({ state, navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const { width } = useWindowDimensions();
  const TAB_HEIGHT = theme.verticalScale(76);

  const centerX = width / 2;
  const curveWidth = theme.scale(53);
  const curveDepth = theme.verticalScale(46);

  const visibleRoutes = state.routes.filter((r: any) => r.name !== 'HomeStack');

  const leftRoutes = visibleRoutes.slice(0, 2); // Services, Bookings
  const rightRoutes = visibleRoutes.slice(2); // Search, Profile

  // Active route
  const currentRoute = state.routes[state.index].name;
  const isHomeFocused = currentRoute === 'HomeStack';

  return (
    <View style={styles.wrapper}>
      {/* CURVED BACKGROUND */}
      <Svg
        width={width}
        height={TAB_HEIGHT}
        viewBox={`0 0 ${width} ${TAB_HEIGHT}`}
        style={styles.svg}
      >
        <Path
          d={`
      M0 0
      H${centerX - curveWidth}

      C
        ${centerX - curveWidth * 0.6} 0,
        ${centerX - curveWidth * 0.8} ${curveDepth},
        ${centerX} ${curveDepth}

      C
        ${centerX + curveWidth * 0.9} ${curveDepth},
        ${centerX + curveWidth * 0.6} 0,
        ${centerX + curveWidth} 0

      H${width}
      V${TAB_HEIGHT}
      H0
      Z
    `}
          fill="#fff"
        />
      </Svg>

      {/* CENTER HOME BUTTON */}
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeStack')}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[theme.tokens.colors.primaryGradientStart, '#0E8D39']}
          style={styles.centerButton}
        >
          <Icon
            name={isHomeFocused ? 'home' : 'home-outline'}
            size={theme.moderateScale(26)}
            color="#fff"
          />
        </LinearGradient>
      </TouchableOpacity>

      {/* TABS */}
      <View style={styles.tabs}>
        {/* LEFT SIDE */}
        <View style={styles.tabMainBox}>
          {leftRoutes.map((route: any) => {
            const isFocused = currentRoute === route.name;

            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                style={styles.tab}
              >
                {route.name === 'ServiceStack' ? (
                  <Icon
                    name={isFocused ? 'medkit' : 'medkit-outline'}
                    size={22}
                    color={isFocused ? '#0E8D39' : '#999'}
                  />
                ) : (
                  <IconHistory
                    name={isFocused ? 'history' : 'history'}
                    size={22}
                    color={isFocused ? '#0E8D39' : '#999'}
                  />
                )}

                <Text
                  style={[
                    styles.label,
                    {
                      color: isFocused ? '#0E8D39' : '#999',
                      fontFamily: isFocused
                        ? fonts.UrbanistBold
                        : fonts.UrbanistRegular,
                    },
                  ]}
                >
                  {route.name === 'ServiceStack' ? 'Services' : 'History'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* CENTER SPACE */}
        <View style={{ width: theme.scale(80) }} />

        {/* RIGHT SIDE */}
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-around',
          }}
        >
          {rightRoutes.map((route: any) => {
            const isFocused = currentRoute === route.name;
            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                style={styles.tab}
              >
                <Icon
                  name={
                    route.name === 'Wallet'
                      ? isFocused
                        ? 'wallet'
                        : 'wallet-outline'
                      : isFocused
                      ? 'person'
                      : 'person-outline'
                  }
                  size={22}
                  color={isFocused ? '#0E8D39' : '#999'}
                />

                <Text
                  style={[
                    styles.label,
                    {
                      color: isFocused ? '#0E8D39' : '#999',
                      fontFamily: isFocused
                        ? fonts.UrbanistBold
                        : fonts.UrbanistRegular,
                    },
                  ]}
                >
                  {route.name === 'Wallet' ? 'Wallet' : 'Profile'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CustomTabBar;

// if (route.name === 'Services') {
//   navigation.navigate('Services');
//   setTimeout(() => {
//     navigation
//       .getParent()
//       ?.dispatch(DrawerActions.openDrawer());
//   }, 200);
// } else {
// }

// {
//                   if (route.name === 'Services') {
//                     navigation.navigate('Services');
//                     setTimeout(() => {
//                       navigation
//                         .getParent()
//                         ?.dispatch(DrawerActions.openDrawer());
//                     }, 200);
//                   } else {
