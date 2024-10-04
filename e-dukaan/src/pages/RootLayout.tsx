import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const RootLayout = () => {
  return (
    <header>
      <div className="header">
        <Header />
      </div>
      <div className="sub-header">
        <SubHeader />
      </div>
    </header>
  );
};

export default RootLayout;
