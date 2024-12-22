import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  window.addEventListener("click", closeDropdown);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="School Logo" />
        <h1 className="logo-text">CampusLink</h1>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={toggleDropdown}>Features</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li><Link to="/feature1">Attendance Management</Link></li>
              <li><Link to="/feature2">Student Records</Link></li>
              <li><Link to="/feature3">Faculty Management</Link></li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <Link to="/help" className="nav-link">Help</Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <Link to="/signup" className="auth-btn">Signup</Link>
        <Link to="/login" className="auth-btn">Login</Link>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
