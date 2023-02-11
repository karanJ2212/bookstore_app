import { createAsyncThunk } from '@reduxjs/toolkit';

// Action Types
const ADD_BOOK = 'redux/books/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/books/REMOVE_BOOK';
const FETCH_BOOKS_LIST = 'redux/books/books/FETCH_BOOKS_LIST';
const FETCH_BOOKS_LIST_SUCCESS = 'redux/books/books/FETCH_BOOKS_LIST_SUCCESS';
const FETCH_BOOKS_LIST_ERROR = 'redux/books/books/FETCH_BOOKS_LIST_ERROR';
const REMOVE_BOOK_ERROR = 'redux/books/books/REMOVE_BOOK_ERROR';

// Initial State
const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const fetchBooksList = createAsyncThunk(
  FETCH_BOOKS_LIST,
  async (books, { dispatch, rejectWithValue }) => {
    dispatch({ type: FETCH_BOOKS_LIST });
    try {
      const response = await fetch(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SKV9yPhHVa5Un0Zh5Bl5/books',
      );
      const data = await response.json();
      const books = Object.keys(data).map((id) => ({
        id,
        ...data[id][0],
      }));

      dispatch({ type: FETCH_BOOKS_LIST_SUCCESS, payload: books });
      return books;
    } catch (error) {
      dispatch({ type: FETCH_BOOKS_LIST_ERROR, error });
      return rejectWithValue(error);
    }
  },
);

export const addBook = (book) => async (dispatch) => {
  try {
    await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SKV9yPhHVa5Un0Zh5Bl5/books',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      },
    ); dispatch({ type: ADD_BOOK, book });
  } catch (error) {
    dispatch({ type: 'ADD_BOOK_ERROR', error });
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  dispatch({ type: REMOVE_BOOK, bookId });
  try {
    await fetch(`
https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SKV9yPhHVa5Un0Zh5Bl5/books/${bookId}`,
    {
      method: 'DELETE',
    });
  } catch (error) {
    dispatch({ type: REMOVE_BOOK_ERROR, error });
  }
};

// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_LIST.pending:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BOOKS_LIST_SUCCESS:

      return {
        ...state,
        books: action.payload,
        isLoading: false,
      };
    case FETCH_BOOKS_LIST_ERROR:

      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ADD_BOOK:

      return {
        ...state,
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.bookId),
      };
    default:
      return state;
  }
}
