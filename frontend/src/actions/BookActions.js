import * as ActionType from "./ActionType";
import Api from "../lib/Api";
import { makeRequest } from "../lib/requestWrapper";

export function getBooksAction() {
  return dispatch => {
    dispatch(getBooks);

    return makeRequest(Api.get("/api/v1/books"))
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

    return makeRequest(Api.delete(`/api/v1/books/${bookId}`))
      .then(() => {
        dispatch(deleteBookSuccess(bookId));
      })
      .catch(error => {
        dispatch(deleteBookFailure(error));
        throw error;
      });
  };
}
export function createBookAction(book) {
  return dispatch => {
    dispatch(createBook);

    return makeRequest(Api.post("/api/v1/books", book))
      .then(book => {
        dispatch(createBookSuccess(book));
      })
      .catch(error => {
        dispatch(createBookFailure(error));
        throw error;
      });
  };
}
export function updateBookAction(book) {
  return dispatch => {
    dispatch(updateBook);

    return makeRequest(Api.put(`/api/v1/books/${book.id}`, book))
      .then(book => {
        dispatch(updateBookSuccess(book));
      })
      .catch(error => {
        dispatch(updateBookFailure(error));
        throw error;
      });
  };
}

export function getBookAction(bookId) {
  return dispatch => {
    dispatch(getBook(bookId));
  };
}

export function resetBookAction() {
  return dispatch => {
    dispatch(resetBook);
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

export const resetBook = {
  type: ActionType.RESET_BOOK
};

export const createBook = {
  type: ActionType.CREATE_BOOK
};

export const createBookSuccess = book => ({
  type: ActionType.CREATE_BOOK_SUCCESS,
  book
});

export const createBookFailure = error => ({
  type: ActionType.CREATE_BOOK_FAILURE,
  error
});

export const getBook = bookId => ({
  type: ActionType.GET_BOOK,
  bookId
});

export const updateBook = {
  type: ActionType.UPDATE_BOOK
};

export const updateBookSuccess = book => ({
  type: ActionType.UPDATE_BOOK_SUCCESS,
  book
});

export const updateBookFailure = error => ({
  type: ActionType.UPDATE_BOOK_FAILURE,
  error
});
