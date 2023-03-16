import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  categoryReducer,
  productsReducer,
  inboxReducer,
  chatsReducer,
  registerReducer,
} from "./reducers";

import profileReducer from "../store/slice/profile.slice.js";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  inbox: inboxReducer,
  chats: chatsReducer,
  register: registerReducer,
  profile: profileReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
