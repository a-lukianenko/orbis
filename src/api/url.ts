export const tickersURL = "/v3/reference/tickers";
export const createTickerDetailsURL = (stocksTicker: string) =>
  `/v1/meta/symbols/${stocksTicker}/company`;
