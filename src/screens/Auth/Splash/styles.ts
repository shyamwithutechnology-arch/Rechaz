import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, moderateScale, tokens, scale } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tokens.colors.white,
    },
    splashBgStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // splashLogo: {
    //   height: verticalScale(200),
    //   width: scale(200),
    // },
    // splashLogoBox: {
    //   borderRadius: scale(500),
    // },
    splashLogoBox: {
      height: scale(200),
      width: scale(200),
      borderRadius: tokens.radius.xxl,
      justifyContent: 'center',
      alignItems: 'center',
    },

    splashLogo: {
      height: scale(200),
      width: scale(200),
      resizeMode: 'contain',
    },
  });
};
