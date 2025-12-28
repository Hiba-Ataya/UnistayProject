import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/students/NavbarStudent.css";
import logo from "../../assets/logoo.png";
import heartIcon from "../../assets/heart.png";
import homeIcon from "../../assets/home.png";
import { useDormsStudents } from "../../context/students/DormContext.js";
import { useAuth } from "../../context/AuthContext";

export const NavbarStudent = () => {
  const { favorites } = useDormsStudents();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, user } = useAuth();

  return (
    <nav className="student-navbar">
      <div className="navbar-container">
        <Link to="/student-dashboard" className="navbar-brand">
          <img src={logo} alt="UniStay Logo" className="logo" />
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className={`navbar-right ${menuOpen ? "show" : ""}`}>
          <Link
            to="/student-dashboard"
            className="nav-link icon-link"
            onClick={() => setMenuOpen(false)}
          >
            <img src={homeIcon} alt="Home" className="icon" />
          </Link>

          <Link
            to="/favorites"
            className="nav-link icon-link"
            style={{ position: "relative" }}
            onClick={() => setMenuOpen(false)}
          >
            <img src={heartIcon} alt="Favorites" className="icon" />
            {favorites.length > 0 ? (
              <span className="favorites-count">{favorites.length}</span>
            ) : null}
          </Link>

          {!user ? (
            <Link
              to="/login"
              className="nav-link login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <li
              className="nav-item dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="nav-link dropdown-toggle profile">
                Profile
              </span>

              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  dropdownOpen ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    to="/studentprofile"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    View Profile
                  </Link>
                </li>

                <li>
                  <Link
                    to="/edit-profile"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Edit Profile
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};
