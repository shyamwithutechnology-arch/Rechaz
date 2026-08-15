import { StyleSheet } from "react-native";
import { AppTheme } from "../../../hooks/useAppTheme";
import { fonts } from "../../../theme";

const createStyles = (theme: AppTheme) => {
  const { verticalScale, moderateScale, scale, tokens, insets, normalize } =
    theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tokens.colors.lightPrimary,
    },

    loginText: {
      fontSize: normalize(28),
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.blackDark,
      alignSelf: "center",
      marginTop: tokens.spacing.xl,
    },
    inputBox: {
      width: "90%",
      borderRadius: tokens.radius.md,
      // marginTop: tokens.spacing.xxl,
      // marginBottom: tokens.spacing.md,
    },
    leftIconStyle: {
      tintColor: tokens.colors.primary,
    },
    decText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.lightGray,
      marginTop: tokens.spacing.sm,
    },
    logo: {
      height: verticalScale(50),
      width: scale(50),
    },
    logoBox: {
      // height: verticalScale(70),
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
    homeContainer: {
      flexGrow: 1,
      borderTopRightRadius: scale(30),
      borderTopLeftRadius: scale(30),
      paddingBottom: insets.bottom + verticalScale(20),
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
      marginTop: verticalScale(80), // Hardcoded spacing to push it elegantly below the button
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
      fontSize: normalize(25),
      color: tokens.colors.headingColor,
      fontFamily: fonts.UrbanistBold,
    },
    versionText: {
      fontSize: tokens.fontSize.md,
      color: tokens.colors.darkGray,
      fontFamily: fonts.UrbanistRegular,
      marginTop: "auto",
      alignSelf: "center",
    },

    RechazText: {
      fontSize: tokens.fontSize.smPlus,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.primary,
    },
    bottomFixed: {
      position: "absolute",
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: "center",
    },
    logoImg: {
      height: moderateScale(100),
      width: moderateScale(100),
    },
    errorText: {
      color: tokens.colors.red,
      fontSize: tokens.fontSize.xs,
      marginTop: tokens.spacing.xxs,
      marginLeft: tokens.spacing.lg,
    },
  });
};

export default createStyles;

// import { StyleSheet } from "react-native";
// import { AppTheme } from "../../../hooks/useAppTheme";
// import { fonts } from "../../../theme";
// import { spacing, verticalScale } from "../../../utils/responsiveSize";

// export const createStyles = (theme: AppTheme) => {
//   const { tokens, moderateScale, normalize, insets } = theme;

//   return StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: tokens.colors.white,
//       padding: tokens.spacing.md,
//     },

//     header: {
//       fontSize: tokens.fontSize.md,
//       fontFamily: fonts.UrbanistBold,
//       color: tokens.colors.blackDark,
//       marginBottom: tokens.spacing.md,
//     },

//     /* ================= CARD ================= */

//     card: {
//       borderWidth: 1,
//       borderColor: tokens.colors.lightPrimary,
//       borderRadius: tokens.radius.md,
//       padding: tokens.spacing.md,
//       marginBottom: tokens.spacing.sm,
//       backgroundColor: tokens.colors.white,
//     },

//     row: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },

//     title: {
//       fontSize: tokens.fontSize.sm,
//       fontFamily: fonts.UrbanistSemiBold,
//       color: tokens.colors.blackDark,
//       flex: 1,
//     },

//     subText: {
//       fontSize: tokens.fontSize.xs,
//       color: tokens.colors.lightGray,
//       marginTop: tokens.spacing.xs,
//       fontFamily: fonts.UrbanistRegular,
//     },

//     bottomRow: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       marginTop: tokens.spacing.sm,
//       alignItems: "center",
//     },

//     date: {
//       fontSize: tokens.fontSize.xs,
//       color: tokens.colors.lightGray,
//       fontFamily: fonts.UrbanistRegular,
//     },

//     amount: {
//       fontSize: tokens.fontSize.md,
//       fontFamily: fonts.UrbanistBold,
//       color: tokens.colors.blackDark,
//     },

//     /* ================= STATUS ================= */

//     statusBox: {
//       paddingHorizontal: tokens.spacing.sm,
//       paddingVertical: tokens.spacing.xxs,
//       borderRadius: tokens.radius.xl,
//       alignItems: "center",
//       justifyContent: "center",
//     },

//     statusText: {
//       fontSize: normalize(11),
//       fontFamily: fonts.UrbanistSemiBold,
//     },

//     /* ================= EMPTY STATE ================= */

//     emptyBox: {
//       marginTop: tokens.spacing.xxl,
//       alignItems: "center",
//       justifyContent: "center",
//     },

//     emptyText: {
//       fontSize: tokens.fontSize.sm,
//       color: tokens.colors.lightGray,
//       fontFamily: fonts.UrbanistMedium,
//     },
//     contentContainer: {
//       paddingBottom: insets.bottom + verticalScale(70),
//       paddingVertical: verticalScale(20),
//     },
//   });
// };
