import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, moderateScale } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E7F2F1',
    },

    header: {
      backgroundColor: '#1FAF9A',
      // padding: 20,
      // flexDirection: 'row',
      // alignItems: 'center',
      paddingTop: tokens.spacing.xxl,
      paddingBottom: tokens.spacing.md,
      paddingLeft: tokens.spacing.md,
    },
    imageBox: {
      width: scale(49),
      height: verticalScale(49),
      borderRadius: tokens.spacing.xl,
      marginRight: tokens.spacing.smPlus,
      backgroundColor: tokens.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      width: scale(45),
      height: scale(45),
      borderRadius: tokens.spacing.xl,
      // marginTop: tokens.spacing.md,
    },

    headerInnerBox: {
      marginTop: tokens.spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    name: {
      fontSize: tokens.fontSize.lg,
      color: tokens.colors.white,
      fontFamily: fonts.UrbanistMedium,
    },

    role: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.lightPrimary,
      fontFamily: fonts.UrbanistRegular,
    },

    closeBtn: {
      position: 'absolute',
      right: 15,
      top: tokens.spacing.xl,
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.lg,
      padding: tokens.spacing.xs,
    },

    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 0.5,
      borderColor: '#ddd',
    },

    menuLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    menuText: {
      marginLeft: 12,
      fontSize: 15,
      color: '#333',
    },

    logout: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 20,
    },

    logOutICon: {
      height: moderateScale(23),
      aspectRatio: 1,
    },

    logoutIcon: {
      backgroundColor: '#FF6B6B',
      padding: moderateScale(10),
      borderRadius: tokens.radius.xxl,
      marginRight: tokens.spacing.md,
    },

    logoutText: {
      fontSize: tokens.fontSize.md,
      color: '#272727',
      fontFamily: fonts.UrbanistSemiBold,
    },

    helpCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: tokens.colors.white,
      margin: moderateScale(20),
      padding: moderateScale(15),
      borderRadius: tokens.radius.md,
      elevation: 3,
    },

    helpText: {
      marginLeft: tokens.spacing.smPlus,
      fontSize: tokens.fontSize.xs,
      color: tokens.colors.headingColor,
    },

    //rrrrrrr
    subMenuItem: {
      paddingLeft: tokens.spacing.xl,
      paddingVertical: tokens.spacing.sm,
      borderWidth: 0.5,
      marginHorizontal: tokens.spacing.md,
      marginVertical: tokens.spacing.xs,
      borderRadius: tokens.radius.sm,
      borderColor: tokens.colors.primary,
    },

    subMenuText: {
      fontSize: theme.tokens.fontSize.smPlus,
      color: theme.tokens.colors.black,
      fontFamily: tokens.colors.black,
    },
  });
};
