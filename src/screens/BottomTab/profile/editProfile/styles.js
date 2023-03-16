import { StyleSheet } from "react-native";

import { colors } from "../../../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    margin: 20,
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    textAlign: "center",
  },
  btnContent: {
    marginVertical: 10,
  },
});
