import React, { useRef } from "react";
import {
  View,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { Images } from "../../../../assets/images";
import { createStyles } from "./styles";
import { useAppTheme } from "../../../../hooks/useAppTheme";

// Local fallback images
const FALLBACK_IMAGES = [
  { id: "1", image: Images.helpSupportImg, imageUrl: null },
  { id: "2", image: Images.helpSupportImg, imageUrl: null },
  { id: "3", image: Images.helpSupportImg, imageUrl: null },
];
console.log("Carousel =", Carousel);

const HomeBannerSlider = ({ banners = [], loading = false, onRefresh }) => {
  console.log("bannersssqqqqq", banners);

  const theme = useAppTheme();
  const styles = createStyles(theme);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);
  const { width } = useWindowDimensions();

  const BANNER_HEIGHT = width * 0.45;
  const BORDER_RADIUS = 16;

  // Determine which data to use
  const getCarouselData = () => {
    if (loading) {
      return [];
    }

    if (banners && banners.length > 0) {
      return banners.map((banner, index) => ({
        id: banner.id?.toString() || index.toString(),
        imageUrl: banner.imageUrl,
        image: banner.image,
        fallbackImage: FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]?.image,
      }));
    }

    // Fallback to local images
    return FALLBACK_IMAGES;
  };

  const carouselData = getCarouselData();

  // Handle image loading error
  const handleImageError = (item) => {
    console.log("Failed to load image:", item.imageUrl);
    // You could trigger a refresh here
  };

  // Render banner item
  const renderBannerItem = ({ item }) => {
    const source = item?.imageUrl
      ? { uri: item.imageUrl }
      : item?.image || item?.fallbackImage;

    return (
      <View style={[styles.imageWrapper, { borderRadius: BORDER_RADIUS }]}>
        <Image
          source={source}
          style={styles.image}
          resizeMode="contain"
          onError={() => handleImageError(item)}
        />
      </View>
    );
  };

  if (loading && banners.length === 0) {
    return <ActivityIndicator size="large" color="green" />;
  }

  if (carouselData.length === 0) {
    return null; // Don't render anything if no data
  }

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width - 23}
        height={BANNER_HEIGHT}
        data={carouselData}
        autoPlay={carouselData.length > 1}
        loop={carouselData.length > 1}
        autoPlayInterval={3000}
        onProgressChange={progress}
        style={{ alignSelf: "center" }}
        renderItem={renderBannerItem}
        pagingEnabled
      />
    </View>
  );
};

export default HomeBannerSlider;
