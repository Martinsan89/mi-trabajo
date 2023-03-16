import { URL_AUTH_SING_IN, URL_AUTH_SING_UP } from "../../firebase";
import { registerTypes } from "../types";

const { SING_IN, SING_UP, LOG_OUT } = registerTypes;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SING_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        return;
        // throw new Error("Something went wrong");
      }

      const data = await response.json();

      dispatch({
        type: SING_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SING_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      // if (!response.ok) {
      //   throw new Error("Something went wrong");
      // }

      const data = await response.json();

      dispatch({
        type: SING_IN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOG_OUT,
        token: null,
        userId: null,
      });
    } catch (error) {
      throw error;
    }
  };
};
