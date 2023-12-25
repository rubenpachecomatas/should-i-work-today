// Vendors
import { useContext, useEffect, useState } from "react";
// Contexts
import { AppContext } from "../../../contexts/app-context/app.context";
// Handlers
import FeedbackHandlers from "../handlers/feedback.handlers";
// Types
import { FeedbackReturnHookType } from "./types/feedback-return.hook.type";

const useFeedback = (): FeedbackReturnHookType => {
  const [work, setWork] = useState<boolean | null>(null);

  const { day, holidays, setHolidays } = useContext(AppContext);

  const { handleUpdateHolidays, handleUpdateWork } = FeedbackHandlers({
    day,
    holidays,
    setHolidays,
    setWork,
  });

  useEffect(() => {
    handleUpdateHolidays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    holidays.length > 0 && handleUpdateWork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, holidays]);

  return {
    day,
    work,
  };
};

export default useFeedback;
