import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
