import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckIcon from 'react-native-vector-icons/FontAwesome6';
import CrossIcon from 'react-native-vector-icons/Entypo';
import WarnigIcon from 'react-native-vector-icons/FontAwesome6';
import { AppTheme, useAppTheme } from '../hooks/useAppTheme';
import { colors, fonts } from '../theme';

interface ToastProps {
  text1?: string;
  text2?: string;
}

export const toastConfig = {
  success: ({ text1, text2 }: ToastProps) => {
    const theme = useAppTheme();
    const { moderateScale } = theme;
    const styles = useMemo(() => createStyle(theme), [theme]);

    return (
      <View style={[styles.toast, styles.success]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.checkIconBox}>
            <CheckIcon
              name="check"
              size={moderateScale(14.5)}
              color={colors.white}
            />
          </View>
          <View style={styles.successRightBox}>
            <Text style={styles.text1}>{text1}</Text>
            {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
          </View>
        </View>
      </View>
    );
  },

  error: ({ text1, text2 }: ToastProps) => {
    const theme = useAppTheme();
    const { moderateScale } = theme;
    const styles = useMemo(() => createStyle(theme), [theme]);

    return (
      <View style={[styles.toast, styles.error]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.checkIconBox, { backgroundColor: '#FB5758' }]}>
            <CrossIcon
              name="cross"
              color={colors.white}
              size={moderateScale(20)}
            />
          </View>
          <View style={styles.successRightBox}>
            <Text style={[styles.text1, { color: colors.red }]}>{text1}</Text>
            {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
          </View>
        </View>
      </View>
    );
  },

  info: ({ text1, text2 }: ToastProps) => {
    const theme = useAppTheme();
    const { moderateScale } = theme;
    const styles = useMemo(() => createStyle(theme), [theme]);

    return (
      <View style={[styles.toast, styles.info]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <WarnigIcon
            name="circle-exclamation"
            color={colors.warning || '#F5A623'} // Fallback if spelling is warning vs warnig
            size={moderateScale(30)}
          />
          <View style={styles.successRightBox}>
            <Text style={[styles.text1, { color: colors.black }]}>{text1}</Text>
            {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
          </View>
        </View>
      </View>
    );
  },
};

const createStyle = (theme: AppTheme) => {
  const { moderateScale } = theme;
  return StyleSheet.create({
    toast: {
      width: '92%',
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(10),
      borderRadius: moderateScale(16),
      marginHorizontal: moderateScale(10),
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      justifyContent: 'space-between',
    },
    checkIconBox: {
      backgroundColor: '#4FDD6B',
      borderRadius: moderateScale(100),
      height: moderateScale(30),
      width: moderateScale(30),
      alignItems: 'center',
      justifyContent: 'center',
    },
    success: {
      backgroundColor: '#F1F9F4',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#53CA75',
      borderWidth: 1.8,
    },
    successRightBox: { marginLeft: moderateScale(13) },
    error: {
      backgroundColor: '#FCEFEA',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#E84C55',
      borderWidth: 1.5,
    },
    info: {
      backgroundColor: '#fef7ea',
      borderColor: '#f0e1c3',
      borderWidth: 1.5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text1: {
      fontFamily: fonts.UrbanistBold,
      color: colors.green,
      fontSize: moderateScale(16),
      marginBottom: moderateScale(2),
    },
    text2: {
      color: '#68625D',
      fontSize: moderateScale(13),
      marginTop: moderateScale(2),
      fontFamily: fonts.UrbanistMedium,
      width: moderateScale(250),
    },
    crossBox: {
      height: moderateScale(26),
      width: moderateScale(26),
      backgroundColor: colors.white,
      borderRadius: moderateScale(4),
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: moderateScale(4),
      shadowColor: colors.white,
    },
  });
};
