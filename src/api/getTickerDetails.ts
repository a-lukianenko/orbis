import { httpClient } from "./httpClient";
import { createTickerDetailsURL } from "./url";

export const getTickerDetails = (tickerName: string) => {
  return httpClient({
    url: createTickerDetailsURL(tickerName),
  });
};
