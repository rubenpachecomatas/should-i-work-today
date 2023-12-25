// Types
import { HolidayType } from "../../../types/holiday.type";

export type AppValuesContextType = {
  day: string;
  holidays: HolidayType[];
  setDay: (value: string) => void;
  setHolidays: (value: HolidayType[]) => void;
};
