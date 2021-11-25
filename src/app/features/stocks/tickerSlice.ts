import { createSlice } from "@reduxjs/toolkit";

export interface TickerState {
  tickers: Ticker[];
}

const initialState = {
  tickers: [],
} as TickerState;

export const tickerSlcie = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default tickerSlcie.reducer;
