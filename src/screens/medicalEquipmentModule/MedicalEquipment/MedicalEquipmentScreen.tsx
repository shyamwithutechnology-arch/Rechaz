import React, { useState } from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';
import { ScreenLayout, AppHeader } from '../../../component';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Images } from '../../../assets/images';
import WishListIcon from 'react-native-vector-icons/Feather';
import AddIcon from 'react-native-vector-icons/MaterialIcons';

const MedicalEquipmentScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [productOrder, setProductOrder] = useState(1);
  const [diagnosticText, setDiagnosticText] = useState('diagnosticTest');

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

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.medicineBox}
        onPress={() => navigation.navigate('MedicineDetails')}
      >
        <Image
          source={item?.img}
          style={styles.medicineImg}
          resizeMode="cover"
        />
        <View style={styles.cardcontentBox}>
          <Text style={styles.titleStyle}>{item?.title}</Text>
          <Text style={styles.medicineText}>Medicine Tablet 1mg</Text>
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
        <Pressable style={styles.wisListBox}>
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
    <ScreenLayout paddingHorizontalStyle={0} innerContainer={styles.container}>
      <AppHeader
        title="Medical Equipment & Medicine"
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
            <Text style={styles.DiagnosticText}>Product On Rent</Text>
          </Pressable>

          <Pressable
            style={[
              styles.DiagnosticTextBtn,
              diagnosticText === 'testPackages' && styles.diagnosticBg,
            ]}
            onPress={() => handleDiagnostice('testPackages')}
          >
            <Text style={styles.DiagnosticText}>Order Medicine</Text>
          </Pressable>
        </View>

        <FlatList
          data={wishlistData}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenLayout>
  );
};

export default MedicalEquipmentScreen;
