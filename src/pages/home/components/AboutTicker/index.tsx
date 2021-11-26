import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import { Address } from "./Address";
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

const usLocaleNumber = (number: number) =>
  new Intl.NumberFormat("us-US").format(number);

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
  const { title, value } = useStyles();

  return (
    <Box mt={2}>
      <Typography component='h3' variant='h6' className={title}>
        About {symbol}
      </Typography>

      <Box mt={2} display='flex' justifyContent='space-between' width='50%'>
        <Box>
          <Box>
            <Typography display='inline' variant='body1'>
              Sector:
            </Typography>
            <Typography display='inline' className={value}>
              {sector}
            </Typography>
          </Box>

          <Box>
            <Typography display='inline'>Industry:</Typography>
            <Typography display='inline' className={value}>
              {industry}
            </Typography>
          </Box>

          <Box>
            <Typography display='inline'>CEO:</Typography>
            <Typography display='inline' className={value}>
              {ceo}
            </Typography>
          </Box>

          <Box>
            <Typography display='inline'>Employees:</Typography>
            <Typography display='inline' className={value}>
              {usLocaleNumber(employees)}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Address
            hq_address={hq_address}
            hq_country={hq_country}
            phone={phone}
          />
        </Box>
      </Box>
    </Box>
  );
};
