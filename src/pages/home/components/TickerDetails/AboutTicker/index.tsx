import Box from "@material-ui/core/Box/Box";
import { SectionTitle } from "../SectionTitle";
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
