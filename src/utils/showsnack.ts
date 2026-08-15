import Snackbar from 'react-native-snackbar';

export const showSnackbar = (text: string, type: string = 'success') => {
  Snackbar.show({
    text,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: type === 'success' ? 'green' : 'red',
    textColor: 'white', // Add this for better visibility
  });
};
