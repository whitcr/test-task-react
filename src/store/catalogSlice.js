import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCard, getCards } from 'api/api';

export const getCardsAction = createAsyncThunk('getAll/cards', () => {
  return getCards();
});

export const getCardAction = createAsyncThunk('getOne/cards', id => {
  return getCard(id);
});

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCardsAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getCardAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(
        action => action.type.endsWith('cards/pending'),
        handlePending
      )
      .addMatcher(
        action => action.type.endsWith('cards/rejected'),
        handleRejected
      )
      .addMatcher(
        action => action.type.endsWith('cards/fulfilled'),
        handleFulfilled
      );
  },
});

export const cardsReducer = cardsSlice.reducer;
