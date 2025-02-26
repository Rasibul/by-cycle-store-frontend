import { Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer";


const MainLayOut = () => {
  
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
