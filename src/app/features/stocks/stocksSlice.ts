import { createSlice } from "@reduxjs/toolkit";

type Stock = {
  //
};

export interface StocksState {
  stocks: Stock[];
}

const initialState: StocksState = {
  stocks: [],
} as StocksState;

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default stocksSlice.reducer;
