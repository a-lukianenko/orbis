import Box from "@material-ui/core/Box/Box";
import { usLocalePhoneNumber } from "utils/usLocalePhoneNumber";
import { GeneralInfoCategory } from "./Category";

type Props = Pick<TickerDetails, "sector" | "industry" | "ceo" | "employees">;

export const GeneralInfo = ({ sector, industry, ceo, employees }: Props) => {
  return (
    <Box>
      <GeneralInfoCategory category='Sector' value={sector} />

      <GeneralInfoCategory category='Industry' value={industry} />

      <GeneralInfoCategory category='CEO' value={ceo} />

      <GeneralInfoCategory
        category='Employees'
        value={usLocalePhoneNumber(employees)}
      />
    </Box>
  );
};
