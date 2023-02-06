import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    // padding: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  title: {
    fontSize: 45,
    color: colors.black,
  },
});
