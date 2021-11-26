import { SearchResultsList } from "./components/SearchResultsList";
import { SearchBar } from "components/SearchBar";
import { useCallback, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { getTickerDetails } from "api/getTickerDetails";
import { TickerTitle } from "./components/TickerTitle";
import { AboutTicker } from "./components/AboutTicker";
import Box from "@material-ui/core/Box/Box";
import { Description } from "./components/TickerDetails/Description";

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
  const [tickerDetails, setTickerDetails] = useState<TickerDetails | null>(
    null
  );

  const handleSearchresults = useCallback(
    (results) => setSearchResults(results),
    []
  );

  const handleTickerSelect = (ticker: string) => setSelectedTicker(ticker);

  const { results } = searchResults;

  useEffect(() => {
    const requestTickerDetails = async () => {
      try {
        const response = await getTickerDetails(selectedTicker);

        setTickerDetails(response.data);
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

          <Description description={tickerDetails.description} />
        </Box>
      )}
    </main>
  );
};
