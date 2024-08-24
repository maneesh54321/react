import { hasMinLength, isEmail } from "../util/validation";

import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    enteredData: enteredEmail,
    handleOnChange: handleEmailOnChange,
    handleOnBlur: handleEmailOnBlur,
    isFieldValid: isEmailValid,
  } = useInput("", (value) => isEmail(value));

  const {
    enteredData: enteredPassword,
    handleOnChange: handlePasswordOnChange,
    handleOnBlur: handlePasswordOnBlur,
    isFieldValid: isPasswordValid,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called!!!");
    console.log(event.target);
    console.log(
      `Credentials {email: ${enteredData.email}, password: ${enteredData.password}}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={handleEmailOnChange}
          value={enteredEmail}
          onBlur={handleEmailOnBlur}
          error={!isEmailValid ? "Entered email is not valid." : undefined}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onChange={handlePasswordOnChange}
          value={enteredPassword}
          onBlur={handlePasswordOnBlur}
          error={!isPasswordValid ? "Entered password is invalid." : undefined}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
