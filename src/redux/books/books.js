// Action Types
const ADD_BOOK = 'redux/books/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/books/REMOVE_BOOK';

// Initial State
const initialState = {
  books: [],
};

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
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
