import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `font-bold text-sm transition-all duration-300 px-3 py-2 rounded-md ${
      isActive
        ? "text-red-500 border border-red-500"
        : "text-white hover:text-red-400 hover:bg-[#2c3b3c]"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`sticky top-0 left-0 right-0 z-50 bg-[#1A2526] shadow-md transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-opacity-90" : ""
      }`}
    >
      {/* Outer padding same as MainLayout */}
      <div className="px-4 md:px-8">
        {/* Centered max width container */}
        <div className="mx-auto navbar">
          {/* Left: Logo & Dropdown */}
          <div className="navbar-start flex items-center gap-2">
            <div className="dropdown relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-1 sm:p-2"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <FaBars className="text-[20px] text-red-500" />
              </div>
              {menuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm font-bold dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow absolute"
                >
                  <NavLink className={navLinkStyle} to="/" onClick={handleLinkClick}>
                    About Me
                  </NavLink>
                  <NavLink className={navLinkStyle} to="/skills" onClick={handleLinkClick}>
                    Skills
                  </NavLink>
                  <NavLink className={navLinkStyle} to="/projects" onClick={handleLinkClick}>
                    Projects
                  </NavLink>
                  <NavLink className={navLinkStyle} to="/education" onClick={handleLinkClick}>
                    Education
                  </NavLink>
                  <NavLink className={navLinkStyle} to="/contact" onClick={handleLinkClick}>
                    Contact With Me
                  </NavLink>
                </ul>
              )}
            </div>
            <Link to="/" className="btn btn-ghost gap-1 p-0">
              <h3 className="text-white font-bold text-xl sm:text-2xl italic">
                Ra<span className="text-red-500">u</span>f
              </h3>
            </Link>
          </div>

          {/* Right: Nav Links */}
          <div className="navbar-end flex items-center gap-1 sm:gap-4">
            <ul className="hidden lg:flex gap-4 text-white">
              <NavLink className={navLinkStyle} to="/">
                About Me
              </NavLink>
              <NavLink className={navLinkStyle} to="/skills">
                Skills
              </NavLink>
              <NavLink className={navLinkStyle} to="/projects">
                Projects
              </NavLink>
              <NavLink className={navLinkStyle} to="/education">
                Education
              </NavLink>
              <NavLink className={navLinkStyle} to="/contact">
                Contact With Me
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
