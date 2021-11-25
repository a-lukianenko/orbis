import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import { SearchResults } from "pages/home";
import { highlightMatch } from "utils/highlightMatch";
import { useHighlightStyles } from "./styles";

type Props = {
  data: SearchResults;
};

export const SearchResultsList = ({ data }: Props) => {
  const { highlight } = useHighlightStyles();

  const { results, search } = data;

  if (results === null) return <p>Ticker not found</p>;

  return (
    <List aria-label='ticker symbol and company name'>
      {Array.isArray(results) &&
        results.map(({ ticker, name }) => {
          return (
            <ListItem key={ticker} button>
              <ListItemText>{ticker}</ListItemText>
              <ListItemText>
                {search ? highlightMatch(name, search, highlight) : name}
              </ListItemText>
            </ListItem>
          );
        })}
    </List>
  );
};
