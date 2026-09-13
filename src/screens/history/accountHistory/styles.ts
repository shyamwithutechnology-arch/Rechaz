import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';
import { colors, fonts } from '../../../theme';
import {
  radius,
  scale,
  spacing,
  verticalScale,
} from '../../../utils/responsiveSize';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, normalize, insets } = theme;
  const { colors, fontSize, radius, spacing } = tokens;

  return StyleSheet.create({
    contentContainer: {
      paddingHorizontal: tokens.spacing.md,
      paddingTop: verticalScale(18),
      paddingBottom: insets.bottom + verticalScale(70),
      flexGrow: 1,
    },

    emptyBox: {
      flex: 1,
      marginTop: verticalScale(100),
      alignItems: 'center',
      justifyContent: 'center',
    },

    emptyText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },

    // Card
    // card: {
    //   backgroundColor: tokens.colors.white,
    //   borderRadius: tokens.radius.sm,
    //   padding: tokens.spacing.md,
    //   marginBottom: tokens.spacing.md,

    //   borderWidth: 1,
    //   borderColor: tokens.colors.lightPrimary,

    //   borderLeftWidth: 3.5,
    //   borderLeftColor: colors.primary,

    //   elevation: 3,

    //   shadowColor: '#0e8d3822',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.08,
    //   shadowRadius: radius.lg,
    // },

    // Header
    // headerRow: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'flex-start',
    //   marginBottom: tokens.spacing.md,
    // },

    // titleContainer: {
    //   flex: 1,
    //   paddingRight: spacing.sm,
    // },

    // title: {
    //   fontSize: tokens.fontSize.sm,
    //   fontFamily: fonts.UrbanistBold,
    //   color: tokens.colors.blackDark,
    // },

    // transactionId: {
    //   marginTop: verticalScale(4),
    //   fontSize: tokens.fontSize.xs,
    //   fontFamily: fonts.UrbanistRegular,
    //   color: tokens.colors.lightGray,
    // },

    // Credit / Debit
    typeBox: {
      minWidth: scale(70),
      paddingHorizontal: tokens.spacing.sm,
      paddingVertical: verticalScale(5),
      borderRadius: radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },

    // typeText: {
    //   fontSize: normalize(12),
    //   fontFamily: fonts.UrbanistBold,
    // },

    // Amount
    amountRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: verticalScale(2),
    },

    amountLabel: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
    },

    amount: {
      fontSize: fontSize.mdPlus,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.primary,
    },

    // Remark
    // remarkBox: {
    //   marginTop: tokens.spacing.md,
    // },

    // label: {
    //   fontSize: tokens.fontSize.xs,
    //   fontFamily: fonts.UrbanistMedium,
    //   color: tokens.colors.lightGray,
    // },

    // remark: {
    //   marginTop: verticalScale(4),
    //   fontSize: tokens.fontSize.xs,
    //   lineHeight: verticalScale(18),
    //   fontFamily: fonts.UrbanistMedium,
    //   color: tokens.colors.blackDark,
    // },

    // Balance
    // balanceContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginTop: tokens.spacing.md,
    //   padding: tokens.spacing.sm,
    //   borderRadius: radius.sm,
    //   backgroundColor: '#F8F9FA',
    // },

    // balanceItem: {
    //   flex: 1,
    // },

    // balanceDivider: {
    //   width: 1,
    //   height: verticalScale(35),
    //   backgroundColor: '#E5E5E5',
    //   marginHorizontal: spacing.sm,
    // },

    // value: {
    //   marginTop: verticalScale(4),
    //   fontSize: tokens.fontSize.sm,
    //   fontFamily: fonts.UrbanistSemiBold,
    //   color: tokens.colors.blackDark,
    // },

    // User information
    // infoRow: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   marginTop: tokens.spacing.sm,
    // },

    // // Footer
    // footer: {
    //   marginTop: tokens.spacing.md,
    //   paddingTop: tokens.spacing.sm,

    //   borderTopWidth: 1,
    //   borderTopColor: '#EDE9E9',
    // },

    // date: {
    //   fontSize: tokens.fontSize.xs,
    //   fontFamily: fonts.UrbanistRegular,
    //   color: tokens.colors.lightGray,
    // },

    // ?????????????????????????????????************
    card: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.md,
      padding: tokens.spacing.md,
      marginBottom: tokens.spacing.md,

      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,

      borderLeftWidth: 4,
      borderLeftColor: tokens.colors.primary,

      elevation: 3,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: radius.md,
    },

    headerRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: tokens.spacing.md,
    },

    titleContainer: {
      flex: 1,
      paddingRight: tokens.spacing.sm,
    },

    title: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
    },

    transactionId: {
      marginTop: verticalScale(3),
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.lightGray,
    },

    // typeBox: {
    //   minWidth: scale(65),
    //   paddingHorizontal: tokens.spacing.sm,
    //   paddingVertical: verticalScale(5),
    //   borderRadius: tokens.radius.sm,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },

    debitBox: {
      backgroundColor: '#FDECEC',
    },

    creditBox: {
      backgroundColor: '#EAF8EF',
    },

    typeText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistBold,
    },

    debitText: {
      color: '#D93636',
    },

    creditText: {
      color: tokens.colors.primary,
    },

    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      paddingVertical: tokens.spacing.xs,

      borderTopWidth: 1,
      borderTopColor: '#F0F0F0',
    },

    label: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
    },

    value: {
      maxWidth: '65%',
      textAlign: 'right',
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
    },

    remarkBox: {
      marginTop: tokens.spacing.sm,
      padding: tokens.spacing.sm,
      borderRadius: tokens.radius.sm,
      backgroundColor: '#F8F9FA',
    },

    remark: {
      marginTop: verticalScale(4),
      fontSize: tokens.fontSize.xs,
      lineHeight: verticalScale(17.5),
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.blackDark,
      // borderWidth: 1,
      width: scale(200),
      flexWrap: 'wrap',
    },

    // amountRow: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',

    //   marginTop: tokens.spacing.md,
    //   paddingVertical: tokens.spacing.sm,

    //   borderTopWidth: 1,
    //   borderBottomWidth: 1,
    //   borderColor: '#EDEDED',
    // },

    // amountLabel: {
    //   fontSize: tokens.fontSize.sm,
    //   fontFamily: fonts.UrbanistMedium,
    //   color: tokens.colors.lightGray,
    // },

    // amount: {
    //   fontSize: normalize(20),
    //   fontFamily: fonts.UrbanistBold,
    // },

    debitAmount: {
      color: '#D93636',
    },

    creditAmount: {
      color: tokens.colors.primary,
    },

    balanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',

      marginTop: tokens.spacing.md,
      // padding: tokens.spacing.sm,

      borderRadius: tokens.radius.sm,
      backgroundColor: '#F8F9FA',
      justifyContent: 'space-between',
      // borderWidth: 1,
    },

    balanceItem: {
      // flex: 1,
    },

    balanceDivider: {
      width: 1,
      height: verticalScale(32),
      backgroundColor: '#E5E5E5',
      marginHorizontal: tokens.spacing.sm,
    },

    balanceValue: {
      marginTop: verticalScale(3),
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
    },

    footer: {
      marginTop: tokens.spacing.md,
      paddingTop: tokens.spacing.sm,

      borderTopWidth: 1,
      borderTopColor: '#EDEDED',
    },

    date: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.lightGray,
    },
  });
};
