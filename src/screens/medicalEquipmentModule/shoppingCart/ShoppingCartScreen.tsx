import React, { useState } from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';
import { ScreenLayout, AppHeader, CustomButton } from '../../../component';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Images } from '../../../assets/images';
import WishListIcon from 'react-native-vector-icons/Feather';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import RightIcon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Icons } from '../../../assets/icons';

const ShoppingCartScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [productOrder, setProductOrder] = useState(1);
  const [diagnosticText, setDiagnosticText] = useState('diagnosticTest');
  const [quantity, setQuantity] = useState(1);

  const wishlistData = [
    {
      id: 1,
      img: Images.medicineImg1,
      title: 'Dolo 650 Tablet',
      actualAmount: '₹29.10',
      IncludedOffer: '(₹550)',
      offier: '25% off',
    },
    {
      id: 2,
      img: Images.medicineImg2,
      title: 'Finax Tablet',
      actualAmount: '₹589',
      IncludedOffer: '(₹710)',
      offier: '17% off',
    },
    {
      id: 3,
      img: Images.medicineImg3,
      title: 'Disprin Regular 325 mg, 10 Tablets',
      actualAmount: '₹29.10',
      IncludedOffer: '(₹550)',
      offier: '25% off',
    },
    {
      id: 4,
      img: Images.medicineImg4,
      title: 'Topcare, Allergy Relief Soft Gels Dye Free, 24 Count',
      actualAmount: '2818',
      IncludedOffer: '(₹710)',
      offier: '17% off',
    },

    {
      id: 5,
      img: Images.medicineImg1,
      title: 'Dolo 650 Tablet',
      actualAmount: '₹29.10',
      IncludedOffer: '(₹550)',
      offier: '25% off',
    },
    {
      id: 6,
      img: Images.medicineImg2,
      title: 'Finax Tablet',
      actualAmount: '₹589',
      IncludedOffer: '(₹710)',
      offier: '17% off',
    },
    {
      id: 7,
      img: Images.medicineImg3,
      title: 'Disprin Regular 325 mg, 10 Tablets',
      actualAmount: '₹29.10',
      IncludedOffer: '(₹550)',
      offier: '25% off',
    },
    {
      id: 8,
      img: Images.medicineImg4,
      title: 'Topcare, Allergy Relief Soft Gels Dye Free, 24 Count',
      actualAmount: '2818',
      IncludedOffer: '(₹710)',
      offier: '17% off',
    },
  ];

  const handleProductOrder = (type: string) => {
    setProductOrder(type);
  };

  const handleDiagnostice = (type: string) => {
    setDiagnosticText(type);
    // const filtered = data?.filter(item => item?.type === type);
    // setFilteredList(filtered);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(pre => pre - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(pre => pre + 1);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.medicineBox}
        onPress={() => navigation.navigate('MedicineDetails')}
      >
        <View style={styles.innerBox}>
          <Image
            source={item?.img}
            style={styles.medicineImg}
            resizeMode="contain"
          />

          <View>
            <Text style={styles.stipeText}>Stipe</Text>
            <Text style={styles.titleText}>Dolo 650 Tablet</Text>
            <Text style={styles.quantityText}>Qty : 2</Text>

            <View style={styles.countBox}>
              <Pressable style={styles.increaseBox} onPress={handleDecrease}>
                <Text style={styles.decreseText}>-</Text>
              </Pressable>
              <Text style={styles.quantityText}>{quantity}</Text>
              <Pressable style={styles.increaseBox} onPress={handleIncrease}>
                <Text style={styles.decreseText}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.wishlistRow}>
          <Text style={styles.amountText}>₹209</Text>

          <View style={styles.innerBox1}>
            <Pressable style={styles.relatedWisListBox}>
              <WishListIcon
                name="heart"
                color={theme.tokens.colors.blackDark}
                size={theme.moderateScale(13)}
              />
            </Pressable>

            <Image
              source={Icons.deleteIcon}
              style={styles.deleteIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      header={
        <AppHeader
          title="Shopping cart"
          onPress={handleBackPress}
          cartCount={6}
        />
      }
    >
      <LinearGradient
        colors={['#fff', '#D6EAE8', '#D6EAE8', '#D6EAE8']}
        style={styles.homeContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <FlatList
          data={wishlistData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListFooterComponent={() => (
            <View>
              <View style={styles.discountBox}>
                <Text style={styles.discountText}>
                  Discount Code or Gift Card
                </Text>
                <View style={styles.applyBox}>
                  <Text style={styles.applyText}>Apply</Text>
                </View>
              </View>

              <Pressable style={styles.getItBox}>
                <View style={styles.getInnerBox}>
                  <Image
                    source={Icons.copunIcon}
                    style={styles.copunIcon}
                    resizeMode="contain"
                    tintColor="#fff"
                  />
                  <Text style={styles.getText}>
                    Get it for{' '}
                    <Text style={[styles.getText, styles.amoutText]}>₹200</Text>{' '}
                    with Coupons & Bank offers{' '}
                  </Text>
                </View>

                <RightIcon
                  name="chevron-right"
                  size={theme.moderateScale(25)}
                  color="#fff"
                />
              </Pressable>

              <View style={styles.subTotalBox}>
                <View style={styles.subtotalInner}>
                  <Text style={styles.subTotalText}>Subtotal</Text>
                  <Text style={styles.subTotalText}>₹418.00</Text>
                </View>
                <View style={styles.subtotalInner}>
                  <Text style={styles.subTotalText}>Shipping charges</Text>
                  <Text style={styles.subTotalText}>₹418.00</Text>
                </View>

                <View style={styles.lineBox} />
                <View style={styles.subtotalInner}>
                  <Text style={styles.totalText}>Total</Text>
                  <Text style={styles.totalText}>₹418.00</Text>
                </View>

                <CustomButton
                  title="Checkout"
                  style={styles.checkOut}
                  onPress={() => navigation.navigate('MyOrder')}
                />
              </View>
            </View>
          )}
        />
      </LinearGradient>
    </ScreenLayout>
  );
};

export default ShoppingCartScreen;

// <View style={styles.cardcontentBox}>
//           <Text style={styles.titleStyle}>{item?.title}</Text>
//           <Text style={styles.medicineText}>Medicine Tablet 1mg</Text>
//           <View style={styles.lineBox} />
//           <View style={styles.amountRow}>
//             <Text style={styles.offiredText}>{item?.actualAmount}</Text>
//             <Text
//               style={[
//                 styles.includerText,
//                 { textDecorationLine: 'line-through' },
//               ]}
//             >
//               {' '}
//               {item?.IncludedOffer}{' '}
//             </Text>
// <Text style={[styles.includerText, { color: '#19B44D' }]}>
//   {item?.offier}
// </Text>
//           </View>
//         </View>
