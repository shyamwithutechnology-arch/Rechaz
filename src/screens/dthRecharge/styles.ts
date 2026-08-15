import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { scale, tokens, moderateScale, verticalScale } = theme;
  return StyleSheet.create({
    amoutText: {
      fontSize: tokens.fontSize.sm,
      marginTop: tokens.spacing.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: '#4b4b4b',
      marginBottom: verticalScale(6),
    },
    dthNumberText: {
      marginTop: tokens.spacing.md,
    },
    anAmountText: {
      fontSize: tokens.fontSize.xs,
      marginTop: tokens.spacing.sm,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.red,
      marginBottom: verticalScale(4),
    },
    purchaseBtn: {
      marginTop: verticalScale(30),
    },
    dropDownContainer: {
      marginBottom: tokens.spacing.xsPlus,
    },
    inputBoxStyle: {
      marginBottom: tokens.spacing.xsPlus,
    },
    errorText: {
      color: 'red',
      fontSize: tokens.fontSize.xs,
      marginTop: tokens.spacing.xxs,
      // fontFamily: fonts.UrbanistRegular,
    },
  });
};
