import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <div className="navbar-container">
      {/* Seamless scrolling name */}
      <div className="scroll-container">
        <Link to="/" className="scroll-track-link">
          <div className="scroll-track">
            {Array(50)
              .fill(null)
              .map((_, i) => (
                <span key={i}>NADISHA GAUTAM *</span>
              ))}
          </div>
        </Link>
      </div>

      <nav className="navbar secondary-navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/creativedirection"
              className={`nav-link ${
                location.pathname === "/creativedirection" ? "active" : ""
              }`}
            >
              CREATIVE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/graphicdesign"
              className={`nav-link ${
                location.pathname === "/graphicdesign" ? "active" : ""
              }`}
            >
              DESIGN
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/softwaredevelopment"
              className={`nav-link ${
                location.pathname === "/softwaredevelopment" ? "active" : ""
              }`}
            >
              SOFTWARE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutme"
              className={`nav-link ${
                location.pathname === "/aboutme" ? "active" : ""
              }`}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
