import React from 'react';
import { ScreenLayout } from '../../component/ScreenContainer/ScreenLayout';
import HtmlView from '../../component/Common/htmlview/HtmlView';
import AppHeader from '../../component/AppHeader/AppHeader';

const PrivacyPolicyScreen = ({ navigation }) => {
  const content = `We value the trust you place in Rechaz. That’s why we maintain the highest standards of security, privacy, and protection for all customer information and financial transactions.

At Rechaz Financial Services, we are fully committed to protecting your personal information and sensitive financial data. We strive to ensure complete privacy, confidentiality, and security of all information shared with us through our platform.`;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenLayout paddingHorizontalStyle={0}>
      <AppHeader title="Privacy Policy" onPress={handleBack} />
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

export default PrivacyPolicyScreen;
