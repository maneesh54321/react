import { useState } from "react";
import commonClasses from "../CommonInput.module.css";
import classes from "./Dropdown.module.css";

interface Props {
  label: string;
  name: string;
  options: string[];
  className: string;
  initialValue: string;
}

const Dropdown = ({ label, name, initialValue, options, className }: Props) => {
  const [value, setValue] = useState<string>(initialValue);

  const [selectOptions, setSelectOptions] = useState(options);

  const [dpdnOpen, setDpdnOpen] = useState(false);

  function selectOption(option: string) {
    setValue(option);
  }

  function handleOnFocus() {
    setDpdnOpen(true);
  }

  function isValidValue(v: string) {
    if (v) {
      return options.indexOf(v) >= 0;
    }
    return false;
  }

  function handleOnBlur() {
    setTimeout(() => {
      setDpdnOpen(false);
      setValue((prevValue) => (isValidValue(prevValue) ? prevValue : ""));
    }, 100);
  }

  function filterOptions(currVal: string) {
    const updatedOptions = options.filter((o) =>
      o.toLowerCase().startsWith(currVal.toLowerCase())
    );

    setSelectOptions(updatedOptions);
  }

  function handleOnChange(e: { target: { value: string } }) {
    const currVal = e.target.value;

    filterOptions(currVal);

    setValue(currVal);
  }

  return (
    <div
      className={`${commonClasses.inputWrapper} ${classes.dropdown} ${
        dpdnOpen ? classes.open : ""
      } ${className}`}
    >
      <label htmlFor={name} className={commonClasses.label}>
        {label}
      </label>
      <input
        className={commonClasses.input}
        id={name}
        name={name}
        value={value}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <ul className={classes.options}>
        {selectOptions.map((option, idx) => (
          <li
            key={idx}
            className={`${classes.option} ${
              value === option ? classes.selected : ""
            }`}
            onClick={() => selectOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
