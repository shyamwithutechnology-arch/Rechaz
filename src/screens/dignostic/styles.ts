import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, verticalScale, scale, normalize, moderateScale } = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: tokens.colors.white,
    },
    homeContainer: {
      flex: 1,
      paddingHorizontal: tokens.spacing.md,
    },
    diagnosticBox: {
      paddingVertical: tokens.spacing.xxs,
      backgroundColor: tokens.colors.mainDark,
      width: '100%',
      borderRadius: tokens.radius.md,
      paddingHorizontal: tokens.spacing.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: tokens.spacing.smPlus,
    },
    DiagnosticTextBtn: {
      backgroundColor: tokens.colors.mainDark,
      paddingVertical: tokens.spacing.xs,
      marginVertical: tokens.spacing.xs,
      borderRadius: tokens.radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: tokens.spacing.lg,
    },
    DiagnosticText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
    },
    diagnosticBg: {
      backgroundColor: tokens.colors.primary,
    },
    cardBox: {
      paddingHorizontal: tokens.spacing.sm,
      paddingVertical: tokens.spacing.md,
      backgroundColor: 'rgba(214, 234, 232, 0.37)',
      // backgroundColor: 'green',
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      width: '48.5%',
      alignSelf: 'center',
      marginRight: scale(6),
      marginLeft: tokens.spacing.xxs,
      marginBottom: tokens.spacing.sm,
      // height: verticalScale(170),
      borderRadius: tokens.radius.md,
    },
    testPackageBox: {
      paddingHorizontal: tokens.spacing.sm,
    },
    tileText: {
      fontSize: normalize(10.4),
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.headingColor,
    },
    decText: {
      fontSize: normalize(10),
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.lightGray,
      marginTop: tokens.spacing.xs,
      marginBottom: tokens.spacing.smPlus,
    },
    disCountText: {
      fontSize: normalize(13),
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.headingColor,
      marginBottom: tokens.spacing.md,
    },
    actualText: {
      fontSize: normalize(10),
      fontFamily: fonts.UrbanistRegular,
      color: '#989595',
      marginBottom: tokens.spacing.md,
      marginHorizontal: tokens.spacing.xs,
    },
    disCountOffer: {
      fontSize: normalize(10),
      fontFamily: fonts.UrbanistMedium,
      color: 'rgba(25, 151, 93, 1)',
      marginBottom: tokens.spacing.smPlus,
    },
    discountBox: {
      backgroundColor: 'rgba(88, 207, 153, 0.21)',
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(20),
      width: scale(50),
      marginBottom: tokens.spacing.smPlus,
      borderRadius: scale(2),
    },
    innerItemBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    lineBox: {
      height: 1,
      width: '100%',
      backgroundColor: tokens.colors.lightPrimary,
      marginBottom: tokens.spacing.smPlus,
    },
    modalBottomLine: {
      height: 1,
      width: '100%',
      backgroundColor: '#e1e1e1',
      marginBottom: tokens.spacing.md,
    },
    dot: {
      height: verticalScale(3),
      aspectRatio: 1,
      borderRadius: tokens.radius.xxl,
      backgroundColor: tokens.colors.secondaryDark,
      marginRight: tokens.spacing.sm,
    },
    triText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistMedium,
    },
    addToCartBox: {
      borderWidth: 0.8,
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.sm,
      backgroundColor: tokens.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.spacing.xxs,
      borderColor: tokens.colors.primaryGradientEnd,
    },

    addToCartText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.primaryGradientEnd,
      fontFamily: fonts.UrbanistSemiBold,
    },
    packageImg: {
      height: verticalScale(80),
      width: '100%',
      borderTopRightRadius: tokens.radius.sm,
      borderTopLeftRadius: tokens.radius.sm,
      marginBottom: tokens.spacing.sm,
    },
    readMoreMainBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: tokens.spacing.sm,
    },
    readMoreBtn: {
      paddingVertical: scale(6),
      borderWidth: 0.5,
      borderColor: tokens.colors.primaryGradientEnd,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(3),
      width: '48%',
      paddingHorizontal: tokens.spacing.xxs,
    },
    readMoreText: {
      fontSize: tokens.fontSize.xxs,
      color: tokens.colors.primaryGradientEnd,
      fontFamily: fonts.UrbanistSemiBold,
    },

    includesText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistBold,
      alignSelf: 'center',
      marginBottom: tokens.spacing.smPlus,
    },
    bntStyles: {
      paddingVertical: scale(10),
      marginTop: tokens.spacing.xl,
    },
    btnTitle: {
      fontSize: tokens.fontSize.md,
    },
    closeBox: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.xl,
      position: 'absolute',
      top: verticalScale(-30),
      right: 0,
      padding: moderateScale(9),
    },
    closeIcon: {
      height: moderateScale(11),
      aspectRatio: 1,
    },

    // serch
    seachTextBox: {
      paddingHorizontal: tokens.spacing.sm,
      borderWidth: 1,
      paddingVertical: tokens.spacing.xxs,
      borderRadius: tokens.spacing.sm,
      borderColor: tokens.colors.lightPrimary,
      elevation: 5,
      shadowColor: tokens.colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: tokens.spacing.smPlus,
    },
    textInput: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistMedium,
      // borderWidth: 1,
      flex: 1, // 👈 take available space
      marginRight: tokens.spacing.xs,
    },
    typeValueStatus: {
      width: '99.5%',
      // borderWidth: 1,
    },
    seachBox: {
      paddingHorizontal: tokens.spacing.sm,
      paddingVertical: tokens.spacing.sm,
      alignSelf: 'center',
      borderRadius: tokens.radius.md,
      // marginLeft:tokens.spacing.sm
    },
  });
};
