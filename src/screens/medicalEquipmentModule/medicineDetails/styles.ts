import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';
import { fonts } from '../../../theme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, verticalScale, scale, normalize, moderateScale } = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: tokens.colors.white,
    },
    homeContainer: {
      flex: 1,
      paddingHorizontal: tokens.spacing.md,
      paddingTop: tokens.spacing.mdPlus,
    },
    headerBox: {
      height: verticalScale(30),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: tokens.spacing.md,
      marginTop: tokens.spacing.sm,
    },
    backIcon: {
      alignSelf: 'flex-start',
      padding: moderateScale(2),
    },

    medicineImg: {
      height: verticalScale(70),
      width: '100%',
    },

    medicineImg1: {
      height: verticalScale(140),
      width: '100%',
    },
    wisListBox: {
      height: verticalScale(28),
      aspectRatio: 1,
      backgroundColor: tokens.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.spacing.xxl,
      elevation: 5,
      marginLeft: tokens.spacing.md,
    },
    relatedWisListBox: {
      height: verticalScale(28),
      aspectRatio: 1,
      backgroundColor: tokens.colors.lightPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.spacing.xxl,
      elevation: 5,
      marginLeft: tokens.spacing.md,
      position: 'absolute',
      right: 6,
      top: 6,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleText: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistBold,
      marginBottom: tokens.spacing.xxs,
    },
    amountRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    offiredText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistBold,
    },

    titleStyle: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
    },
    medicineText: {
      fontSize: tokens.fontSize.xxs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistRegular,
      marginBottom: tokens.spacing.sm,
    },
    includerText: {
      fontSize: tokens.fontSize.xxs,
      color: '#989595',
      fontFamily: fonts.UrbanistMedium,
    },
    offirBox: {
      paddingHorizontal: moderateScale(8),
      paddingVertical: moderateScale(1.8),
      backgroundColor: 'rgba(25, 178, 43, 0.11)',
      borderRadius: tokens.spacing.xs,
    },
    tabletText: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
      marginVertical: tokens.spacing.sm,
    },
    getItBox: {
      width: '100%',
      paddingLeft: tokens.spacing.md,
      paddingRight: tokens.spacing.xs,
      backgroundColor: '#E9FAEE',
      paddingVertical: tokens.spacing.xsPlus,
      borderRadius: tokens.radius.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    getInnerBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusBox: {
      justifyContent: 'space-between',
      marginHorizontal: tokens.spacing.smPlus,
      marginVertical: tokens.spacing.lg,
    },
    delivery: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    getJustText: { justifyContent: 'space-between' },
    copunIcon: {
      height: verticalScale(20),
      width: verticalScale(20),
      marginRight: tokens.spacing.sm,
    },
    getText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: '#676767',
    },
    amoutText: {
      fontFamily: fonts.UrbanistExtraBold,
      color: '#36AB57',
    },
    decreseText: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistMedium,
    },
    quantityText: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.secondaryDark,
    },
    countBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      paddingVertical: tokens.spacing.xxs,
      width: '30%',
      paddingHorizontal: tokens.spacing.mdPlus,
      borderRadius: tokens.spacing.xs,
    },
    addToCartBox: {
      backgroundColor: tokens.colors.primaryGradientEnd,
      borderRadius: tokens.radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: tokens.spacing.sm,
      flex: 1,
      marginLeft: tokens.spacing.sm,
      elevation: 5,
      // backgroundColor: tokens.colors.mainDark,
      // borderRadius: tokens.radius.sm,
      // alignItems: 'center',
      // justifyContent: 'center',
      // paddingVertical: tokens.spacing.sm,
      // width: '67%',
      // zIndex: 100,
    },
    mainIncreaMentBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: tokens.spacing.smPlus,
    },
    increaseBox: {
      paddingHorizontal: moderateScale(3),
    },
    addToCart: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.white,
    },
    productText: {
      fontSize: normalize(13),
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.secondaryDark,
      marginTop: tokens.spacing.mdPlus,
      marginBottom: tokens.spacing.xs,
      textTransform: 'capitalize',
    },
    decText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightGray,
      borderWidth: 1,
      padding: moderateScale(10),
      borderRadius: tokens.radius.md,
      borderColor: tokens.colors.lightPrimary,
      marginTop: tokens.spacing.xsPlus,
    },
    moreProductDetails: {
      padding: moderateScale(6),
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderRadius: tokens.radius.md,
      marginTop: tokens.spacing.smPlus,
    },
    compositionText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistMedium,
    },
    compisitionValue: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistSemiBold,
    },
    lineBox: {
      height: 1.4,
      backgroundColor: tokens.colors.lightPrimary,
      width: '100%',
      marginVertical: tokens.spacing.smPlus,
    },
    deliveryBox: {
      height: verticalScale(55),
      width: scale(60),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.radius.sm,
      borderColor: tokens.colors.lightPrimary,
      backgroundColor: '#ebebeb',
      marginBottom: tokens.spacing.xs,
    },
    verticalBox: {
      width: 1.5,
      height: verticalScale(50),
      backgroundColor: tokens.colors.gray8,
      alignSelf: 'flex-start',
      marginTop: tokens.spacing.smPlus,
    },
    cashDeliveryIcon: {
      height: verticalScale(34),
      width: scale(34),
    },
    cashOnText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistSemiBold,
    },
    addToCartBtn: {
      width: '48%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: tokens.spacing.sm,
      alignSelf: 'flex-start',
      backgroundColor: tokens.colors.primaryGradientEnd,
    },
    addToCartText: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.white,
    },
    listContainer: {
      marginTop: tokens.spacing.md,
      paddingBottom: tokens.spacing.xxs,
      paddingRight: tokens.spacing.md,
      // flexGrow: 1,
      // marginTop: tokens.spacing.md,
      // paddingBottom: tokens.spacing.xxs,
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },

    // height: verticalScale(200),
    medicineBox: {
      width: scale(167.5),
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      padding: moderateScale(2),
      borderRadius: tokens.radius.sm,
      // marginBottom: tokens.spacing.smPlus,
      marginRight: tokens.spacing.sm,
      backgroundColor: tokens.colors.white,
      overflow: 'hidden',
    },
    cardcontentBox: {
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.xsPlus,
    },

    plusBox: {
      backgroundColor: tokens.colors.mainDark,
      alignItems: 'center',
      justifyContent: 'center',
      padding: moderateScale(2),
      overflow: 'hidden',
      marginLeft: tokens.spacing.sm,
      borderRadius: tokens.radius.xxl,
    },

    // rating
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    ratingText: {
      fontSize: tokens.fontSize.xxs,
      color: tokens.colors.blackDark,
      marginLeft: tokens.spacing.xsPlus,
      fontFamily: fonts.UrbanistMedium,
    },
    ratingGrayText: {
      color: tokens.colors.lightGray,
    },
  });
};
