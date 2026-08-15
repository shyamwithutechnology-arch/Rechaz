import { StyleSheet } from 'react-native';
import { fonts } from '../../theme';
import { AppTheme } from '../../hooks/useAppTheme';
import { scale } from '../../utils/responsiveSize';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, tokens } = theme;
  return StyleSheet.create({
    container: {
      padding: tokens.spacing.md,
      paddingBottom: verticalScale(40),
    },
    homeContainer: {
      backgroundColor: '#F5F7FB',
      paddingTop: tokens.spacing.sm,
      flex: 1,
      // justifyContent: 'center',
    },
    checkStatusText: {
      fontSize: tokens.spacing.md,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistBold,
    },
    merchantBtn: {
      width: '50%',
      borderRadius: tokens.radius.md,
      paddingVertical: verticalScale(10),
      backgroundColor: tokens.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
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
    btnBox: {
      marginTop: tokens.spacing.xxl,
    },
  });
};
