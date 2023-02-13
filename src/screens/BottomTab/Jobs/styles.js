import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    // marginTop: StatusBar.currentHeight,
  },
  containerList: {
    flex: 1,
  },
  contentContainerList: {
    paddingBottom: 40,
  },
  // buttonBackContainer: {
  //   width: "25%",
  //   marginLeft: 5,
  //   paddingVertical: 25,
  // },
  // buttonBack: {
  //   backgroundColor: colors.default,
  // },
  // header: {
  //   fontSize: 55,
  //   color: colors.white,
  //   alignSelf: "center",
  // },
});
