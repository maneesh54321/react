import React, { useState } from "react";
import classes from "../CommonInput.module.css";

interface Props {
  name: string;
  label: string;
  initialValue?: string | number;
  className?: string;
}

const Input = ({ name, label, initialValue = "", className = "" }: Props) => {
  const [value, setValue] = useState(() => initialValue);

  function handleOnChange(e: {
    target: { value: React.SetStateAction<string | number> };
  }) {
    setValue(e.target.value);
  }

  const inputClass = value === "" ? classes.heightZero : "";

  return (
    <div className={classes.inputWrapper + " " + className + " " + inputClass}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        className={classes.input}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
