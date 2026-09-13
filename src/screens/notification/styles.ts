import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { colors, fonts } from '../../theme';
import {
  radius,
  scale,
  spacing,
  verticalScale,
} from '../../utils/responsiveSize';

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
      paddingTop: verticalScale(18),
    },

    card: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.sm,
      padding: tokens.spacing.md,
      paddingVertical: tokens.spacing.smPlus,
      marginBottom: tokens.spacing.md,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderLeftWidth: 3.5,
      borderLeftColor: colors.primary,
      elevation: 3,
      shadowColor: '#0e8d3822',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: radius.lg,
    },

    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: tokens.spacing.sm,
    },

    title: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
    },

    operator: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
      marginTop: spacing.xs,
    },

    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: tokens.spacing.xs,
    },

    label: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
    },

    value: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
    },

    amount: {
      fontSize: normalize(19),
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.primary,
    },

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: tokens.spacing.md,
      paddingTop: tokens.spacing.sm,
      borderTopWidth: 1,
      borderTopColor: '#ede9e9',
    },

    date: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.lightGray,
    },

    statusBox: {
      paddingHorizontal: tokens.spacing.sm,
      paddingVertical: verticalScale(5),
      borderRadius: radius.sm,
      minWidth: scale(80),
      alignItems: 'center',
      justifyContent: 'center',
    },

    statusText: {
      fontSize: normalize(12),
      fontFamily: fonts.UrbanistBold,
    },
  });
};
