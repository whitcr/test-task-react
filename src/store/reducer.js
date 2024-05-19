import { combineReducers } from '@reduxjs/toolkit';
import { cardsReducer } from './catalogSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { favoritesReducer } from './favoritesSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const reducer = combineReducers({
  cards: cardsReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);
