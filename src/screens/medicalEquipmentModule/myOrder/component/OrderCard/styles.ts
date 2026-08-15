import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../../../hooks/useAppTheme';
import { fonts } from '../../../../../theme';

export const createStyles = (theme: AppTheme) => {
  const { verticalScale, scale, moderateScale, tokens } = theme;
  return StyleSheet.create({
    orderMainBox: {
      backgroundColor: tokens.colors.white,
      marginBottom: tokens.spacing.mdPlus,
      borderRadius: tokens.radius.lg,
      borderWidth: 1,
      borderColor: tokens.colors.lightPrimary,
      overflow: 'hidden',
    },
    orderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: tokens.spacing.md,
    },
    orderCricle: {
      width: scale(70),
      aspectRatio: 1,
      borderRadius: 100,
      backgroundColor: '#E5F6F3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentMainBox: {
      flex: 1,
      marginLeft: 18,
    },
    orderId: {
      fontSize: tokens.fontSize.sm,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistBold,
    },
    orderIcon: {
      height: verticalScale(45),
      aspectRatio: 1,
    },
    placeOrderText: {
      fontSize: tokens.fontSize.xxs,
      color: '#868889',
      fontFamily: fonts.UrbanistMedium,
      marginTop: tokens.spacing.xs,
    },
    itemText: {
      fontSize: tokens.fontSize.xxs,
      color: tokens.colors.black,
      fontFamily: fonts.UrbanistRegular,
    },
    itemSemiBold: {
      fontFamily: fonts.UrbanistSemiBold,
    },
    itemLeft: {
      marginLeft: tokens.spacing.md,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: tokens.spacing.xsPlus,
    },
    upDownBox: {
      width: moderateScale(30),
      height: moderateScale(30),
      borderRadius: tokens.radius.xxl,
      borderWidth: 2,
      borderColor: tokens.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    downUpStyle: {
      height: verticalScale(15),
      width: scale(15),
    },
    orderTrakingBox: {
      borderTopWidth: 1,
      borderTopColor: '#EBEBEB',
      paddingTop: tokens.spacing.lg,
    },
    orderDeliveredBox: {
      borderTopWidth: 1,
      borderTopColor: '#ECECEC',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: tokens.spacing.lg,
      paddingVertical: tokens.spacing.md,
    },
    orderDeliveredRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    deliveredCircle: {
      width: moderateScale(16),
      height: moderateScale(16),
      borderRadius: tokens.radius.xxl,
      backgroundColor: '#E5E5E5',
    },
    orderDeliveredText: {
      marginLeft: tokens.spacing.smPlus,
      fontSize: tokens.fontSize.xs,
      color: '#868889',
      fontFamily: fonts.UrbanistSemiBold,
    },
    dateText: {
      fontSize: tokens.fontSize.xs,
      color: '#868889',
      fontFamily: fonts.UrbanistRegular,
    },
  });
};
