import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';
import { fonts } from '../../../theme';
import { scale, verticalScale } from '../../../utils/responsiveSize';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, normalize } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tokens.colors.white,
      padding: tokens.spacing.md,
    },

    header: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
      marginBottom: tokens.spacing.md,
    },

    /* ================= CARD ================= */

    card: {
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderRadius: tokens.radius.md,
      padding: tokens.spacing.md,
      marginBottom: tokens.spacing.smPlus,
      backgroundColor: tokens.colors.white,
      borderLeftWidth: 3,
      borderLeftColor: tokens.colors.primary,
      shadowColor: tokens.colors.primary,
      shadowOpacity: 1,

      shadowRadius: scale(8),
      elevation: 3,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
      flex: 1,
    },

    subText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.lightGray,
      marginTop: tokens.spacing.xs,
      fontFamily: fonts.UrbanistRegular,
    },

    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: tokens.spacing.sm,
      alignItems: 'center',
    },

    date: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      textAlign: 'right',
    },

    amount: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
    },

    /* ================= STATUS ================= */

    statusBox: {
      paddingHorizontal: tokens.spacing.sm,
      paddingVertical: tokens.spacing.xxs,
      borderRadius: tokens.radius.xl,
      alignItems: 'center',
      justifyContent: 'center',
    },

    statusText: {
      fontSize: normalize(11),
      fontFamily: fonts.UrbanistSemiBold,
    },

    /* ================= EMPTY STATE ================= */

    emptyBox: {
      marginTop: tokens.spacing.xxl,
      alignItems: 'center',
      justifyContent: 'center',
    },

    emptyText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },

    ///
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    transactionType: {
      flex: 1,
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
    },

    divider: {
      height: 1,
      backgroundColor: '#ECECEC',
      marginVertical: 12,
    },

    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: verticalScale(8),
    },

    label: {
      color: tokens.colors.gray10,
      fontFamily: fonts.UrbanistMedium,
      fontSize: tokens.fontSize.xs,
    },

    value: {
      flex: 1,
      textAlign: 'right',
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
      fontSize: tokens.fontSize.xs,
    },

    footer: {
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#ECECEC',
      paddingTop: 10,
    },
  });
};
