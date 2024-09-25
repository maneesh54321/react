import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getAuthToken, isAuthTokenExpired } from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();

  const submit = useSubmit();

  const token = useLoaderData();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      return;
    }

    if (isAuthTokenExpired(token)) {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const timeout = new Date(token.expiration).getTime() - new Date().getTime();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, timeout);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
