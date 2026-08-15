import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';

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
    headerBox: {
      height: verticalScale(30),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: tokens.spacing.md,
      marginTop: tokens.spacing.sm,
    },
    downUpStyle: {
      height: tokens.spacing.md,
      width: tokens.spacing.md,
    },
    listContainer: {
      paddingBottom: tokens.spacing.lg,
    },

    /////////
  });
};
