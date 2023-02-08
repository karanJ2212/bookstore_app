// Action Types
const ADD_BOOK = 'redux/books/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/books/REMOVE_BOOK';

// Initial State

const initialState = {
  books: [
    {
      title: 'To Kill a Mockingbird', author: 'Harper Lee', id: 1,
    },
    {
      title: 'Pride and Prejudice', author: 'Jane Austen', id: 2,
    },
    {
      title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', id: 3,
    },
  ],
};

// // Action Creators
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
