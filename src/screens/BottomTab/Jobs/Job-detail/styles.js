import { StyleSheet } from "react-native";
import { colors } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 30,
    fontFamily: "Neuton-Light",
    color: colors.white,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Neuton-ExtraLight",
    color: colors.white,
  },
  buttonConfirm: {
    width: 300,
    height: 200,
    marginVertical: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.white,
  },
  msg: {
    color: colors.white,
  },
  textSend: {
    backgroundColor: colors.secondary,
    padding: 3,
    opacity: 1,
  },
  text: {
    fontSize: 23,
    color: colors.black,
    fontFamily: "Neuton-Light",
  },
  confirm: {
    color: colors.white,
    fontFamily: "Neuton-Italic",
    fontSize: 20,
  },
});
