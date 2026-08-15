import React from "react";
import { ScreenLayout } from "../../component/ScreenContainer/ScreenLayout";
import HtmlView from "../../component/Common/htmlview/HtmlView";
import AppHeader from "../../component/AppHeader/AppHeader";

const AboutUsScreen = ({ navigation }) => {
  const content = `Rechaz was founded with a vision to make digital payments simple, secure, affordable, and accessible for everyone across India.

In today’s fast-growing digital economy, there is an increasing need for reliable and seamless payment solutions that help individuals and businesses manage transactions with ease, trust, and speed. Rechaz is built to serve this need with innovation, security, and user-first design.

We believe that financial technology can transform everyday life in a more meaningful way than ever imagined. Keeping in mind the challenges faced by users in managing digital transactions, lack of awareness, and fragmented payment systems, Rechaz was created to deliver a unified and trusted payment experience at your convenience.

`;
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenLayout paddingHorizontalStyle={0}>
      <AppHeader title="About Us" onPress={handleBack} />
      <HtmlView
        htmlContent={content}
        isLoading={false}
        baseFontSize={16}
        padding={16}
        marginTop={0}
      />
    </ScreenLayout>
  );
};

export default AboutUsScreen;
