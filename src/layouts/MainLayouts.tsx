import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div>
      <nav>NavBar</nav>
      <div>
        <Outlet />
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayOut;
