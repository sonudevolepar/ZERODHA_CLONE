import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">

        {/* Zerodha Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/media/image/logo.svg"
            alt="Zerodha"
            style={{ width: "130px" }}
          />
        </a>

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

            <li className="nav-item">
              <a className="nav-link px-3" href="/signup">
                Signup
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="/products">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="/pricing">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="/support">
                Support
              </a>
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