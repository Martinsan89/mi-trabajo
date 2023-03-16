import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 18,
    height: 120,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 25,
    color: colors.white,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 20,
    color: colors.white,
  },
  weight: {
    fontSize: 20,
    color: colors.white,
  },
  textContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  trash: {
    fontSize: 25,
    color: colors.white,
  },
});
