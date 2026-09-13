// import React, { memo } from 'react';
// import {
//   View,
//   Modal,
//   Pressable,
//   StyleSheet,
//   // KeyboardAvoidingView,
//   Platform,
//   ViewStyle,
// } from 'react-native';
// import { useAppTheme } from '../../hooks/useAppTheme';
// import { createStyles } from './styles';
// import { ScrollView } from 'react-native-gesture-handler';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// type AppModalProps = {
//   visible: boolean;
//   onClose: () => void;
//   children: React.ReactNode;

//   containerStyle?: ViewStyle;
//   contentStyle?: ViewStyle;

//   closeOnBackdrop?: boolean;
//   animationType?: 'none' | 'slide' | 'fade';
//   scrollable?: boolean;
// };

// const AppModal = ({
//   visible,
//   onClose,
//   children,
//   containerStyle,
//   contentStyle,
//   closeOnBackdrop = true,
//   animationType = 'fade',
//   scrollable = false,
// }: AppModalProps) => {
//   const theme = useAppTheme();
//   const styles = createStyles(theme);
//   return (
//     <Modal
//       visible={visible}
//       transparent
//       animationType={animationType}
//       statusBarTranslucent
//       onRequestClose={onClose} // Android back
//     >
//       <KeyboardAwareScrollView
//         // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         style={styles.container}
//       >
//         {/* Backdrop */}
//         <Pressable
//           style={[styles.backdrop, containerStyle]}
//           onPress={closeOnBackdrop ? onClose : undefined}
//         >
//           {/* Center modal */}
//           <Pressable
//             style={styles.modalWrapper}
//             onPress={closeOnBackdrop ? onClose : undefined}
//           >
//             <View
//               style={[styles.content, contentStyle]}
//               onStartShouldSetResponder={() => true}
//             >
//               {scrollable ? (
//                 <ScrollView
//                   contentContainerStyle={styles.scrollContent}
//                   keyboardShouldPersistTaps="handled"
//                   showsVerticalScrollIndicator={false}
//                 >
//                   {children}
//                 </ScrollView>
//               ) : (
//                 children
//               )}
//             </View>
//           </Pressable>
//         </Pressable>
//       </KeyboardAwareScrollView>
//     </Modal>
//   );
// };

// export default memo(AppModal);

import React, { memo } from 'react';
import { View, Modal, Pressable, ViewStyle } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type AppModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;

  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;

  closeOnBackdrop?: boolean;
  animationType?: 'none' | 'slide' | 'fade';
  scrollable?: boolean;
};

const AppModal = ({
  visible,
  onClose,
  children,
  containerStyle,
  contentStyle,
  closeOnBackdrop = true,
  animationType = 'fade',
  scrollable = false,
}: AppModalProps) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Modal
      visible={visible}
      transparent
      animationType={animationType}
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={[styles.backdrop, containerStyle]}>
        <Pressable
          style={styles.modalWrapper}
          onPress={closeOnBackdrop ? onClose : undefined}
        >
          <View
            style={[styles.content, contentStyle]}
            onStartShouldSetResponder={() => true}
          >
            {scrollable ? (
              <KeyboardAwareScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                enableOnAndroid
                enableAutomaticScroll
                extraScrollHeight={20}
              >
                {children}
              </KeyboardAwareScrollView>
            ) : (
              children
            )}
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default memo(AppModal);
