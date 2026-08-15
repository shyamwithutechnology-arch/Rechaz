import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ScreenLayout,
  AppHeader,
  AppInput,
  CustomDropDown,
  CustomButton,
  AppImagePicker,
} from '../../component/index';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Icons } from '../../assets/icons';
import CalenderIcon from 'react-native-vector-icons/SimpleLineIcons';
import CalenderTImeIcon from 'react-native-vector-icons/FontAwesome6';
import CrossIcon from 'react-native-vector-icons/Entypo';
import AppDatePicker from '../../component/appDatePicker/AppDatePicker';

type Props = {
  navigation: any;
};

const AddpatientDetailsScreen = ({ navigation }: Props) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [mySelelf, setMySelef] = useState(1);
  const [imagePickerVisible, setImagePickerVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDOB, setSelectedDOB] = useState<Date | null>(null);
  const today = new Date();

  const data = [
    { label: 'Rajasthan', value: '1' },
    { label: 'Bihar', value: '2' },
  ];

  const slotData = [
    { id: 1, time: '07:00 A.M.' },
    { id: 2, time: '08:00 A.M.' },
    { id: 3, time: '09:00 A.M.' },
    { id: 4, time: '10:00 A.M.' },
    { id: 5, time: '11:00 A.M.' },
    { id: 6, time: '12:00 A.M.' },
    { id: 7, time: '01:00 A.M.' },
    { id: 8, time: '02:00 A.M.' },
  ];

  const handleClearImg = () => {
    setSelectedImage('');
  };
  const handleImgClose = () => {
    setImagePickerVisible(false);
  };

  const handleSelectedSlot = (id: number) => {
    setSelectedSlot(id);
  };
  const handleSetMySelef = (item: string) => {
    setMySelef(item);
  };

  const onImageSelect = (image: any) => {
    console.log('Selected Image => ', image);
  };
  const handleOpenDropdown = () => {
    setOpen(true);
  };

  const handleDropdownValue = (val: string) => {
    setValue(val);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Generate 7 days from current date
  const dates = useMemo(() => {
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);

      return {
        id: index.toString(),
        fullDate: date,
        dayName: date.toLocaleDateString('en-US', {
          weekday: 'short',
        }),
        dayNumber: date.getDate(),
      };
    });
  }, []);

  const handleDOBChange = (date: Date) => {
    if (date > today) return;

    setSelectedDOB(date);
  };

  const renderItem = ({ item }: any) => {
    const isSelected =
      selectedDate.toDateString() === item.fullDate.toDateString();

    return (
      <Pressable
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => setSelectedDate(item.fullDate)}
      >
        <Text style={[styles.dayText, isSelected && styles.selectedTextDay]}>
          {item.dayName}
        </Text>

        <Text style={[styles.dateText, isSelected && styles.selectedText]}>
          {item.dayNumber}
        </Text>
      </Pressable>
    );
  };

  const renderSlotItem = ({ item }) => {
    return (
      <Pressable
        style={[
          styles.slotBox,
          selectedSlot === item?.id && styles.selectedSlot,
        ]}
        onPress={() => handleSelectedSlot(item?.id)}
      >
        <CalenderTImeIcon
          name="clock-rotate-left"
          color={selectedSlot === item?.id ? '#fff' : '#747474'}
          size={theme.moderateScale(10)}
        />
        <Text
          style={[
            styles.timeText,
            selectedSlot === item?.id && styles.selectedSlotTime,
          ]}
        >
          {item.time}
        </Text>
      </Pressable>
    );
  };

  return (
    <ScreenLayout
      paddingHorizontalStyle={0}
      innerContainer={styles.container}
      header={
        <AppHeader
          title="Add patient Details"
          onPress={handleBackPress}
          cartCount={6}
        />
      }
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
          paddingHorizontal: theme.tokens.spacing.md,
          paddingTop: theme.tokens.spacing.mdPlus,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.callAndAgeBox}>
          <Text style={styles.selectDate}>Booking For</Text>
        </View>

        <View style={[styles.forMySelftBox, styles.forMySelfMainBox]}>
          <Pressable
            style={styles.forMySelftBox}
            onPress={() => handleSetMySelef(1)}
          >
            <View style={styles.radioButton}>
              {mySelelf === 1 && <View style={styles.innerBox} />}
            </View>
            <Text style={styles.forMySelfText}>For MySelf</Text>
          </Pressable>

          <Pressable
            style={[
              styles.forMySelftBox,
              { marginLeft: theme.tokens.spacing.xxl },
            ]}
            onPress={() => handleSetMySelef(2)}
          >
            <View style={styles.radioButton}>
              {mySelelf === 2 && <View style={styles.innerBox} />}
            </View>
            <Text style={styles.forMySelfText}>For a Family Member</Text>
          </Pressable>
        </View>

        <AppInput
          placeholderText="Name"
          leftIcon={Icons.editUser}
          leftIconStyle={styles.ageIcon}
          inputBoxStyle={styles.nameInput}
        />

        <View style={styles.callAndAgeBox}>
          <AppInput
            placeholderText="Phone Number"
            leftIcon={Icons.phoneIcon}
            inputBoxStyle={styles.phoneBox}
            leftIconStyle={styles.ageIcon}
          />

          <AppDatePicker value={selectedDOB} onChange={handleDOBChange} />
        </View>

        <AppInput
          placeholderText="Email Address"
          leftIcon={Icons.eMailLight}
          leftIconStyle={styles.emailIcon}
        />

        <AppInput
          placeholderText="Address - Plot No."
          leftIcon={Icons.mapIcon}
          rightIcon={Icons.googleMaps}
          inputBoxStyle={styles.mapBox}
          leftIconStyle={styles.ageIconStyle}
        />

        <View style={styles.callAndAgeBox}>
          <CustomDropDown
            data={data}
            value={value}
            onChange={setValue}
            placeholder="State"
            leftIcon={Icons.mapIcon}
            dropDownContainer={{ width: '48%' }}
            leftIconStyle={styles.ageIconStyle}
          />
          <CustomDropDown
            data={data}
            value={value}
            onChange={setValue}
            placeholder="City"
            leftIcon={Icons.mapIcon}
            dropDownContainer={{ width: '48%' }}
            leftIconStyle={styles.ageIconStyle}
          />
        </View>

        <View
          style={[
            styles.callAndAgeBox,
            { marginVertical: theme.tokens.spacing.xxs },
          ]}
        >
          <CustomDropDown
            data={data}
            value={value}
            onChange={setValue}
            placeholder="Locality"
            leftIcon={Icons.mapIcon}
            dropDownContainer={{ width: '48%' }}
            leftIconStyle={styles.ageIconStyle}
          />
          <AppInput
            placeholderText="Pincode"
            leftIcon={Icons.mapIcon}
            inputBoxStyle={styles.phoneBox}
            leftIconStyle={styles.ageIconStyle}
          />
        </View>

        <View style={[styles.callAndAgeBox, styles.dateSelectBox]}>
          <Text style={styles.selectDate}>Select Date</Text>

          <CalenderIcon
            name="calendar"
            size={theme.moderateScale(16)}
            color={theme.tokens.colors.lightGray}
          />
        </View>

        <FlatList
          horizontal
          data={dates}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

        <View style={styles.callAndAgeBox}>
          <Text style={styles.selectDate}>Select Time Slot</Text>

          <Image
            source={Icons.clockIcon}
            style={styles.clockIcon}
            resizeMode="contain"
          />
        </View>

        <FlatList
          data={slotData}
          renderItem={renderSlotItem}
          numColumns={4}
          contentContainerStyle={styles.slotContainer}
        />

        <Pressable
          style={styles.uploadDoctorCard}
          onPress={() => setImagePickerVisible(true)}
        >
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={styles.uploadedImage}
              resizeMode="contain"
            />
          ) : (
            <>
              <Image
                source={Icons.plusIcon}
                style={styles.plushIcon}
                tintColor={theme.tokens.colors.lightGray}
              />

              <Text style={styles.uploadDoctorText}>
                Upload Doctor Prescription
              </Text>
            </>
          )}

          {selectedImage && (
            <Pressable style={styles.crossBox} onPress={handleClearImg}>
              <CrossIcon
                name="cross"
                color={'#fff'}
                size={theme.moderateScale(13)}
              />
            </Pressable>
          )}
        </Pressable>

        <View style={styles.verifiedTrainedCard}>
          <Image
            source={Icons.varifiedOutlineIcon}
            style={styles.varifinedIcon}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.varifiedText}>Verified & Trained Nurses</Text>
            <Text style={styles.varifiedDecText}>
              {`All nurses are background verified and trained \n professionals.`}
            </Text>
          </View>

          <Image
            source={Icons.varifiedFillIcon}
            style={styles.varifinedIcon}
            resizeMode="contain"
          />
        </View>

        <CustomButton
          title="Submit"
          onPress={() => navigation.navigate('CheckOut')}
          style={styles.btnStyle}
        />

        <AppImagePicker
          visible={imagePickerVisible}
          onClose={handleImgClose}
          onChange={image => {
            if (image?.uri) {
              setSelectedImage(image.uri);
            }
          }}
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default AddpatientDetailsScreen;

const styles = StyleSheet.create({});
