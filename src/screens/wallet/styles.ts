import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';
import { scale, verticalScale } from '../../utils/responsiveSize';

export const createStyles = (theme: AppTheme) => {
  const { tokens, insets, moderateScale, normalize } = theme;
  const { colors, fontSize, radius, spacing } = tokens;

  return StyleSheet.create({
    /* ================= CARD ================= */

    balanceCard: {
      backgroundColor: tokens.colors.primary,
      padding: tokens.spacing.lg,
      paddingVertical: tokens.spacing.xs,
      borderRadius: tokens.radius.sm,
      marginTop: tokens.spacing.smPlus,
      marginBottom: tokens.spacing.sm,
    },

    balanceLabel: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistMedium,
      marginTop: tokens.spacing.sm,
      // marginTop: verticalScale(5),
    },

    walletBoxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    balanceAmount: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistBold,
      marginBottom: tokens.spacing.sm,
      marginTop: tokens.spacing.xs,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: tokens.spacing.sm,
      gap: tokens.spacing.sm,
    },

    primaryBtn: {
      backgroundColor: tokens.colors.white,
      alignItems: 'center',
      borderRadius: tokens.radius.md,
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.sm,
    },

    secondaryBtn: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: tokens.spacing.sm,
      borderRadius: tokens.radius.md,
      alignItems: 'center',
    },

    btnText: {
      color: tokens.colors.primary,
      fontFamily: fonts.UrbanistSemiBold,
    },

    btnTextDark: {
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
    },

    /* ================= SECTION ================= */

    sectionTitle: {
      fontSize: tokens.fontSize.smPlus,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
      marginVertical: tokens.spacing.sm,
    },

    /* ================= SERVICES ================= */

    serviceBox: {
      flex: 1,
      margin: tokens.spacing.xs,
      padding: tokens.spacing.md,
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.md,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      alignItems: 'center',
      justifyContent: 'center',
    },

    serviceText: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.blackDark,
    },

    /* ================= TRANSACTIONS ================= */

    txnCard: {
      paddingHorizontal: tokens.spacing.xsPlus,
      paddingRight: tokens.spacing.smPlus,
      paddingVertical: tokens.spacing.sm,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderRadius: tokens.radius.md,
      marginBottom: tokens.spacing.sm,
      backgroundColor: tokens.colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    transHistray: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mobileRechateText: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistExtraBold,
      color: tokens.colors.blackDark,
      // borderWidth: 1,
    },
    centerContent: {
      marginLeft: tokens.spacing.xsPlus,
    },
    deductText: {
      fontSize: normalize(12.8),
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.darkGray,
      // borderWidth: 1,
    },
    deductTextSpace: {
      marginTop: tokens.spacing.sm,
    },
    repeateIcon: {
      height: moderateScale(16),
      width: moderateScale(16),
    },
    repeatText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.blue,
      fontFamily: fonts.UrbanistSemiBold,
    },
    repeteBox: {
      // borderWidth: 1,
      marginTop: tokens.spacing.xs,
      alignSelf: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },
    txnTitle: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.lightGray,
      // borderWidth: 1,
    },
    txntText: {
      marginTop: tokens.spacing.sm,
    },

    txnAmount: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistSemiBold,
    },
    amountTextColor: {
      color: tokens.colors.black,
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistBold,
      alignSelf: 'flex-end',
    },
    amountText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.black,
    },
    beforeBalenceText: {
      fontFamily: fonts.UrbanistSemiBold,
      color: '#969595',
    },
    historyContainer: {
      paddingBottom: insets.bottom + verticalScale(80),
    },
    successText: {
      color: '#12B76A',
      alignSelf: 'flex-end',
    },
    faildText: {
      color: '#F04438',
      alignSelf: 'flex-end',
    },
    amoutnText: {
      fontSize: tokens.fontSize.sm,
      color: '#505050',
      fontFamily: fonts.UrbanistSemiBold,
      marginBottom: tokens.spacing.xs,
    },
    transactionType: {
      marginTop: tokens.spacing.md,
    },
    subBtn: {
      marginTop: tokens.spacing.xxl,
    },
    errorText: {
      color: 'red',
      fontSize: tokens.fontSize.xs,
      marginTop: tokens.spacing.xxs,
      marginLeft: tokens.spacing.xs,
    },
    aritelLogo: {
      height: moderateScale(46),
      width: moderateScale(46),
    },
    logoBranch: {
      height: verticalScale(46),
      width: scale(46),
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.xxl,
    },

    inputBox: {
      paddingVertical: tokens.spacing.smPlus,
      width: '100%',
      borderWidth: 0.5,
      borderColor: tokens.colors.lightGray,
      alignSelf: 'center',
      borderRadius: tokens.spacing.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: tokens.spacing.sm,
      marginTop: spacing.xs,
    },
    dateText: {
      fontSize: fontSize.sm,
      color: colors.blackDark,
      fontFamily: fonts.UrbanistMedium,
    },
    modalContainer: {
      flexGrow: 1,
    },

    //////////////////

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
