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

    diagnosticBox: {
      paddingVertical: tokens.spacing.xxs,
      backgroundColor: tokens.colors.mainDark,
      width: '100%',
      borderRadius: tokens.radius.md,
      paddingHorizontal: tokens.spacing.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginTop: tokens.spacing.xxs,
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

    medicineBox: {
      width: '48%',
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      paddingVertical: tokens.spacing.sm,
      borderRadius: tokens.radius.md,
      marginBottom: tokens.spacing.smPlus,
      overflow: 'hidden',
    },

    medicineImg: {
      height: verticalScale(80),
      width: '100%',
    },
    medicineRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    wisListBox: {
      height: verticalScale(23),
      aspectRatio: 1,
      backgroundColor: tokens.colors.lightPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 6,
      right: 6,
      borderRadius: tokens.spacing.xxl,
    },

    plusBox: {
      backgroundColor: tokens.colors.mainDark,
      alignItems: 'center',
      justifyContent: 'center',
      padding: moderateScale(2),
      overflow: 'hidden',
      marginLeft: tokens.spacing.xs,
      borderRadius: tokens.radius.xxl,
    },
    listContainer: {
      flexGrow: 1,
      marginTop: tokens.spacing.md,
      paddingBottom: tokens.spacing.xxl,
    },
    columnWrapper: {
      justifyContent: 'space-between',
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
      marginBottom: tokens.spacing.smPlus,
    },
    offiredText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistBold,
    },
    includerText: {
      fontSize: tokens.fontSize.xxs,
      color: '#989595',
      fontFamily: fonts.UrbanistMedium,
    },
    amountRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardcontentBox: {
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.xsPlus,
    },
    lineBox: {
      height: 1,
      backgroundColor: tokens.colors.lightPrimary,
      width: '100%',
      marginBottom: tokens.spacing.sm,
    },
  });
};
