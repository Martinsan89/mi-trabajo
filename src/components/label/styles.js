import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: "Neuton-Italic",
    marginVertical: 5,
    color: colors.text,
  },
  sublabel: {
    fontSize: 12,
    fontFamily: "Neuton-Italic",
    color: colors.gray,
    marginVertical: 5,
  },
});
