import { StyleSheet } from 'react-native';
import { fonts } from '../../../theme';
import { AppTheme } from '../../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, normalize, moderateScale } = theme;
  return StyleSheet.create({
    profileImg: {
      width: '10%',
      aspectRatio: 1,
      marginRight: tokens.spacing.sm,
    },
    userName: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.blackDark,
    },
    locationBox: {
      left: -1,
      marginRight: tokens.spacing.xs,
    },
    userText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.secondaryDark,
    },
    notificationIcon: {
      height: moderateScale(18),
      width: moderateScale(18),
    },
    servicesText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistMedium,
      marginLeft: tokens.spacing.md,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    notificationBox: {
      width: moderateScale(35.5),
      height: moderateScale(35.5),
      borderRadius: tokens.radius.lg,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: tokens.colors.gray8,
      elevation: 5,
      shadowColor: tokens.colors.primary,
    },

    badge: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 14,
      height: verticalScale(14),
      aspectRatio: 1,
      borderRadius: tokens.radius.md,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: tokens.spacing.xxs,
    },
    badgeText: {
      fontSize: tokens.fontSize.xxs,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.white,
    },

    countText: {
      fontSize: tokens.fontSize.xxs,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.white,
    },
    notificationContainer: {
      borderWidth: 1,
      borderColor: '#000',
    },
    notificationAndUserBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: tokens.spacing.xs,
    },
    location: {
      marginTop: theme.tokens.spacing.lg,
      justifyContent: 'space-between',
      width: '100%',
    },
    serchBox: {
      paddingVertical: tokens.spacing.xxs,
      borderWidth: 1,
      borderRadius: tokens.spacing.lg,
      paddingLeft: tokens.spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: tokens.spacing.xs,
      borderColor: tokens.colors.lightGray,
      marginVertical: tokens.spacing.md,
    },

    InputBox: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
    },
    seachBox: {
      height: verticalScale(36),
      aspectRatio: 1,
      marginVertical: tokens.spacing.xxs,
      borderRadius: tokens.spacing.xxl,
      backgroundColor: tokens.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bannerImg: {
      width: '100%',
      height: verticalScale(150),
    },
    myBookingBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(20),
      marginBottom: verticalScale(10),
      // marginHorizontal: scale(6),
    },
    myBookingText: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
    },
    mobileRechargeText: {
      fontSize: tokens.fontSize.smPlus,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
      marginBottom: verticalScale(10),
    },
    seeAllText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
    },
    bookingServiceItemBox: {
      width: scale(85),
      height: verticalScale(110),
      borderRadius: tokens.radius.xxl,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginRight: tokens.spacing.sm,
      backgroundColor: tokens.colors.white,
      elevation: 5,
      shadowColor: 'rgba(18, 148, 137, 0.33)',
    },

    serviceItemBox: {
      width: scale(70),
      height: scale(70),
      borderRadius: tokens.radius.md,
      marginBottom: tokens.spacing.sm,
      // paddingVertical: tokens.spacing.smPlus,
      backgroundColor: '#f1f1f1',
      elevation: 10,
      shadowColor: '#cdcdcd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    serviceWrapper: {
      alignItems: 'center',
      width: scale(85),
      marginRight: tokens.spacing.xxs,
      paddingVertical: verticalScale(1),
      alignSelf: 'center',
      marginBottom: tokens.spacing.xxxs,
      // borderWidth: 1,
    },
    columnWrapperStyle: {
      justifyContent: 'flex-start',
    },
    serviceIcon: {
      height: moderateScale(45),
      width: moderateScale(45),
    },
    serviceText: {
      fontSize: normalize(11),
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistSemiBold,
      // marginTop: tokens.spacing.sm,
      textAlign: 'center',
      height: verticalScale(32), // FIX TEXT HEIGHT
      lineHeight: normalize(14),
      // borderWidth: 1,
    },
    firstItemText: {
      // marginTop: tokens.spacing.sm,
    },
    sempleText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      textAlign: 'left',
    },
    arrowCircle: {
      height: verticalScale(40),
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.radius.xxl,
      backgroundColor: 'rgba(19, 186, 172, 0.12)',
      alignSelf: 'flex-end',
      marginRight: tokens.spacing.sm,
    },

    arrowIcon: {
      height: moderateScale(30),
      aspectRatio: 1,
    },
    calenderIcon: {
      height: moderateScale(18),
      width: moderateScale(18),
    },
    timeText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      marginLeft: tokens.spacing.sm,
    },
    serviceItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceBox: {
      width: scale(60),
      height: verticalScale(80),
      borderTopRightRadius: tokens.radius.md,
      borderBottomRightRadius: tokens.radius.md,
      backgroundColor: '#0C8485',
      alignItems: 'center',
      justifyContent: 'center',
    },
    priceText: {
      fontSize: normalize(11),
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
      marginBottom: tokens.spacing.sm,
    },
    currencyText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistBold,
    },
  });
};
