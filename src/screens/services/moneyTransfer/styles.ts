import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';
import { colors, fonts } from '../../../theme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, moderateScale, normalize, insets } =
    theme;
  return StyleSheet.create({
    container: {
      backgroundColor: tokens.colors.white,
    },
    homeContainer: {
      paddingHorizontal: tokens.spacing.md,
      flex: 1,
    },
    headerSimilarBox: {
      paddingVertical: tokens.spacing.xxl,
      backgroundColor: tokens.colors.lightPrimary,
      borderWidth: 1,
    },
    headerCardBox: {
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.md,
      marginTop: -tokens.spacing.xl,
      elevation: 5,
      // shadowColor: tokens.colors.lightPrimary,
    },
    headerCardMain: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userIcon: {
      height: moderateScale(40),
      width: moderateScale(40),
    },
    userName: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
    },
    memberText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistRegular,
    },
    editIcon: {
      height: moderateScale(15),
      width: moderateScale(15),
    },
    editBtn: {
      paddingVertical: tokens.spacing.sm,
      paddingHorizontal: tokens.spacing.sm,
      backgroundColor: 'rgba(123, 128, 132, 0.26)',
      alignSelf: 'center',
      borderRadius: tokens.radius.sm,
    },
    bookingMainCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bookingBox: {
      paddingHorizontal: tokens.spacing.lg,
      paddingVertical: tokens.spacing.md,
      backgroundColor: tokens.colors.white,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      alignSelf: 'flex-start',
      borderRadius: tokens.spacing.sm,
      marginVertical: tokens.spacing.lg,
    },
    bookingNumber: {
      fontSize: tokens.fontSize.lg,
      color: tokens.colors.mainDark,
      fontFamily: fonts.UrbanistSemiBold,
      textAlign: 'center',
    },
    bookingText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    accountText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
      marginBottom: tokens.spacing.md,
    },
    acccountBox: {
      paddingHorizontal: tokens.spacing.smPlus,
      paddingVertical: tokens.spacing.md,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderRadius: tokens.radius.md,
      backgroundColor: tokens.colors.white,
    },
    innerInfomationBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    innerMain: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    personalInformationText: {
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.secondaryDark,
      fontSize: tokens.fontSize.sm,
    },
    editText: {
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.lightGray,
      fontSize: normalize(13),
    },
    user: {
      height: moderateScale(20),
      width: moderateScale(20),
      marginRight: tokens.spacing.md,
    },
    lineBox: {
      height: 1,
      backgroundColor: tokens.colors.lightPrimary,
      width: '100%',
      marginVertical: tokens.spacing.smPlus,
    },
    needHelpBox: {
      width: '100%',
      borderWidth: 1,
      paddingTop: tokens.spacing.xxs,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: tokens.spacing.md,
      justifyContent: 'space-between',
      borderRadius: tokens.radius.md,
      borderColor: 'rgba(19, 186, 172, 0.72)',
      marginTop: tokens.spacing.xxl,
    },
    needText: {
      fontSize: tokens.fontSize.lg,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistBold,
      marginTop: tokens.spacing.md,
    },
    contextText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistRegular,
      marginTop: tokens.spacing.xs,
    },
    helpImg: {
      height: '100%',
      width: '100%',
      // aspectRatio: 1,
    },
    createTicketBtn: {
      paddingVertical: tokens.spacing.sm,
      width: '60%',
      backgroundColor: tokens.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.radius.sm,
      marginVertical: tokens.spacing.sm,
    },
    helpImgBox: {
      height: verticalScale(110),
      aspectRatio: 1,
      marginTop: tokens.spacing.md,
    },
    createTicket: {
      fontSize: normalize(7.5),
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
    },

    logout: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      // paddingHorizontal: 20,
    },

    logOutICon: {
      height: moderateScale(20),
      aspectRatio: 1,
    },

    logoutIcon: {
      backgroundColor: '#FF6B6B',
      padding: moderateScale(10),
      borderRadius: tokens.radius.xxl,
      marginRight: tokens.spacing.md,
    },

    logoutText: {
      fontSize: tokens.fontSize.md,
      color: '#272727',
      fontFamily: fonts.UrbanistSemiBold,
    },
    rightIconStyle: {
      height: moderateScale(16),
      width: moderateScale(16),
    },
    dropDownBox: {
      marginVertical: tokens.spacing.smPlus,
    },

    amountList: {
      paddingBottom: verticalScale(40),
    },

    amountBottom: {
      marginBottom: verticalScale(16),
    },
    amountBox: {
      width: '100%',
      marginBottom: verticalScale(10),
    },

    offerPlanBox: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: tokens.radius.sm,
      // borderTopLeftRadius: tokens.radius.xl,
      // borderBottomRightRadius: tokens.radius.xl,
      paddingVertical: verticalScale(12),
      paddingHorizontal: moderateScale(10),
      backgroundColor: '#fff',
      borderLeftWidth: 3.5,
      borderLeftColor: tokens.colors.primary,
    },
    ruppersIcon: {
      height: moderateScale(16),
      width: moderateScale(16),
    },
    rupperBox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(10),
      // justifyContent: 'center',
    },
    priceText: {
      fontSize: moderateScale(18),
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistBold,
      // textAlign: 'center',
    },
    selectPlanText: {
      fontSize: tokens.fontSize.smPlus,
      color: '#393939',
      fontFamily: fonts.UrbanistMedium,
      marginVertical: verticalScale(10),
    },
    validityText: {
      fontSize: tokens.fontSize.xxs,
      color: '#494949',
      fontFamily: fonts.UrbanistMedium,
    },
    validtyTime: {
      fontSize: tokens.fontSize.xxs,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistBold,
    },
    rowBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    validitBox: {
      marginLeft: scale(30),
      marginRight: scale(30),
    },
    nextIcon: {
      height: moderateScale(18),
      width: moderateScale(18),
    },
    rowBoxMain: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dexText: {
      fontSize: tokens.fontSize.xxs,
      color: '#707070',
      fontFamily: fonts.UrbanistMedium,
      marginTop: verticalScale(10),
    },
    seeMoreText: {
      fontSize: tokens.spacing.smPlus,
      color: tokens.colors.primary,
      marginTop: verticalScale(5),
      fontFamily: fonts.UrbanistSemiBold,
    },
    proceedText: {
      fontSize: tokens.spacing.md,
      color: tokens.colors.white,
      // marginTop: verticalScale(15),
      fontFamily: fonts.UrbanistSemiBold,
    },
    seePlanText: {
      fontSize: tokens.spacing.smPlus,
      color: tokens.colors.white,
      // marginTop: verticalScale(15),
      fontFamily: fonts.UrbanistSemiBold,
    },
    proceedBtn: {
      paddingVertical: verticalScale(15),
      width: '100%',
      borderRadius: tokens.spacing.xxl,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: tokens.colors.primary,
      marginTop: verticalScale(10),
    },
    seePlanBtn: {
      paddingVertical: verticalScale(4),
      width: scale(80),
      borderRadius: tokens.spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#035ab0',
      alignSelf: 'flex-end',
      // marginTop: verticalScale(10),
    },
    // recharge
    categoryContainer: {
      paddingVertical: verticalScale(10),
    },

    categoryTab: {
      paddingVertical: verticalScale(10),
      paddingHorizontal: tokens.spacing.md,
      marginRight: tokens.spacing.smPlus,
      borderBottomWidth: 3,
      borderBottomColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },

    activeCategoryTab: {
      borderBottomColor: '#6C2BD9',
    },

    categoryText: {
      fontSize: tokens.fontSize.md,
      color: '#666',
      fontFamily: fonts.UrbanistSemiBold,
    },

    activeCategoryText: {
      color: '#6C2BD9',
      fontFamily: fonts.UrbanistBold,
    },
    planContainer: {
      paddingBottom: insets.bottom + tokens.spacing.lg,
    },
  });
};
