import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (thme: AppTheme) => {
  const { verticalScale, scale, tokens, normalize, moderateScale } = thme;
  return StyleSheet.create({
    container: {
      backgroundColor: tokens.colors.white,
    },
    homeContainer: {
      paddingHorizontal: tokens.spacing.md,
      flex: 1,
      backgroundColor: tokens.colors.white,
      marginTop: tokens.spacing.smPlus,
    },
    inputBox: {
      marginVertical: tokens.spacing.sm,
    },
    leftIcon: {
      width: moderateScale(17),
      height: moderateScale(17),
    },
    leftIconCall: {
      width: moderateScale(19),
      height: moderateScale(19),
    },
    leftIconEmail: {
      width: moderateScale(15.5),
      height: moderateScale(15.5),
    },
    needHelpBox: {
      width: '100%',
      borderWidth: 1,
      paddingTop: tokens.spacing.xxs,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: tokens.spacing.md,
      justifyContent: 'space-between',
      borderRadius: tokens.radius.md,
      borderColor: 'rgba(19, 186, 172, 0.72)',
      marginTop: tokens.spacing.mdPlus,
    },
    btnStyle: {
      marginTop: tokens.spacing.smPlus,
      // marginBottom: tokens.spacing.xxs,
      paddingVertical: verticalScale(10.5),
    },
    needText: {
      fontSize: tokens.fontSize.lg,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistBold,
      marginTop: tokens.spacing.md,
    },
    contextText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistRegular,
      marginTop: tokens.spacing.xs,
    },
    helpImg: {
      height: '100%',
      width: '100%',
      // aspectRatio: 1,
    },
    createTicketBtn: {
      paddingVertical: tokens.spacing.sm,
      width: '60%',
      backgroundColor: tokens.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.radius.sm,
      marginVertical: tokens.spacing.sm,
    },
    helpImgBox: {
      height: verticalScale(110),
      aspectRatio: 1,
      marginTop: tokens.spacing.md,
    },
    createTicket: {
      fontSize: normalize(7.5),
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistSemiBold,
    },
  });
};
