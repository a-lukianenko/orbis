import { ComponentType } from "react";

import Grid from "@material-ui/core/Grid/Grid";
import Box from "@material-ui/core/Box/Box";

import { useTickerState } from "context";

import { TickerTitle, TickerTitleProps } from "./TickerDetails/TickerTitle";
import { AboutTicker, AboutTickerProps } from "./TickerDetails/AboutTicker";
import { Description, DescriptionProps } from "./TickerDetails/Description";
import { AddressMap, AddressMapProps } from "./TickerDetails/AddressMap";
import {
  RelatedStocks,
  RelatedStocksProps,
} from "./TickerDetails/RelatedStocks";
import { Tags, TagsProps } from "./TickerDetails/Tags";
import { TickerPrice } from "./TickerDetails/TickerPrice";
import { AggregatesChart } from "./TickerDetails/AggregatesChart";

const ErrorMessage = ({ error }: { error: string | Error }) => {
  return (
    <Box mt='20px' mb='70px' fontSize='30px'>
      {typeof error === "string"
        ? error
        : error.message && error.message.includes("429")
        ? "5 requests limit - try 1 minute later!"
        : "an error occurred. please, try again later"}
    </Box>
  );
};

function WithFallback<T>({
  data,
  Component,
}: {
  data: Error | T;
  Component: ComponentType<T>;
}) {
  return (
    <>
      {data instanceof Error ? (
        <ErrorMessage error={data} />
      ) : (
        <Component {...data} />
      )}
    </>
  );
}

export const HomePage = () => {
  const { tickerDetails } = useTickerState();

  if (tickerDetails === null) return null;

  const { details, price, aggregates } = tickerDetails;

  return (
    <Box width='100%'>
      <Box p={{ xs: "20px", sm: "30px 45px" }}>
        <Grid container direction='column'>
          <Grid item>
            <WithFallback<TickerTitleProps>
              data={details}
              Component={TickerTitle}
            />

            <WithFallback<TickerPrice> data={price} Component={TickerPrice} />
          </Grid>

          <Grid item xs={12} md={10}>
            {typeof aggregates === "string" || aggregates instanceof Error ? (
              <ErrorMessage error={aggregates} />
            ) : (
              <AggregatesChart data={aggregates as PriceAggregate[]} />
            )}
          </Grid>
        </Grid>

        <Grid container direction='column'>
          <Grid item container justifyContent='space-between' spacing={5}>
            <Grid item md={6}>
              <WithFallback<AboutTickerProps>
                data={details}
                Component={AboutTicker}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <WithFallback<AddressMapProps>
                data={details}
                Component={AddressMap}
              />
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
              <WithFallback<DescriptionProps>
                data={details}
                Component={Description}
              />
            </Grid>

            <Grid item md={6}>
              <WithFallback<RelatedStocksProps>
                data={details}
                Component={RelatedStocks}
              />

              <WithFallback<TagsProps> data={details} Component={Tags} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
