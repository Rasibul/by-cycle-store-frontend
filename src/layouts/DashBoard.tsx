import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/fetures/store";
import { jwtDecode } from "jwt-decode";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBorderAll, FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits, MdReviews } from "react-icons/md";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri"; // Import the logout icon
import { logout } from "../redux/fetures/auth/authSlice";


const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<{ id: string; role: string } | null>(null);
  const user = useSelector((state: RootState) => state.auth.user) as { token: string } | null;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = jwtDecode(user?.token);
        setUserInfo({ id: decoded.id, role: decoded.role });
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [user]);

  const isAdmin = userInfo?.role === "admin";

  const handleLogOut = () => {
    dispatch(logout()); // Dispatch the logout action to update the state
    localStorage.removeItem("token"); // Remove the token from local storage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className={`flex ${open && "flex-col"} flex-row sm:flex-row `}>
      <div
        className={`w-full ${
          open
            ? "max-[639.5px]:w-full sm:w-[35%] md:w-[40%] lg:w-[20%]"
            : "max-[639.5px]:w-0  sm:w-[10%] md:w-[10%] lg:w-[5%]"
        }  duration-300 md:min-h-screen bg-blue-600 text-white mt-0  sm:fixed sm:z-[300] sm:min-h-screen sm:max-h-screen sm:overflow-hidden sm:overflow-y-auto custom-scrollbar-dashboard-nav`}
      >
        <div className="sticky top-0 z-[900]">
          <div
            onClick={() => setOpen(!open)}
            className={`hidden sm:flex sm:right-[3px] top-4 cursor-pointer justify-center items-center absolute z-[900] `}
          >
            {!open ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
              </svg>
            )}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`sm:hidden ${
              open ? "right-[13px]" : "left-[10px] "
            }  top-2 cursor-pointer p-1 bg-blue-500 rounded-lg absolute z-[900] border border-white/80`}
          >
            {!open ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
              </svg>
            )}
          </div>
        </div>
        <div>
          <ul
            className={`h-full text-black w-full ${
              !open && "max-[639.5px]:-ml-24"
            } mt-20 ${
              !open && "w-0 sm:w-full h-0 mt-0"
            } relative navItem-dashboard`}
          >
            {/* admin panel */}
            {isAdmin ? (
              <div className="flex justify-center flex-col space-y-3 ">
                {/* admin-profile route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="adminProfile"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <CgProfile className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"></CgProfile>
                        Admin Profile
                      </span>
                    ) : (
                      <CgProfile className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"></CgProfile>
                    )}
                  </NavLink>
                </li>
                {/* products-panel route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="products-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <MdProductionQuantityLimits className="w-16 sm:w-6 text-[40px] ml-2" />
                        Product Management
                      </span>
                    ) : (
                      <MdProductionQuantityLimits className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]" />
                    )}
                  </NavLink>
                </li>
                {/* order-panel route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="orders-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <FaBorderAll className="w-16 sm:w-6 text-[40px] ml-2" />
                        Order Management
                      </span>
                    ) : (
                      <FaBorderAll className="w-16 sm:w-6 text-[40px] ml-2 relative z-[90]" />
                    )}
                  </NavLink>
                </li>
                {/* users-panel route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="users-panel"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <FaUsers
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                        ></FaUsers>
                        Manage Users
                      </span>
                    ) : (
                      <FaUsers
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                      ></FaUsers>
                    )}
                  </NavLink>
                </li>
              </div>
            ) : (
              // user panel
              <div className="flex justify-center flex-col space-y-3">
                {/* myProfile route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="myProfile"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <CgProfile
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></CgProfile>
                        My Profile
                      </span>
                    ) : (
                      <CgProfile
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""
                      ></CgProfile>
                    )}
                  </NavLink>
                </li>
                {/* my orders route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="myOrders"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <IoCartOutline
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></IoCartOutline>
                        My Cart
                      </span>
                    ) : (
                      <IoCartOutline
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""
                      ></IoCartOutline>
                    )}
                  </NavLink>
                </li>
                {/* myReview route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="myReviews"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <MdReviews
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></MdReviews>
                        My Reviews
                      </span>
                    ) : (
                      <MdReviews
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""
                      ></MdReviews>
                    )}
                  </NavLink>
                </li>
                {/* myDoctor's route */}
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="myDoctors"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <FaUserDoctor
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></FaUserDoctor>
                        My Doctor's
                      </span>
                    ) : (
                      <FaUserDoctor
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""
                      ></FaUserDoctor>
                    )}
                  </NavLink>
                </li>
              </div>
            )}
            {/* devider  */}
            <div className="border border-white/20 my-4 h-1 bg-blue-500"></div>
            <>
              <ul className="text-black bg-blue-600 py-3 h-full space-y-3">
                {/* home route */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-semibold flex justify-start items-center gap-1 pl-2 bg-white text-blue-500 w-[96.2%] max-[639.5px]:mx-auto sm:ml-[4%] py-1 max-[639.5px]:rounded-[30px] sm:rounded-l-[30px] relative custom h-[45px] activated"
                        : isPending
                        ? ""
                        : "font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                    }
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <IoHomeOutline
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></IoHomeOutline>
                        Home
                      </span>
                    ) : (
                      <IoHomeOutline
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""
                      ></IoHomeOutline>
                    )}
                  </NavLink>
                </li>
                {/* Logout button */}
                <li>
                  <button
                    onClick={handleLogOut}
                    className="font-semibold flex justify-start items-center gap-1 pl-2 w-[96%] ml-[4%] py-2 text-[#ffffff] rounded-[30px] h-[45px] initial-style hover:scale-110 transition duration-300 ease-linear"
                  >
                    {open ? (
                      <span className="flex justify-center items-center gap-2">
                        {" "}
                        <RiLogoutCircleLine
                          // src={overviewIcon}
                          className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear"
                          // alt=""
                        ></RiLogoutCircleLine>
                        LogOut
                      </span>
                    ) : (
                      <RiLogoutCircleLine
                        // src={overviewIcon}
                        className="w-16 sm:w-6 text-[40px] ml-2 nav-icon transition-colors duration-[250] ease-linear relative z-[90]"
                        // alt=""
                      ></RiLogoutCircleLine>
                    )}
                  </button>
                </li>
              </ul>
            </>
          </ul>
        </div>
      </div>

      {/* Outlet here - showing all children */}
      <div
        className={`w-[100%] ${
          open
            ? "sm:pl-[37%] md:pl-[42%] lg:pl-[20%] xl:pl-[22%] 2xl:pl-[22%]"
            : "sm:pl-[10%] lg:pl-[5%]"
        } mx-auto relative overflow-hidden bg-blue-50 min-h-screen`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;