import { SearchResultsList } from "./components/SearchResultsList";
import { SearchBar } from "components/SearchBar";
import { useCallback, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { getTickerDetails } from "api/getTickerDetails";
import { TickerTitle } from "./components/TickerDetails/TickerTitle";
import { AboutTicker } from "./components/TickerDetails/AboutTicker";
import Box from "@material-ui/core/Box/Box";
import { Description } from "./components/TickerDetails/Description";
import { AddressMap } from "./components/TickerDetails/AddressMap";
import { RelatedStocks } from "./components/TickerDetails/RelatedStocks";
import { Tags } from "./components/TickerDetails/Tags";
import { getTickerPrice } from "api/getTickerPrice";
import { TickerPrice } from "./components/TickerDetails/TickerPrice";
import { getPriceAggregates } from "api/getPriceAggregates";

export type SearchResults = {
  results: Ticker[] | null;
  search: string;
};

const initialState = {
  results: [],
  search: "",
} as SearchResults;

export const HomePage = () => {
  const { main } = useStyles();

  const [searchResults, setSearchResults] =
    useState<SearchResults>(initialState);

  const [selectedTicker, setSelectedTicker] = useState("");
  const [tickerDetails, setTickerDetails] = useState<
    (TickerDetails & TickerPrice & { aggregates: PriceAggregate[] }) | null
  >(null);

  const handleSearchresults = useCallback(
    (results) => setSearchResults(results),
    []
  );

  const handleTickerSelect = (ticker: string) => setSelectedTicker(ticker);

  const { results } = searchResults;

  useEffect(() => {
    const requestTickerDetails = async () => {
      try {
        const [detailsRes, priceRes, aggregatesRes] = await Promise.all([
          getTickerDetails(selectedTicker),
          getTickerPrice(selectedTicker),
          getPriceAggregates(selectedTicker),
        ]);

        const { data: details } = detailsRes;
        const {
          data: { open, close },
        } = priceRes;

        const tickerDetails = {
          ...details,
          open,
          close,
          aggregates: aggregatesRes.data.results,
        };

        setTickerDetails(tickerDetails);
      } catch (error) {}
    };

    if (selectedTicker !== "") requestTickerDetails();
  }, [selectedTicker]);

  return (
    <main className={main}>
      <SearchBar
        handleSearchresults={handleSearchresults}
        isSearchSelected={Boolean(selectedTicker)}
      />

      {((Array.isArray(results) && results.length > 0) || results === null) &&
        !selectedTicker && (
          <SearchResultsList
            data={searchResults}
            handleResultSelect={handleTickerSelect}
          />
        )}

      {tickerDetails && (
        <Box py='30px' px='45px'>
          <TickerTitle
            symbol={tickerDetails.symbol}
            name={tickerDetails.name}
          />

          <TickerPrice open={tickerDetails.open} close={tickerDetails.close} />

          <AboutTicker
            symbol={tickerDetails.symbol}
            sector={tickerDetails.sector}
            industry={tickerDetails.industry}
            ceo={tickerDetails.ceo}
            employees={tickerDetails.employees}
            hq_address={tickerDetails.hq_address}
            hq_country={tickerDetails.hq_country}
            phone={tickerDetails.phone}
          />

          <AddressMap address={tickerDetails.hq_address} />

          <Description description={tickerDetails.description} />

          <RelatedStocks relatedStocks={tickerDetails.similar} />

          <Tags tags={tickerDetails.tags} />
        </Box>
      )}
    </main>
  );
};
