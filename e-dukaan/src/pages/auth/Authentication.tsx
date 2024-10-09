import { Outlet } from "react-router";
import Header from "../../components/header/Header";

const Authentication = () => {
  return (
    <div className="auth-layout">
      <div className="header">
        <Header showCart={false} showProfile={false} />
      </div>
      <Outlet />
    </div>
  );
};

export default Authentication;
