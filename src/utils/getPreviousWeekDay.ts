import { isWeekend, isMonday, previousFriday, sub } from "date-fns";
import { formatWithOptions } from "date-fns/fp";
import { enUS } from "date-fns/locale";

export const getPreviousWeekDay = (date = new Date()) => {
  const formatter = formatWithOptions({ locale: enUS }, "yyyy-MM-dd");

  return isWeekend(date) || isMonday(date)
    ? formatter(previousFriday(date))
    : formatter(sub(date, { days: 1 }));
};
