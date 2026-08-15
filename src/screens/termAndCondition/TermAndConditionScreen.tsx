import React from "react";
import { ScreenLayout } from "../../component/ScreenContainer/ScreenLayout";
import HtmlView from "../../component/Common/htmlview/HtmlView";
import AppHeader from "../../component/AppHeader/AppHeader";

const TermAndConditionScreen = ({ navigation }) => {
  const content = `Welcome to Rechaz. These Terms & Conditions (“Terms”) govern your access to and use of the Rechaz mobile application, website, and related services (“Platform”). By accessing or using our services, you agree to be bound by these Terms, along with our Privacy Policy.

If you do not agree with any part of these Terms, you must not use the Platform.


`;
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenLayout paddingHorizontalStyle={0}>
      <AppHeader title="Terms & Conditions" onPress={handleBack} />
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

export default TermAndConditionScreen;
