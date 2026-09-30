import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">

        {/* Zerodha Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/image/logo.svg"
            alt="Zerodha"
            style={{ width: "130px" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">

            {/* Signup */}
            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/signup"
              >
                Signup
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/about"
              >
                About
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/product"
              >
                Products
              </Link>
            </li>

            {/* Pricing */}
            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>

            {/* Support */}
            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/support"
              >
                Support
              </Link>
            </li>

            {/* Hamburger */}
            <li className="nav-item ms-lg-3">
              <button
                className="btn p-0 border-0"
                type="button"
                style={{ fontSize: "22px" }}
              >
                ☰
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;