import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import { checkTokenExpiration } from "../utility/utility";

const MainLayOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkTokenExpiration()) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      {" "}
      <div>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
