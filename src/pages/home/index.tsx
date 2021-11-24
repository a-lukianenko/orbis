import { SearchBar } from "components/SearchBar";
import { useStyles } from "./styles";

export const HomePage = () => {
  const { main } = useStyles();

  return (
    <main className={main}>
      <SearchBar />
    </main>
  );
};
