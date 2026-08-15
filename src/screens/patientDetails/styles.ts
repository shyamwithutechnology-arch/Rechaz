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
      paddingTop: tokens.spacing.mdPlus,
    },

    callAndAgeBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: tokens.spacing.sm,
    },
    slotContainer: {
      flexGrow: 1,
      marginBottom: tokens.spacing.xsPlus,
    },

    dateSelectBox: {
      marginTop: tokens.spacing.md,
    },
    phoneBox: {
      width: '70%',
    },
    ageInput: {
      width: '25%',
    },
    ageIcon: {
      height: moderateScale(18),
      width: moderateScale(18),
    },
    ageIconStyle: {
      height: moderateScale(17),
      width: moderateScale(17),
    },
    emailIcon: {
      height: moderateScale(16),
      width: moderateScale(16),
    },
    dropDownBox: {
      marginVertical: tokens.spacing.smPlus,
    },
    mapBox: {
      marginTop: tokens.spacing.smPlus,
    },
    selectDate: {
      fontSize: normalize(13),
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    clockIcon: {
      height: moderateScale(18),
      width: moderateScale(18),
    },
    varifinedIcon: {
      height: moderateScale(22),
      width: moderateScale(22),
    },
    varifiedText: {
      fontSize: normalize(15),
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistSemiBold,
    },
    varifiedDecText: {
      fontSize: tokens.fontSize.xs,
      color: '#515253',
      fontFamily: fonts.UrbanistRegular,
    },
    uploadDoctorCard: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: verticalScale(100),
      borderWidth: 0.5,
      borderRadius: tokens.radius.md,
      // paddingVertical: tokens.spacing.lg,
      borderColor: tokens.colors.lightGray,
      marginTop: tokens.spacing.lg,
      // width: '100%',
      // height: verticalScale(100),
      // borderStyle: 'solid',
      // borderRadius: tokens.spacing.md,
      // justifyContent: 'center',
      // alignItems: 'center',
      // overflow: 'hidden',
      // marginTop: tokens.spacing.lg,
      // borderWidth: 0.5,
      // borderColor: tokens.colors.lightGray,
    },
    plushIcon: {
      height: moderateScale(30),
      width: moderateScale(30),
    },
    uploadDoctorText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    verifiedTrainedCard: {
      width: '100%',
      borderWidth: 0.5,
      borderRadius: tokens.radius.md,
      paddingVertical: tokens.spacing.lg,
      borderColor: tokens.colors.lightGray,
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: tokens.spacing.sm,
      backgroundColor: '#D1E5E3',
      marginTop: tokens.spacing.md,
      marginBottom: tokens.spacing.md,
    },
    listContainer: {
      // paddingRight: tokens.spacing.xxs,
      flexGrow: 1,
      marginBottom: tokens.spacing.smPlus,
    },
    card: {
      width: scale(60),
      height: verticalScale(70),
      borderWidth: 2,
      borderColor: '#E6E6E6',
      borderRadius: scale(13),
      marginRight: tokens.spacing.smPlus,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: tokens.colors.white,
    },
    selectedCard: {
      backgroundColor: tokens.colors.primary,
      borderWidth: 0,
    },
    dayText: {
      color: '#747474',
      fontSize: tokens.fontSize.xxs,
      fontFamily: fonts.UrbanistRegular,
      marginBottom: tokens.spacing.smPlus,
    },
    dateText: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistSemiBold,
    },

    selectedText: {
      color: tokens.colors.white,
      fontSize: tokens.fontSize.mdPlus,
      fontFamily: fonts.UrbanistSemiBold,
    },

    selectedTextDay: {
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistRegular,
    },
    timeText: {
      fontSize: tokens.fontSize.xxs,
      fontFamily: fonts.UrbanistMedium,
      color: '#747474',
      marginLeft: tokens.spacing.sm,
    },
    slotBox: {
      width: scale(82.5),
      paddingLeft: tokens.spacing.sm,
      paddingVertical: scale(10),
      marginRight: tokens.spacing.xs,
      borderWidth: 1,
      borderColor: '#E6E6E6',
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: tokens.radius.sm,
      marginBottom: tokens.spacing.sm,
    },
    selectedSlot: {
      backgroundColor: tokens.colors.primary,
    },
    selectedSlotTime: {
      color: tokens.colors.white,
    },

    radioButton: {
      height: verticalScale(13),
      aspectRatio: 1,
      borderRadius: tokens.radius.lg,
      padding: moderateScale(1),
      borderWidth: 1.2,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: tokens.colors.primary,
    },
    innerBox: {
      backgroundColor: tokens.colors.primary,
      height: tokens.spacing.xsPlus,
      aspectRatio: 1,
      borderRadius: tokens.radius.lg,
    },
    forMySelfText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistRegular,
      marginLeft: tokens.spacing.sm,
    },
    forMySelftBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    forMySelfMainBox: {
      justifyContent: 'flex-start',
    },
    uploadedImage: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
    },
    crossBox: {
      height: verticalScale(18),
      aspectRatio: 1,
      position: 'absolute',
      backgroundColor: tokens.colors.red,
      alignItems: 'center',
      justifyContent: 'center',
      right: 10,
      top: 8,
      borderRadius: tokens.radius.xxl,
    },
    btnStyle: {
      marginBottom: 'auto',
      paddingVertical: verticalScale(10.5),
    },
    nameInput: {
      marginTop: tokens.spacing.md,
      marginBottom: tokens.spacing.smPlus,
    },
  });
};
