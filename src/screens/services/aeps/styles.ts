import { StyleSheet } from 'react-native';
import { fonts } from '../../../theme';
import { AppTheme } from '../../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, normalize, moderateScale } = theme;
  return StyleSheet.create({
    container: {
      padding: tokens.spacing.md,
      paddingBottom: verticalScale(40),
    },
    homeContainer: {
      backgroundColor: '#F5F7FB',
      paddingTop: tokens.spacing.md,
    },
    walletCard: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.sm,
      padding: tokens.spacing.sm,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: verticalScale(18),
      elevation: 4,
      marginTop: tokens.spacing.md,
    },

    walletTitle: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistMedium,
      color: '#666',
    },

    walletAmount: {
      fontSize: tokens.fontSize.xxl,
      fontFamily: fonts.UrbanistBold,
      color: '#00897B',
      marginTop: verticalScale(6),
    },

    addBalanceButton: {
      backgroundColor: '#00897B',
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.smPlus,
      borderRadius: tokens.radius.xxl,
    },

    addBalanceText: {
      color: '#fff',
      fontFamily: fonts.UrbanistSemiBold,
    },

    label: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.secondaryDark,
      marginBottom: verticalScale(8),
    },
    mobileNumberTop: {
      marginTop: verticalScale(13),
    },
    deviceContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: verticalScale(18),
    },
    deviceTypeError: {
      marginBottom: tokens.spacing.md,
      marginTop: 0,
    },

    deviceItem: {
      paddingHorizontal: tokens.spacing.lg,
      paddingVertical: tokens.spacing.sm,
      borderWidth: 1,
      borderColor: '#0B8A83',
      borderRadius: tokens.radius.lg,
      marginRight: tokens.spacing.sm,
      marginBottom: tokens.spacing.sm,
    },

    activeDevice: {
      backgroundColor: '#0B8A83',
    },

    deviceText: {
      color: '#0B8A83',
      fontFamily: fonts.UrbanistSemiBold,
    },

    activeDeviceText: {
      color: '#fff',
    },

    bioCard: {
      backgroundColor: '#fff',
      borderRadius: tokens.radius.xl,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: verticalScale(20),
      marginVertical: verticalScale(20),
      elevation: 3,
    },

    bioImage: {
      width: moderateScale(90),
      height: moderateScale(90),
      resizeMode: 'contain',
    },

    bioText: {
      marginTop: verticalScale(10),
      fontSize: tokens.fontSize.sm,
      color: '#00897B',
      fontFamily: fonts.UrbanistSemiBold,
    },

    checkRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: verticalScale(20),
      marginTop: verticalScale(20),
    },

    checkBox: {
      width: moderateScale(20),
      height: moderateScale(20),
      borderRadius: 6,
      backgroundColor: '#00897B',
      marginRight: tokens.spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkText: {
      flex: 1,
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistMedium,
      color: '#555',
    },

    securityCard: {
      backgroundColor: '#F1FAF8',
      borderRadius: tokens.radius.xl,
      flexDirection: 'row',
      alignItems: 'center',
      padding: tokens.spacing.md,
      marginTop: verticalScale(16),
    },

    securityIcon: {
      width: moderateScale(40),
      height: moderateScale(40),
      marginRight: tokens.spacing.md,
    },

    securityTitle: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistBold,
      color: '#00897B',
    },

    securitySub: {
      fontSize: tokens.fontSize.xs,
      color: '#777',
      marginTop: 4,
    },

    error: {
      color: 'red',
      fontSize: tokens.fontSize.xs,
      marginTop: verticalScale(4),
      // marginBottom: verticalScale(10),
    },
    fingerprintIcon: {
      height: moderateScale(75),
      width: moderateScale(75),
      alignSelf: 'center',
    },
  });
};
