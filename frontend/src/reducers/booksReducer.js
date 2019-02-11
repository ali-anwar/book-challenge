import * as ActionType from "../actions/ActionType";
import initialState from "./initialState";
import _ from "lodash";

const booksReducer = (state = initialState.booksReducer, action) => {
  switch (action.type) {
    case ActionType.GET_BOOKS: {
      return {
        ...state,
        books: _.assign([]),
        loading: true,
        error: false
      };
    }
    case ActionType.GET_BOOKS_SUCCESS: {
      return {
        ...state,
        books: _.assign(action.books),
        loading: false,
        error: false
      };
    }
    case ActionType.GET_BOOKS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
        books: _.assign([])
      };
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
