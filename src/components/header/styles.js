import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 90,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  title: {
    fontSize: 30,
    color: colors.black,
  },
});
