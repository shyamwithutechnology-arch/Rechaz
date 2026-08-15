import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';
import { spacing, verticalScale } from '../../utils/responsiveSize';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, normalize, insets } = theme;

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
      borderRadius: tokens.radius.md,
      padding: tokens.spacing.md,
      marginBottom: tokens.spacing.sm,
      backgroundColor: tokens.colors.white,
      borderColor: tokens.colors.lightPrimary,
      borderLeftWidth: 4,
      borderLeftColor: tokens.colors.primary,
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
    },

    amount: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistMedium,
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
    contentContainer: {
      paddingBottom: insets.bottom + verticalScale(70),
      paddingVertical: verticalScale(20),
    },
    divider: {
      height: 0.5,
      width: '100%',
      backgroundColor: '#d8d6d6',
      marginTop: verticalScale(7),
    },
  });
};
