import Button from "@material-ui/core/Button/Button";

import { useTickerDispatch } from "context";
import { theme } from "theme";

import { SectionTitle } from "../SectionTitle";

export type RelatedStocksProps = Pick<TickerDetails, "similar">;

export const RelatedStocks = <T extends RelatedStocksProps>({ similar }: T) => {
  const dispatch = useTickerDispatch();

  const handleTickerSelect = (ticker: string) =>
    dispatch({ type: "setTicker", payload: ticker });

  return (
    <section>
      <SectionTitle>Related Stocks</SectionTitle>
      {similar.map((stock, i) => {
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
