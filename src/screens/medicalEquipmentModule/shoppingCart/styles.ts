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

    medicineBox: {
      width: '100%',
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      paddingVertical: tokens.spacing.sm,
      borderRadius: tokens.radius.mdPlus,
      marginBottom: tokens.spacing.smPlus,
      backgroundColor: tokens.colors.white,
      flexDirection: 'row',
      paddingHorizontal: tokens.spacing.smPlus,
      justifyContent: 'space-between',
    },

    medicineImg: {
      height: verticalScale(80),
      width: scale(110),
      alignSelf: 'flex-start',
      marginRight: tokens.spacing.sm,
    },
    stipeText: {
      fontSize: tokens.fontSize.xxs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.primary,
      // marginTop: tokens.spacing.,
    },
    titleText: {
      fontSize: tokens.fontSize.smPlus,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.headingColor,
      marginVertical: tokens.spacing.xs,
    },
    quantityText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.lightGray,
    },

    /////////////
    countBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      paddingVertical: tokens.spacing.xxs,
      paddingHorizontal: tokens.spacing.smPlus,
      borderRadius: tokens.spacing.xs,
      marginTop: tokens.spacing.sm,
      width: scale(90),
    },
    decreseText: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistMedium,
    },
    addToCartBox: {
      backgroundColor: tokens.colors.mainDark,
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
      fontSize: tokens.fontSize.sm,
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
      borderRadius: tokens.spacing.sm,
      borderColor: tokens.colors.lightPrimary,
      marginTop: tokens.spacing.xsPlus,
    },
    amountText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistBold,
      alignSelf: 'flex-end',
      marginTop: tokens.spacing.md,
    },
    relatedWisListBox: {
      height: verticalScale(28),
      aspectRatio: 1,
      backgroundColor: tokens.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.spacing.xxl,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      marginRight: tokens.spacing.smPlus,
    },
    deleteIcon: {
      width: moderateScale(28),
      height: moderateScale(28),
    },

    innerBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    innerBox1: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 5,
      right: 0,
    },

    listContainer: {
      paddingBottom: tokens.spacing.lg,
    },
    discountBox: {
      paddingHorizontal: tokens.spacing.xs,
      paddingVertical: tokens.spacing.xs,
      borderWidth: 1,
      borderRadius: tokens.radius.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: tokens.colors.white,
      borderColor: '#cce4e2',
    },
    discountText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.darkColor,
      fontFamily: fonts.UrbanistRegular,
      marginLeft: tokens.spacing.md,
    },
    applyBox: {
      paddingHorizontal: tokens.spacing.xl,
      paddingVertical: tokens.spacing.sm,
      backgroundColor: tokens.colors.primaryGradientEnd,
      alignSelf: 'flex-end',
      borderRadius: tokens.radius.sm,
    },
    applyText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistRegular,
    },

    getItBox: {
      width: '100%',
      paddingLeft: tokens.spacing.smPlus,
      paddingRight: tokens.spacing.xs,
      backgroundColor: tokens.colors.darkColor,
      paddingVertical: tokens.spacing.xsPlus,
      borderRadius: tokens.radius.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: tokens.spacing.md,
      marginTop: tokens.spacing.md,
    },
    getInnerBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    subtotalInner: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: tokens.spacing.xsPlus,
    },
    copunIcon: {
      height: moderateScale(20),
      width: moderateScale(20),
      marginRight: tokens.spacing.sm,
    },
    getText: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.lightPrimary,
    },
    amoutText: {
      fontFamily: fonts.UrbanistExtraBold,
      color: tokens.colors.white,
    },
    subTotalText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    subTotalBox: {
      padding: moderateScale(11),
      backgroundColor: tokens.colors.white,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderRadius: tokens.radius.sm,
      marginBottom: tokens.spacing.smPlus,
      marginTop: tokens.spacing.xl,
    },
    lineBox: {
      height: 2,
      backgroundColor: '#EBEBEB',
      width: '100%',
      marginTop: tokens.spacing.sm,
      marginBottom: tokens.spacing.md,
    },
    totalText: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistSemiBold,
      // marginTop: tokens.spacing.md,
    },
    checkOut: {
      marginTop: tokens.spacing.sm,
      paddingVertical: verticalScale(10.5),
    },
  });
};
