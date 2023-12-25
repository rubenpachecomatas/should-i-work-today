// Types
import { AppValuesContextType } from "../../../../contexts/app-context/types/app-values.context.type";
import { DayFormReturnHandlersType } from "../../handlers/types/day-form-return.handlers.type";

export type DayFormReturnHookType = Pick<AppValuesContextType, "day"> &
  DayFormReturnHandlersType;
