import Box from "@material-ui/core/Box/Box";
import { SectionTitle } from "../TickerDetails/SectionTitle";
import { Address } from "./Address";
import { GeneralInfo } from "./GeneralInfo";

type Props = Pick<
  TickerDetails,
  | "symbol"
  | "sector"
  | "industry"
  | "ceo"
  | "employees"
  | "hq_address"
  | "hq_country"
  | "phone"
>;

export const AboutTicker = ({
  symbol,
  sector,
  industry,
  ceo,
  employees,
  hq_address,
  hq_country,
  phone,
}: Props) => {
  const generalInfoProps = { sector, industry, ceo, employees };
  const addressProps = { hq_address, hq_country, phone };
  const title = `About ${symbol}`;

  return (
    <Box component='section' mt={2}>
      <SectionTitle>{title}</SectionTitle>

      <Box mt={2} display='flex' justifyContent='space-between' width='50%'>
        <GeneralInfo {...generalInfoProps} />

        <Address {...addressProps} />
      </Box>
    </Box>
  );
};
