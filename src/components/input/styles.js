import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Neuton-Regular",
    marginBottom: 10,
    fontSize: 18,
  },
  helperText: {
    fontSize: 15,
    fontFamily: "Neuton-Regular",
    color: colors.error,
  },
});
