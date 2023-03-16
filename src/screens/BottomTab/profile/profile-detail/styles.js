import { StyleSheet } from "react-native";
import { colors } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "80%",
    alignSelf: "center",
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    backgroundColor: colors.secondary,
    padding: 10,
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 350,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.primary,
    textAlign: "center",
  },
  map: {
    height: 300,
  },
  delete: {
    marginBottom: 55,
    width: "50%",
    alignSelf: "center",
  },
  textSend: {
    backgroundColor: colors.black,
    padding: 3,
    opacity: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 23,
    color: colors.white,
    fontFamily: "Neuton-Light",
  },
});
