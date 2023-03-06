import { StyleSheet } from "react-native";
import { colors } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Neuton-Light",
  },
  buttonConfirm: {
    width: 200,
    // borderColor: colors.black,
    borderWidth: 1,
    height: 200,
    marginVertical: 15,
    padding: 10,
  },
  msg: {
    paddingVertical: 10,
  },
  textSend: {
    backgroundColor: colors.secondary,
    // margin: 10,
  },
});
