import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/fetures/auth/authSlice"; // Import auth actions
import logo from "../../assets/cycle.jpg";
import { RootState } from "../../redux/fetures/store";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get user state from Redux
  const { user } = useSelector((state: RootState) => state.auth);

  // Handle logout function
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  const navbarLinks = [
    { to: "/all-bicycles", label: "All Bicycles" },
    { to: "/about-us", label: "About Us" },
    { to: "/checkout", label: "Checkout" },
  ];

  return (
    <header className="max-w-[1440px] mx-auto p-4 ">
      <div className="flex items-center justify-between">
        {/* Store Logo */}
        <Link to="/" className="text-black font-bold text-xl">
          <img className="w-20 h-20" src={logo} alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-6">
            {navbarLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-black hover:text-blue-500 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:block">
          {user ? (
            // Show Logout button when user is logged in
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Logout
            </button>
          ) : (
            // Show Login button if user is not logged in
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setIsToggleOpen(!isToggleOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isToggleOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col items-center gap-4">
            {navbarLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-black hover:text-blue-500"
                  onClick={() => setIsToggleOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" onClick={() => setIsToggleOpen(false)}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
