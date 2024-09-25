import { redirect } from "react-router-dom";
import { clearAuthToken } from "../util/auth";

export function action() {
  clearAuthToken();
  return redirect("/");
}
