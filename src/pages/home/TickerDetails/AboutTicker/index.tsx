import Box from "@material-ui/core/Box/Box";
import { Address } from "./Address";
import { GeneralInfo } from "./GeneralInfo";

export type AboutTickerProps = Pick<
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

export const AboutTicker = <T extends AboutTickerProps>({
  symbol,
  sector,
  industry,
  ceo,
  employees,
  hq_address,
  hq_country,
  phone,
}: T) => {
  const generalInfoProps = { sector, industry, ceo, employees };
  const addressProps = { hq_address, hq_country, phone };
  const title = `About ${symbol}`;

  return (
    <Box component='section'>
      <Box component='h3' fontSize='18px' fontWeight='bold' mt='-50px'>
        {title}
      </Box>

      <Box mt={2} display='flex' justifyContent='space-between' width='100%'>
        <GeneralInfo {...generalInfoProps} />

        <Box ml='70px'>
          <Address {...addressProps} />
        </Box>
      </Box>
    </Box>
  );
};
