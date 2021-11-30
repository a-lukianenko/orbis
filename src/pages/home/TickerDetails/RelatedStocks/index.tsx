import Button from "@material-ui/core/Button/Button";
import { useTickerDispatch } from "context";
import { theme } from "theme";
import { SectionTitle } from "../SectionTitle";

type Props = {
  relatedStocks: string[];
};

export const RelatedStocks = ({ relatedStocks }: Props) => {
  const dispatch = useTickerDispatch();

  const handleTickerSelect = (ticker: string) =>
    dispatch({ type: "setTicker", payload: ticker });

  return (
    <section>
      <SectionTitle>Related Stocks</SectionTitle>
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
            onClick={() => handleTickerSelect(stock)}
          >
            {stock}
          </Button>
        );
      })}
    </section>
  );
};
