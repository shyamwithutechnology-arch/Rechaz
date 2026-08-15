import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../theme';
import { AppTheme } from '../../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, normalize, moderateScale } = theme;
  return StyleSheet.create({
    payoutText: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: '#2c2b2b',
      marginTop: verticalScale(13),
      marginBottom: verticalScale(3),
    },
    addNewBanck: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.white,
    },
    innerContainer: {
      paddingTop: tokens.spacing.sm,
    },
    homeContainer: {
      flex: 1,
      paddingHorizontal: tokens.spacing.md,
    },
    addNewBank: {
      paddingHorizontal: tokens.spacing.smPlus,
      paddingVertical: tokens.spacing.xs,
      alignSelf: 'flex-end',
      borderRadius: tokens.radius.sm,
      backgroundColor: tokens.colors.primary,
      elevation: 10,
      shadowColor: '#000',
    },
    btnStyle: {
      marginTop: verticalScale(30),
    },

    errorText: {
      color: 'red',
      fontSize: tokens.fontSize.xs,
      marginTop: tokens.spacing.xxs,
      marginLeft: tokens.spacing.lg,
    },
  });
};
