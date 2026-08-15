import React, { useState } from 'react';
import { Image, TextInput, View, Text, Pressable, Alert } from 'react-native';
import { ScreenLayout, AppHeader } from '../../component/index';
import { useAppTheme } from '../../hooks/useAppTheme';
import { createStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FilterIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

import { Icons } from '../../assets/icons';
import { Images } from '../../assets/images';

const HelpAndSupportScreen = ({ navigation }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [selected, setSelected] = useState<'like' | 'dislike' | null>(null);

  const handleBack = () => {
    navigation.goBack();
  };
  const handleNewTicket = () => {
    navigation.navigate('NewTicket');
  };
  return (
    <ScreenLayout
      innerContainer={{ backgroundColor: theme.tokens.colors.white }}
      paddingHorizontalStyle={0}
    >
      <AppHeader title="Help Center" onPress={handleBack} />
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

        <Text style={styles.popularArticle}>Popular Article</Text>

        <View style={styles.troubleShootingBox}>
          <View
            style={[
              styles.mainDotBox,
              { marginBottom: theme.tokens.spacing.md, marginLeft: 0 },
            ]}
          >
            <View style={styles.NoInternateBox}>
              <Image
                source={Icons.noInternate}
                style={styles.noInterNate}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text style={styles.troubleShootingText}>
                Troubleshooting payment issue
              </Text>

              <View
                style={[
                  styles.mainDotBox,
                  {
                    marginVertical: 0,
                    marginLeft: 0,
                    marginTop: theme.tokens.spacing.xs,
                  },
                ]}
              >
                <Image
                  source={Icons.views}
                  style={styles.views}
                  resizeMode="contain"
                />
                <Text style={styles.viewsTest}> 534 Views</Text>
              </View>
            </View>
          </View>

          <View style={styles.lineBox} />
          <Text style={styles.commonCausesText}>
            Common causes of payment issue include:
          </Text>

          <View style={styles.mainDotBox}>
            <View style={styles.dot} />
            <Text style={styles.expireText}>Expired credit card.</Text>
          </View>
          <View style={styles.mainDotBox}>
            <View style={styles.dot} />
            <Text style={styles.expireText}>Insuffiecient funds.</Text>
          </View>
          <View style={styles.lineBox} />
          <View style={styles.likeDisLikeBox}>
            <Text style={styles.wasTest}>Was that Helpful?</Text>

            <View style={styles.MainLikeDislikeBox}>
              <Pressable onPress={() => setSelected('like')}>
                <Image
                  source={selected ? Icons.dislikeIcon : Icons?.likeFill}
                  style={styles.likeIcon}
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable onPress={() => setSelected('dislike')}>
                <Image
                  source={Icons.likeFill}
                  style={[styles.likeIcon, { marginRight: 0 }]}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          </View>
        </View>

        <LinearGradient
          colors={['rgba(19, 186, 172, 0.13)', 'rgba(214, 234, 232, 1)']}
          style={styles.needHelpBox}
        >
          <View>
            <Text style={styles.needText}>Need Help?</Text>
            <Text style={styles.contextText}>
              Contact to our team for help.
            </Text>
            <Pressable style={styles.createTicketBtn} onPress={handleNewTicket}>
              <Text style={styles.createTicket}>Create Ticket</Text>
            </Pressable>
          </View>
          <View style={styles.helpImgBox}>
            <Image
              source={Images.helpSupportImg}
              style={styles.helpImg}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </View>
    </ScreenLayout>
  );
};
export default HelpAndSupportScreen;

// <Image
//               source={Icons.dislikeIcon}
//               style={styles.dislikeIcon}
//               resizeMode="contain"
//             />
