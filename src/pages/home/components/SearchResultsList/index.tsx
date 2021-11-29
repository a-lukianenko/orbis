import Box from "@material-ui/core/Box/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import { SearchResults } from "pages/home";
import { highlightMatch } from "utils/highlightMatch";
import { useTextStyles, useListStyles } from "./styles";

type Props = {
  data: SearchResults;
  handleResultSelect: (ticker: string) => void;
};

export const SearchResultsList = ({ data, handleResultSelect }: Props) => {
  const { highlight } = useTextStyles();
  const classes = useListStyles();

  const { results, search } = data;

  if (results === null) {
    return (
      <Box mt={3} textAlign='center' fontSize='18px'>
        No Results Found
      </Box>
    );
  }

  return (
    <List aria-label='ticker symbol and company name' classes={classes}>
      {Array.isArray(results) &&
        results.map(({ ticker, name }) => {
          return (
            <ListItem
              key={ticker}
              button
              onClick={() => handleResultSelect(ticker)}
            >
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
