import { createSelector } from '@reduxjs/toolkit';

export const selectError = state => state.cards.error;
export const selectIsLoading = state => state.cards.isLoading;

export const selectFavorites = state => state.favorites;
export const selectIsFavorite = (state, item) =>
  state.favorites.some(favorite => favorite._id === item._id);

export const selectFilter = state => state.filter;

export const selectCards = createSelector(
  state => state.cards.items,
  state => state.filter || {},
  (cards, filter) => {
    const {
      location = '',
      selectedEquipment = [],
      selectedVehicleType = [],
    } = filter;

    return cards.filter(item => {
      if (
        location &&
        !item.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      if (selectedEquipment.length > 0) {
        for (const equipment of selectedEquipment) {
          if (item.details[equipment] <= 0) {
            return false;
          }
        }
      }

      if (
        selectedVehicleType.length > 0 &&
        !selectedVehicleType.some(type => item.form.includes(type))
      ) {
        return false;
      }
      return true;
    });
  }
);
