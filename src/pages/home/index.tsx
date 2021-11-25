import { SearchResultsList } from "./components/SearchResultsList";
import { SearchBar } from "components/SearchBar";
import { useCallback, useState } from "react";
import { useStyles } from "./styles";

export const HomePage = () => {
  const { main } = useStyles();

  const [searchResults, setSearchResults] = useState<Ticker[] | null>([]);

  const handleSearchresults = useCallback(
    (results) => setSearchResults(results),
    []
  );

  return (
    <main className={main}>
      <SearchBar handleSearchresults={handleSearchresults} />

      {((Array.isArray(searchResults) && searchResults.length > 0) ||
        searchResults === null) && <SearchResultsList data={searchResults} />}
    </main>
  );
};
