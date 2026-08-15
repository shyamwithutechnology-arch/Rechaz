// import React from 'react';
// import { ScreenLayout } from '../../component/index';
// import { Images } from '../../assets/images';
// import { useAppTheme } from '../../hooks/useAppTheme';
// import {
//   Dimensions,
//   Image,
//   ImageBackground,
//   Modal,
//   StyleSheet,
//   View,
// } from 'react-native';

// const OnboardingScreen = () => {
//   const { width } = Dimensions.get('window');

//   const { scale, verticalScale, tokens } = useAppTheme();

//   const styles = StyleSheet.create({
//     onBoardingImg: {
//       // height: verticalScale(390),
//       width: '100%',
//       alignSelf: 'flex-start',
//       height: verticalScale(450),
//       // marginTop: verticalScale(-100),
//       // alignSelf: 'center',
//       // flex: 1,
//     },
//     circleMain: {
//       backgroundColor: 'rgba(255, 255, 255, 0.24)',
//       // borderWidth: 1,
//       borderColor: '#fff',
//       height: verticalScale(100),
//       marginTop: verticalScale(-140),
//       borderTopLeftRadius: scale(89),
//       borderTopRightRadius: scale(89),
//     },
//     circleInnerBox: {
//       flex: 1,
//       backgroundColor: tokens.colors.white,
//       // borderWidth: 1,
//       borderColor: '#fff',
//       height: verticalScale(100),
//       marginTop: verticalScale(20),

//       borderTopLeftRadius: scale(1000), // 👈 NOT full width
//       borderTopRightRadius: scale(1000),
//       paddingTop: scale(100),
//     },

//     curveContainer: {
//       // flex: 1,
//       backgroundColor: 'rgba(255, 255, 255, 0.24)',

//       // marginTop: verticalScale(-10), // 👈 key
//       // position: 'absolute',

//       borderTopLeftRadius: scale(190), // 👈 NOT full width
//       borderTopRightRadius: scale(190),

//       // paddingTop: verticalScale(30),
//       marginTop: verticalScale(250),
//       paddingTop: scale(10),
//       width: '100%',
//       height: '100%',

//       borderBottomRightRadius: scale(0),
//       borderBottomLeftRadius: scale(0),
//     },
//   });

//   return (
//     <ScreenLayout>
//       <ImageBackground
//         source={Images.onboardingImg}
//         style={styles.onBoardingImg}
//         // resizeMode="contain"
//       >
//         <View style={styles.curveContainer}>
//           <View style={styles.circleInnerBox}></View>
//         </View>
//       </ImageBackground>
//     </ScreenLayout>
//   );
// };
// export default OnboardingScreen;

// //{' '}
// // <View style={styles.circleMain}>
// // <View style={styles.circleInnerBox}></View>
// //{' '}
// // </View>
// // import { Image, StyleSheet, Text, View } from 'react-native';
// // import React from 'react';
// // import { ScreenLayout } from '../../component/index';
// // import { Images } from '../../assets/images';
// // import { useAppTheme } from '../../hooks/useAppTheme';

// // const OnboardingScreen = () => {
// //   const { tokens, scale, verticalScale, moderateScale, insets } = useAppTheme();
// //   return (
// //     <ScreenLayout>
// //       <Image source={Images.onboardingImg} style={styles.onBoardingImg} />
// //     </ScreenLayout>
// //   );

// //   const styles = StyleSheet.create({
// //     onBoardingImg: {
// //       height: verticalScale(50),
// //       width: scale(50),
// //     },
// //   });
// // };

// import { Image, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Images } from '../../assets/images';
// import { useAppTheme } from '../../hooks/useAppTheme';

// const OnboardingScreen = () => {
//   const { scale, verticalScale, tokens } = useAppTheme();
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Image
//         source={Images.onboardingImg}
//         style={{ height: '55%', width: '100%' }}
//       />

//       <View
//         style={{
//           height: '100%',
//           // width: '100%'/,
//           flex: 1,
//           backgroundColor: 'rgba(255, 255, 255, 0.24)',
//           borderRadius: scale(600),
//           marginTop: verticalScale(-140),
//           paddingTop: scale(30),
//         }}
//       >
//         <View
//           style={{
//             height: '100%',
//             // width: '100%'/,
//             // flex: 1,
//             backgroundColor: 'white',
//             borderRadius: scale(600),

//             // marginTop: verticalScale(-120),
//           }}
//         ></View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default OnboardingScreen;

// // const styles = StyleSheet.create({});

import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../assets/images';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { CustomButton } from '../../component';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = ({ onFinish }: { onFinish?: () => void }) => {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const handleGetStarted = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={Images.onboardingImg}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      {/* The Curved Container */}

      <View style={styles.curveContainer}>
        <View style={styles.whiteCard}>
          <View
            style={[
              styles.InnerContainer,
              { paddingBottom: insets.bottom + 20 },
            ]}
          >
            <View style={styles.content}>
              <Image
                source={Images.onboardinglogo}
                style={styles.onBoardingLogo}
                resizeMode="contain"
              />
              <Text style={styles.title}>`Trusted Healthcare \n At Home</Text>

              <Text style={styles.subtitle}>
                Get professional medical services delivered safely to your
                doorstep with care, comfort, and complete reliability.
              </Text>

              <CustomButton
                title="Get Started"
                style={styles.btnStyle}
                onPress={() => handleGetStarted()}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
