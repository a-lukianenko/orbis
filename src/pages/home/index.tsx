import { TickerTitle } from "./TickerDetails/TickerTitle";
import { AboutTicker } from "./TickerDetails/AboutTicker";
import Box from "@material-ui/core/Box/Box";
import { Description } from "./TickerDetails/Description";
import { AddressMap } from "./TickerDetails/AddressMap";
import { RelatedStocks } from "./TickerDetails/RelatedStocks";
import { Tags } from "./TickerDetails/Tags";
import { TickerPrice } from "./TickerDetails/TickerPrice";
import { AggregatesChart } from "./TickerDetails/AggregatesChart";
import Grid from "@material-ui/core/Grid/Grid";
import { useTickerState } from "context";

export const HomePage = () => {
  const { tickerDetails } = useTickerState();

  return (
    <Box width='100%'>
      {tickerDetails && (
        <Box p={{ xs: "20px", sm: "30px 45px" }}>
          <Grid container direction='column'>
            <Grid item>
              <TickerTitle
                symbol={tickerDetails.symbol}
                name={tickerDetails.name}
              />

              <TickerPrice
                open={tickerDetails.open}
                close={tickerDetails.close}
              />
            </Grid>

            <Grid item xs={12} md={10}>
              <AggregatesChart data={tickerDetails.aggregates} />
            </Grid>
          </Grid>

          <Grid container direction='column'>
            <Grid item container justifyContent='space-between' spacing={5}>
              <Grid item md={6}>
                <AboutTicker
                  symbol={tickerDetails.symbol}
                  sector={tickerDetails.sector}
                  industry={tickerDetails.industry}
                  ceo={tickerDetails.ceo}
                  employees={tickerDetails.employees}
                  hq_address={tickerDetails.hq_address}
                  hq_country={tickerDetails.hq_country}
                  phone={tickerDetails.phone}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <AddressMap address={tickerDetails.hq_address} />
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction='row'
              justifyContent='space-between'
              spacing={5}
            >
              <Grid item md={6}>
                <Description description={tickerDetails.description} />
              </Grid>

              <Grid item md={6}>
                <RelatedStocks relatedStocks={tickerDetails.similar} />

                <Tags tags={tickerDetails.tags} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
