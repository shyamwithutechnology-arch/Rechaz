import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, verticalScale, scale } = theme;
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    dropdown: {
      height: verticalScale(43),
      borderWidth: 0.5,
      borderColor: tokens.colors.lightGray,
      borderRadius: tokens.radius.md,
      paddingHorizontal: tokens.spacing.sm,
    },
    placeholder: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    selectedText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistRegular,
    },
    icon: {
      width: moderateScale(19),
      height: moderateScale(19),
      marginRight: tokens.spacing.smPlus,
      resizeMode: 'contain',
    },

    itemContainer: {
      paddingVertical: tokens.spacing.sm,
      paddingHorizontal: tokens.spacing.md,
      borderWidth: 1,
      marginTop: tokens.spacing.sm,
      borderRadius: scale(6),
      borderColor: '#d6d4d4',
      // backgroundColor: 'red',
    },
    selectedItemContainer: {
      backgroundColor: tokens.colors.primary,
    },
    containerDropdown: {
      // backgroundColor: '#000',
      paddingHorizontal: tokens.spacing.sm,
      paddingVertical: tokens.spacing.sm,
      marginTop: 0,
      borderRadius: tokens.radius.sm,
    },
    itemText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistRegular,
      // backgroundColor: 'green',
    },
    selectedItemText: {
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
      // backgroundColor: 'green',
    },
  });
};
