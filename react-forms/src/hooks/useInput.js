import { useState } from "react";

export function useInput(initialValue, validationFn) {
  const [enteredData, setEnteredData] = useState(initialValue);

  const [didEdit, setDidEdit] = useState(false);

  function handleOnChange(event) {
    setEnteredData(event.target.value);

    setDidEdit(false);
  }

  function handleOnBlur() {
    setDidEdit(true);
  }

  const isFieldValid = !didEdit || validationFn(enteredData);

  return {
    enteredData,
    handleOnChange,
    handleOnBlur,
    isFieldValid,
  };
}
