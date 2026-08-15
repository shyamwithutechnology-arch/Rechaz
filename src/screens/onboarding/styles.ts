import { Dimensions, StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';
import { fonts } from '../../theme';

export const createStyles = (theme: AppTheme) => {
  // const { verticalScale } = useAppTheme();
  const { width } = Dimensions.get('window');
  const { verticalScale, moderateScale, normalize, scale, tokens, insets } =
    theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tokens.colors.white,
    },
    backgroundImage: {
      width: '100%',
      height: '60%', // Image takes up more than half
      position: 'absolute',
      top: 0,
    },
    curveContainer: {
      flex: 1,
      marginTop: '88%', // Where the curve starts overlapping the image
      alignItems: 'center',
    },
    whiteCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.24)',
      width: width * 2, // Double the screen width to make the curve "shallow"
      height: width * 2,
      borderRadius: width, // Perfect circle
      paddingHorizontal: width / 2, // Offset the content back to center
      paddingTop: verticalScale(40),
      alignItems: 'center',
    },
    InnerContainer: {
      backgroundColor: 'white',
      width: width * 2, // Double the screen width to make the curve "shallow"
      height: width * 2,
      borderRadius: width, // Perfect circle
      paddingHorizontal: width / 2, // Offset the content back to center
      paddingTop: verticalScale(35),
      alignItems: 'center',
    },
    content: {
      width: width, // Bring content width back to normal screen size
      alignItems: 'center',
      paddingHorizontal: tokens.spacing.lg,
    },
    title: {
      fontSize: normalize(34),
      textAlign: 'center',
      color: tokens.colors.blackDark,
      fontFamily: fonts.UrbanistExtraBold,
    },
    onBoardingLogo: {
      height: verticalScale(70),
      width: scale(70),
      marginBottom: verticalScale(40),
    },
    subtitle: {
      fontSize: tokens.fontSize.md,
      textAlign: 'center',
      color: tokens.colors.lightGray,
      marginTop: verticalScale(10),
      lineHeight: normalize(24),
      // marginBottom: verticalScale(50),
    },

    button: {
      backgroundColor: '#14b8a6',
      width: '100%',
      paddingVertical: 15,
      borderRadius: 12,
      marginTop: 40,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
    },
    btnStyle: {
      width: '90%',
      marginTop: tokens.spacing.mdPlus,
    },
  });
};
