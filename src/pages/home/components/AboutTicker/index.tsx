import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import { Address } from "./Address";
import { GeneralInfo } from "./GeneralInfo";
import { useStyles } from "./styles";

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
  const { title } = useStyles();

  const generalInfoProps = { sector, industry, ceo, employees };
  const addressProps = { hq_address, hq_country, phone };

  return (
    <Box mt={2}>
      <Typography component='h3' variant='h6' className={title}>
        About {symbol}
      </Typography>

      <Box mt={2} display='flex' justifyContent='space-between' width='50%'>
        <GeneralInfo {...generalInfoProps} />

        <Address {...addressProps} />
      </Box>
    </Box>
  );
};
