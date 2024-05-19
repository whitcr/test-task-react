import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  selectedEquipment: [],
  selectedVehicleType: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation(state, { payload }) {
      state.location = payload;
    },
    toggleEquipment(state, { payload }) {
      const index = state.selectedEquipment.indexOf(payload);
      if (index !== -1) {
        state.selectedEquipment.splice(index, 1);
      } else {
        state.selectedEquipment.push(payload);
      }
    },
    toggleVehicleType(state, { payload }) {
      const index = state.selectedVehicleType.indexOf(payload);
      if (index !== -1) {
        state.selectedVehicleType.splice(index, 1);
      } else {
        state.selectedVehicleType.push(payload);
      }
    },
    resetFilter(state) {
      state.location = '';
      state.selectedEquipment = [];
      state.selectedVehicleType = [];
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setLocation, toggleEquipment, toggleVehicleType, resetFilter } =
  filterSlice.actions;
