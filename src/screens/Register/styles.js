import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  keybordContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  content: {
    backgroundColor: colors.secondary,
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.black,
    borderRadius: 5,
    minHeight: 330,
  },
  title: {
    fontSize: 18,
    fontFamily: "Neuton-Regular",
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    fontFamily: "Neuton-Light",
    marginVertical: 8,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  promptButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 24,
    fontFamily: "Neuton-ExtraLight",
    color: colors.text,
    backgroundColor: colors.primary,
  },
  promptText: {
    color: colors.white,
    fontSize: 15,
  },
});
