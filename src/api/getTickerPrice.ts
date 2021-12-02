import { httpClient } from "./httpClient";
import { openCloseURL } from "./url";

export const getTickerPrice = (tickerName: string) => {
  return httpClient({
    url: openCloseURL(tickerName),
  });
};
