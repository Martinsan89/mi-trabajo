import { JOBS } from "../../constants/data/jobs";
import { productsTypes } from "../types/products.types";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsTypes;

const initialState = {
  products: JOBS,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      return {
        ...state,
        selected: state.products.find(
          (product) => product.id === action.productId
        ),
      };
    }
    case FILTER_PRODUCTS: {
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.categoryId
        ),
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
