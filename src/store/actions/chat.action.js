import { REALTIME_DB_URL } from "../../firebase";
import { chatTypes } from "../types";

const { GET_CHATS, DELETE_CHAT } = chatTypes;

export const getChats = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DB_URL}/msgs.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      const chats = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({
        type: GET_CHATS,
        chats,
      });
    } catch (error) {
      dispatch({
        type: GET_CHATS,
        error,
      });
    }
  };
};

export const deleteChats = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DB_URL}/msgs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      //   console.warn("result delete", result);

      dispatch({
        type: GET_CHATS,
        id,
      });
    } catch (error) {
      dispatch({
        type: GET_CHATS,
        error,
      });
    }
  };
};
