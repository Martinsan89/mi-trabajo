import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { colors } from "../../constants";

const styles = StyleSheet.create({
  ExtraLight: {
    fontFamily: "ExtraLight,",
  },
  Light: {
    fontFamily: "Light",
  },
  Regular: {
    fontFamily: "Regular",
  },
  Italic: {
    fontFamily: "Italic",
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const TextFont = ({ children, textType, style }) => {
  const [loaded] = useFonts({
    ExtraLight: require("../../../assets/fonts/Neuton-ExtraLight.ttf"),
    Light: require("../../../assets/fonts/Neuton-Light.ttf"),
    Regular: require("../../../assets/fonts/Neuton-Regular.ttf"),
    Italic: require("../../../assets/fonts/Neuton-Italic.ttf"),
  });

  let textStyle;
  switch (textType) {
    case "ExtraLight":
      textStyle = styles.ExtraLight;
      break;
    case "Light":
      textStyle = styles.Light;
      break;
    case "Regular":
      textStyle = styles.Regular;
      break;
    case "Italic":
      textStyle = styles.Italic;
      break;
    default:
      textStyle = styles.Light;
      break;
  }

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    );
  }

  const passedStyles = Array.isArray(style)
    ? Object.assing({}, ...style)
    : style;

  return <Text style={[textStyle, { ...passedStyles }]}>{children}</Text>;
};

export default TextFont;
