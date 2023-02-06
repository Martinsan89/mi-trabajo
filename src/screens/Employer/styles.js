import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    marginTop: 25,
  },
  buttonBackContainer: {
    width: "25%",
    marginLeft: 5,
    paddingVertical: 25,
  },
  buttonBack: {
    backgroundColor: colors.default,
  },
  header: {
    fontSize: 55,
    color: colors.white,
    alignSelf: "center",
  },
});
