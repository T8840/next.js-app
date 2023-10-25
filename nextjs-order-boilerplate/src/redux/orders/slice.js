import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: null,
    orderDetail: null,
    steps: 1,
    checkedItem: null,
    loading: false,
  },

  reducers: {
    addStep(state) {
      state.steps += 1;
    },
    minStep(state) {
      state.steps--;
    },
    setChecked(state, action) {
      if (state.checkedItem === action.payload) {
        state.checkedItem = null;
      } else {
        state.checkedItem = action.payload;
      }
    },
    ordersStart(state) {
      state.loading = true;
      state.orders = null;
    },
    ordersSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    ordersFailure(state) {
      state.loading = false;
      state.orders = null;
    },
    orderDetailStart(state) {
      state.orderDetail = null;
    },
    orderDetailSuccess(state, action) {
      state.orderDetail = action.payload;
    },
    orderDetailFailure(state) {
      state.orderDetail = null;
    },
  },
});

export const {
  addStep,
  minStep,
  setChecked,
  ordersStart,
  ordersSuccess,
  ordersFailure,
  orderDetailFailure,
  orderDetailStart,
  orderDetailSuccess,
} = orderSlice.actions;

export default orderSlice.reducer;
