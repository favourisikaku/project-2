import React from "react";
import { Link } from "react-router-dom";

const NavBottom = () => {
  return (
    <nav
      className="navbar fixed-bottom py-4 navbar-bottom"
      style={{ display: "none" }}
    >
      <div className="container-fluid">
        <ul className="d-flex justify-content-between align-items-center list-unstyled mb-0 w-100">
          <li>
            <Link
              to="/"
              className="text-decoration-none bottom-active bottom-active text-white"
            >
              <div className="text-center d-flex align-items-center flex-column">
                <img
                  src="/images/Vector (2).png"
                  className="img-fluid mb-1"
                  alt="icon"
                />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-decoration-none bottom-opacity text-white"
            >
              <div className="text-center d-flex align-items-center flex-column">
                <img
                  src="/images/Vector (8).svg"
                  className="img-fluid mb-1"
                  alt="icon"
                />
                <span>Analytics</span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="text-decoration-none bottom-opacity text-white"
            >
              <div className="text-center d-flex align-items-center flex-column">
                <img
                  src="/images/Vector (4).svg"
                  className="img-fluid mb-1"
                  alt="icon"
                />
                <span>Connect</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-decoration-none bottom-opacity text-white"
            >
              <div className="text-center d-flex align-items-center flex-column">
                <img
                  src="/images/Vector (5).svg"
                  className="img-fluid mb-1"
                  alt="icon"
                />
                <span>Activity</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-decoration-none bottom-opacity text-white"
            >
              <div className="text-center d-flex align-items-center flex-column">
                <img
                  src="/images/Vector (9).svg"
                  className="img-fluid mb-1"
                  alt="icon"
                />
                <span>Dealroom</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBottom;
