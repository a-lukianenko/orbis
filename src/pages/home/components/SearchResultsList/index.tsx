import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

type Props = {
  data: Nullable<Ticker[]>;
};

export const SearchResultsList = ({ data }: Props) => {
  if (data === null) return <p>Ticker not found</p>;
  return (
    <List aria-label='ticker symbol and company name'>
      {Array.isArray(data) &&
        data.map(({ ticker, name }) => {
          return (
            <ListItem key={ticker} button>
              <ListItemText>{ticker}</ListItemText>
              <ListItemText>{name}</ListItemText>
            </ListItem>
          );
        })}
    </List>
  );
};
