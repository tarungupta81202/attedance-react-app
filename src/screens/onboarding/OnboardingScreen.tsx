import React, { useMemo } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import createStyles from "./OnboardingScreen.style";
import { useTheme } from "@react-navigation/native";
// import Text from "@shared-components/text-wrapper/TextWrapper";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const renderImage = () => (
    <View>
      {/* <Image
        resizeMode="cover"
        source={require("../../assets/images/onboarding/1.png")}
      /> */}
      <Onboarding
        pages={[
          {
            backgroundColor: colors.backgroundLightBlue,
            image: (
              <View style={styles.onBoardingImg}>
                <Image source={require("../../assets/images/onboarding/1.png")} />
              </View>
            ),
            title: (
              <View style={styles.onBoardingTitle}>
                <Text>Easy way to confirm your attendance</Text>
              </View>
            ),
            subtitle: (
              <View style={styles.onBoardingSubtitle}>
                <Text>It's a long established fact that a reader will be distracted by the readable content!</Text>
              </View>
            ),
          },
        ]}
      />
    </View>
  );

  const renderContent = () => <View>{renderImage()}</View>;

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
  );
};

export default OnboardingScreen;
