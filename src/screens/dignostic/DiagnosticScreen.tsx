import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {
  ScreenLayout,
  AppHeader,
  AppModal,
  CustomButton,
  SearchList,
} from '../../component/index';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Images } from '../../assets/images';
import { Icons } from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  navigation: any;
};

const data = [
  {
    id: 1,
    title: 'Thyroid Profile (T3, T4, TSH)',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },
  {
    id: 2,
    title: 'Liver Function Tests',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },
  {
    id: 3,
    title: 'Kidney Function Tests',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },
  {
    id: 4,
    title: 'HbA1c Test (Hemoglobin A1c)',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },
  {
    id: 5,
    title: 'FBS (Fasting Blood Sugar )Test',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },
  {
    id: 6,
    title: 'Urine Routine Test',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },
  {
    id: 7,
    title: 'CRP Test (C - Reactive Protein)',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },
  {
    id: 8,
    title: 'Uric Acid Test',
    dec: 'Thyroid Profile Total Blood',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    type: 'diagnosticTest',
  },

  {
    id: 9,
    img: Images.bludTestImg,
    title: 'Sugar Screen',
    dec: 'For Age : 18-80Yrs',
    disCountPrice: '699',
    actualPrice: '₹550',
    disCount: '25% Off',
    testCount: 'Include 3 Tests',
    type: 'testPackages',
  },
  {
    id: 10,
    img: Images.thyroidTestImg,
    title: 'Thyroid Assessment - Basic',
    dec: 'For Age : 7 years & above',
    disCountPrice: '₹899',
    actualPrice: '₹550',
    disCount: '25% Off',
    testCount: 'Include 87 Tests',
    type: 'testPackages',
  },
  {
    id: 11,
    img: Images.annualHealthCheckupImg,
    title: 'Annual Health Check-Up',
    dec: 'For Age : 7 years & above',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    testCount: 'Include 20 Tests',
    type: 'testPackages',
  },
  {
    id: 12,
    img: Images.healthPcodBasicImg,
    title: 'Health PCOD Basic',
    dec: 'For Age : 7 years & above',
    disCountPrice: '₹420',
    actualPrice: '₹550',
    disCount: '25% Off',
    testCount: 'Include 30 Tests',
    type: 'testPackages',
  },
];
const DiagnosticScreen = ({ navigation }: Props) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [searchText, setSearchText] = useState('');
  const [diagnosticText, setDiagnosticText] = useState('diagnosticTest');

  //filtered
  const [filteredList, setFilteredList] = useState(data);
  const [visible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDiagnostice = (type: string) => {
    setDiagnosticText(type);
    const filtered = data?.filter(item => item?.type === type);
    setFilteredList(filtered);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filtered = data?.filter(item => {
      return (
        item.type === diagnosticText &&
        item.title.toLowerCase().includes(text.toLowerCase())
      );
    });

    setFilteredList(filtered);
  };

  const renderItem = ({ item }) => {
    const isPackage = item?.type === 'testPackages';
    if (isPackage) {
      return (
        <View
          style={[
            styles.cardBox,
            {
              paddingHorizontal: 0,
              paddingTop: 0,
            },
          ]}
        >
          <Image
            source={item?.img}
            style={styles.packageImg}
            resizeMode="cover"
          />
          <View style={styles.testPackageBox}>
            <Text style={styles.tileText}>{item?.title}</Text>
            <Text style={styles.decText}>{item?.title}</Text>

            <View style={styles.innerItemBox}>
              <Text style={styles.disCountText}>{item?.disCountPrice}</Text>
              <Text style={styles.actualText}>({item?.actualPrice})</Text>
              <View style={styles.discountBox}>
                <Text style={[styles.disCountOffer, { marginBottom: 0 }]}>
                  {item?.disCount}
                </Text>
              </View>
            </View>

            <View style={styles.lineBox} />
            <Text
              style={[
                styles.disCountOffer,
                { color: theme.tokens.colors.lightGray },
              ]}
            >
              Include 3 Testss
            </Text>
          </View>

          <View style={styles.readMoreMainBox}>
            <Pressable style={styles.readMoreBtn} onPress={handleVisible}>
              <Text style={styles.readMoreText}>Read More </Text>
            </Pressable>
            <Pressable
              style={[
                styles.readMoreBtn,
                {
                  backgroundColor: theme.tokens.colors.primary,
                },
              ]}
              onPress={() => navigation.navigate('AddpatientDetails')}
            >
              <Text
                style={[
                  styles.readMoreText,
                  { color: theme.tokens.colors.white },
                ]}
              >
                Add to Cart
              </Text>
            </Pressable>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.cardBox}>
          <Text style={styles.tileText}>{item?.title}</Text>
          <Text style={styles.decText}>{item?.dec}</Text>

          <View style={styles.innerItemBox}>
            <Text style={styles.disCountText}>{item?.disCountPrice}</Text>
            <Text style={styles.actualText}>({item?.actualPrice})</Text>
            <Text style={styles.disCountOffer}>{item?.disCount}</Text>
          </View>

          <Pressable style={styles.addToCartBox}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </Pressable>
        </View>
      );
    }
  };

  useEffect(() => {
    const initial = data?.filter(item => item.type === diagnosticText);
    setFilteredList(initial);
  }, []);

  return (
    <>
      <ScreenLayout
        paddingHorizontalStyle={0}
        innerContainer={styles.container}
      >
        <AppHeader
          title="Diagnostics"
          onPress={handleBackPress}
          cartCount={6}
        />

        <View style={styles.homeContainer}>
          <View style={styles.diagnosticBox}>
            <Pressable
              style={[
                styles.DiagnosticTextBtn,
                diagnosticText === 'diagnosticTest' && styles.diagnosticBg,
              ]}
              onPress={() => handleDiagnostice('diagnosticTest')}
            >
              <Text style={styles.DiagnosticText}>Diagnostic Tests</Text>
            </Pressable>

            <Pressable
              style={[
                styles.DiagnosticTextBtn,
                diagnosticText === 'testPackages' && styles.diagnosticBg,
              ]}
              onPress={() => handleDiagnostice('testPackages')}
            >
              <Text style={styles.DiagnosticText}>Test Packages</Text>
            </Pressable>
          </View>

          <SearchList value={searchText} onChange={handleSearch} />

          <FlatList
            data={filteredList}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={{
              paddingTop: theme.tokens.spacing.mdPlus,
              paddingBottom: theme.tokens.spacing.xxl,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScreenLayout>

      <AppModal visible={visible} onClose={handleClose}>
        <Text style={styles.includesText}>Includes 3 Tests</Text>
        <View style={[styles.modalBottomLine]} />

        <View style={styles.innerItemBox}>
          <View style={styles.dot} />
          <Text style={styles.triText}>
            Tri Iodothyronine (T3, Total), Serum
          </Text>
        </View>

        <View style={styles.innerItemBox}>
          <View style={styles.dot} />
          <Text style={styles.triText}>Thyroxine (T4, Total), Serum</Text>
        </View>

        <View style={styles.innerItemBox}>
          <View style={styles.dot} />
          <Text style={styles.triText}>Thyroid Stimulating Hormone (Tsh)</Text>
        </View>

        <CustomButton
          title="Book Package"
          style={styles.bntStyles}
          textStyle={styles.btnTitle}
        />

        <Pressable style={styles.closeBox} onPress={handleClose}>
          <Image source={Icons.closeIcon} style={styles.closeIcon} />
        </Pressable>
      </AppModal>
    </>
  );
};

export default DiagnosticScreen;
