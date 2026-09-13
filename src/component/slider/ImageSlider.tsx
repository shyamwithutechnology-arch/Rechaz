import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

const ImageSlider = ({ images }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  // console.log('imagesaaaaa', images);
  const data = images?.data || {};

  // const imageKeys = Object.keys(data).filter(key => key.startsWith('image'));
  const imageKeys = Object.keys(data).filter(
    key =>
      key.startsWith('image') &&
      typeof data[key] === 'string' &&
      data[key].trim() !== '',
  );

  console.log('FULL IMAGES:', JSON.stringify(images, null, 2));
  console.log('IMAGE URL:', images?.image_url);
  console.log('DATA:', JSON.stringify(images?.data, null, 2));
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        autoplay
        autoplayTimeout={3}
        loop
        showsPagination={false}
        // dot={<View style={styles.dot} />}
        // activeDot={<View style={styles.activeDot} />}
      >
        {imageKeys?.map((item, index) => {
          const imgUrl = `${images?.image_url}${data[item]}`;

          console.log('imgUrl:', imgUrl);

          return (
            <View style={styles.slide} key={item}>
              <Image
                source={{ uri: imgUrl }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default React.memo(ImageSlider);
