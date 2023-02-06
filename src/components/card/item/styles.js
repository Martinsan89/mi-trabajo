import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    // backgroundColor: "#626893",
    marginBottom: 10,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 25,
    color: colors.white,
    fontWeight: "bold",
  },
  itemDone: {
    backgroundColor: "green",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "40%",
  },
  buttonsIcon: {
    color: colors.black,
    backgroundColor: colors.white,
  },
});
