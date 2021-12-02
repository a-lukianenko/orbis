import Box from "@material-ui/core/Box/Box";

import { theme } from "theme";

const arrowDown = <>&darr;</>;
const arrowUp = <>&uarr;</>;

export const TickerPrice = <T extends TickerPrice>({ open, close }: T) => {
  const priceDiff = {
    asNumber: Number((close - open).toFixed(2)),
    asPercentage: Number((((close - open) / open) * 100).toFixed(2)),
  };

  return (
    <section>
      <Box component='span' fontSize='28px'>
        ${close}
      </Box>

      <Box
        component='span'
        fontSize='18px'
        fontWeight='bold'
        color={
          priceDiff.asNumber < 0
            ? theme.palette.error.main
            : theme.palette.success.main
        }
      >
        <Box component='span' ml='10px'>
          {priceDiff.asNumber}
        </Box>
        <Box component='span' ml='10px' fontSize='24px'>
          {priceDiff.asNumber < 0 ? arrowDown : arrowUp}
        </Box>
        {priceDiff.asPercentage}%
      </Box>
    </section>
  );
};
