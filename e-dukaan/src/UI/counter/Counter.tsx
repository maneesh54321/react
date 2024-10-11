import { useState } from "react";

import classes from "./Counter.module.css";

interface CounterProps {
  initialValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ initialValue, onIncrement, onDecrement }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  function decrement() {
    setCounter((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      }
      return prevValue;
    });
    onDecrement();
  }

  function increment() {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
    onIncrement();
  }

  return (
    <div className={classes.counter}>
      <button className={classes.mutationBtn} onClick={decrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={classes.actionIcon}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <span className={classes.value}>{counter}</span>
      <button className={classes.mutationBtn} onClick={increment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={classes.actionIcon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
