import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';
import { fonts } from '../../../theme';

export const createStyles = (theme: AppTheme) => {
  const { scale, tokens, moderateScale, verticalScale } = theme;
  return StyleSheet.create({
    amoutText: {
      fontSize: tokens.fontSize.md,
      marginTop: tokens.spacing.sm,
      fontFamily: fonts.UrbanistMedium,
      color: '#2d2d2d',
      marginBottom: verticalScale(4),
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
  });
};
