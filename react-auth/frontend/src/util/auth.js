import { redirect } from "react-router-dom";

export function setAuthToken(token) {
  const now = new Date();
  now.setHours(now.getHours() + 1);
  //   now.setSeconds(now.getSeconds() + 30);
  localStorage.setItem(
    "authToken",
    JSON.stringify({
      token: token,
      expiration: now.toISOString(),
    })
  );
}

export function isAuthTokenExpired(authToken) {
  const expirationTime = new Date(authToken.expiration).getTime();
  const nowTime = new Date().getTime();
  return nowTime - expirationTime >= 0;
}

export function getAuthToken() {
  const authTokenString = localStorage.getItem("authToken");
  if (!authTokenString) {
    return null;
  }
  const authToken = JSON.parse(authTokenString);
  return authToken;
}

export function clearAuthToken() {
  localStorage.removeItem("authToken");
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}
