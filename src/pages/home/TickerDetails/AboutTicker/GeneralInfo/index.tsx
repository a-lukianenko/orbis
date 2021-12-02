import { usLocalePhoneNumber } from "utils/usLocalePhoneNumber";
import { GeneralInfoCategory } from "./Category";

type Props = Pick<TickerDetails, "sector" | "industry" | "ceo" | "employees">;

export const GeneralInfo = ({ sector, industry, ceo, employees }: Props) => {
  return (
    <div>
      <GeneralInfoCategory category='Sector' value={sector} />

      <GeneralInfoCategory category='Industry' value={industry} />

      <GeneralInfoCategory category='CEO' value={ceo} />

      <GeneralInfoCategory
        category='Employees'
        value={usLocalePhoneNumber(employees)}
      />
    </div>
  );
};
