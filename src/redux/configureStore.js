import { configureStore, combineReducers } from '@reduxjs/toolkit';

import books from './books/books';

const rootReducer = combineReducers({
  books,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
