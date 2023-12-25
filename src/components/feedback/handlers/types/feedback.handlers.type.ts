// Types
import { AppValuesContextType } from "../../../../contexts/app-context/types/app-values.context.type";

export type FeedbackHandlersType = Pick<
  AppValuesContextType,
  "day" | "holidays" | "setHolidays"
> & {
  setWork: (value: boolean | null) => void;
};
