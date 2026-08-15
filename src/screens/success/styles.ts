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
      alignItems: 'center',
      justifyContent: 'center',
    },
    ticketCard: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.md,
      padding: tokens.spacing.md,
      marginHorizontal: tokens.spacing.xxs,
      paddingVertical: tokens.spacing.sm,
      width: '100%',

      paddingHorizontal: tokens.spacing.md,
      overflow: 'hidden',
      position: 'relative',
    },

    leftCurve: {
      position: 'absolute',
      left: -12,
      top: '25%',
      height: moderateScale(24),
      width: moderateScale(24),
      borderRadius: moderateScale(12),
      backgroundColor: '#DBEDEB',
      zIndex: 10,
    },

    rightCurve: {
      position: 'absolute',
      right: -12,
      top: '25%',
      height: moderateScale(24),
      width: moderateScale(24),
      borderRadius: moderateScale(12),
      backgroundColor: '#DBEDEB',
      zIndex: 10,
    },

    rightIconBox: {
      backgroundColor: 'rgba(35, 162, 109, 0.12)',
      padding: moderateScale(18),
      borderRadius: tokens.radius.xxl,
      alignSelf: 'center',
      marginTop: tokens.spacing.sm,
    },
    success: {
      height: moderateScale(32),
      width: moderateScale(32),
    },
    paymentSuccessText: {
      fontSize: tokens.fontSize.lg,
      color: '#121212',
      fontFamily: fonts.UrbanistSemiBold,
      alignSelf: 'center',
      marginTop: tokens.spacing.xsPlus,
    },
    yourPayment: {
      fontSize: tokens.fontSize.sm,
      color: '#474747',
      fontFamily: fonts.UrbanistRegular,
      alignSelf: 'center',
      marginBottom: tokens.spacing.sm,
    },
    dexLine: {
      width: '100%',
      borderTopWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#DCDEE0',
      marginVertical: tokens.spacing.lg,
    },
    dexLine1: {
      width: '100%',
      height: 1,
      backgroundColor: '#E8EAED',
      marginVertical: tokens.spacing.lg,
    },

    orderIdText: {
      color: '#707070',
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistRegular,
    },
    orderCareText: {
      color: '#121212',
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
    },
    orderBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: tokens.spacing.smPlus,
    },
    getPdfText: {
      fontSize: tokens.fontSize.sm,
      color: '#3D3D3D',
      fontFamily: fonts.UrbanistMedium,
    },
    downLoadIcon: {
      height: moderateScale(24),
      width: moderateScale(24),
    },
    getPdfBtn: {
      paddingHorizontal: tokens.spacing.sm,
      marginHorizontal: tokens.spacing.xxs,
      backgroundColor: tokens.colors.white,
      borderWidth: 1,
      borderColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: tokens.spacing.smPlus,
      borderRadius: tokens.spacing.sm,
      marginBottom: tokens.spacing.lg,
      marginTop: tokens.spacing.sm,
    },
    btnBox: {
      marginTop: tokens.spacing.lg,
      marginBottom: tokens.spacing.md,
      width: '66%',
    },
  });
};
