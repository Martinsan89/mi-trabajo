import { chatTypes } from "../types";

const { GET_CHATS, DELETE_CHAT } = chatTypes;

const initialState = {
  list: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHATS:
      return {
        ...state,
        list: action.chats,
      };
    case DELETE_CHAT:
      return {
        ...state,
        list: state.list.filter((chat) => chat.id !== action.id),
      };
    default:
      return state;
  }
};

export default chatsReducer;
