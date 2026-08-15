import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CheckIcon from 'react-native-vector-icons/FontAwesome6';
import CrossIcon from 'react-native-vector-icons/Entypo';
import WarnigIcon from 'react-native-vector-icons/FontAwesome6';
import { AppTheme, useAppTheme } from '../hooks/useAppTheme';
import { colors, fonts } from '../theme';
import { Icons } from '../assets/icons';

interface ToastProps {
  text1?: string;
  text2?: string;
}

export const toastConfig = {
  success: ({ text1, text2 }: ToastProps) => {
    const theme = useAppTheme();
    const { moderateScale } = theme;
    const styles = useMemo(() => createStyle(theme), [theme]);

    // <CheckIcon
    //   name="check"
    //   size={moderateScale(14.5)}
    //   color={colors.white}
    // />
    return (
      <View style={[styles.toast, styles.success]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.checkIconBox}>
            <Image
              source={Icons.successIcon}
              style={styles.successIcon}
              resizeMode="contain"
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
          <View style={styles.checkIconBox}>
            <Image
              source={Icons.cancelIcon}
              style={styles.errorIcon}
              resizeMode="contain"
              tintColor={theme.tokens.colors.white}
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

  info: ({ text1, text2 }: ToastProps) => {
    const theme = useAppTheme();
    const { moderateScale } = theme;
    const styles = useMemo(() => createStyle(theme), [theme]);

    return (
      <View style={[styles.toast, styles.info]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.checkIconBox}>
            <Image
              source={Icons.infoIcon}
              style={styles.errorIcon}
              resizeMode="contain"
              // tintColor={theme.tokens.colors.white}
            />
          </View>
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
      borderRadius: moderateScale(15),
      // marginHorizontal: moderateScale(10),
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      justifyContent: 'space-between',
    },
    checkIconBox: {
      // backgroundColor: '#4FDD6B',
      // height: moderateScale(30),
      // width: moderateScale(30),
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      padding: moderateScale(7),
      borderRadius: moderateScale(200),
      borderColor: theme.tokens.colors.white,
    },

    successIcon: {
      height: moderateScale(22),
      width: moderateScale(22),
    },
    errorIcon: {
      height: moderateScale(15),
      width: moderateScale(15),
    },
    success: {
      backgroundColor: theme.tokens.colors.green,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#53CA75',
      // borderWidth: 1.8,
    },
    successRightBox: { marginLeft: moderateScale(13) },
    error: {
      backgroundColor: colors.red,
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
      color: colors.white,
      fontSize: moderateScale(16),
      marginBottom: moderateScale(2),
    },
    text2: {
      color: colors.white,
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
