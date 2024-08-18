import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
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

  return <progress id="question-timer" value={remainingTime} max={timeout} />;
}
