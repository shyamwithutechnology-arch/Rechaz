import React, { useState } from 'react';
import { View, Text, Pressable, Image, FlatList, Alert } from 'react-native';
import { ScreenLayout, AppHeader } from '../../../component';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Images } from '../../../assets/images';
import Icon from 'react-native-vector-icons/Octicons';
import { Icons } from '../../../assets/icons';
import WishListIcon from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/EvilIcons';
import RightIcon from 'react-native-vector-icons/EvilIcons';
import StarIcon from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fonts } from '../../../theme';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import RateIcon from 'react-native-vector-icons/MaterialIcons';

const MedicineDetailsScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const insets = useSafeAreaInsets();

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
      <Pressable style={styles.medicineBox}>
        <Image
          source={item?.img}
          style={styles.medicineImg}
          resizeMode="contain"
        />
        <View style={styles.cardcontentBox}>
          <Text style={styles.titleStyle}>{item?.title}</Text>
          <Text style={styles.medicineText}>Medicine Tablet 1mg</Text>
          <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map(item => (
              <RateIcon
                key={item}
                name="star-border"
                size={theme.moderateScale(15)}
                color="#FFC107"
              />
            ))}
            <Text style={styles.ratingText}>
              4.8{' '}
              <Text style={[styles.ratingText, styles.ratingGrayText]}>
                (21)
              </Text>
            </Text>
          </View>
          <View style={styles.lineBox} />
          <View style={styles.amountRow}>
            <Text style={styles.offiredText}>{item?.actualAmount}</Text>
            <Text
              style={[
                styles.includerText,
                { textDecorationLine: 'line-through' },
              ]}
            >
              {' '}
              {item?.IncludedOffer}{' '}
            </Text>
            <Text style={[styles.includerText, { color: '#19B44D' }]}>
              {item?.offier}
            </Text>

            <Pressable style={styles.plusBox}>
              <AddIcon name="add" size={theme.moderateScale(18)} color="#fff" />
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.relatedWisListBox}>
          <WishListIcon
            name="heart"
            color={theme.tokens.colors.blackDark}
            size={theme.moderateScale(11)}
          />
        </Pressable>
      </Pressable>
    );
  };
  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      innerContainer={styles.container}
      scroll={true}
    >
      <View style={styles.headerBox}>
        <Pressable onPress={handleBackPress} style={styles.backIcon}>
          <Icon name="arrow-left" color="#000" size={theme.moderateScale(24)} />
        </Pressable>

        <View style={styles.headerRow}>
          <Pressable style={styles.wisListBox}>
            <WishListIcon
              name="heart"
              color={theme.tokens.colors.blackDark}
              size={theme.moderateScale(13)}
            />
          </Pressable>

          <Pressable style={styles.wisListBox}>
            <ShareIcon
              name="share-google"
              color={theme.tokens.colors.blackDark}
              size={theme.moderateScale(13)}
            />
          </Pressable>
        </View>
      </View>

      <View
        style={[
          styles.homeContainer,
          { paddingBottom: insets.bottom + theme.tokens.spacing.xxl },
        ]}
      >
        <Image
          source={Images.medicineImg4}
          resizeMode="contain"
          style={styles.medicineImg1}
        />

        <Text style={styles.titleText}>Dolo 650 Tablet</Text>

        <View style={[styles.getInnerBox, styles.getJustText]}>
          <View style={styles.amountRow}>
            <Text style={styles.offiredText}>₹209 </Text>
            <Text
              style={[
                styles.includerText,
                { textDecorationLine: 'line-through' },
              ]}
            >
              {' '}
              (₹219){' '}
            </Text>

            <View style={styles.offirBox}>
              <Text style={[styles.includerText, { color: '#19B44D' }]}>
                {' '}
                5% Off
              </Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map(item => (
              <RateIcon
                key={item}
                name="star-border"
                size={theme.moderateScale(18)}
                color="#FFC107"
              />
            ))}
            <Text style={styles.ratingText}>
              4.8{' '}
              <Text style={[styles.ratingText, styles.ratingGrayText]}>
                (21)
              </Text>
            </Text>
          </View>
        </View>

        <Text style={styles.tabletText}>
          15 Tablet . ₹0.75/unit . (Inclusive of all Taxes)
        </Text>

        <Pressable style={styles.getItBox}>
          <View style={styles.getInnerBox}>
            <Image
              source={Icons.copunIcon}
              style={styles.copunIcon}
              resizeMode="contain"
            />
            <Text style={styles.getText}>
              Get it for{' '}
              <Text style={[styles.getText, styles.amoutText]}>₹200</Text> with
              Coupons & Bank offers{' '}
            </Text>
          </View>

          <RightIcon
            name="chevron-right"
            size={theme.moderateScale(22)}
            color="#424242"
          />
        </Pressable>

        <View style={styles.mainIncreaMentBox}>
          <View style={styles.countBox}>
            <Pressable style={styles.increaseBox} onPress={handleDecrease}>
              <Text style={styles.decreseText}>-</Text>
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable style={styles.increaseBox} onPress={handleIncrease}>
              <Text style={styles.decreseText}>+</Text>
            </Pressable>
          </View>

          <Pressable style={styles.addToCartBox}>
            <Text style={styles.addToCart}> ADD TO CART</Text>
          </Pressable>
        </View>

        <Text
          style={styles.productText}
          onPress={() => navigation.navigate('ShoppingCart')}
        >
          PRODUCT INTRODUCTION
        </Text>

        <Text style={styles.decText}>
          Dolo 650 Tablet helps relieve pain and fever by blocking the release
          of certain chemical messengers that trigger these symptoms. It is used
          to treat headaches, migraines, toothaches, period pains, arthritis,
          and muscle aches, and to reduce fever associated with infections such
          as the common cold and flu.
          {'\n\n'}
          Dolo 650 Tablet has been one of the most widely prescribed
          paracetamol-based medications during the COVID-19 pandemic. It should
          be taken regularly as per the doctor’s advice. Take it with food to
          avoid an upset stomach. It may be taken alone or in combination with
          other medications. However, no more than four doses of Dolo 650 Tablet
          can be taken in 24 hours with a gap of at least 4 hours between two
          doses. Please do not take it for longer than recommended.
        </Text>

        <Text style={styles.productText}>MORE ABOUT THE PRODUCT</Text>

        <View style={styles.moreProductDetails}>
          <View style={[styles.getInnerBox, styles.getJustText]}>
            <Text style={styles.compositionText}>Composition</Text>
            <Text style={styles.compisitionValue}>Composition</Text>
          </View>
          <View style={styles.lineBox} />
          <View style={[styles.getInnerBox, styles.getJustText]}>
            <Text style={styles.compositionText}>Manufacturer/Marketer</Text>
            <Text style={styles.compisitionValue}>IPCA Laboratory</Text>
          </View>
          <View style={styles.lineBox} />
          <View style={[styles.getInnerBox, styles.getJustText]}>
            <Text style={styles.compositionText}>Consume Type</Text>
            <Text style={styles.compisitionValue}>Oral</Text>
          </View>
          <View style={styles.lineBox} />
          <View style={[styles.getInnerBox, styles.getJustText]}>
            <Text style={styles.compositionText}>Expires on or after</Text>
            <Text style={styles.compisitionValue}>Jan 27</Text>
          </View>
          <View style={styles.lineBox} />
          <View style={[styles.getInnerBox, styles.getJustText]}>
            <Text style={styles.compositionText}>Return Policy</Text>
            <Text style={styles.compisitionValue}>Not Returnable</Text>
          </View>
          <View style={styles.lineBox} />
          <View style={[styles.getInnerBox, styles.getJustText]}>
            <Text style={styles.compositionText}>NPPA</Text>
            <Text style={styles.compisitionValue}>Regulated</Text>
          </View>
        </View>

        <View style={[styles.getInnerBox, styles.statusBox]}>
          <Pressable style={styles.delivery}>
            <View style={styles.deliveryBox}>
              <Image
                source={Icons.cashonDeliberyIcon}
                style={styles.cashDeliveryIcon}
              />
            </View>

            <Text style={styles.cashOnText}>Cash on delivery</Text>
            <Text
              style={[styles.cashOnText, { fontFamily: fonts.UrbanistRegular }]}
            >
              Available
            </Text>
          </Pressable>

          <View style={styles.verticalBox} />
          <Pressable>
            <View style={styles.deliveryBox}>
              <Image
                source={Icons.returnBoxIcon}
                style={styles.cashDeliveryIcon}
              />
            </View>

            <Text style={styles.cashOnText}>Free Return</Text>
            <Text
              style={[styles.cashOnText, { fontFamily: fonts.UrbanistRegular }]}
            >
              within 7 days
            </Text>
          </Pressable>
          <View style={styles.verticalBox} />
          <Pressable>
            <View style={styles.deliveryBox}>
              <Image
                source={Icons.scheduleIcon}
                style={styles.cashDeliveryIcon}
              />
            </View>

            <Text style={styles.cashOnText}>Expire offer</Text>
            <Text
              style={[styles.cashOnText, { fontFamily: fonts.UrbanistRegular }]}
            >
              Feb, 2028
            </Text>
          </Pressable>
        </View>

        <View style={[styles.getInnerBox, styles.getJustText]}>
          <Pressable
            style={styles.addToCartBtn}
            onPress={() => navigation.navigate('ShoppingCart')}
          >
            <Text style={styles.addToCartText}>ADD TO CART</Text>
          </Pressable>
          <Pressable
            style={[
              styles.addToCartBtn,
              { backgroundColor: theme.tokens.colors.black },
            ]}
          >
            <Text style={styles.addToCartText}>BUY NOW</Text>
          </Pressable>
        </View>

        <Text style={styles.productText}>RELATED PRODUCTS</Text>

        <FlatList
          data={wishlistData}
          renderItem={renderItem}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ScreenLayout>
  );
};

export default MedicineDetailsScreen;
