import { getMonthStartEnd } from "utils/date/getMonthStartEnd";
import { getPreviousWeekDay } from "utils/date/getPreviousWeekDay";

export const tickersURL = "/v3/reference/tickers";
export const createTickerDetailsURL = (stocksTicker: string) =>
  `/v1/meta/symbols/${stocksTicker}/company`;

export const openCloseURL = (stocksTicker: string) =>
  `/v1/open-close/${stocksTicker}/${getPreviousWeekDay()}`;

export const priceAggregatesURL = (stocksTicker: string) => {
  const [from, to] = getMonthStartEnd();

  return `/v2/aggs/ticker/${stocksTicker}/range/1/day/${from}/${to}`;
};
