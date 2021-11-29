import { getPreviousWeekDay } from "utils/getPreviousWeekDay";

export const tickersURL = "/v3/reference/tickers";
export const createTickerDetailsURL = (stocksTicker: string) =>
  `/v1/meta/symbols/${stocksTicker}/company`;

export const openCloseURL = (stocksTicker: string) =>
  `/v1/open-close/${stocksTicker}/${getPreviousWeekDay()}`;
