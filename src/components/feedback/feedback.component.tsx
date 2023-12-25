// Hooks
import useFeedback from "./hooks/feedback.hook";

const FeedbackComponent = (): React.ReactElement => {
  const { work } = useFeedback();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-blue-100">Should I work today? 💼</h1>
      <div className="text-4xl font-bold text-blue-950">
        {work === null ? (
          <div>Loading</div>
        ) : work ? (
          <div>No, you don't have to work today</div>
        ) : (
          <div>Yes, you have to work today</div>
        )}
      </div>
    </div>
  );
};

export default FeedbackComponent;
