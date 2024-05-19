import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavoritesCard(state, { payload }) {
      if (!state.find(item => item._id === payload._id)) {
        state.push(payload);
      }
    },
    deleteFavoritesCard(state, { payload }) {
      return state.filter(favorite => favorite._id !== payload);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavoritesCard, deleteFavoritesCard } = favoritesSlice.actions;
