import { useCallback, useMemo } from 'react';
import { useWindowDimensions, PixelRatio } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const guidelineBaseWidth = 375;
  const guidelineBaseHeight = 812;

  // const shortDimension = Math.min(width, height);
  // const longDimension = Math.max(width, height);
  const shortDimension = useMemo(
    () => Math.min(width, height),
    [width, height],
  );
  const longDimension = useMemo(() => Math.max(width, height), [width, height]);

  const isTablet = shortDimension >= 768;
  const maxScale = isTablet ? 1.4 : 1.25;

  // We use useCallback so these function references stay stable
  const scale = useCallback(
    (size: number) =>
      Math.min((shortDimension / guidelineBaseWidth) * size, size * maxScale),
    [shortDimension, maxScale],
  );

  const verticalScale = useCallback(
    (size: number) =>
      Math.min((longDimension / guidelineBaseHeight) * size, size * maxScale),
    [longDimension, maxScale],
  );

  const moderateScale = useCallback(
    (size: number, factor = 0.5) => size + (scale(size) - size) * factor,
    [scale],
  );

  const normalize = useCallback(
    (size: number) => {
      const scaleFactor = 0.5;
      const scaled = size + (scale(size) - size) * scaleFactor;
      return Math.round(PixelRatio.roundToNearestPixel(scaled));
    },
    [scale],
  );

  return { scale, verticalScale, moderateScale, normalize, insets, isTablet };
};

// // perfect screen responsive
// import { useWindowDimensions, PixelRatio } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;

// export const useResponsive = () => {
//   const { width, height } = useWindowDimensions();
//   const insets = useSafeAreaInsets();

//   const shortDimension = Math.min(width, height);
//   const longDimension = Math.max(width, height);

//   // Tablet detection
//   const isTablet = shortDimension >= 768;

//   // Dynamic clamp (smarter than fixed 1.25)
//   const maxScale = isTablet ? 1.4 : 1.25;

//   const scale = (size: number) =>
//     Math.min((shortDimension / guidelineBaseWidth) * size, size * maxScale);

//   const verticalScale = (size: number) =>
//     Math.min((longDimension / guidelineBaseHeight) * size, size * maxScale);

//   const moderateScale = (size: number, factor = 0.5) =>
//     size + (scale(size) - size) * factor;

//   const normalize = (size: number) => {
//     const newSize = moderateScale(size);
//     return Math.round(PixelRatio.roundToNearestPixel(newSize));
//   };

//   return {
//     scale,
//     verticalScale,
//     moderateScale,
//     normalize,
//     insets,
//     isTablet,
//   };
// };
