import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { setAuthToken } from "../util/auth";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function authAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  if (mode !== "login" && mode !== "signup") {
    return json({ message: "invalid url" }, { status: 404 });
  }

  const form = await request.formData();
  const authData = {
    email: form.get("email"),
    password: form.get("password"),
  };

  const res = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (res.status === 422 || res.status === 401) {
    return res;
  }

  if (!res.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await res.json();
  const token = resData.token;
  setAuthToken(token);

  return redirect("/");
}
