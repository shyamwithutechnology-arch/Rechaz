import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../../../hooks/useAppTheme';
import { fonts } from '../../../../../theme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, moderateScale, tokens } = theme;
  return StyleSheet.create({
    trackingMainRow: {
      flexDirection: 'row',
      paddingHorizontal: tokens.spacing.md,
    },
    trackingCircle: {
      width: moderateScale(13),
      height: moderateScale(13),
      borderRadius: tokens.spacing.xxl,
    },
    completeBox: {
      width: scale(2),
      height: verticalScale(33),
      backgroundColor: '#E5E5E5',
    },
    titleBox: {
      flex: 1,
      marginLeft: tokens.spacing.md,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    orderStatusText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistSemiBold,
    },
    orderDateText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistRegular,
    },
  });
};

// #868889
