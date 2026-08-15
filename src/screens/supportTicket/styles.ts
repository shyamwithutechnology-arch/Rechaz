import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, verticalScale, scale, moderateScale } = theme;
  return StyleSheet.create({
    containe: {
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
      height: verticalScale(42),
      borderWidth: 1,
      width: '83%',
      borderColor: 'rgba(18, 148, 137, 0.19)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: tokens.radius.xxl,
      paddingLeft: tokens.spacing.md,
      paddingRight: tokens.spacing.xs,
      elevation: 5,
      shadowColor: '#fff',
    },
    inputBox: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      width: '82%',
    },
    searchBox: {
      height: verticalScale(33),
      aspectRatio: 1,
      borderRadius: tokens.radius.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterIconBox: {
      height: verticalScale(37),
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

    inProgressBtn: {
      width: '30%',
      paddingVertical: tokens.spacing.sm,
      paddingHorizontal: tokens.spacing.xxs,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.radius.sm,
      backgroundColor: '#D8EDFF',
      marginRight: tokens.spacing.md,
    },
    inProgressTest: {
      fontSize: tokens.fontSize.sm,
      color: '#386AC3',
      fontFamily: fonts.UrbanistMedium,
    },
    mainInProgressBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userBox: {
      padding: moderateScale(13),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: tokens.spacing.xxl,
      alignSelf: 'flex-start',
      backgroundColor: tokens.colors.lightPrimary,
      marginRight: tokens.spacing.smPlus,
    },
    userNameTest: {
      fontSize: tokens.fontSize.smPlus,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
    },
    canTest: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistRegular,
      alignSelf: 'flex-start',
    },
    assignedBox: {
      paddingVertical: scale(6),
      width: '100%',
      backgroundColor: '#ebebeb',
      borderRadius: tokens.radius.xxl,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: tokens.spacing.sm,
      marginTop: tokens.spacing.md,
      marginBottom: tokens.spacing.lg,
    },
    assignTest: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
      marginLeft: tokens.spacing.sm,
    },
    chatIcon: {
      height: moderateScale(16),
      width: moderateScale(16),
    },
    chatText: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistMedium,
    },
    borderLineBox: {
      height: 1.5,
      backgroundColor: '#EAEAEA',
      width: '100%',
      marginVertical: tokens.spacing.lg,
    },
    btnBox: {
      marginTop: 'auto',
    },
  });
};
