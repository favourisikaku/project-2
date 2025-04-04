import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const DashboardNavInc = ({ SideBarVisibility }) => {
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
              <h5 className="mb-1 ">Analytics</h5>
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
