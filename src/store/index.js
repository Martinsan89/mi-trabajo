import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  categoryReducer,
  productsReducer,
  inboxReducer,
  chatsReducer,
  registerReducer,
} from "./reducers";
import placeReducer from "../store/slice/place.slice";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  inbox: inboxReducer,
  chats: chatsReducer,
  register: registerReducer,
  place: placeReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
