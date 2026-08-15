import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, moderateScale, normalize } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    homeContainer: {
      paddingHorizontal: tokens.spacing.md,
    },
    inputMainBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: tokens.spacing.mdPlus,
    },
    textInputBox: {
      height: verticalScale(50),
      borderWidth: 1,
      width: '80%',
      borderColor: 'rgba(18, 148, 137, 0.19)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: tokens.radius.xxl,
      paddingLeft: tokens.spacing.md,
      paddingRight: tokens.spacing.xs,
    },
    inputBox: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      width: '82%',
    },
    searchBox: {
      height: verticalScale(40),
      aspectRatio: 1,
      borderRadius: tokens.radius.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterIconBox: {
      height: verticalScale(40),
      aspectRatio: 1,
      borderRadius: tokens.spacing.xxl,
      backgroundColor: tokens.colors.blackDark,
      alignItems: 'center',
      justifyContent: 'center',
    },

    popularArticle: {
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
      marginBottom: tokens.spacing.mdPlus,
    },
    troubleShootingBox: {
      paddingVertical: tokens.spacing.xs,
      borderWidth: 1,
      width: '100%',
      borderColor: '#e0e0e0',
      borderRadius: tokens.spacing.sm,
    },
    noInterNate: {
      height: verticalScale(23),
      aspectRatio: 1,
    },
    NoInternateBox: {
      height: verticalScale(40),
      aspectRatio: 1,
      borderRadius: tokens.radius.xxl,
      backgroundColor: tokens.colors.lightPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: tokens.spacing.smPlus,
    },
    troubleShootingText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistMedium,
    },
    expireText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistMedium,
    },
    views: {
      height: moderateScale(19),
      width: moderateScale(19),
    },
    viewsTest: {
      fontFamily: fonts.UrbanistRegular,
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
    },
    lineBox: {
      height: 1,
      width: '100%',
      backgroundColor: '#E5E5E5',
    },
    commonCausesText: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.secondaryDark,
      fontFamily: fonts.UrbanistRegular,
      marginLeft: tokens.spacing.md,
      marginTop: tokens.spacing.smPlus,
    },
    dot: {
      height: verticalScale(2.5),
      aspectRatio: 1,
      borderRadius: tokens.radius.lg,
      backgroundColor: tokens.colors.secondaryDark,
      marginHorizontal: tokens.spacing.smPlus,
    },
    mainDotBox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: tokens.spacing.xs,
      marginLeft: tokens.spacing.mdPlus,
    },
    wasTest: {
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
    },
    dislikeIcon: {
      height: moderateScale(20),
      width: moderateScale(20),
    },
    likeIcon: {
      height: moderateScale(20),
      width: moderateScale(20),
      transform: [{ rotate: '180deg' }],
      marginRight: tokens.spacing.sm,
    },
    MainLikeDislikeBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    likeDisLikeBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.tokens.spacing.md,
      marginTop: tokens.spacing.sm,
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
      marginTop: tokens.spacing.xxl,
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
