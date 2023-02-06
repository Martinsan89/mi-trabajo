import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  buttonBackContainer: {
    width: "25%",
    marginLeft: 5,
    paddingVertical: 25,
  },
  buttonBack: {
    backgroundColor: colors.default,
  },
  subContainer: {
    flexDirection: "column",
    borderColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTitle: {
    color: colors.white,
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 10,
  },
  subText: {
    color: colors.white,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-around",
    width: "60%",
    alignSelf: "center",
  },
  buttonHome: {
    color: colors.black,
    backgroundColor: colors.primary,
    padding: 15,
  },
});
