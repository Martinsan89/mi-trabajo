import { createStore, combineReducers } from "redux";
import { categoryReducer, productsReducer, inboxReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  inbox: inboxReducer,
});

export default createStore(rootReducer);
