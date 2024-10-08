import { Outlet } from "react-router";
import Header from "../components/header/Header";
import SubHeader from "../components/header/SubHeader";

const RootLayout = () => {
  return (
    <>
      <header className="header-container">
        <div className="header">
          <Header />
        </div>
        <div className="sub-header">
          <SubHeader />
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
