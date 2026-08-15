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
      backgroundColor: '#F9F8F8',
      marginBottom: tokens.spacing.mdPlus,
    },
    liverText: {
      fontSize: normalize(15),
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistSemiBold,
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
      backgroundColor: tokens.colors.mainDark,
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
      color: tokens.colors.mainDark,
      fontFamily: fonts.UrbanistSemiBold,
    },
    removeBtn: {
      paddingHorizontal: tokens.spacing.smPlus,
      paddingVertical: tokens.spacing.xxxs,
      borderWidth: 1,
      borderColor: tokens.colors.mainDark,
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
    totalAmoutDiscount: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.gray3,
      fontFamily: fonts.UrbanistSemiBold,
    },

    totalAmount: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistBold,
    },

    amountText: {
      fontSize: tokens.fontSize.smPlus,
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistRegular,
    },

    mainAmountBox: {
      borderWidth: 1,
      borderColor: tokens.colors.lightGray,
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.md,
      borderRadius: tokens.radius.md,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: tokens.spacing.md,
    },
    payByUpiBox: {
      width: '100%',
      borderWidth: 0.5,
      borderColor: tokens.colors.lightGray,
      borderRadius: tokens.radius.md,
    },
    payBox: {
      marginTop: tokens.spacing.md,
      marginBottom: tokens.spacing.lg,
    },
    payHeader: {
      backgroundColor: tokens.colors.lightGray,
      borderTopRightRadius: tokens.spacing.sm,
      borderTopLeftRadius: tokens.spacing.sm,
      paddingHorizontal: tokens.spacing.smPlus,
      paddingVertical: tokens.spacing.sm,
    },
    payText: {
      fontSize: tokens.fontSize.smPlus,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistMedium,
    },
    phonePayText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistMedium,
      marginLeft: tokens.spacing.sm,
    },
    wrapText: {
      fontSize: tokens.fontSize.xxs,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistRegular,
      marginLeft: tokens.spacing.sm,
    },
    visaCardText: {
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.secondaryDark,
    },
    phonePeIcon: {
      height: moderateScale(26),
      width: moderateScale(26),
    },
    phonePeBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: tokens.spacing.sm,
    },
    phonePeLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    lineBox: {
      height: verticalScale(0.4),
      backgroundColor: tokens.colors.gray10,
      width: '98%',
    },
    mainPayBox: {
      paddingHorizontal: tokens.spacing.smPlus,
    },

    newBtn: {
      paddingHorizontal: tokens.spacing.smPlus,
      paddingVertical: tokens.spacing.smPlus,
      backgroundColor: tokens.colors.black,
      marginHorizontal: tokens.spacing.xs,
      borderRadius: tokens.spacing.smPlus,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom: tokens.spacing.sm,
      marginTop: tokens.spacing.md,
    },
    addNewCardText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
    },
    plusIcon: {
      height: moderateScale(20),
      width: moderateScale(20),
    },
    btnStyle: {
      paddingVertical: verticalScale(10.5),
    },
  });
};
