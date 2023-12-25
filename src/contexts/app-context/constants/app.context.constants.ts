// Types
import { AppValuesContextType } from "../types/app-values.context.type";

const APP_CONTEXT_DEFAULT_VALUE: AppValuesContextType = {
  holidays: [],
  day: "",
  setDay: () => null,
  setHolidays: () => null,
};

export { APP_CONTEXT_DEFAULT_VALUE };
