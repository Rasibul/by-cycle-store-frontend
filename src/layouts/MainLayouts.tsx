import { Outlet } from "react-router-dom";
import NavBar from "../header/navbar/NavBar";

const MainLayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Outlet />
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayOut;
