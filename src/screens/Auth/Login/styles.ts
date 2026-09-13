import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../hooks/useAppTheme';
import { fonts } from '../../../theme';

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
      alignSelf: 'center',
      marginTop: tokens.spacing.xl,
    },
    inputBox: {
      width: '90%',
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
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: tokens.colors.white,
      // alignSelf: 'center',
      // // padding: moderateScale(40),
      // borderRadius: tokens.radius.md,
      // paddingHorizontal: tokens.spacing.sm,
      marginVertical: verticalScale(30),
      borderWidth: 1,
      borderColor: tokens.colors.gray8,
      alignSelf: 'center',
      borderRadius: scale(200),
      overflow: 'hidden',
    },
    homeContainer: {
      flexGrow: 1,
      borderTopRightRadius: scale(30),
      borderTopLeftRadius: scale(30),
      paddingBottom: insets.bottom + verticalScale(20),
    },

    inputContainer: {
      height: verticalScale(50),
      width: '90%',
      borderWidth: 1,
      marginHorizontal: tokens.spacing.md,
      alignSelf: 'center',
      borderRadius: tokens.radius.md,
      borderColor: tokens.colors.borderColor,
      flexDirection: 'row',
      alignItems: 'center',
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
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: verticalScale(80), // Hardcoded spacing to push it elegantly below the button
    },
    earPhoneBox: {
      width: scale(60),
      aspectRatio: 1,
      borderRadius: tokens.radius.xl,
      backgroundColor: tokens.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
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
      marginTop: 'auto',
      alignSelf: 'center',
    },

    RechazText: {
      fontSize: tokens.fontSize.smPlus,
      fontFamily: fonts.UrbanistSemiBold,
      color: tokens.colors.primary,
    },
    bottomFixed: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
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

// import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../../hooks/useAppTheme';
// import { colors, fonts } from '../../../theme';
// import {
//   radius,
//   scale,
//   spacing,
//   verticalScale,
// } from '../../../utils/responsiveSize';

// export const createStyles = (theme: AppTheme) => {
//   const { tokens, moderateScale, normalize, insets } = theme;

//   return StyleSheet.create({
//     contentContainer: {
//       paddingHorizontal: tokens.spacing.md,
//       paddingTop: verticalScale(18),
//       paddingBottom: insets.bottom + verticalScale(70),
//       flexGrow: 1,
//     },

//     emptyBox: {
//       flex: 1,
//       marginTop: verticalScale(100),
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//     emptyText: {
//       fontSize: tokens.fontSize.sm,
//       color: tokens.colors.lightGray,
//       fontFamily: fonts.UrbanistMedium,
//     },

//     // Card
//     card: {
//       backgroundColor: tokens.colors.white,
//       borderRadius: tokens.radius.sm,
//       padding: tokens.spacing.md,
//       marginBottom: tokens.spacing.md,

//       borderWidth: 1,
//       borderColor: tokens.colors.lightPrimary,

//       borderLeftWidth: 3.5,
//       borderLeftColor: colors.primary,

//       elevation: 3,

//       shadowColor: '#0e8d3822',
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.08,
//       shadowRadius: radius.lg,
//     },

//     // Header
//     headerRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       marginBottom: tokens.spacing.md,
//     },

//     titleContainer: {
//       flex: 1,
//       paddingRight: spacing.sm,
//     },

//     title: {
//       fontSize: tokens.fontSize.sm,
//       fontFamily: fonts.UrbanistBold,
//       color: tokens.colors.blackDark,
//     },

//     transactionId: {
//       marginTop: verticalScale(4),
//       fontSize: tokens.fontSize.xs,
//       fontFamily: fonts.UrbanistRegular,
//       color: tokens.colors.lightGray,
//     },

//     // Credit / Debit
//     typeBox: {
//       minWidth: scale(70),
//       paddingHorizontal: tokens.spacing.sm,
//       paddingVertical: verticalScale(5),
//       borderRadius: radius.sm,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//     typeText: {
//       fontSize: normalize(12),
//       fontFamily: fonts.UrbanistBold,
//     },

//     // Amount
//     amountRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',

//       paddingVertical: tokens.spacing.sm,

//       borderTopWidth: 1,
//       borderBottomWidth: 1,

//       borderColor: '#EDE9E9',
//     },

//     amountLabel: {
//       fontSize: tokens.fontSize.xs,
//       fontFamily: fonts.UrbanistMedium,
//       color: tokens.colors.lightGray,
//     },

//     amount: {
//       fontSize: normalize(20),
//       fontFamily: fonts.UrbanistBold,
//     },

//     // Remark
//     remarkBox: {
//       marginTop: tokens.spacing.md,
//     },

//     label: {
//       fontSize: tokens.fontSize.xs,
//       fontFamily: fonts.UrbanistMedium,
//       color: tokens.colors.lightGray,
//     },

//     remark: {
//       marginTop: verticalScale(4),
//       fontSize: tokens.fontSize.xs,
//       lineHeight: verticalScale(18),
//       fontFamily: fonts.UrbanistMedium,
//       color: tokens.colors.blackDark,
//     },

//     // Balance
//     balanceContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginTop: tokens.spacing.md,
//       padding: tokens.spacing.sm,
//       borderRadius: radius.sm,
//       backgroundColor: '#F8F9FA',
//     },

//     balanceItem: {
//       flex: 1,
//     },

//     balanceDivider: {
//       width: 1,
//       height: verticalScale(35),
//       backgroundColor: '#E5E5E5',
//       marginHorizontal: spacing.sm,
//     },

//     value: {
//       marginTop: verticalScale(4),
//       fontSize: tokens.fontSize.sm,
//       fontFamily: fonts.UrbanistSemiBold,
//       color: tokens.colors.blackDark,
//     },

//     // User information
//     infoRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginTop: tokens.spacing.sm,
//     },

//     // Footer
//     footer: {
//       marginTop: tokens.spacing.md,
//       paddingTop: tokens.spacing.sm,

//       borderTopWidth: 1,
//       borderTopColor: '#EDE9E9',
//     },

//     date: {
//       fontSize: tokens.fontSize.xs,
//       fontFamily: fonts.UrbanistRegular,
//       color: tokens.colors.lightGray,
//     },
//   });
// };
