// import { Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;

// export const scale = (size: number) => (width / guidelineBaseWidth) * size;

// export const verticalScale = (size: number) =>
//   (height / guidelineBaseHeight) * size;

// export const moderateScale = (size: number, factor = 0.5) =>
//   size + (scale(size) - size) * factor;

// export const mjFont = (size: number) => `${moderateScale(size)}px`;

import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const fontScale = (size: number) => moderateScale(size);

export const pixelPerfect = (size: number) =>
  PixelRatio.roundToNearestPixel(size);

export const spacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
};

export const radius = {
  sm: moderateScale(6),
  md: moderateScale(10),
  lg: moderateScale(16),
  xl: moderateScale(24),
};

export const iconSize = {
  sm: moderateScale(14),
  md: moderateScale(18),
  lg: moderateScale(24),
  xl: moderateScale(32),
};
