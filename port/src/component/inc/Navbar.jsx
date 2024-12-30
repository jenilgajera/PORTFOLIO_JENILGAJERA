import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  const handleNavItemClick = () => {
    // Collapse the navbar after clicking a nav item
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar px-4"
      data-aos="fade-left"
    >
      <a className="navbar-brand fw-bold fs-3 text-gradient" href="#">
        JENIL GAJERA
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav gap-3 nav-large" data-aos="fade-up-right">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link nav-hover"
              onClick={handleNavItemClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className="nav-link nav-hover"
              onClick={handleNavItemClick}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Skills"
              className="nav-link nav-hover"
              onClick={handleNavItemClick}
            >
              Skill
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Projects"
              className="nav-link nav-hover"
              onClick={handleNavItemClick}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Service"
              className="nav-link nav-hover"
              onClick={handleNavItemClick}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className="nav-link nav-hover"
              onClick={handleNavItemClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
