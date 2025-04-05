import React, { useContext, useEffect, useRef, useState } from "react";
import DashboardNavInc from "../Bars/DashboardNavInc";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { Chart } from "chart.js/auto";
import { ClipLoader } from "react-spinners";
import SidebarInc from "../Bars/SidebarInc";

const Dashboard = () => {
  const { toggleSideBar, SideBarVisibility } = useContext(AppContext);
  const chartRef = useRef(null);

  const [dataFetched, setDataFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([]);
        setDataFetched(true);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (dataFetched && chartRef.current) {
      const ctx4 = document.getElementById("analytics-o").getContext("2d");

      new Chart(ctx4, {
        type: "line",
        data: {
          labels: [
            "Mar 1",
            "Mar 5",
            "Mar 10",
            "Mar 15",
            "Mar 20",
            "Mar 25",
            "Mar 30",
          ],
          datasets: [
            {
              label: "Campaign A", // Label for the first line
              data: [
                0, 70, 55, 40, 80, 50, 40, 55, 35, 45, 140, 45, 60, 40, 65, 40,
                80, 73, 90, 140,
              ],
              borderColor: "white",
              backgroundColor: "rgba(239, 243, 255, 0.25)",
              // fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          //tension: 0.3,
          plugins: {
            legend: {
              display: false,
              position: "top", // Position legend at the top
              labels: {
                boxWidth: 16,
                boxHeight: 16,
                borderRadius: 4,
                padding: 20,
              },
            },
          },
          scales: {
            x: {
              display: true,
              // title: {
              //   display: true,
              //   text: "Months",
              // },
            },
            y: {
              display: true,
              beginAtZero: true,
              // title: {
              //   display: true,
              //   text: "Performance", // Y-axis label
              // },
            },
          },
        },
      });

      // Cleanup function to destroy chart on component unmount
      return () => {
        if (chartRef.current) {
          const chartInstance = Chart.getChart(chartRef.current);
          if (chartInstance) {
            chartInstance.destroy();
          }
        }
      };
    }
  }, [dataFetched]);

  return (
    <div className="main-admin-container">
      <div className="d-flex flex-column flex-lg-row ">
        {toggleSideBar && <SidebarInc />}
        <div className="flex-lg-fill overflow-auto vstack vh-lg-100 position-relative">
          {<DashboardNavInc SideBarVisibility={SideBarVisibility} />}
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
                          Demographics
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
                      <div className="container mt-4">
                        <div className="row">
                          <div>
                            <h2 className="pb-2">Overview</h2>
                          </div>

                          <div className="col-lg-7 mb-4">
                            <div className="card border-dark h-100">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center border-0 flex-wrap overflow-auto py-3 pb-4 ">
                                  <div className="me-lg-0 me-4 mb-lg-0 mb-3">
                                    <div className="d-flex align-items-center gap-15">
                                      <select
                                        className="form-select border border-0"
                                        style={{
                                          backgroundColor: "black",
                                          color: "white",
                                        }}
                                      >
                                        <option> Visitors</option>
                                        {/* <option>Last 30 Days</option> */}
                                      </select>{" "}
                                      <select
                                        className="form-select border border-0 "
                                        style={{
                                          backgroundColor: "black",
                                          color: "white",
                                          minWidth: "110px",
                                        }}
                                      >
                                        <option>Last 30 Days</option>
                                        <option>Last 7 Days</option>
                                      </select>
                                      <select
                                        className="form-select  border border-0"
                                        style={{
                                          backgroundColor: "black",
                                          color: "white",
                                        }}
                                      >
                                        <option>+ Add</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-3">
                                  <div className="chart-height mb-4">
                                    <canvas
                                      id="analytics-o"
                                      ref={chartRef}
                                    ></canvas>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-5 mb-4">
                            <div className="card h-100 border-dark">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center border-0 flex-nowrap overflow-auto py-3 pb-4 ">
                                  <div className="me-lg-0 me-4">
                                    <div className="mb-4">
                                      <h4 className="text-medium  mb-0 me-2">
                                        Insights
                                      </h4>
                                    </div>
                                    <div className="mb-4">
                                      <h5 className="mb-1">Founders</h5>{" "}
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div className="me-4">
                                          <h1 className="mb-0">7.4k</h1>
                                        </div>
                                        <div
                                          className="d-flex"
                                          style={{ flexDirection: "column" }}
                                        >
                                          <span style={{ color: "#01754F" }}>
                                            +000%
                                          </span>
                                          <span style={{ color: "#555555" }}>
                                            (000)
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <h5 className="mb-1">Investors</h5>{" "}
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div className="me-4">
                                          <h1 className="mb-0">6.09k</h1>
                                        </div>
                                        <div
                                          className="d-flex"
                                          style={{ flexDirection: "column" }}
                                        >
                                          <span style={{ color: "#01754F" }}>
                                            +000%
                                          </span>
                                          <span style={{ color: "#555555" }}>
                                            (000)
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="border-0  text-end pt-4"
                                  style={{ cursor: "pointer" }}
                                >
                                  <h6>View detailed insights &rarr;</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="container mt-4">
                        <div className="row">
                          <div className="col-lg-12 mb-4">
                            <div className="card border-dark h-100 px-0">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center border-0 flex-wrap overflow-auto px-4">
                                  <div className="me-lg-0 me-4 mb-lg-0 mb-3">
                                    <h4 className="text-medium  mb-0">
                                      Demographics
                                    </h4>
                                  </div>
                                </div>

                                <hr />

                                <div className="row">
                                  <div className="col-lg-8">
                                    <div className="map-container">
                                      <img
                                        src="/images/world-new.svg"
                                        className="img-fluid  "
                                        alt="logo"
                                      />
                                    </div>
                                    <div className="d-flex mt-5">
                                      <div>
                                        <span
                                          className="img-fluid h-icon-50  ms-3 rounded-circle navbar-circle-mobile"
                                          style={{
                                            backgroundColor: "#4834D4",
                                            minWidth: "30px",
                                            minHeight: "36px",
                                            paddingRight: "8px",
                                            paddingLeft: "7px",
                                          }}
                                        ></span>
                                        <span
                                          style={{ fontSize: "14px" }}
                                          className="ms-1"
                                        >
                                          India
                                        </span>
                                      </div>

                                      <div className="ms-3">
                                        <span
                                          className="img-fluid h-icon-50  ms-3 rounded-circle navbar-circle-mobile"
                                          style={{
                                            backgroundColor: "#BD5302",
                                            minWidth: "30px",
                                            minHeight: "36px",
                                            paddingRight: "8px",
                                            paddingLeft: "7px",
                                          }}
                                        ></span>
                                        <span
                                          style={{ fontSize: "14px" }}
                                          className="ms-1"
                                        >
                                          USA
                                        </span>
                                      </div>
                                      <div className="ms-3">
                                        <span
                                          className="img-fluid h-icon-50  ms-3 rounded-circle navbar-circle-mobile"
                                          style={{
                                            backgroundColor: "#E9C16B",
                                            minWidth: "30px",
                                            minHeight: "36px",
                                            paddingRight: "8px",
                                            paddingLeft: "7px",
                                          }}
                                        ></span>
                                        <span
                                          style={{ fontSize: "14px" }}
                                          className="ms-1"
                                        >
                                          CANADA
                                        </span>
                                      </div>
                                      <div className="ms-3">
                                        <span
                                          className="img-fluid h-icon-50  ms-3 rounded-circle navbar-circle-mobile"
                                          style={{
                                            backgroundColor: "#01754F",
                                            minWidth: "30px",
                                            minHeight: "36px",
                                            paddingRight: "8px",
                                            paddingLeft: "7px",
                                          }}
                                        ></span>
                                        <span
                                          style={{ fontSize: "14px" }}
                                          className="ms-1"
                                        >
                                          UAE
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className=" ">
                                      <div className="mb-5 w-100">
                                        <div className="d-flex align-items-center w-100">
                                          {/* Logo */}
                                          <div className="me-3 flex-shrink-0">
                                            <img
                                              src="/images/indian-flag-logo-png_seeklogo-71256.png"
                                              className="img-fluid h-icon-50 vertx-logo-mobile"
                                              alt="logo"
                                              style={{ maxWidth: "50px" }}
                                            />
                                          </div>

                                          <div className="flex-grow-1 w-100">
                                            <div className="d-flex justify-content-between align-items-center w-100 mb-1">
                                              <h5 className="text-medium mb-1">
                                                India
                                              </h5>
                                              <p className="text-medium mb-1">
                                                40%
                                              </p>
                                            </div>
                                            <div
                                              className="progress"
                                              style={{
                                                height: "10px",
                                                width: "100%",
                                              }}
                                            >
                                              <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                  width: "40%",
                                                  backgroundColor: "purple",
                                                }}
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mb-5 w-100">
                                        <div className="d-flex align-items-center w-100">
                                          <div className="me-3 flex-shrink-0">
                                            <img
                                              src="/images/usa-flag-logo-png_seeklogo-285715.png"
                                              className="img-fluid h-icon-50 vertx-logo-mobile"
                                              alt="logo"
                                              style={{ maxWidth: "50px" }}
                                            />
                                          </div>

                                          <div className="flex-grow-1 w-100">
                                            <div className="d-flex justify-content-between align-items-center w-100 mb-1">
                                              <h5 className="text-medium mb-1">
                                                USA
                                              </h5>
                                              <p className="text-medium mb-1">
                                                25%
                                              </p>
                                            </div>
                                            <div
                                              className="progress"
                                              style={{
                                                height: "10px",
                                                width: "100%",
                                              }}
                                            >
                                              <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                  width: "20%",
                                                  backgroundColor: "orange",
                                                }}
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mb-5 w-100">
                                        <div className="d-flex align-items-center w-100">
                                          <div className="me-3 flex-shrink-0">
                                            <img
                                              src="/images/images.png"
                                              className="img-fluid h-icon-50 vertx-logo-mobile"
                                              alt="logo"
                                              style={{ maxWidth: "50px" }}
                                            />
                                          </div>

                                          <div className="flex-grow-1 w-100">
                                            <div className="d-flex justify-content-between align-items-center w-100 mb-1">
                                              <h5 className="text-medium mb-1">
                                                Canada
                                              </h5>
                                              <p className="text-medium mb-1">
                                                10%
                                              </p>
                                            </div>
                                            <div
                                              className="progress"
                                              style={{
                                                height: "10px",
                                                width: "100%",
                                              }}
                                            >
                                              <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                  width: "10%",
                                                  backgroundColor: "yellow",
                                                }}
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                      <div className="mb-5 w-100 ">
                                        <div className="d-flex align-items-center w-100">
                                          <div className="me-3 flex-shrink-0">
                                            <img
                                              src="/images/38792380.jpg"
                                              className="img-fluid h-icon-50 vertx-logo-mobile"
                                              alt="logo"
                                              style={{ maxWidth: "50px" }}
                                            />
                                          </div>

                                          <div className="flex-grow-1 w-100">
                                            <div className="d-flex justify-content-between align-items-center w-100 mb-1">
                                              <h5 className="text-medium mb-1">
                                                UAE
                                              </h5>
                                              <p className="text-medium mb-1">
                                                7%
                                              </p>
                                            </div>
                                            <div
                                              className="progress"
                                              style={{
                                                height: "10px",
                                                width: "100%",
                                              }}
                                            >
                                              <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                  width: "7%",
                                                  backgroundColor: "green",
                                                }}
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-end ">
                                      <h6>View all Countries &rarr;</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-password"
                      role="tabpanel"
                      aria-labelledby="pills-password-tab"
                      tabIndex="0"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
