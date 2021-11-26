import { httpClient } from "./httpClient";
import { tickersURL } from "./url";

export const getTickers = (tickerName: string) => {
  return httpClient({
    url: tickersURL,
    params: {
      active: true,
      sort: "ticker",
      order: "asc",
      limit: 10,
      search: tickerName,
    },
  });
};
