// import React from 'react';
// import {
//   Image,
//   ImageSourcePropType,
//   ImageStyle,
//   Pressable,
//   Text,
//   TextInput,
//   View,
//   ViewStyle,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Octicons';
// import { createStyles } from './styles';
// import { useAppTheme } from '../../hooks/useAppTheme';
// import { Icons } from '../../assets/icons';

// type AppHeaderProp = {
//   title: string;
//   onPress: () => void;
//   headerContainer: ViewStyle;

//   cartCount: number;
//   onRightPress: () => void;
//   rightIcon?: ImageSourcePropType;

//   onCartPress?: () => void;
//   rightIconStyle?: ImageStyle;
// };
// const AppHeader = ({
//   title,
//   onPress,
//   headerContainer,
//   cartCount = 0,
//   onCartPress,
//   rightIcon,
//   onRightPress,
//   rightIconStyle,
// }: AppHeaderProp) => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);
//   return (
//     <View style={[styles.container, headerContainer]}>
//       <View style={styles.innerContainer}>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Pressable onPress={onPress}>
//             <Icon
//               name="arrow-left"
//               color="#000"
//               size={theme.moderateScale(24)}
//             />
//           </Pressable>
//           <Text style={styles.title}>{title}</Text>
//         </View>

//         {rightIcon ? (
//           <Pressable style={styles.customRightIconBox} onPress={onRightPress}>
//             <Image
//               source={rightIcon}
//               style={[styles.customRightIcon, rightIconStyle]}
//               resizeMode="contain"
//             />
//           </Pressable>
//         ) : cartCount ? (
//           <Pressable style={styles.rightIconBox} onPress={onCartPress}>
//             <Image
//               source={Icons.cartIcon}
//               style={styles.rightIcon}
//               resizeMode="contain"
//             />

//             {cartCount > 0 && (
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>
//                   {cartCount > 9 ? '9+' : cartCount}
//                 </Text>
//               </View>
//             )}
//           </Pressable>
//         ) : null}
//       </View>
//     </View>
//   );
// };

// export default AppHeader;

import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";
import { Icons } from "../../assets/icons";
import { useSelector } from "react-redux";

type AppHeaderProp = {
  title: string;
  onPress: () => void;
  headerContainer: ViewStyle;

  cartStatus: boolean;
  onRightPress: () => void;
  rightIcon?: ImageSourcePropType;

  onCartPress?: () => void;
  leftIconTintColor?: string;
  rightIconStyle?: ImageStyle;
  rightIconBoxStyle?: ViewStyle;
  cartCount?: number;
};

const AppHeader = ({
  title,
  onPress,
  headerContainer,
  cartStatus = false,
  onCartPress,
  rightIcon,
  onRightPress,
  leftIconTintColor = undefined,
  rightIconStyle,
  rightIconBoxStyle,
  cartCount = 0,
}: AppHeaderProp) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={[styles.container, headerContainer]}>
      <View style={styles.innerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={onPress}>
            <Icon
              name="arrow-left"
              color="#000"
              size={theme.moderateScale(24)}
            />
          </Pressable>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.iconRow}>
          {rightIcon && (
            <Pressable
              style={[styles.customRightIconBox, rightIconBoxStyle]}
              onPress={onRightPress}
            >
              <Image
                source={rightIcon}
                style={[styles.customRightIcon, rightIconStyle]}
                resizeMode="contain"
              />
            </Pressable>
          )}

          {cartStatus && (
            <Pressable style={styles.rightIconBox} onPress={onCartPress}>
              <Image
                source={Icons.cartIcon}
                style={styles.rightIcon}
                resizeMode="contain"
              />

              {cartCount >= 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {cartCount >= 9 ? "9+" : cartCount}
                  </Text>
                </View>
              )}
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

{
  // {cartItems?.length > 0 && (
  //   <View style={styles.badge}>
  //     <Text style={styles.badgeText}>
  //       {cartItems.length > 9 ? '9+' : cartItems.length}
  //     </Text>
  //   </View>
  // )}
  //  cartCount ? (
  //   <Pressable style={styles.rightIconBox} onPress={onCartPress}>
  //     <Image
  //       source={Icons.cartIcon}
  //       style={styles.rightIcon}
  //       resizeMode="contain"
  //     />
  //     {cartCount > 0 && (
  //       <View style={styles.badge}>
  //         <Text style={styles.badgeText}>
  //           {cartCount > 9 ? '9+' : cartItems?.length}
  //         </Text>
  //       </View>
  //     )}
  //   </Pressable>
  // ) : null}
}
