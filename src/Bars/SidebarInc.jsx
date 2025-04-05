import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const SidebarInc = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav
      className="flex-none navbar navbar-vertical navbar-expand-lg show vh-lg-100 bg-color-10 px-0 py-2 navbar-dark"
      id="sidebar"
    >
      <div className="flex-lg-column align-items-lg-start d-flex align-items-center justify-content-between w-100">
        <div className="d-flex align-items-center justify-content-between mt-3 w-100 px-3">
          {/* Left Logo */}
          <div>
            <Link className="navbar-brand me-0 ps-lg-4 text-bold" to="/">
              <img
                src="/images/Vertx.svg"
                className="img-fluid h-icon-50 py-1  rounded-circle navbar-circle-mobile-image"
                alt="logo"
                style={{
                  backgroundColor: "white",
                  minWidth: "30px",
                  minHeight: "36px",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                }}
              />

              <img
                src="/images/Rectangle.svg"
                className="img-fluid me-2 rounded-circle sidebar-logo-white-image"
                alt="icon"
                style={{
                  backgroundColor: "white",
                  minWidth: "30px",
                  minHeight: "36px",
                  display: "none",
                }}
              />
            </Link>
          </div>

          {/* Center Text */}
          <div>
            <h5
              className="mt-3 logo-header-text "
              style={{ marginLeft: "-15px" }}
            >
              Vertxlabs, Inc
            </h5>
            <img
              src="/images/Vertx.svg"
              className="img-fluid h-icon-50  ms-3  vertx-logo-mobile"
              alt="logo"
              style={{
                minWidth: "30px",
                minHeight: "36px",
                paddingRight: "5px",
                paddingLeft: "5px",
                display: "none",
                marginLeft: "-150px",
              }}
            />
          </div>

          {/* Right Logo (Mobile) */}
          <div>
            <img
              src="/images/Vector (10).svg"
              className="img-fluid pe-2 right-sidebar-logo"
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div
          className="offcanvas offcanvas-end bg-color-10"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header justify-content-between align-items-center">
            <div className="offcanvas-title">
              <Link className="navbar-brand me-0 text-bold" to="/">
                <img
                  src="/images/download.png"
                  className="img-fluid h-icon-50 rounded-circle"
                  alt="Logo"
                />
              </Link>
            </div>

            <i
              className="bi bi-x-lg"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </div>

          <div className="offcanvas-body flex-column custom-offcanvas-h">
            <ul className="navbar-nav flex-column sidebar-list m-4 pt-1">
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center">
                  <img
                    src="/images/Rectangle.svg"
                    className="img-fluid me-2 rounded-circle"
                    alt="icon"
                    style={{
                      backgroundColor: "white",
                      minWidth: "30px",
                      minHeight: "36px",
                    }}
                  />
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center">
                  <img
                    src="/images/Rectangle.svg"
                    className="img-fluid me-2 rounded-circle"
                    alt="icon"
                    style={{
                      backgroundColor: "white",
                      minWidth: "30px",
                      minHeight: "36px",
                    }}
                  />
                  <span className="ms-3">Analytics</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center">
                  <img
                    src="/images/Rectangle.svg"
                    className="img-fluid me-2 rounded-circle"
                    alt="icon"
                    style={{
                      backgroundColor: "white",
                      minWidth: "30px",
                      minHeight: "36px",
                    }}
                  />
                  <span className="ms-3">Connect</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center">
                  <img
                    src="/images/Rectangle.svg"
                    className="img-fluid me-2 rounded-circle"
                    alt="icon"
                    style={{
                      backgroundColor: "white",
                      minWidth: "30px",
                      minHeight: "36px",
                      visibility: "hidden",
                    }}
                  />
                  <span className="ms-3">Dealroom</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center">
                  <img
                    src="/images/Rectangle.svg"
                    className="img-fluid me-2 rounded-circle"
                    alt="icon"
                    style={{
                      backgroundColor: "white",
                      minWidth: "30px",
                      minHeight: "36px",
                      visibility: "hidden",
                    }}
                  />
                  <span className="ms-3">Profile</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center">
                  <img
                    src="/images/Rectangle.svg"
                    className="img-fluid me-2 rounded-circle"
                    alt="icon"
                    style={{
                      backgroundColor: "white",
                      minWidth: "30px",
                      minHeight: "36px",
                      visibility: "hidden",
                    }}
                  />
                  <span className="ms-3">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarInc;
