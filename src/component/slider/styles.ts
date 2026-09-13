import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, verticalScale, moderateScale } = theme;
  const { spacing, colors, radius } = tokens;
  return StyleSheet.create({
    // wrapper: {},

    // slide: {
    //   height: verticalScale(160), // ~20% screen height
    //   marginHorizontal: tokens.spacing.xs,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderRadius: tokens.radius.md,
    //   overflow: 'hidden',
    //   marginTop: tokens.spacing.md,
    // },
    container: {
      height: verticalScale(180),
    },
    wrapper: {
      height: 200,
    },

    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: tokens.spacing.xs,
      borderRadius: tokens.radius.lg,
      overflow: 'hidden',
    },

    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: tokens.radius.lg,
    },

    dot: {
      backgroundColor: colors.lightPrimary,
      width: moderateScale(8),
      height: moderateScale(8),
      borderRadius: moderateScale(4),
      marginHorizontal: moderateScale(3),
      // marginTop: verticalScale(10),
      bottom: verticalScale(-20),
    },

    activeDot: {
      backgroundColor: colors.primary,
      width: moderateScale(8),
      height: moderateScale(8),
      borderRadius: moderateScale(4),
      marginHorizontal: moderateScale(3),
      bottom: verticalScale(-20),
    },

    // container: {
    //   width: '100%',
    //   height: 200,
    // },

    // wrapper: {
    //   height: verticalScale(150),
    //   // borderWidth: 1,
    // },

    // slide: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },

    // image: {
    //   width: '100%',
    //   height: '100%',
    // },
  });
};
