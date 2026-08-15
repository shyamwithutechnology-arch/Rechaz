import { StyleSheet } from "react-native";
import { AppTheme } from "../../hooks/useAppTheme";
import { fonts } from "../../theme";

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, tokens, moderateScale, normalize, insets } =
    theme;
  const { colors, fontSize, radius, spacing } = tokens;

  return StyleSheet.create({
    innerContainer: {
      // paddingTop: insets.bottom + spacing.lg,
      paddingBottom: insets.bottom + spacing.lg,
    },
    headerInnerBox: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: tokens.spacing.md,
    },
    headerTitle: {
      // textAlign: 'center',
      color: tokens.colors.white,
      fontSize: tokens.fontSize.lg,
      fontFamily: fonts.UrbanistBold,
    },
    personImg: {
      height: moderateScale(45),
      width: moderateScale(45),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#faf7f7",
      borderRadius: tokens.radius.xxl,
      marginRight: tokens.spacing.mdPlus,
    },
    userIconRow: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
    },
    settingBtn: {
      padding: moderateScale(6),
      borderRadius: tokens.radius.xxl,
      backgroundColor: tokens.colors.white,
    },

    settingIcon: {
      height: moderateScale(24),
      width: moderateScale(24),
    },

    profileRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: verticalScale(20),
      marginLeft: tokens.spacing.md,
    },

    profileImage: {
      height: moderateScale(90),
      width: moderateScale(90),
      borderRadius: moderateScale(45),
      marginRight: tokens.spacing.md,
    },

    name: {
      color: tokens.colors.white,
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
    },

    mobile: {
      color: tokens.colors.white,
      fontSize: normalize(13),
      fontFamily: fonts.UrbanistMedium,
      marginTop: verticalScale(5),
    },

    verifyBadge: {
      backgroundColor: "#fff",
      alignSelf: "flex-start",
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: verticalScale(3.8),
      borderRadius: tokens.radius.xxl,
      marginTop: verticalScale(10),
    },

    verifyText: {
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.primary,
      fontSize: tokens.fontSize.sm,
    },

    walletCard: {
      marginHorizontal: tokens.spacing.md,
      marginTop: -verticalScale(45),
      backgroundColor: "#fff",
      borderRadius: tokens.radius.lg,
      padding: tokens.spacing.md,
      elevation: 5,
      flexDirection: "row",
      // justifyContent: 'space-between',
      alignItems: "center",
    },
    walletInnerCard: {
      paddingLeft: tokens.spacing.md,
    },
    walletIcon: {
      height: moderateScale(18),
      width: moderateScale(18),
    },
    walletLabel: {
      color: "#8B8B8B",
      fontSize: tokens.fontSize.sm,
    },

    walletAmount: {
      color: "#000",
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
    },

    addMoneyBtn: {
      backgroundColor: tokens.colors.primary,
      paddingHorizontal: tokens.spacing.xs,
      paddingVertical: verticalScale(6),
      borderRadius: tokens.radius.sm,
    },

    addMoneyText: {
      fontSize: tokens.fontSize.sm,
      color: "#fff",
      fontFamily: fonts.UrbanistSemiBold,
    },

    sectionTitle: {
      // marginHorizontal: tokens.spacing.md,
      marginTop: verticalScale(20),
      marginBottom: verticalScale(10),
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
      color: "#616161",
    },

    card: {
      marginTop: tokens.spacing.sm,
      backgroundColor: "#fff",
      borderRadius: tokens.radius.md,
      // elevation: 1,
      borderWidth: 1,
      borderColor: "#d8d4d4",
    },

    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: verticalScale(4),
      paddingHorizontal: tokens.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: "#F1F1F1",
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.md,

      // borderWidth: 1,
    },

    leftRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    iconBox: {
      height: moderateScale(42),
      width: moderateScale(42),
      borderRadius: moderateScale(12),
      backgroundColor: "#EEF4FF",
      justifyContent: "center",
      alignItems: "center",
      marginRight: tokens.spacing.md,
    },

    menuIcon: {
      height: moderateScale(20),
      width: moderateScale(20),
    },

    menuText: {
      fontSize: tokens.fontSize.smPlus,
      color: "#202020",
      fontFamily: fonts.UrbanistMedium,
    },

    rightRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    statusBox: {
      backgroundColor: "#E6F8EC",
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: verticalScale(5),
      borderRadius: tokens.radius.xxl,
      marginRight: tokens.spacing.sm,
    },

    statusText: {
      color: "#1FBF75",
      fontFamily: fonts.UrbanistSemiBold,
    },

    arrowIcon: {
      height: moderateScale(16),
      width: moderateScale(16),
    },

    logoutBtn: {
      margin: tokens.spacing.md,
      backgroundColor: "#fff",
      borderRadius: tokens.radius.md,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: verticalScale(18),
      flexDirection: "row",
      elevation: 2,
      marginBottom: insets.bottom + tokens.spacing.xxl,
    },

    logoutIcon: {
      height: moderateScale(18),
      width: moderateScale(18),

      // marginRight: tokens.spacing.sm/,
    },

    logoutText: {
      color: "#FF4D4F",
      fontSize: tokens.fontSize.md,
      fontFamily: fonts.UrbanistBold,
    },
    accountHome: {
      paddingHorizontal: tokens.spacing.md,
    },

    // edit profile
    homeContainer: {
      paddingHorizontal: tokens.spacing.md,
      flex: 1,
      backgroundColor: tokens.colors.white,
      paddingTop: tokens.spacing.smPlus,
    },
    inputText: {
      color: "#a9a8a8",
    },
    inputBox: {
      marginVertical: tokens.spacing.sm,
    },
    nameText: {
      fontSize: fontSize.sm,
      color: colors.black,
      fontFamily: fonts.UrbanistSemiBold,
      marginTop: verticalScale(3),
    },
    leftIcon: {
      width: moderateScale(17),
      height: moderateScale(17),
      tintColor: colors.primary,
    },
    leftIconCall: {
      width: moderateScale(19),
      height: moderateScale(19),
      tintColor: colors.primary,
    },
    leftIconEmail: {
      width: moderateScale(15.5),
      height: moderateScale(15.5),
      tintColor: colors.primary,
    },
    needHelpBox: {
      width: "100%",
      borderWidth: 1,
      paddingTop: tokens.spacing.xxs,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: tokens.spacing.md,
      justifyContent: "space-between",
      borderRadius: tokens.radius.md,
      borderColor: "rgba(19, 186, 172, 0.72)",
      marginTop: "auto",
      marginBottom: verticalScale(100),
    },
    btnStyle: {
      marginTop: tokens.spacing.mdPlus,
      // marginBottom: tokens.spacing.xxs,
      paddingVertical: verticalScale(10.5),
      marginBottom: insets.bottom + spacing.xxl,
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
      height: "100%",
      width: "100%",
      // aspectRatio: 1,
    },
    createTicketBtn: {
      paddingVertical: tokens.spacing.sm,
      width: "60%",
      backgroundColor: tokens.colors.primary,
      alignItems: "center",
      justifyContent: "center",
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
