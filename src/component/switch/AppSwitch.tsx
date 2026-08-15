import React from 'react';
import { Switch } from 'react-native-switch';
import { useAppTheme } from '../../hooks/useAppTheme';

const AppSwitch = ({ value, onValueChange }) => {
  const theme = useAppTheme();

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      backgroundActive={theme.tokens.colors.primaryGradientEnd}
      backgroundInactive={theme.tokens.colors.borderColor}
      circleActiveColor={theme.tokens.colors.white}
      renderActiveText={false}
      renderInActiveText={false}
      circleSize={theme.moderateScale(18)} // ✅ smaller thumb
      barHeight={theme.moderateScale(20)}
    />
  );
};

export default AppSwitch;
