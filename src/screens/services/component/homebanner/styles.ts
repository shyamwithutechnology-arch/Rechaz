import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../../hooks/useAppTheme';

export const createStyles = (theme: AppTheme) => {
  const { tokens, moderateScale, verticalScale } = theme;
  return StyleSheet.create({
    container: {
      marginTop: tokens.spacing.sm,
    },
    imageWrapper: {
      // flex: 1,
      overflow: 'hidden',
      marginHorizontal: tokens.spacing.xs,
      // height: verticalScale(10),
    },
    image: {
      width: '100%',
      height: '100%',
    },
    //   dot: {
    //     backgroundColor: '#D0D5DD',
    //   },
    //   activeDot: {
    //     backgroundColor: '#0C406F',
    //   },
  });
};
