import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  modalContainer: {
    height: "40%",
    borderColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    padddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: "#212121",
  },
  selectedTask: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
