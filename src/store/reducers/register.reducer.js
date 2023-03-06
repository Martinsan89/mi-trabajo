import { registerTypes } from "../types";

const { SING_IN, SING_UP, LOG_OUT } = registerTypes;

const initialState = {
  token: null,
  userId: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SING_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case SING_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case LOG_OUT:
      return {
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default registerReducer;
