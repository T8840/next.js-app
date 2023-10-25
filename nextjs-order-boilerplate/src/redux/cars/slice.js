import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: null,
    carDetail: null,
    loading: false,
  },

  reducers: {
    carsStart(state) {
      state.loading = true;
      state.cars = null;
    },
    carsSuccess(state, action) {
      state.loading = false;
      state.cars = action.payload;
    },
    carsFailure(state) {
      state.loading = false;
      state.cars = null;
    },
    carDetailStart(state) {
      state.carDetail = null;
    },
    carDetailSuccess(state, action) {
      state.carDetail = action.payload;
    },
    carDetailFailure(state) {
      state.carDetail = null;
    },
  },
});

export const {
  carsStart,
  carsSuccess,
  carsFailure,
  carDetailFailure,
  carDetailStart,
  carDetailSuccess,
} = carSlice.actions;

export default carSlice.reducer;
