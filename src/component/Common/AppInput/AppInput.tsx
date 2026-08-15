import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React from 'react';
import { createStyles } from './styles';
import { Icons } from '../../../assets/icons';
import { useAppTheme } from '../../../hooks/useAppTheme';

const AppInput = ({
  leftIcon,
  rightIcon,
  placeholderText,
  inputBoxStyle,
  inputText,
  multiline,
  leftIconStyle,
  value,
  handleChange,
  autoCapitalize,
  keyboardType = 'dafault',
  rightIconStyle,
  rightIconPress,
  secureTextEntry = false,
  editable = true,
  maxLength = undefined,
  onSubmitEditing = () => {},
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={[styles.inputBox, inputBoxStyle]}>
      <View style={styles.leftContent}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.leftIcon, leftIconStyle]}
            resizeMode="contain"
          />
        )}
        <TextInput
          placeholder={placeholderText}
          style={[
            styles.inputContainer,
            inputText,
            { marginLeft: !leftIcon ? 0 : theme.tokens.spacing.sm },
          ]}
          value={value}
          onChangeText={handleChange}
          placeholderTextColor={theme.tokens.colors.lightGray}
          multiline={multiline}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          editable={editable}
          returnKeyType="done"
          onSubmitEditing={() => onSubmitEditing()}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Enter') {
              onSubmitEditing();
            }
          }}
          maxLength={maxLength}
        />
        {rightIcon && (
          <Pressable style={styles.rightBox} onPress={rightIconPress}>
            <Image
              source={rightIcon}
              style={[styles.leftIcon, rightIconStyle]}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default AppInput;
