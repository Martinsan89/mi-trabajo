import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: 20,
  },
  buttonBackContainer: {
    width: "30%",
    marginLeft: 5,
    flexDirection: "row",
    backgroundColor: colors.primary,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonBack: {
    fontSize: 20,
    paddingVertical: 5,
    color: colors.white,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  header: {
    fontSize: 55,
    color: colors.white,
    alignSelf: "center",
  },
  formContainer: {
    marginVertical: 20,
    paddingLeft: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  label: {
    fontSize: 18,
    color: colors.white,
  },
  input: {
    backgroundColor: colors.white,
    fontSize: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  btnLogin: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 18,
    marginTop: 10,
  },
});
