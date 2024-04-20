import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
  padding: ViewStyle;
  onBoardingImg: ViewStyle;
  onBoardingTitle: ViewStyle;
  onBoardingSubtitle: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundLightBlue,
      alignItems: "center",
      justifyContent: "center",
    },
    padding: {
      padding: 15
    },
    onBoardingImg: {
      backgroundColor: colors.backgroundLightBlue,
    },
    onBoardingTitle: {
      backgroundColor: colors.white,
    },
    onBoardingSubtitle: {
      backgroundColor: colors.white,
    }
  });
};
