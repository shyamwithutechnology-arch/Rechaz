import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { ScreenLayout, AppHeader, CustomButton } from '../../component';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Icons } from '../../assets/icons';
import NextIcon from 'react-native-vector-icons/MaterialIcons';
import { fonts } from '../../theme';

type Props = {
  navigation: any;
};

const CheckOutScreen = ({ navigation }: Props) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      innerContainer={styles.container}
      header={
        <AppHeader
          title="Payment Details"
          onPress={handleBackPress}
          cartCount={6}
        />
      }
    >
      <View style={styles.homeContainer}>
        <View style={styles.mainAmountBox}>
          <Text style={styles.amountText}>Total Amount </Text>
          <Text style={styles.totalAmount}>₹ 840/-</Text>
        </View>

        <View style={styles.payByUpiBox}>
          <View style={styles.payHeader}>
            <Text style={styles.payText}>Pay By UPI</Text>
          </View>

          <View style={styles.mainPayBox}>
            <Pressable style={styles.phonePeBox}>
              <View style={styles.phonePeLeft}>
                <Image
                  source={Icons.phonepeIcon}
                  style={styles.phonePeIcon}
                  resizeMode="contain"
                />
                <Text style={styles.phonePayText}>Phone Pay</Text>
              </View>

              <NextIcon
                name="navigate-next"
                color={theme.tokens.colors.lightGray}
                size={theme.moderateScale(20)}
              />
            </Pressable>
            <View style={styles.lineBox} />

            <Pressable style={styles.phonePeBox}>
              <View style={styles.phonePeLeft}>
                <Image
                  source={Icons.googleIcon}
                  style={styles.phonePeIcon}
                  resizeMode="contain"
                />
                <Text style={styles.phonePayText}>Gpay</Text>
              </View>

              <NextIcon
                name="navigate-next"
                color={theme.tokens.colors.lightGray}
                size={theme.moderateScale(20)}
              />
            </Pressable>
            <View style={styles.lineBox} />

            <Pressable style={styles.phonePeBox}>
              <View style={styles.phonePeLeft}>
                <Image
                  source={Icons.paytemIcon}
                  style={styles.phonePeIcon}
                  resizeMode="contain"
                />
                <Text style={styles.phonePayText}>Paytm</Text>
              </View>

              <NextIcon
                name="navigate-next"
                color={theme.tokens.colors.lightGray}
                size={theme.moderateScale(20)}
              />
            </Pressable>
          </View>
        </View>

        <View style={[styles.payByUpiBox, styles.payBox]}>
          <View style={styles.payHeader}>
            <Text style={styles.payText}>Pay By UPI</Text>
          </View>

          <View style={styles.mainPayBox}>
            <Pressable style={styles.phonePeBox}>
              <View style={styles.phonePeLeft}>
                <Image
                  source={Icons.creditCradIcon}
                  style={styles.phonePeIcon}
                  resizeMode="contain"
                />
                <Text style={styles.phonePayText}>Credit Card</Text>
              </View>

              <NextIcon
                name="navigate-next"
                color={theme.tokens.colors.lightGray}
                size={theme.moderateScale(20)}
              />
            </Pressable>
            <View style={styles.lineBox} />

            <Pressable style={styles.phonePeBox}>
              <View style={styles.phonePeLeft}>
                <Image
                  source={Icons.visaCardicon}
                  style={styles.phonePeIcon}
                  resizeMode="contain"
                />
                <View>
                  <Text style={[styles.phonePayText, styles.visaCardText]}>
                    Visa******0913
                  </Text>
                  <Text style={styles.wrapText}>Wrap your Items</Text>
                </View>
              </View>

              <NextIcon
                name="navigate-next"
                color={theme.tokens.colors.lightGray}
                size={theme.moderateScale(20)}
              />
            </Pressable>
            <View style={styles.lineBox} />

            <Pressable style={styles.phonePeBox}>
              <View style={styles.phonePeLeft}>
                <Image
                  source={Icons.masterCardIcon}
                  style={styles.phonePeIcon}
                  resizeMode="contain"
                />
                <View>
                  <Text style={[styles.phonePayText, styles.visaCardText]}>
                    Mastercard****0913
                  </Text>
                  <Text style={styles.wrapText}>Wrap your Items</Text>
                </View>
              </View>

              <NextIcon
                name="navigate-next"
                color={theme.tokens.colors.lightGray}
                size={theme.moderateScale(20)}
              />
            </Pressable>
            <View style={styles.lineBox} />

            <Pressable style={styles.phonePeBox}>
              <View style={styles.phonePeLeft}>
                <Image
                  source={Icons.creditCradIcon}
                  style={styles.phonePeIcon}
                  resizeMode="contain"
                />

                <Text style={styles.phonePayText}>Debit Card</Text>
              </View>

              <NextIcon
                name="navigate-next"
                color={theme.tokens.colors.lightGray}
                size={theme.moderateScale(20)}
              />
            </Pressable>
            <View style={styles.lineBox} />

            <Pressable style={styles.newBtn}>
              <Image source={Icons.plusIcon} style={styles.plusIcon} />
              <Text style={styles.addNewCardText}> Add new Card</Text>
            </Pressable>
          </View>
        </View>

        <CustomButton
          title="Pay Now"
          leftIcon={Icons.plusIcon}
          onPress={() => navigation.navigate('Success')}
          style={styles.btnStyle}
        />
      </View>
    </ScreenLayout>
  );
};

export default CheckOutScreen;
