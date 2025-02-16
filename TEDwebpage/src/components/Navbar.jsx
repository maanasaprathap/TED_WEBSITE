import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 p-4 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1 className={`text-xl font-bold ${menuOpen ? "hidden" : ""}`}>
            <span className="text-red-600">TEDc</span>
            <span className="text-white">MIT</span>
          </h1>
        </Link>

        {/* Hamburger Icon */}
        <div
          className="menu md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : "hidden"} md:flex md:static md:bg-transparent`}>
  <li>
    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
      About
    </NavLink>
  </li>
  <li>
    <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
      Events
    </NavLink>
  </li>
  <li>
    <NavLink to="/speakers" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
      Speakers
    </NavLink>
  </li>
  {/* <li>
    <NavLink to="/join-us" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
      Join Us
    </NavLink>
  </li> */}
  <li>
    <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
      Gallery
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
      Contact
    </NavLink>
  </li>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
