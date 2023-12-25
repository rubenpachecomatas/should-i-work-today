// Vendors
import { useContext } from "react";
// Context
import { AppContext } from "../../../contexts/app-context/app.context";
// Handlers
import DayFormHandlers from "../handlers/day-form.handlers";
// Types
import { DayFormReturnHookType } from "./types/day-form-return.hook";

const DayFormHook = (): DayFormReturnHookType => {
  const { day, setDay } = useContext(AppContext);

  const { handleOnChangeDay } = DayFormHandlers({
    setDay,
  });

  return {
    day,
    handleOnChangeDay,
  };
};

export default DayFormHook;
