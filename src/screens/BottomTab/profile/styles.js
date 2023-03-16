import { StyleSheet } from "react-native";

import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  list: {
    backgroundColor: colors.secondary,
    marginTop: 10,
  },
});
