import { configureStore } from '@reduxjs/toolkit';

import booksSlice from './reducers/booksSlice.js';

const store = configureStore({
  reducer: {
    books: booksSlice,
  },
});

export default store;
