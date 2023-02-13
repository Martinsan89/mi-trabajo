import { JOBS } from "../../constants/data/jobs";
import { inboxTypes } from "../types/inbox.types";

const { SELECT_INBOX } = inboxTypes;

const initialState = {
  categories: JOBS,
  selected: null,
};

const inboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INBOX:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );

      if (indexCategory === -1) return state;

      return {
        ...state,
        selected: state.categories[indexCategory],
      };

    default:
      return state;
  }
};

export default inboxReducer;
