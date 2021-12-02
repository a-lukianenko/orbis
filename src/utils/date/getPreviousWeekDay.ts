import { isWeekend, isMonday, previousFriday, sub } from "date-fns";
import { dateFormatter } from "./dateFormatter";

export const getPreviousWeekDay = (date = new Date()) => {
  return isWeekend(date) || isMonday(date)
    ? dateFormatter(previousFriday(date))
    : dateFormatter(sub(date, { days: 1 }));
};
