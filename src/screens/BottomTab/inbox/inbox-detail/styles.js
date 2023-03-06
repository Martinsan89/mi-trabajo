import { StyleSheet } from "react-native";
import { colors } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
  },
  msg: {
    fontSize: 15,
    marginVertical: 15,
  },
  footer: {
    backgroundColor: colors.white,
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonConfirm: {
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textSend: {
    color: colors.white,
    fontSize: 26,
    textAlign: "center",
    // fontFamily: 'Bitter-Bold',
  },
});
