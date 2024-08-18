import { useEffect, useState } from "react";

import { ANSWERED, CORRECT, INCORRECT } from "./Question";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(
      () => setRemainingTime((remainingTime) => remainingTime - 100),
      100
    );

    return () => {
      setRemainingTime(timeout);
      clearInterval(interval);
    };
  }, []);
  let cssClasses = "unanswered";
  if (mode === ANSWERED) {
    cssClasses = "answered";
  } else if (mode === CORRECT) {
    cssClasses = "correct";
  } else if (mode === INCORRECT) {
    cssClasses = "wrong";
  }

  return (
    <progress
      id="question-timer"
      value={remainingTime}
      max={timeout}
      className={cssClasses}
    />
  );
}
