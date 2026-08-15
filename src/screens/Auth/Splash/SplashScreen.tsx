import React, { useEffect } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images } from '../../../assets/images';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import { useAuthBootstrap } from '../../../hooks/useAuthBootstrap';

const SplashScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const appState = useAuthBootstrap();
  useEffect(() => {
    if (appState === 'auth') {
      navigation?.replace('AuthStack');
    }
    if (appState === 'app') {
      navigation?.replace('MainTab');
    }
  }, [appState]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.splashBgImg} style={styles.splashBgStyle}>
        <Image
          source={Images.rechazLogoCircle}
          style={styles.splashLogo}
          resizeMode="contain"
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

// import { Image, ImageBackground, Text, View } from 'react-native';
// import React from 'react';
// import { createStyles, styles } from './styles';
// import { Images } from '../../../assets/images';
// import { useAppTheme } from '../../../hooks/useAppTheme';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const SplashScreen = () => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);
//   const { tokens, scale, verticalScale, moderateScale, insets } = theme;
//   return (
//     <SafeAreaView edges={['top']} style={styles.container}>
//       <ImageBackground source={Images.splashBgImg} style={styles.splashBgStyle}>
//         <Image
//           source={Images.splashLogo}
//           style={styles.splashLogo}
//           resizeMode="contain"
//         />
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// export default SplashScreen;
