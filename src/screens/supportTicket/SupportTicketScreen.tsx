import React, { useState } from 'react';
import { Image, TextInput, View, Text, Pressable } from 'react-native';
import { ScreenLayout, AppHeader, CustomButton } from '../../component/index';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FilterIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/FontAwesome6';
import { Icons } from '../../assets/icons';

const SupportTicketScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenLayout
      innerContainer={{ backgroundColor: theme.tokens.colors.white }}
      paddingHorizontalStyle={0}
    >
      <AppHeader title="My ticket" onPress={handleBack} />

      <View style={styles.homeContainer}>
        <View style={styles.inputMainBox}>
          <View style={styles.textInputBox}>
            <TextInput
              placeholder="Search Conversation....."
              style={styles.inputBox}
              placeholderTextColor={'#000'}
            />

            <LinearGradient
              colors={[
                theme.tokens.colors.primaryGradientStart,
                theme.tokens.colors.primaryGradientEnd,
              ]}
              style={styles.searchBox}
            >
              <Icon
                name="search-outline"
                size={theme.moderateScale(22)}
                color={theme.tokens.colors.white}
              />
            </LinearGradient>
          </View>

          <View style={styles.filterIconBox}>
            <FilterIcon
              name="filter"
              size={theme.moderateScale(18)}
              color={theme.tokens.colors.white}
            />
          </View>
        </View>
        <Text style={styles.popularArticle}>New Conversations</Text>

        <View
          style={[
            styles.mainInProgressBox,
            { marginBottom: theme.tokens.spacing.md },
          ]}
        >
          <Pressable style={[styles.inProgressBtn]}>
            <Text style={styles.inProgressTest}>In Progress</Text>
          </Pressable>
          <Pressable
            style={[
              styles.inProgressBtn,
              { backgroundColor: '#EBE8FB', width: '20%' },
            ]}
          >
            <Text style={[styles.inProgressTest, { color: '#7143B9' }]}>
              High
            </Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.mainInProgressBox,
            { justifyContent: 'space-between' },
          ]}
        >
          <View style={styles.userBox}>
            <UserIcon
              name="user-large"
              color={theme.tokens.colors.mainDark}
              size={theme.moderateScale(20)}
            />
          </View>
          <View>
            <Text style={styles.userNameTest}>Josh Kerem</Text>
            <Text style={styles.canTest}>Can i recover my account?</Text>
          </View>
          <Text style={styles.canTest}>9.00AM?</Text>
        </View>

        <View style={styles.assignedBox}>
          <View style={styles.mainInProgressBox}>
            <View
              style={[styles.userBox, { padding: theme.moderateScale(7.7) }]}
            >
              <UserIcon
                name="user-large"
                color={theme.tokens.colors.mainDark}
                size={theme.moderateScale(10)}
              />
            </View>
            <Text style={styles.assignTest}>Assigned to</Text>
          </View>

          <View style={styles.mainInProgressBox}>
            <View style={styles.mainInProgressBox}>
              <Image
                source={Icons.chatIcon}
                style={styles.chatIcon}
                resizeMode="contain"
              />
              <Text style={styles.chatText}> 12</Text>
            </View>
            <View
              style={[
                styles.mainInProgressBox,
                { marginLeft: theme.tokens.spacing.sm },
              ]}
            >
              <Image
                source={Icons.gallaryIcon}
                style={styles.chatIcon}
                resizeMode="contain"
              />
              <Text style={styles.chatText}>7</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.mainInProgressBox,
            {
              marginBottom: theme.tokens.spacing.md,
            },
          ]}
        >
          <Pressable
            style={[
              styles.inProgressBtn,
              {
                backgroundColor: '#F3F3EC',
                borderWidth: 0.5,
                borderColor: '#e1e1e1',
              },
            ]}
          >
            <Text style={[styles.inProgressTest, { color: '#4E8A41' }]}>
              New
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.inProgressBtn,
              {
                backgroundColor: '#FCF5F0',
                width: '20%',
                borderWidth: 0.5,
                borderColor: '#e1e1e1',
              },
            ]}
          >
            <Text style={[styles.inProgressTest, { color: '#D88A57' }]}>
              Medium
            </Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.mainInProgressBox,
            { justifyContent: 'space-between' },
          ]}
        >
          <View style={styles.userBox}>
            <UserIcon
              name="user-large"
              color={theme.tokens.colors.mainDark}
              size={theme.moderateScale(20)}
            />
          </View>
          <View>
            <Text style={styles.userNameTest}>Cody Fisher</Text>
            <Text style={styles.canTest}>Can i recover my account?</Text>
          </View>
          <Text style={styles.canTest}>9.00AM?</Text>
        </View>

        <View style={styles.borderLineBox} />

        <View
          style={[
            styles.mainInProgressBox,
            {
              marginBottom: theme.tokens.spacing.md,
            },
          ]}
        >
          <Pressable style={[styles.inProgressBtn]}>
            <Text style={[styles.inProgressTest]}>In Progress</Text>
          </Pressable>
          <Pressable
            style={[
              styles.inProgressBtn,
              {
                backgroundColor: '#EAEAEA',
                width: '20%',
              },
            ]}
          >
            <Text style={[styles.inProgressTest, { color: '#656565' }]}>
              Low
            </Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.mainInProgressBox,
            { justifyContent: 'space-between' },
          ]}
        >
          <View style={styles.userBox}>
            <UserIcon
              name="user-large"
              color={theme.tokens.colors.mainDark}
              size={theme.moderateScale(20)}
            />
          </View>
          <View>
            <Text style={styles.userNameTest}>Josh Kerem</Text>
            <Text style={styles.canTest}>Can i recover my account?</Text>
          </View>
          <Text style={styles.canTest}>9.00AM?</Text>
        </View>

        <View style={styles.assignedBox}>
          <View style={styles.mainInProgressBox}>
            <View
              style={[styles.userBox, { padding: theme.moderateScale(7.7) }]}
            >
              <UserIcon
                name="user-large"
                color={theme.tokens.colors.mainDark}
                size={theme.moderateScale(10)}
              />
            </View>
            <Text style={styles.assignTest}>Assigned to</Text>
          </View>

          <View style={styles.mainInProgressBox}>
            <View style={styles.mainInProgressBox}>
              <Image
                source={Icons.chatIcon}
                style={styles.chatIcon}
                resizeMode="contain"
              />
              <Text style={styles.chatText}> 12</Text>
            </View>
            <View
              style={[
                styles.mainInProgressBox,
                { marginLeft: theme.tokens.spacing.sm },
              ]}
            >
              <Image
                source={Icons.gallaryIcon}
                style={styles.chatIcon}
                resizeMode="contain"
              />
              <Text style={styles.chatText}>7</Text>
            </View>
          </View>
        </View>

        <CustomButton
          title="Create New Ticket"
          rightIcon={Icons.plusIcon}
          onPress={() =>
            navigation.navigate('MainTab', {
              screen: 'HomeStack',
              params: { screen: 'NewTicket' },
            })
          }
        />
      </View>
    </ScreenLayout>
  );
};

export default SupportTicketScreen;
// <TextInput style={styles.popularArticle}>Popular Article</Text>
