import { StyleSheet } from 'react-native';
import { fonts } from '../../../theme';
import { AppTheme } from '../../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, normalize, moderateScale } = theme;
  return StyleSheet.create({
    headerTitle: {
      fontSize: tokens.fontSize.lg,
      fontFamily: fonts.UrbanistBold,
      color: tokens.colors.blackDark,
      marginLeft: tokens.spacing.md,
    },

    formContainer: {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.lg,
      // padding: tokens.spacing.lg,
      elevation: 5,
      shadowColor: 'rgba(0,0,0,0.1)',
      marginTop: tokens.spacing.mdPlus,
    },

    label: {
      fontSize: tokens.fontSize.sm,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
      marginBottom: tokens.spacing.sm,
    },

    input: {
      height: verticalScale(48),
      borderWidth: 1,
      borderColor: '#E5E5E5',
      borderRadius: tokens.radius.md,
      paddingHorizontal: tokens.spacing.md,
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistMedium,
      marginBottom: tokens.spacing.lg,
    },

    payButton: {
      height: verticalScale(50),
      borderRadius: tokens.radius.md,
      backgroundColor: tokens.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: tokens.spacing.md,
    },

    payButtonText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistBold,
    },
  });
};
