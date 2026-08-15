import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, verticalScale, insets } = theme;

  return StyleSheet.create({
    ticketCard: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.md,
      padding: tokens.spacing.md,
      marginBottom: tokens.spacing.smPlus,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderLeftColor: '#13BAAC',
      borderLeftWidth: 2,
      elevation: 10,
      shadowColor: '#13BAAC',
    },

    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    titleText: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.headingColor,
    },

    line: {
      height: 1,
      backgroundColor: '#EAEAEA',
      marginVertical: tokens.spacing.sm,
    },

    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: tokens.spacing.sm,
    },

    label: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
    },

    value: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.secondaryDark,
    },

    amount: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.primary,
    },

    successText: {
      color: 'green',
    },

    pendingText: {
      color: '#EAA700',
    },

    faildText: {
      color: 'red',
    },

    statusText: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
    },

    paymentRequesContainer: {
      paddingBottom: insets.bottom + tokens.spacing.xxl,
      paddingTop: insets.bottom + tokens.spacing.sm,
    },
  });
};
