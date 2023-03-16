import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 18,
    height: 160,
    backgroundColor: colors.secondary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 25,
    color: colors.black,
    textAlign: "center",
  },
  detailsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5,
  },
  description: {
    fontSize: 20,
    color: colors.black,
  },
  type: {
    fontSize: 15,
    color: colors.black,
    paddingTop: 5,
  },
});
