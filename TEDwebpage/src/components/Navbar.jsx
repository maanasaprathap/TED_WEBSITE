import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToAbout = () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
};

  return (
    <div>
      <nav className="bg-black p-4 text-white w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h1 className={`text-xl font-bold ${menuOpen ? "hidden" : ""}`}>
              <span className="text-red-600">TEDc </span>
              <span className="text-white">MIT</span>
            </h1>
          </Link>

          {/* Hamburger Icon */}
          <div
            className="menu md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>

          {/* Navigation Links */}
          <ul
            className={`nav-links ${
              menuOpen ? "open" : "hidden"
            } md:flex md:static md:bg-transparent`}
          >
            <li>
  <NavLink
    to="/"
    onClick={() => {
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    }}
  >
    Home
  </NavLink>
</li>
           <li>
  <button onClick={scrollToAbout} className="nav-button">
    About
  </button>
</li>
            <li>
              <NavLink to="/events" onClick={() => setMenuOpen(false)}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/speakers" onClick={() => setMenuOpen(false)}>
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Routed content appears here */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;