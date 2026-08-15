import React, { memo } from 'react';
import {
  View,
  Modal,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

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
      onRequestClose={onClose} // Android back
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        {/* Backdrop */}
        <Pressable
          style={[styles.backdrop, containerStyle]}
          onPress={closeOnBackdrop ? onClose : undefined}
        >
          <View
            style={[styles.content, contentStyle]}
            onStartShouldSetResponder={() => true}
          >
            {scrollable ? (
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
                {children}
              </ScrollView>
            ) : (
              children
            )}
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default memo(AppModal);
