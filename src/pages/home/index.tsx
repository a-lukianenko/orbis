import { useStyles } from "./styles";
import { TickerTitle } from "./components/TickerDetails/TickerTitle";
import { AboutTicker } from "./components/TickerDetails/AboutTicker";
import Box from "@material-ui/core/Box/Box";
import { Description } from "./components/TickerDetails/Description";
import { AddressMap } from "./components/TickerDetails/AddressMap";
import { RelatedStocks } from "./components/TickerDetails/RelatedStocks";
import { Tags } from "./components/TickerDetails/Tags";
import { TickerPrice } from "./components/TickerDetails/TickerPrice";
import { AggregatesChart } from "./components/TickerDetails/AggregatesChart";

export const HomePage = ({
  tickerDetails,
  handleTickerSelect,
}: {
  tickerDetails: any;
  handleTickerSelect: (t: string) => void;
}) => {
  const { main } = useStyles();

  return (
    <div className={main}>
      {tickerDetails && (
        <Box py='30px' px='45px'>
          <TickerTitle
            symbol={tickerDetails.symbol}
            name={tickerDetails.name}
          />

          <TickerPrice open={tickerDetails.open} close={tickerDetails.close} />

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

          <AggregatesChart data={tickerDetails.aggregates} />

          <AddressMap address={tickerDetails.hq_address} />

          <Description description={tickerDetails.description} />

          <RelatedStocks
            relatedStocks={tickerDetails.similar}
            handleTickerSelect={handleTickerSelect}
          />

          <Tags tags={tickerDetails.tags} />
        </Box>
      )}
    </div>
  );
};
