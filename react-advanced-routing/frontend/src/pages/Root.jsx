import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
