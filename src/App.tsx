// Components
import DayFormComponent from "./components/day-form/day-form.component";
import FeedbackComponent from "./components/feedback/feedback.component";

function App() {
  return (
    <main className="h-screen flex flex-col p-12 bg-blue-400 gap-8">
      <FeedbackComponent />
      <DayFormComponent />
    </main>
  );
}

export default App;
