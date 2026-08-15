// import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../hooks/useAppTheme';
// import { fonts } from '../../theme';

// const TAB_HEIGHT = 76;

// export const createStyles = (them: AppTheme) => {
//   const { verticalScale, scale, tokens, moderateScale } = them;
//   return StyleSheet.create({
//     wrapper: {
//       position: 'absolute',
//       bottom: 0,
//       width: '100%',
//       height: TAB_HEIGHT,
//       backgroundColor: tokens.colors.lightPrimary,
//       // backgroundColor: 'trancparent',
//     },
//     svg: {
//       position: 'absolute',
//     },
//     tabs: {
//       flexDirection: 'row',
//       height: TAB_HEIGHT,
//       alignItems: 'center',
//       justifyContent: 'space-around',
//     },
//     tabMainBox: {
//       flexDirection: 'row',
//       flex: 1,
//       justifyContent: 'space-around',
//       // borderWidth: 1,
//     },
//     tab: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: scale(70),
//     },
//     label: {
//       fontSize: tokens.fontSize.xs,
//       fontFamily: fonts.UrbanistRegular,
//       color: tokens.colors.lightGray,
//       marginTop: tokens.spacing.xs,
//     },
//     centerButton: {
//       position: 'absolute',
//       top: -6,
//       alignSelf: 'center',
//       width: moderateScale(58),
//       height: moderateScale(58),
//       borderRadius: tokens.spacing.xl,
//       backgroundColor: tokens.colors.lightPrimary,
//       // backgroundColor: '#1FAF9A',
//       justifyContent: 'center',
//       alignItems: 'center',

//       // SHADOW (iOS + Android)
//       elevation: 10,
//       shadowColor: tokens.colors.lightPrimary,
//       shadowOpacity: 0.4,
//       shadowRadius: 10,
//       shadowOffset: { width: 0, height: 5 },
//     },
//   });
// };

import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (them: AppTheme) => {
  const { verticalScale, scale, tokens, moderateScale } = them;
  const TAB_HEIGHT = verticalScale(65);

  return StyleSheet.create({
    wrapper: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: TAB_HEIGHT,
      backgroundColor: tokens.colors.lightPrimary,
      // backgroundColor: 'trancparent',
    },
    svg: {
      position: 'absolute',
    },
    tabs: {
      flexDirection: 'row',
      // height: TAB_HEIGHT,
      alignItems: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1,
    },
    tabMainBox: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      // borderWidth: 1,
    },
    tab: {
      alignItems: 'center',
      justifyContent: 'center',
      width: scale(70),
      // borderWidth: 1,
      marginTop: verticalScale(6),
    },
    label: {
      fontSize: tokens.fontSize.xs,
      fontFamily: fonts.UrbanistRegular,
      color: tokens.colors.lightGray,
      marginTop: tokens.spacing.xs,
    },
    centerButton: {
      position: 'absolute',
      top: verticalScale(-14),
      alignSelf: 'center',
      width: moderateScale(56),
      height: moderateScale(56),
      borderRadius: tokens.spacing.xl,
      backgroundColor: tokens.colors.lightPrimary,
      // backgroundColor: '#1FAF9A',
      justifyContent: 'center',
      alignItems: 'center',

      // SHADOW (iOS + Android)
      elevation: 10,
      shadowColor: tokens.colors.lightPrimary,
      shadowOpacity: 0.4,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
    },
  });
};
