type Ticker = {
  ticker: string;
  name: string;
};

type TickerDetails = {
  symbol: string;
  name: string;
  sector: string;
  industry: string;
  ceo: string;
  employees: number;
  hq_address: string;
  hq_country: string;
  phone: string;
  description: string;
  similar: string[];
  tags: string[];
};

type TickerPrice = {
  open: number;
  close: number;
};

type PriceAggregate = {
  c: number;
};

type SelectedTickerDetails = {
  details: TickerDetails | Error;
  price: TickerPrice | Error;
  aggregates: PriceAggregate[] | Error;
};
