import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { colors, fonts } from '../../theme';
import { scale } from '../../utils/responsiveSize';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, verticalScale, normalize, insets } = theme;

  return StyleSheet.create({
    // ---------------- HEADER ----------------
    notificationAndUserBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginBottom: tokens.spacing.lg,
      backgroundColor: tokens.colors.lightPrimary,
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: verticalScale(2),
      paddingBottom: verticalScale(5),
    },
    homeContaine: {
      marginHorizontal: tokens.spacing.md,
    },
    backIcon: {
      height: moderateScale(30),
      width: moderateScale(30),
      backgroundColor: tokens.colors.white,
      paddingHorizontal: scale(8),
      borderRadius: moderateScale(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    // headerRow: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    // },

    userName: {
      fontSize: tokens.fontSize.lg,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
    },

    userText: {
      marginTop: tokens.spacing.xxs,
      marginBottom: tokens.spacing.xxs,
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.secondaryDark,
    },

    notificationBox: {
      width: moderateScale(32),
      height: moderateScale(32),
      borderRadius: tokens.radius.lg,
      backgroundColor: '#F5F7FA',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: tokens.spacing.xs,
      marginBottom: tokens.spacing.xs,
    },

    notificationIcon: {
      width: moderateScale(15),
      height: moderateScale(15),
    },

    badge: {
      position: 'absolute',
      top: -5,
      right: -5,
      minWidth: moderateScale(14),
      height: moderateScale(14),
      borderRadius: moderateScale(8),
      backgroundColor: '#FF3B30',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 2,
    },

    badgeText: {
      fontSize: normalize(9),
      color: '#fff',
      fontFamily: fonts.UrbanistBold,
    },

    // ---------------- WALLET CARD ----------------
    bannerTop: {
      marginTop: tokens.spacing.smPlus,
      marginBottom: insets.bottom + verticalScale(60),
    },
    messText: {
      fontSize: tokens.fontSize.smPlus,
      color: colors.primary,
      fontFamily: fonts.UrbanistSemiBold,
    },
    topNotification: {
      // borderWidth: 1,
      padding: moderateScale(8),
      backgroundColor: colors.lightPrimary,
      borderRadius: tokens.radius.sm,
      // backgroundColor: '#6db8c5',
    },
    walletCard: {
      borderRadius: tokens.radius.md,
      padding: tokens.spacing.md,
      paddingVertical: tokens.spacing.smPlus,
      // marginBottom: tokens.spacing.xl,
      marginTop: tokens.spacing.md,
    },

    walletTitle: {
      fontSize: tokens.fontSize.sm,
      color: '#DFFCF9',
      fontFamily: fonts.UrbanistMedium,
    },

    walletAmount: {
      fontSize: normalize(26),
      color: '#fff',
      fontFamily: fonts.UrbanistBold,
      marginTop: tokens.spacing.xs,
    },

    walletBottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: tokens.spacing.md,
    },

    walletLabel: {
      fontSize: tokens.fontSize.xs,
      color: '#DFFCF9',
      fontFamily: fonts.UrbanistMedium,
      // borderWidth: 1,
    },

    totalBusinessBox: {
      width: '48%',
    },
    walletValue: {
      marginTop: tokens.spacing.xxs,
      fontSize: tokens.fontSize.md,
      color: '#fff',
      fontFamily: fonts.UrbanistBold,
    },

    // ---------------- SECTION ----------------

    myBookingBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: tokens.spacing.sm,
      marginTop: tokens.spacing.mdPlus,
    },

    myBookingText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistBold,
    },

    seeAllText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.primary,
      fontFamily: fonts.UrbanistSemiBold,
    },

    // ---------------- TRANSACTION CARD ----------------

    transactionCard: {
      width: '100%',
      borderRadius: tokens.radius.sm,
      padding: tokens.spacing.sm,
      paddingBottom: tokens.spacing.xs,
      marginBottom: tokens.spacing.smPlus,
      elevation: 50,
      shadowColor: 'rgba(0,0,0,0.08)',
      backgroundColor: '#fff',
      borderWidth: 0.6,
      borderColor: '#d8d8d8',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    transactionTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    transactionIconBox: {
      width: moderateScale(42),
      height: moderateScale(42),
      borderRadius: tokens.radius.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },

    transactionIcon: {
      width: moderateScale(20),
      height: moderateScale(20),
    },

    transactionTitle: {
      fontSize: tokens.fontSize.sm,
      color: '#286CBF',
      fontFamily: fonts.UrbanistExtraBold,
      // borderWidth: 1,
    },
    todayTextColor: {
      color: '#1E6835',
    },

    transactionAmount: {
      marginTop: tokens.spacing.sm,
      fontSize: normalize(22),
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistBold,
      borderWidth: 1,
    },

    // ---------------- SERVICES ----------------

    serviceWrapper: {
      flex: 1,
      alignItems: 'center',
      marginBottom: tokens.spacing.lg,
    },

    columnWrapperStyle: {
      justifyContent: 'space-between',
    },

    serviceItemBox: {
      width: moderateScale(62),
      height: moderateScale(62),
      borderRadius: tokens.radius.lg,
      backgroundColor: '#F5F7FA',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: tokens.spacing.sm,
    },

    serviceIcon: {
      width: moderateScale(28),
      height: moderateScale(28),
    },

    // ---------------- RECENT TRANSACTION ----------------

    recentCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.sm,
      padding: tokens.spacing.md,
      marginBottom: tokens.spacing.sm,
      elevation: 3,
      shadowColor: 'rgba(0,0,0,0.08)',
      borderWidth: 1,
      borderColor: '#e3e3e3',
    },

    recentLeftRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    recentIconBox: {
      width: moderateScale(46),
      height: moderateScale(46),
      borderRadius: tokens.radius.lg,
      backgroundColor: '#F5F7FA',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: tokens.spacing.md,
    },

    recentIcon: {
      width: moderateScale(36),
      height: moderateScale(36),
    },

    recentTitle: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
    },

    recentStatus: {
      marginTop: 2,
      fontSize: tokens.fontSize.xs,
      color: '#18A058',
      fontFamily: fonts.UrbanistMedium,
    },

    recentAmount: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistBold,
    },
    dateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dateText: {
      fontSize: tokens.fontSize.xs,
      color: '#3B3951',
      fontFamily: fonts.UrbanistSemiBold,
    },
    downArrowIcon: {
      height: moderateScale(20),
      width: moderateScale(20),
    },

    todayText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistSemiBold,
      color: '#757B89',
      marginTop: tokens.spacing.sm,
      marginBottom: tokens.spacing.xsPlus,
    },
    serviceText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistExtraBold,
      color: tokens.colors.black,
    },
    peopleIcon: {
      height: moderateScale(15),
      width: moderateScale(15),
    },
    peopleRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    baseLineBorder: {
      height: verticalScale(55),
      backgroundColor: '#e0e0e0',
      width: scale(1.4),
      marginHorizontal: tokens.spacing.sm,
    },
    servicerIcon: {
      height: moderateScale(40),
      width: moderateScale(40),
    },
    servicerBox: {
      padding: tokens.spacing.sm,
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.xxl,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: tokens.spacing.sm,
      elevation: 10,
      shadowColor: '#a89f9f',
    },

    aepsBox: {
      padding: moderateScale(3),
      backgroundColor: tokens.colors.green,
      top: verticalScale(-5),
      borderRadius: tokens.radius.lg,
      width: scale(45),
      alignItems: 'center',
      justifyContent: 'center',
    },
    serviceBottom: {
      // marginTop: verticalScale(1/0),
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
    },
    servicesSmall: {
      color: tokens.colors.white,
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistSemiBold,
    },
    rightIconBoxStyle: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.lg,
      padding: moderateScale(8),
    },
    rightIconStyle: {
      height: moderateScale(15),
      width: moderateScale(15),
    },

    card: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.sm,
      padding: tokens.spacing.md,
      paddingVertical: tokens.spacing.smPlus,
      marginBottom: tokens.spacing.sm,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderLeftWidth: 3.5,
      borderLeftColor: tokens.colors.primary,
      elevation: 3,
      shadowColor: '#0e8d3822',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: tokens.radius.lg,
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
      marginTop: tokens.spacing.xs,
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
      borderRadius: tokens.radius.sm,
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
