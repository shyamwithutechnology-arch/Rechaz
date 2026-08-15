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

    liveFnBox: {
      width: '100%',
      borderWidth: 0.5,
      borderRadius: tokens.radius.md,
      paddingVertical: tokens.spacing.sm,
      borderColor: tokens.colors.lightGray,
      paddingHorizontal: tokens.spacing.sm,
      backgroundColor: tokens.colors.gray8,
      marginBottom: tokens.spacing.mdPlus,
    },
    liverText: {
      fontSize: tokens.fontSize.smPlus,
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistSemiBold,
      includeFontPadding: false,
      textAlignVertical: 'center',
      lineHeight: normalize(18),
    },
    thyroidText: {
      fontSize: normalize(10),
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      marginBottom: tokens.spacing.xs,
      // marginTop: tokens.spacing.xs,
    },
    actialPrice: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistBold,
    },
    discountText: {
      fontSize: normalize(9),
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      textDecorationLine: 'line-through',
      marginLeft: tokens.spacing.xs,
    },

    offerBox: {
      paddingVertical: moderateScale(3),
      paddingHorizontal: moderateScale(7),
      backgroundColor: tokens.colors.primaryGradientEnd,
      borderRadius: scale(4),
      alignSelf: 'flex-end',
      marginTop: tokens.spacing.xs,
      marginBottom: tokens.spacing.sm,
    },
    offierText: {
      fontSize: normalize(9),
      fontFamily: fonts.UrbanistMedium,
      color: tokens.colors.white,
    },
    priceTextAlign: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    clockIcon: {
      height: moderateScale(16),
      width: moderateScale(16),
    },
    earliestText: {
      fontSize: tokens.fontSize.xxs,
      fontFamily: fonts.UrbanistMedium,
      color: '#B7B7B7',
      marginLeft: tokens.spacing.xs,
    },
    removeText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.primaryGradientEnd,
      fontFamily: fonts.UrbanistSemiBold,
    },
    removeBtn: {
      paddingHorizontal: tokens.spacing.smPlus,
      paddingVertical: tokens.spacing.xxxs,
      borderWidth: 1,
      borderColor: tokens.colors.primaryGradientEnd,
      borderRadius: tokens.spacing.xs,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      backgroundColor: tokens.colors.white,
    },

    patientInfomationBox: {
      paddingBottom: tokens.spacing.xs,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      borderRadius: tokens.spacing.sm,
    },
    patientText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistMedium,
    },
    patientHeader: {
      paddingVertical: tokens.spacing.sm,
      backgroundColor: tokens.colors.primary,
      borderTopRightRadius: tokens.spacing.sm,
      borderTopLeftRadius: tokens.spacing.sm,
      paddingLeft: tokens.spacing.md,
    },
    nameText: {
      fontSize: tokens.fontSize.smPlus,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    userText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistSemiBold,
    },
    lineBox: {
      height: verticalScale(1.5),
      backgroundColor: tokens.colors.lightPrimary,
      width: '92%',
      alignSelf: 'center',
    },
    patientNameBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: tokens.spacing.smPlus,
      marginVertical: tokens.spacing.smPlus,
    },
    totalAmountBox: {
      paddingHorizontal: tokens.spacing.sm,
      backgroundColor: '#1D5559',
      borderWidth: 1,
      borderColor: 'rgba(19, 186, 172, 0.19)',

      width: '100%',
      borderRadius: tokens.radius.md,
      paddingVertical: tokens.spacing.sm,
      marginBottom: tokens.spacing.smPlus,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: tokens.spacing.md,
    },

    totalAmountText: {
      fontSize: tokens.fontSize.smPlus,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistRegular,
    },
    twoItemText: {
      fontSize: tokens.fontSize.smPlus,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
    },
    totalAmount: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistBold,
    },
    totalAmoutDiscount: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.gray3,
      fontFamily: fonts.UrbanistSemiBold,
      textDecorationLine: 'line-through',
    },
    btnStyle: {
      marginBottom: 'auto',
      paddingVertical: verticalScale(10.5),
    },
  });
};
