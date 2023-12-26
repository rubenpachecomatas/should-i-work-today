// Hooks
import useFeedback from "./hooks/feedback.hook";

const FeedbackComponent = (): React.ReactElement => {
  const { work } = useFeedback();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="animate-bounce text-2xl font-bold text-blue-100">
        Should I work today? 💼
      </h1>
      <div className="text-4xl font-bold text-blue-950">
        {work === null ? (
          <div className="flex justify-center">
            <svg
              className="animate-spin w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path>
            </svg>
          </div>
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
