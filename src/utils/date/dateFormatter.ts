import { formatWithOptions } from "date-fns/fp";
import { enUS } from "date-fns/locale";

export const dateFormatter = formatWithOptions({ locale: enUS }, "yyyy-MM-dd");
