import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { ScreenLayout, AppHeader, CustomButton } from '../../component';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Icons } from '../../assets/icons';

type Props = {
  navigation: any;
};

const CheckOutScreen = ({ navigation }: Props) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const data = [
    { id: 1, title: 'Liver Function Tests' },
    { id: 2, title: 'Liver Function Tests' },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.liveFnBox,
          item?.id === 1 && { marginTop: theme.tokens.spacing.md },
        ]}
      >
        <View
          style={[styles.priceTextAlign, { justifyContent: 'space-between' }]}
        >
          <View>
            <Text style={styles.liverText}>{item?.title}</Text>
            <Text style={styles.thyroidText}>Thyroid Profile Total Blood</Text>

            <View style={styles.priceTextAlign}>
              <Image
                source={Icons.clockIcon}
                style={styles.clockIcon}
                resizeMode="contain"
                tintColor={theme.tokens.colors.darkColor}
              />
              <Text style={styles.earliestText}>
                Earliest reports within 10 hours
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.priceTextAlign}>
              <Text style={styles.actialPrice}>₹420</Text>
              <Text style={styles.discountText}>(₹550)</Text>
            </View>

            <View style={styles.offerBox}>
              <Text style={styles.offierText}>25% off</Text>
            </View>

            <Pressable style={styles.removeBtn}>
              <Text style={styles.removeText}>Remove</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      innerContainer={styles.container}
      header={
        <AppHeader title="Checkout" onPress={handleBackPress} cartCount={6} />
      }
    >
      <View style={styles.homeContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ListFooterComponent={() => {
            return (
              <View>
                <View style={styles.patientInfomationBox}>
                  <View style={styles.patientHeader}>
                    <Text style={styles.patientText}>Patient Information</Text>
                  </View>

                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Name</Text>
                    <Text style={styles.userText}>Manoj Deshmukh</Text>
                  </View>
                  <View style={styles.lineBox} />

                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Phone Number</Text>
                    <Text style={styles.userText}>+91-9876541238</Text>
                  </View>
                  <View style={styles.lineBox} />

                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Age</Text>
                    <Text style={styles.userText}>Male</Text>
                  </View>
                  <View style={styles.lineBox} />

                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Email</Text>
                    <Text style={styles.userText}>manoj@gmail.com</Text>
                  </View>
                  <View style={styles.lineBox} />

                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Plot No.</Text>
                    <Text style={styles.userText}>
                      15 Corner, Sector 10 Shopping Center
                    </Text>
                  </View>
                  <View style={styles.lineBox} />
                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>State</Text>
                    <Text style={styles.userText}>Rajasthan</Text>
                  </View>
                  <View style={styles.lineBox} />
                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>City</Text>
                    <Text style={styles.userText}>Jaipur</Text>
                  </View>
                  <View style={styles.lineBox} />

                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Locality</Text>
                    <Text style={styles.userText}>Vijay Path , Mansarovar</Text>
                  </View>
                  <View style={styles.lineBox} />
                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Pincode</Text>
                    <Text style={styles.userText}>302020</Text>
                  </View>
                  <View style={styles.lineBox} />
                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Booking for</Text>
                    <Text style={styles.userText}>Myself</Text>
                  </View>
                  <View style={styles.lineBox} />
                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Date</Text>
                    <Text style={styles.userText}>April, 31 2026</Text>
                  </View>
                  <View style={styles.lineBox} />
                  <View style={styles.patientNameBox}>
                    <Text style={styles.nameText}>Time</Text>
                    <Text style={styles.userText}>07:00AM</Text>
                  </View>
                </View>

                <View style={styles.totalAmountBox}>
                  <View>
                    <Text style={styles.totalAmountText}>Total Amount</Text>
                    <Text style={styles.twoItemText}>(2 items)</Text>
                  </View>

                  <View>
                    <View style={styles.priceTextAlign}>
                      <Text style={styles.totalAmount}>₹420</Text>
                      <Text style={styles.totalAmoutDiscount}> (₹550)</Text>
                    </View>

                    <View style={styles.offerBox}>
                      <Text style={styles.offierText}>25% off</Text>
                    </View>
                  </View>
                </View>

                <CustomButton
                  title="Pay Now"
                  onPress={() => navigation.navigate('PaymentDetail')}
                  style={styles.btnStyle}
                />
              </View>
            );
          }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: theme.tokens.spacing.xxl,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenLayout>
  );
};

export default CheckOutScreen;
