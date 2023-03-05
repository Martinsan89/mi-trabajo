import { REALTIME_DB_URL } from "../../firebase";
import { inboxTypes } from "../types/inbox.types";

const { SELECT_INBOX, CONFIRM_MSG } = inboxTypes;

export const selectInbox = (id) => ({
  type: SELECT_INBOX,
  categoryId: id,
});

export const confirmMsg = (msg) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DB_URL}/msgs.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          msg,
        }),
      });

      const result = await response.json();

      // console.warn("result", result);

      dispatch({
        type: CONFIRM_MSG,
        result,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_MSG,
        error,
      });
    }
  };
};
