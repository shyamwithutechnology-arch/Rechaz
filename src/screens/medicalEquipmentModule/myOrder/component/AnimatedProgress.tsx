import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useAppTheme } from '../../../../hooks/useAppTheme';

const AnimatedProgress = ({ delay }: any) => {
  const theme = useAppTheme();
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: 1,
      duration: 700,
      delay,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: 2,
        height: animatedHeight.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 35],
        }),
        backgroundColor: theme.tokens.colors.primaryGradientEnd,
        marginLeft: 1,
      }}
    />
  );
};

export default React.memo(AnimatedProgress);
