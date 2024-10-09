import { Outlet } from "react-router";
import Header from "../../components/header/Header";

const Authentication = () => {
  return (
    <div className="auth-layout">
      <div className="header">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Authentication;
