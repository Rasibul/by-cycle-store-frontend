import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/cycle.jpg";
const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const navbarLinks = [
    { to: "/", label: "All Bicycles" },
    { to: "/about", label: "About Us" },
    { to: "/checkout", label: "Checkout" },
  ];

  return (
    <header className="max-w-[1440px] mx-auto px-6 py-4  ">
      <div className="flex items-center justify-between">
        {/* Store Name */}
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

        {/* Login Button */}
        <div className="hidden lg:block">
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </Link>
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
              <Link to="/login" onClick={() => setIsToggleOpen(false)}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
