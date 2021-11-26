import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import { theme } from "theme";

type Props = {
  relatedStocks: string[];
};

export const RelatedStocks = ({ relatedStocks }: Props) => {
  return (
    <div>
      <Box component='h3' fontSize='18px' fontWeight='bold'>
        Related Stocks
      </Box>
      {relatedStocks.map((stock, i) => {
        return (
          <Button
            key={stock}
            size='small'
            style={{
              marginRight: 20,
              color: "#fff",
              backgroundColor:
                i % 2 ? theme.palette.success.main : theme.palette.error.main,
            }}
          >
            {stock}
          </Button>
        );
      })}
    </div>
  );
};
