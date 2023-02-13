import { legacy_createStore as createStore, combineReducers } from "redux";
import { categoryReducer, productsReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});

export default createStore(rootReducer);
