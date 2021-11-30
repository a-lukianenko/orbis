import Box from "@material-ui/core/Box/Box";
import { withoutCountryCode } from "utils/withoutCountryCode";

type Props = Pick<TickerDetails, "hq_address" | "hq_country" | "phone">;

export const Address = ({ hq_address, hq_country, phone }: Props) => {
  const countryName = /usa?/i.test(hq_country) ? "United States" : hq_country;
  return (
    <Box component='address' width={170} fontStyle='normal' fontSize={16}>
      <Box>{hq_address}</Box>
      <Box>{countryName}</Box>
      <Box mt='5px'>{withoutCountryCode(phone)}</Box>
    </Box>
  );
};
