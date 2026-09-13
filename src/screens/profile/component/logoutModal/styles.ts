import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../../hooks/useAppTheme';
import { fonts } from '../../../../theme';
import { verticalScale } from '../../../../utils/responsiveSize';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, scale } = theme;
  return StyleSheet.create({
    noTexBtn: {
      paddingHorizontal: moderateScale(28),
      paddingVertical: moderateScale(5.5),
      // borderWidth: 0.5,
      borderRadius: moderateScale(4),
      borderColor: tokens.colors.primary,
    },
    noText: {
      fontSize: moderateScale(14.5),
      color: tokens.colors.primary,
      fontFamily: fonts.UrbanistMedium,
    },
    // btnMainContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignSelf: 'flex-end',
    //   marginTop: moderateScale(30),
    // },
    // youContainer: {
    //   width: '100%',
    // },

    // areYouText: {
    //   fontSize: moderateScale(15.8),
    //   color: tokens.colors.black,
    //   fontFamily: fonts.UrbanistRegular,
    //   textAlign: 'center',
    // },
    // modal
    // modalContainer: {
    //   padding: moderateScale(8),
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   // borderRadius: moderateScale(1),
    //   // borderTopLeftRadius: moderateScale(1),
    //   // borderTopRightRadius: moderateScale(1),
    // },
    // overlayStyle: {
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // },
    // contentStyle: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },

    // logoutContentStyle: {
    //   width: '90%',
    //   minHeight: verticalScale(150),
    //   padding: moderateScale(20),
    //   borderRadius: tokens.radius.md,
    // },

    modalContainer: {
      padding: moderateScale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },

    overlayStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    contentStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logoutContentStyle: {
      width: '90%',
      minHeight: verticalScale(10),
      padding: moderateScale(20),
      paddingTop: moderateScale(10),
      paddingHorizontal: moderateScale(16),
      // paddingBottom: 0,
      borderRadius: tokens.radius.md,
    },

    youContainer: {
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center',
    },

    areYouText: {
      fontSize: moderateScale(15.8),
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistRegular,
      // textAlign: 'center',
    },

    btnMainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: moderateScale(25),
    },
  });
};
