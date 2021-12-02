import { httpClient } from "./httpClient";
import { priceAggregatesURL } from "./url";

export const getPriceAggregates = (tickerName: string) => {
  return httpClient({
    url: priceAggregatesURL(tickerName),
  });
};
