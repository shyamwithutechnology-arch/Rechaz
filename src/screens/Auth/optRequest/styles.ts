import { StyleSheet } from "react-native";
import { AppTheme } from "../../../hooks/useAppTheme";
import { fonts } from "../../../theme";

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, moderateScale, tokens, normalize } = theme;
  return StyleSheet.create({
    logo: {
      height: verticalScale(50),
      width: scale(50),
    },
    logoImg: {
      height: moderateScale(100),
      width: moderateScale(100),
    },
    logoBox: {
      // height: verticalScaleare(70),
      // width: scale(100),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: tokens.colors.white,
      // alignSelf: 'center',
      // // padding: moderateScale(40),
      // borderRadius: tokens.radius.md,
      // paddingHorizontal: tokens.spacing.sm,
      marginVertical: verticalScale(30),
      borderWidth: 1,
      borderColor: tokens.colors.gray8,
      alignSelf: "center",
      borderRadius: scale(200),
      overflow: "hidden",
    },
    errorText: {
      color: "red",
      fontSize: tokens.fontSize.xs,
      marginTop: tokens.spacing.xxs,
      marginLeft: tokens.spacing.lg,
    },
    otpText: {
      fontSize: normalize(28),
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
      alignSelf: "center",
    },
    decText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.lightGray,
      marginTop: tokens.spacing.sm,
      marginBottom: tokens.spacing.md,
    },

    ////
    innerContainer: {
      flex: 1,
      borderTopRightRadius: tokens.radius.xxl,
      borderTopLeftRadius: tokens.radius.xxl,
      // paddingBottom: verticalScale(20),
    },
    container: {
      backgroundColor: tokens.colors.lightPrimary,
    },

    inputContainer: {
      height: verticalScale(50),
      width: "90%",
      borderWidth: 1,
      marginHorizontal: tokens.spacing.md,
      alignSelf: "center",
      borderRadius: tokens.radius.md,
      borderColor: tokens.colors.borderColor,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: tokens.spacing.md,
      marginTop: tokens.spacing.xxl,
      marginBottom: tokens.spacing.md,
    },
    input: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistSemiBold,
      marginLeft: tokens.spacing.sm,
    },
    mainBoxSupport: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      marginTop: "auto", // controlled spacing
    },
    earPhoneBox: {
      width: scale(60),
      aspectRatio: 1,
      borderRadius: tokens.radius.xl,
      backgroundColor: tokens.colors.white,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      marginRight: tokens.spacing.md,
    },
    earPhone: {
      height: moderateScale(40),
      aspectRatio: 1,
    },
    helpLineTest: {
      fontSize: tokens.fontSize.mdPlus,
      color: tokens.colors.lightGray,
      fontFamily: fonts.UrbanistRegular,
    },
    supportNuber: {
      fontSize: normalize(22),
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistBold,
    },
    versionText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.darkGray,
      fontFamily: fonts.UrbanistRegular,
      alignSelf: "center",
      marginTop: tokens.spacing.xxl,
      marginBottom: tokens.spacing.xxl,
    },

    loginText: {
      fontSize: normalize(28),
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
      alignSelf: "center",
      marginTop: tokens.spacing.xxl,
    },
    changeText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistSemiBold,
      alignSelf: "center",
      marginTop: tokens.spacing.md,
    },
    optSendText: {
      fontSize: tokens.fontSize.md,
      color: "#fff",
      fontFamily: fonts.UrbanistMedium,
      alignSelf: "center",
      // marginTop: tokens.spacing.lg,
      marginBottom: tokens.spacing.lg,
    },
  });
};
