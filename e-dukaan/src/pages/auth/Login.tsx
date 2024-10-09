import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Token, useLoginMutation } from "../../store/auth-api-slice";
import { useAppSelector } from "../../hooks";
import classes from "./Login.module.css";

function isTokenValid(loginToken: Token | undefined) {
  if (!loginToken || !loginToken.token || loginToken.token === "") return false;
  const currentTime = new Date().getTime();
  const tokenExpirationTime = new Date(loginToken.expirationTime).getTime();
  if (currentTime >= tokenExpirationTime) return false;
  return true;
}

const Login = () => {
  const [trigger, { isError, isLoading }] = useLoginMutation();

  const token = useAppSelector((state) => state.auth.token);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = isTokenValid(token);
    if (isLoggedIn) {
      navigate("/");
    }
  }, [token, navigate]);

  const [enteredValues, setEnteredValues] = useState({
    username: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    username: false,
    password: false,
  });

  function handleOnBlur(field: string) {
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [field]: true,
    }));
  }

  function handleInputChange(e: { target: { value: string } }, field: string) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [field]: e.target.value,
    }));
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [field]: false,
    }));
  }

  const isUsernameInvalid = didEdit.username && enteredValues.username === "";
  const isPasswordInvalid = didEdit.password && enteredValues.password === "";

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    trigger({
      username: enteredValues.username,
      password: enteredValues.password,
    });
  }

  return (
    <div className={classes.loginContainer}>
      <img
        className={classes.loginBanner}
        src="/src/assets/meesho/login-header.webp"
        alt="An image showing offers on e-dukaan"
      />
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className={`${classes.input} ${classes.loginField}`}
          placeholder="Enter Username"
          onChange={(e) => handleInputChange(e, "username")}
          onBlur={() => handleOnBlur("username")}
          required
        />
        {isUsernameInvalid && (
          <p className={classes.error}>Please enter a valid username!</p>
        )}
        <input
          type="password"
          name="password"
          className={`${classes.input} ${classes.loginField}`}
          placeholder="Enter Password"
          onChange={(e) => handleInputChange(e, "password")}
          onBlur={() => handleOnBlur("password")}
          required
        />
        {isPasswordInvalid && (
          <p className={classes.error}>Please enter a valid password!</p>
        )}
        <button
          type="submit"
          className={`btn btn--full ${classes.loginField}`}
          disabled={isLoading}
        >
          {isLoading ? "..." : "Login"}
        </button>
        {isError && <p className={classes.error}>Login failed!!</p>}
      </form>
      <p className={classes.terms}>
        By continuing, you agree to e-dukaan’s{" "}
        <span className={classes.highlighted}>Terms & Conditions</span> and{" "}
        <span className={classes.highlighted}>Privacy Policy</span>
      </p>
    </div>
  );
};

export default Login;
