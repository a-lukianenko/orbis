import { httpClient } from "./httpClient";
import { tickers } from "./url";

export const getTickers = (tickerName: string) => {
  return httpClient({
    url: tickers,
    params: {
      active: true,
      sort: "ticker",
      order: "asc",
      limit: 10,
      search: tickerName,
    },
  });
};
