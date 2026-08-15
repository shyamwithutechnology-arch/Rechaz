import React from 'react';
import { Alert, FlatList, Image, Pressable, Text, View } from 'react-native';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { createStyles } from './styles';
import { AppHeader, ScreenLayout } from '../../../component';
import { showToast } from '../../../utils/toast';

const AllServicesScreen = ({ route, navigation }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const { services, title, screen } = route.params;
  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderServiceItem = ({ item }: any) => {
    return (
      <Pressable
        style={styles.serviceWrapper}
        onPress={() => {
          if (title === 'Recharge Services') {
            if (item?.routes === 'Fastag') {
              showToast('success', 'Success', 'Coming Soon');
            } else {
              navigation.navigate(item?.routes);
            }
            return;
          }

          if (title === 'Financial Services') {
            if (item?.routes === 'MoneyTransfer') {
              navigation.navigate(item?.routes);
            } else if (item?.routes === 'Payout') {
              navigation.navigate(item?.routes);
            } else {
              navigation.navigate(item?.routes);
            }
            return;
          }

          if (title === 'Bill Payment Services') {
            showToast('success', 'Success', 'Comming soon');
          } else {
            navigation.navigate(screen, {
              title: `${item?.routes} Services`,
            });
          }
        }}
      >
        <View style={styles.serviceItemBox}>
          <Image
            source={item?.image}
            style={styles.serviceIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.serviceText}>{item?.service}</Text>
      </Pressable>
    );
  };

  return (
    <ScreenLayout
      innerContainer={{ backgroundColor: '#fff' }}
      header={<AppHeader title={title} onPress={handleBackPress} />}
    >
      <FlatList
        data={services}
        renderItem={renderServiceItem}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={{
          paddingBottom: theme.tokens.spacing.xl,
          paddingTop: theme.tokens.spacing.md,
        }}
      />
    </ScreenLayout>
  );
};

export default AllServicesScreen;
