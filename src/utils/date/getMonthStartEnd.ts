import { sub } from "date-fns";
import { dateFormatter } from "./dateFormatter";

export const getMonthStartEnd = () => {
  const today = new Date();

  const from = dateFormatter(sub(today, { months: 1 }));

  const to = dateFormatter(today);

  return [from, to];
};
