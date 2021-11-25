import { SearchResultsList } from "./components/SearchResultsList";
import { SearchBar } from "components/SearchBar";
import { useCallback, useState } from "react";
import { useStyles } from "./styles";

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

  const handleSearchresults = useCallback(
    (results) => setSearchResults(results),
    []
  );

  const { results } = searchResults;

  return (
    <main className={main}>
      <SearchBar handleSearchresults={handleSearchresults} />

      {((Array.isArray(results) && results.length > 0) || results === null) && (
        <SearchResultsList data={searchResults} />
      )}
    </main>
  );
};
