export const tickers = "/v3/reference/tickers";
export const tickerDetails = (stocksTicker: string) =>
  `/v1/meta/symbols/${stocksTicker}/company`;
