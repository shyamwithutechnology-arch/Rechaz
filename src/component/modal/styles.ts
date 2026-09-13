import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale } = theme;

  return StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalWrapper: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    content: {
      width: '92%',
      maxHeight: '95%',
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.radius.lg,
      overflow: 'hidden',

      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },

    scrollView: {
      width: '100%',
    },

    scrollContent: {
      padding: moderateScale(16),
      paddingBottom: moderateScale(30),
    },
  });
};

// import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../hooks/useAppTheme';

// export const createStyles = (theme: AppTheme) => {
//   const { tokens, scale, verticalScale, moderateScale, insets } = theme;
//   return StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     backdrop: {
//       flex: 1,
//       backgroundColor: 'rgba(0,0,0,0.8)',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     content: {
//       width: '92%',
//       maxHeight: '85%',
//       backgroundColor: tokens.colors.white,
//       borderRadius: tokens.radius.lg,
//       padding: moderateScale(2),
//       elevation: 5, // Android shadow
//       shadowColor: '#000', // iOS shadow
//       shadowOpacity: 0.2,
//       shadowRadius: 10,
//     },
//     modalWrapper: {
//       width: '100%',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//     scrollView: {
//       width: '100%',
//     },

//     scrollContent: {
//       padding: moderateScale(16),
//       paddingBottom: insets.bottom + moderateScale(10),
//       flexGrow: 1,
//     },
//   });
// };
