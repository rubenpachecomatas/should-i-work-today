// Vendors
import { createContext, useState } from "react";
// Constants
import { APP_CONTEXT_DEFAULT_VALUE } from "./constants/app.context.constants";
// Types
import { AppContextType } from "./types/app.context.type";
import { HolidayType } from "../../types/holiday.type";

export const AppContext = createContext(APP_CONTEXT_DEFAULT_VALUE);

export function AppContextProvider({ children }: AppContextType) {
  const [holidays, setHolidays] = useState<HolidayType[]>([]);
  const [day, setDay] = useState<string>(
    new Date("2022-01-01").toISOString().split("T")[0]
  );

  return (
    <AppContext.Provider value={{ day, holidays, setDay, setHolidays }}>
      {children}
    </AppContext.Provider>
  );
}
