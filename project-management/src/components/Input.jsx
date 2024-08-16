import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClasses =
    "w-full border-b-2 border-stone-200 bg-gray-200 p-3 focus:border-stone-800 focus:outline-none";
  return (
    <p className="flex w-full flex-col">
      <label className="w-full font-bold uppercase" htmlFor={label}>
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={inputClasses} id={label} {...props} />
      ) : (
        <input ref={ref} className={inputClasses} id={label} {...props} />
      )}
    </p>
  );
});

export default Input;
