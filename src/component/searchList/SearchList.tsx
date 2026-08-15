import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import SeachIcon from 'react-native-vector-icons/EvilIcons';
import CancelIcon from 'react-native-vector-icons/MaterialIcons';

export const SearchList = ({ value, onChange }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.seachTextBox}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search Tests here..."
        placeholderTextColor={theme.tokens.colors.lightGray}
        style={styles.textInput}
      />

      {value === '' ? (
        <LinearGradient
          colors={[theme.tokens.colors.primaryGradientStart, '#139388']}
          style={styles.seachBox}
        >
          <SeachIcon
            name="search"
            color="#fff"
            size={theme.moderateScale(20)}
          />
        </LinearGradient>
      ) : (
        <Pressable onPress={() => onChange('')}>
          <CancelIcon
            name="cancel"
            color="red"
            size={theme.moderateScale(20)}
          />
        </Pressable>
      )}
    </View>
  );
};
