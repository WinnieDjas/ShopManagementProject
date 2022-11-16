import { createSlice } from "@reduxjs/toolkit";

const salesSlice = createSlice({
  name: "sales",
  initialState: { sales: [], selectedSales: {}, isFetching: false },
  reducers: {
    setSales(state, action) {
      state.sales = action.payload?.data;
    },
    setSelectedSale(state, action) {
      state.selectedSales = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const SalesActions = salesSlice.actions;

export default salesSlice.reducer;