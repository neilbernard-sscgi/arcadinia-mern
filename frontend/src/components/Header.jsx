"use client";

import { Link, useLocation } from "react-router-dom";
import { Building } from "lucide-react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navItems = [
    { name: "WHO WE ARE", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "PUBLICATIONS", path: "/publications" },
    { name: "LOG IN", path: "/login", tooltip: "For Admin Only" },
  ];

  const isActive = (path) => {
    return (
      location.pathname === path || (location.pathname === "/" && path === "/")
    );
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="/assets/logo2.png" alt="logo" className="logo-icon" />
          <span>Arcadia</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""} ${
                item.tooltip ? "nav-link-tooltip" : ""
              }`}
              data-tooltip={item.tooltip}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-nav-link ${
                isActive(item.path) ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {item.name} {item.tooltip && <small>({item.tooltip})</small>}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
