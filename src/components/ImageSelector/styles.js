import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btn: {
    backgroundColor: colors.primary,
    width: "50%",
    padding: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  btnText: {
    color: colors.white,
    fontFamily: "Neuton-Regular",
    fontSize: 20,
  },
});
