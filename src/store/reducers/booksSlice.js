import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getBooksApi = createAsyncThunk(
  'books/getBooksApi',
  async () => await axios.get('books').then((res) => res.data)
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    books: [],
    filteredBooks: [],
  },
  reducers: {
    getBooks: (state) => {
      return state.books;
    },
    filter: (state, action) => {
      if (action.payload.id === 'reset') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(
          (book) => book.category == action.payload.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooksApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooksApi.rejected, (state) => {
        state.isLoading = false;
        toast.error('Неполадки с серверами или повторите попытку позже');
      });
  },
});

export const { getBooks, filter } = booksSlice.actions;

export default booksSlice.reducer;
