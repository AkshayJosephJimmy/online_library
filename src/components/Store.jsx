import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  { id: 1, title: '1984', author: 'George Orwell', description: 'Dystopian novel', rating: 4.8, category: 'Fiction' },
  { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', description: 'History of humankind', rating: 4.6, category: 'Non-Fiction' },
  { id: 3, title: 'Dune', author: 'Frank Herbert', description: 'Sci-Fi classic', rating: 4.7, category: 'Sci-Fi' }
];

const bookSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;

const store = configureStore({
  reducer: {
    books: bookSlice.reducer
  }
});

export default store;