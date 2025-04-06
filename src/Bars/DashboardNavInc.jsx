import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const DashboardNavInc = ({ SideBarVisibility }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <div className=" d-lg-block d-none py-3 border-bottom  border-dark">
        <div className="container d-flex align-items-center justify-content-between lms-heading-title pt-4">
          <div className="d-flex align-items-center">
            {/* <i
              className="bi bi-list bi-2 text-dark cursor-pointer arrow-box cursor-pointer toggle-side"
              onClick={SideBarVisibility}
            ></i> */}

            <div>
              {pathname === "/" ? (
                <h5 className="mb-1 ">Profile</h5>
              ) : (
                <h5 className="mb-1 ">Analytics</h5>
              )}
              {/* <p className="text-gray-1 ft-sm mb-0">Welcome back, Favour!</p> */}
            </div>
          </div>

          <div
            className="d-lg-flex align-items-center d-none"
            style={{ gap: "20px" }}
          >
            <h5 className="mb-1 " style={{ cursor: "pointer" }}>
              Activity
            </h5>
            <h5 className="mb-1 " style={{ cursor: "pointer" }}>
              Logout
            </h5>

            {/* <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-link no-caret d-flex align-items-center no-caret card-avatar">
                  <div className="avatar-sm rounded-circle flex-shrink-0 me-2">
                    <img
                      src="/images/download.png"
                      className="img-fluid object-fit-cover object-position-center w-100 h-100"
                    />
                  </div>

                  <div className="d-flex flex-column me-2">
                    <p className="text-truncate d-lg-inline-block d-none text-medium text-black mb-0">
                      Hello, Favour
                    </p>
                    <p className="text-gray-1 ft-sm mb-0">Admin</p>
                  </div>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm mb-0">
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    Log out
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavInc;

<nav
  className="flex-none navbar navbar-vertical navbar-expand-lg show vh-lg-100 bg-color-10 px-0 py-2 navbar-dark"
  id="sidebar"
>
  <div className="flex-lg-column align-items-lg-start d-flex align-items-center justify-content-between w-100">
    <div className="d-flex align-items-center  mt-3">
      <div>
        <Link className="navbar-brand me-0 ps-lg-4 text-bold" to="/">
          <img
            src="/images/Vertx.svg"
            className="img-fluid h-icon-50  ms-3  py-1 rounded-circle navbar-circle-mobile-image"
            alt="logo"
            style={{
              backgroundColor: "white",
              minWidth: "30px",
              minHeight: "36px",
              paddingRight: "5px",
              paddingLeft: "5px",
            }}
          />
          <span
            className="img-fluid h-icon-50  ms-3  py-1 rounded-circle navbar-circle-mobile"
            style={{
              backgroundColor: "white",
              minWidth: "30px",
              minHeight: "36px",
              paddingRight: "6px",
              paddingLeft: "5px",
              display: "none",
            }}
          ></span>
        </Link>
      </div>
      <h5 className="mt-3 ms-4 logo-header-text">Vertxlabs,Inc</h5>
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
        }}
      />
    </div>

    <div className="navbar-user d-lg-none">
      <a
        className="nav-link no-caret d-flex align-items-center no-caret dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar-sm rounded-circle me-2 mt-2">
          <img src="/images/Vector (10).svg" className="img-fluid " />
        </div>
      </a>
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
            <Link
              className="nav-link 
                    d-flex align-items-center"
            >
              <img
                src="/images/Rectangle.svg"
                className="img-fluid me-2 rounded-circle"
                alt="icon"
                style={{
                  backgroundColor: "white",
                  minWidth: "30px",
                  minHeight: "36px",
                }}
              />{" "}
              <span className="ms-3"> Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link 
                    d-flex align-items-center"
            >
              <img
                src="/images/Rectangle.svg"
                className="img-fluid me-2 rounded-circle"
                alt="icon"
                style={{
                  backgroundColor: "white",
                  minWidth: "30px",
                  minHeight: "36px",
                }}
              />{" "}
              <span className="ms-3">Analytics </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link 
                    d-flex align-items-center"
            >
              <img
                src="/images/Rectangle.svg"
                className="img-fluid me-2 rounded-circle"
                alt="icon"
                style={{
                  backgroundColor: "white",
                  minWidth: "30px",
                  minHeight: "36px",
                }}
              />{" "}
              <span className="ms-3">Connect </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link 
                    d-flex align-items-center"
            >
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
              />{" "}
              <span className="ms-3">Dealroom </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link 
                    d-flex align-items-center"
            >
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
              />{" "}
              <span className="ms-3">Profile </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link 
                    d-flex align-items-center"
            >
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
              />{" "}
              <span className="ms-3">Settings </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>;
