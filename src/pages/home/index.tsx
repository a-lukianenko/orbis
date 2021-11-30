import { TickerTitle } from "./components/TickerDetails/TickerTitle";
import { AboutTicker } from "./components/TickerDetails/AboutTicker";
import Box from "@material-ui/core/Box/Box";
import { Description } from "./components/TickerDetails/Description";
import { AddressMap } from "./components/TickerDetails/AddressMap";
import { RelatedStocks } from "./components/TickerDetails/RelatedStocks";
import { Tags } from "./components/TickerDetails/Tags";
import { TickerPrice } from "./components/TickerDetails/TickerPrice";
import { AggregatesChart } from "./components/TickerDetails/AggregatesChart";
import Grid from "@material-ui/core/Grid/Grid";

export const HomePage = ({
  tickerDetails,
  handleTickerSelect,
}: {
  tickerDetails: any;
  handleTickerSelect: (t: string) => void;
}) => {
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
                <RelatedStocks
                  relatedStocks={tickerDetails.similar}
                  handleTickerSelect={handleTickerSelect}
                />

                <Tags tags={tickerDetails.tags} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
