// Hooks
import DayFormHook from "./hooks/day-form.hook";

const DayFormComponent = (): React.ReactElement => {
  const { day, handleOnChangeDay } = DayFormHook();

  return (
    <div className="flex flex-col gap-3 items-center justify-center text-blue-100">
      <span className="text-3xl font-bold">And what about...</span>
      <form>
        <input
          className="p-1 rounded-lg text-xl text-center bg-blue-950"
          name="newDay"
          onChange={handleOnChangeDay}
          type="date"
          value={day}
        />
      </form>
    </div>
  );
};

export default DayFormComponent;
