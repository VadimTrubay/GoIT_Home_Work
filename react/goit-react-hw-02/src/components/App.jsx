import "modern-normalize";
import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";
import { useEffect, useState } from "react";


  const store = {
    good: 0,
    neutral: 0,
    bad: 0,
};
  
function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return store;
  });

  function clearState() {
    setFeedback(store);
  }

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        clearState={clearState}
        total={totalFeedback}
      />
      {totalFeedback ?
        <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positive}
      /> : <Notification/>}
    </>
  );
}

export default App;
