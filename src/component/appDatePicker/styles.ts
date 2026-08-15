import { StyleSheet } from 'react-native';
import { fonts } from '../../theme';
import { AppTheme } from '../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, moderateScale, tokens } = theme;
  return StyleSheet.create({
    container: {
      paddingVertical: verticalScale(3),
      backgroundColor: tokens.colors.lightPrimary,
      borderWidth: 1,
      borderRadius: tokens.spacing.sm,
      width: '28%',
      marginLeft: -tokens.spacing.xxl,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: tokens.spacing.md,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistMedium,
      marginLeft: tokens.spacing.md,
    },
    rightIcon: {
      height: moderateScale(15),
      width: moderateScale(15),
    },
    rightIconBox: {
      height: verticalScale(35),
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#000',
      borderRadius: tokens.spacing.xxl,
      backgroundColor: tokens.colors.white,
      elevation: 5,
      shadowColor: tokens.colors.white,
    },

    badge: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 16,
      height: verticalScale(16),
      borderRadius: tokens.radius.md,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: tokens.spacing.xxs,
    },

    badgeText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.white,
    },
    customRightIcon: {
      width: moderateScale(20),
      height: moderateScale(20),
    },
    customRightIconBox: {
      // borderWidth: 1,
      borderColor: tokens.colors.secondaryDark,
      padding: moderateScale(4),
    },
  });
};
