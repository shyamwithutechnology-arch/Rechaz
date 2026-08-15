import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import {
  ScreenLayout,
  AppHeader,
  AppInput,
  CustomButton,
  CustomDropDown,
  AppImagePicker,
} from '../../component/index';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import { Icons } from '../../assets/icons';
import AppSwitch from '../../component/switch/AppSwitch';
import CrossIcon from 'react-native-vector-icons/Entypo';

const NewTicketScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [isEnabled, setIsEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [imagePickerVisible, setImagePickerVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const handleClearImg = () => {
    setSelectedImage('');
  };
  const handleImgClose = () => {
    setImagePickerVisible(false);
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
  return (
    <ScreenLayout
      innerContainer={{ backgroundColor: '#fff' }}
      paddingHorizontalStyle={0}
    >
      <AppHeader title="New Ticket" onPress={handleBackPress} />
      <View style={styles.homeContainer}>
        <View style={styles.dropDownBox}>
          <CustomDropDown
            data={items}
            value={value}
            onChange={setValue}
            placeholder="State"
            leftIcon={Icons.mapIcon}
            placeholder={'Categary'}
          />
        </View>

        <AppInput placeholderText="Subject" />

        <AppInput
          placeholderText="Describe your issue"
          inputBoxStyle={{
            paddingTop: theme.tokens.spacing.xxs,
            paddingBottom: theme.tokens.spacing.xxl,
            marginTop: theme.tokens.spacing.smPlus,
          }}
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

        <View style={styles.markBox}>
          <Text style={[styles.uploadFileTest, { fontSize: theme.tokens.md }]}>
            Mark As Urgent
          </Text>
          <AppSwitch value={isEnabled} onValueChange={setIsEnabled} />
        </View>

        <CustomButton title="Submit Ticket" style={styles.btnStyle} />
      </View>

      <AppImagePicker
        visible={imagePickerVisible}
        onClose={handleImgClose}
        onChange={image => {
          if (image?.uri) {
            setSelectedImage(image.uri);
          }
        }}
      />
    </ScreenLayout>
  );
};

export default NewTicketScreen;
