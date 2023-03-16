import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
  containerActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnContent: {
    marginBottom: 10,
    flexDirection: "column",
    gap: 2,
    width: 500,
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
