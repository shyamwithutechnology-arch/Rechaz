import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, scale } = theme;
  return StyleSheet.create({
    // serch
    seachTextBox: {
      paddingHorizontal: tokens.spacing.sm,
      borderWidth: 1.5,
      paddingVertical: tokens.spacing.xxs,
      borderRadius: tokens.spacing.sm,
      borderColor: tokens.colors.lightPrimary,
      elevation: 50,
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
