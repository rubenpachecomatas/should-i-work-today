// Types
import { AppValuesContextType } from "../../../../contexts/app-context/types/app-values.context.type";

export type UpdateHolidaysHandlerType = Pick<
  AppValuesContextType,
  "setHolidays"
>;
