// Types
import { DayFormReturnHandlersType } from "./types/day-form-return.handlers.type";
import { DayFormHandlersType } from "./types/day-form.handlers.type";
import { OnChangeDayHandlerType } from "./types/on-change-day-handler.type";

const onChangeDayHandler = ({ event, setDay }: OnChangeDayHandlerType) => {
  event.preventDefault();
  setDay(event.target.value);
};

const DayFormHandlers = ({
  setDay,
}: DayFormHandlersType): DayFormReturnHandlersType => ({
  handleOnChangeDay: (event) => onChangeDayHandler({ event, setDay }),
});

export default DayFormHandlers;
