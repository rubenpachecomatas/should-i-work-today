// Components
import DayFormComponent from "./components/day-form/day-form.component";
import FeedbackComponent from "./components/feedback/feedback.component";

function App() {
  return (
    <main className="h-screen bg-gradient-to-t from-blue-500 to-blue-400 flex justify-center items-center text-center">
      <section className="flex flex-col gap-8 p-12 lg:w-1/2">
        <FeedbackComponent />
        <DayFormComponent />
      </section>
    </main>
  );
}

export default App;
