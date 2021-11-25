import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tickerReducer from "app/features/stocks/tickerSlice";

export const store = configureStore({
  reducer: {
    stocks: tickerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
