import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, verticalScale } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    homeContainer: {
      paddingHorizontal: tokens.fontSize.md,
      marginTop: tokens.spacing.sm,
    },
    // fileUploadBox: {
    //   paddingVertical: tokens.spacing.xl,
    //   borderWidth: 1,
    //   borderColor: tokens.colors.borderColor,
    //   width: '100%',
    //   alignSelf: 'center',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   borderRadius: tokens.radius.sm,
    //   marginTop: tokens.spacing.smPlus,
    // },
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
    },
    plusIcon: {
      height: moderateScale(25),
      width: moderateScale(25),
    },
    uploadFileTest: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      marginRight: tokens.spacing.smPlus,
    },
    dropDownBox: {
      marginVertical: tokens.spacing.smPlus,
    },
    markBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: tokens.spacing.lg,
      marginBottom: tokens.spacing.xxl,
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
    plushIcon: {
      height: moderateScale(30),
      width: moderateScale(30),
    },
    uploadDoctorText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    btnStyle: {
      paddingVertical: verticalScale(10.5),
    },
  });
};
