// Resolvers
import { holidaysResolver } from "../../../providers/holidays/resolvers/holidays.resolvers";
// Types
import { HolidayType } from "../../../types/holiday.type";
import { FeedbackReturnHandlersType } from "./types/feedback-return.handlers.type";
import { FeedbackHandlersType } from "./types/feedback.handlers.type";
import { UpdateHolidaysHandlerType } from "./types/update-holidays-handler.type";
import { UpdateWorkHandlerType } from "./types/update-work-handler.type";

const updateHolidaysHandler = async ({
  setHolidays,
}: UpdateHolidaysHandlerType) => {
  setHolidays(await holidaysResolver());
};

const updateWorkHandler = ({
  day,
  holidays,
  setWork,
}: UpdateWorkHandlerType) => {
  const dates = holidays.map((day: HolidayType) => day.date);

  setWork(dates.some((date: string) => date === day));
};

const FeedbackHandlers = ({
  day,
  holidays,
  setHolidays,
  setWork,
}: FeedbackHandlersType): FeedbackReturnHandlersType => ({
  handleUpdateHolidays: () => updateHolidaysHandler({ setHolidays }),
  handleUpdateWork: () => updateWorkHandler({ day, holidays, setWork }),
});

export default FeedbackHandlers;
