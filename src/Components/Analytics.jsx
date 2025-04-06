import React, { useContext, useEffect, useRef, useState } from "react";
import DashboardNavInc from "../Bars/DashboardNavInc";

import SidebarInc from "../Bars/SidebarInc";
import NavBottom from "../Bars/NavBottom";

const Analytics = () => {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="main-admin-container">
      <div className="d-flex flex-column flex-lg-row ">
        <SidebarInc />
        <div className="flex-lg-fill overflow-auto vstack vh-lg-100 position-relative">
          <DashboardNavInc />
          <main className="admin-content ">
            <div className="container mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <ul
                      className="nav custom-pills nav-pills mb-0"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="true"
                        >
                          Overview
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-password-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-password"
                          type="button"
                          role="tab"
                          aria-controls="pills-password"
                          aria-selected="false"
                        >
                          Portfolio
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-password-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-password"
                          type="button"
                          role="tab"
                          aria-controls="pills-password"
                          aria-selected="false"
                        >
                          Experience
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-password-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-password"
                          type="button"
                          role="tab"
                          aria-controls="pills-password"
                          aria-selected="false"
                        >
                          Media
                        </button>
                      </li>
                    </ul>

                    <h5
                      style={{ cursor: "pointer" }}
                      className="dashboard-more"
                    >
                      More
                    </h5>
                  </div>

                  <hr />

                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex="0"
                    >
                      <div
                        className="container mt-4 "
                        style={{ paddingBottom: "100px" }}
                      >
                        <div className="row">
                          <div>
                            <h2 className="pb-2">Overview</h2>
                          </div>

                          <div className="col-lg-12 mb-4">
                            <div className="card h-100 border-dark">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center  flex-wrap overflow-auto py-3 pb-4 ">
                                  <div className="me-lg-0 me-4 mb-lg-0 mb-3">
                                    <div className="d-flex align-items-center gap-15 px-5 overview-section-1-header">
                                      <div className="pe-5">
                                        <img
                                          className="img-fluid object-fit-cover object-position-center w-100 h-100"
                                          src="/images/Vector.svg"
                                        />
                                      </div>
                                      <div>
                                        <div className="d-flex justify-content-between ">
                                          <h1>Mr A </h1>
                                          <span className="mt-1">
                                            <img src="/images/Twitter_Verified_Badge.svg" />
                                          </span>
                                        </div>
                                        <h5
                                          className="pb-3"
                                          style={{ fontWeight: "200" }}
                                        >
                                          Co-Founder & CEO @Vertx{" "}
                                          <span className="ps-2">
                                            <img
                                              className="img-fluid px-1 rounded-1 py-1"
                                              style={{
                                                backgroundColor: "white",
                                                minWidth: "20px",
                                                minHeight: "20px",
                                              }}
                                              src="/images/Vertx.svg"
                                            />
                                          </span>
                                        </h5>
                                        <div className="entrepreneur-header">
                                          <span
                                            className="border border-2 ps-1 pe-3 rounded-2"
                                            style={{
                                              backgroundColor: "white",
                                              color: "black",
                                            }}
                                          >
                                            Entrepreneur
                                          </span>
                                          <div className="pt-5 logos">
                                            <img
                                              className="img-fluid"
                                              src="/images/linked.svg"
                                            />

                                            <img
                                              className="img-fluid px-3"
                                              src="/images/linkedin.svg"
                                            />

                                            <img
                                              className="img-fluid"
                                              style={{
                                                height: "20px",
                                                minWidth: "10px",
                                                minHeight: "20px",
                                              }}
                                              src="/images/download.png"
                                            />
                                          </div>
                                        </div>
                                        {/* <img src="/images/download.png" /> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 mb-4">
                            <div className="card h-100 border-dark">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center border-0 flex-wrap overflow-auto py-3 pb-4">
                                  <div className="me-lg-0 me-4 mb-lg-0 mb-3 w-100">
                                    <div className="d-flex align-items-center gap-15 section-2-header w-100">
                                      <div className="w-100">
                                        <h3>Founded Companies</h3>
                                        <h1
                                          className="pt-3 pb-3"
                                          style={{ fontSize: "40px" }}
                                        >
                                          02
                                        </h1>

                                        <div className="d-flex justify-content-between align-items-start w-100">
                                          <div className="d-flex align-items-start">
                                            <div className="me-3">
                                              <img
                                                className="img-fluid px-1 rounded-1 py-1"
                                                style={{
                                                  backgroundColor: "white",
                                                  minWidth: "30px",
                                                  minHeight: "36px",
                                                }}
                                                src="/images/Vertx.svg"
                                              />
                                            </div>
                                            <div>
                                              <h5
                                                style={{
                                                  margin: 0,
                                                  padding: 0,
                                                }}
                                              >
                                                Vertx{" "}
                                                <span
                                                  style={{
                                                    fontSize: "12px",
                                                    backgroundColor: "#579560",
                                                    color: "#000000",
                                                    fontWeight: "200",
                                                  }}
                                                  className="border border-0 px-2 rounded-1 ms-3"
                                                >
                                                  CEO
                                                </span>
                                              </h5>
                                              <p style={{ fontWeight: "200" }}>
                                                Founded in 2025. in{" "}
                                                <strong>Fintech</strong>
                                              </p>
                                            </div>
                                          </div>
                                          <a
                                            style={{
                                              cursor: "pointer",
                                              fontWeight: "200",
                                            }}
                                          >
                                            View profile
                                          </a>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-start mt-3 w-100">
                                          <div className="d-flex align-items-start">
                                            <div className="me-3">
                                              <img
                                                className="img-fluid px-1 rounded-1 py-1"
                                                style={{
                                                  backgroundColor: "white",
                                                  minWidth: "30px",
                                                  minHeight: "36px",
                                                }}
                                                src="/images/Rectangle.svg"
                                              />
                                            </div>
                                            <div>
                                              <h5
                                                style={{
                                                  margin: 0,
                                                  padding: 0,
                                                }}
                                                className="mb-2"
                                              >
                                                Company{" "}
                                                <span
                                                  style={{
                                                    fontSize: "12px",
                                                    backgroundColor: "#B1BDEB",
                                                    color: "#000000",
                                                    fontWeight: "500",
                                                  }}
                                                  className="border border-0 px-2 rounded-1 ms-1"
                                                >
                                                  PROPRIETOR
                                                </span>
                                              </h5>
                                              <p
                                                style={{
                                                  fontWeight: "400",
                                                  lineHeight: "18px",
                                                }}
                                              >
                                                Details/Information <br />
                                                like acquired / exit / m&a
                                              </p>
                                            </div>
                                          </div>
                                          <a
                                            style={{
                                              cursor: "pointer",
                                              fontWeight: "200",
                                            }}
                                          >
                                            View profile
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 mb-4">
                            <div className="card h-100 border-dark">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center border-0 flex-wrap overflow-auto py-3 pb-4">
                                  <div className="me-lg-0 me-4 mb-lg-0 mb-3 w-100">
                                    <div className="d-flex align-items-center gap-15 section-3-header w-100">
                                      <div className="w-100">
                                        <h3>Experience</h3>
                                        <h1
                                          className="pt-3 pb-3"
                                          style={{ fontSize: "40px" }}
                                        >
                                          03
                                        </h1>

                                        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                          <div className="d-flex align-items-center">
                                            <div className="me-3">
                                              <img
                                                className="img-fluid px-1 rounded-1 py-1"
                                                style={{
                                                  backgroundColor: "white",
                                                  minWidth: "30px",
                                                  minHeight: "36px",
                                                }}
                                                src="/images/Rectangle.svg"
                                              />
                                            </div>
                                            <div>
                                              <h5
                                                style={{
                                                  margin: 0,
                                                  padding: 0,
                                                }}
                                              >
                                                Company 1
                                              </h5>
                                            </div>
                                          </div>
                                          <a
                                            style={{
                                              cursor: "pointer",
                                              fontWeight: "200",
                                            }}
                                          >
                                            View profile
                                          </a>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center py-4 w-100">
                                          <div className="d-flex align-items-center">
                                            <div className="me-3">
                                              <img
                                                className="img-fluid px-1 rounded-1 py-1"
                                                style={{
                                                  backgroundColor: "white",
                                                  minWidth: "30px",
                                                  minHeight: "36px",
                                                }}
                                                src="/images/Rectangle.svg"
                                              />
                                            </div>
                                            <div>
                                              <h5
                                                style={{
                                                  margin: 0,
                                                  padding: 0,
                                                }}
                                              >
                                                Company 2
                                              </h5>
                                            </div>
                                          </div>
                                          <a
                                            style={{
                                              cursor: "pointer",
                                              fontWeight: "200",
                                            }}
                                          >
                                            View profile
                                          </a>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center w-100">
                                          <div className="d-flex align-items-center">
                                            <div className="me-3">
                                              <img
                                                className="img-fluid px-1 rounded-1 py-1"
                                                style={{
                                                  backgroundColor: "white",
                                                  minWidth: "30px",
                                                  minHeight: "36px",
                                                }}
                                                src="/images/Rectangle.svg"
                                              />
                                            </div>
                                            <div>
                                              <h5
                                                style={{
                                                  margin: 0,
                                                  padding: 0,
                                                }}
                                              >
                                                Company 3
                                              </h5>
                                            </div>
                                          </div>
                                          <a
                                            style={{
                                              cursor: "pointer",
                                              fontWeight: "200",
                                            }}
                                          >
                                            View profile
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div
                      className="tab-pane fade"
                      id="pills-password"
                      role="tabpanel"
                      aria-labelledby="pills-password-tab"
                      tabIndex="0"
                    ></div> */}
                  </div>
                </div>
              </div>
            </div>
          </main>

          <NavBottom />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
