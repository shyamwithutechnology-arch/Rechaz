import { StyleSheet } from 'react-native';
import { AppTheme } from '../../hooks/useAppTheme';

const createStyle = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
