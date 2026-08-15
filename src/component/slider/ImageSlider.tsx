import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

const ImageSlider = ({ images }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  console.log('imagesaaaaa', images);

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
        {images?.map((item, index) => (
          <View style={styles.slide} key={index}>
            <Image
              source={item?.image}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default React.memo(ImageSlider);
