import { useState, useEffect } from "react";

export default function ProgressBar({ maxValue }) {
  const [timeRemaining, setTimeRemaining] = useState(maxValue);

  useEffect(() => {
    setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 10);
    }, 10);
  }, []);
  return <progress value={timeRemaining} max={maxValue} />;
}
