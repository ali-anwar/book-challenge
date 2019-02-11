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
    case ActionType.DELETE_BOOK: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ActionType.DELETE_BOOK_SUCCESS: {
      let updatedBooks = _.assign(
        state.books.filter(book => book.id !== action.bookId)
      );

      return {
        ...state,
        loading: false,
        error: false,
        books: updatedBooks
      };
    }
    case ActionType.DELETE_BOOK_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    case ActionType.CREATE_BOOK: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ActionType.CREATE_BOOK_SUCCESS: {
      let updatedBooks = _.assign(state.books);
      updatedBooks.push(action.book);

      return {
        ...state,
        books: _.assign(updatedBooks),
        loading: false,
        error: false
      };
    }
    case ActionType.CREATE_BOOK_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    case ActionType.RESET_BOOK: {
      return {
        ...state,
        book: {}
      };
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
