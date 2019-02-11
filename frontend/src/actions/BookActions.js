import * as ActionType from "./ActionType";
import BookApi from "../api/BookApi";

export function getBooksAction() {
  return dispatch => {
    dispatch(getBooks);

    return BookApi.getAllBooks()
      .then(books => {
        dispatch(getBooksSuccess(books));
      })
      .catch(error => {
        dispatch(getBooksFailure(error));
        throw error;
      });
  };
}

export function deleteBookAction(bookId) {
  return dispatch => {
    dispatch(deleteBook);

    return BookApi.deleteBook(bookId)
      .then(() => {
        dispatch(deleteBookSuccess(bookId));
      })
      .catch(error => {
        dispatch(deleteBookFailure(error));
        throw error;
      });
  };
}

export const getBooks = {
  type: ActionType.GET_BOOKS
};

export const getBooksSuccess = books => ({
  type: ActionType.GET_BOOKS_SUCCESS,
  books
});

export const getBooksFailure = error => ({
  type: ActionType.GET_BOOKS_FAILURE,
  error
});

export const deleteBook = {
  type: ActionType.DELETE_BOOK
};

export const deleteBookSuccess = bookId => ({
  type: ActionType.DELETE_BOOK_SUCCESS,
  bookId
});

export const deleteBookFailure = error => ({
  type: ActionType.DELETE_BOOK_FAILURE,
  error
});
