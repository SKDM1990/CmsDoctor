import React, { useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";

import "../css/Users.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import {
  useViewHospitalQuery,
  useDeleteHospitalMutation,
} from "../services/userAuthAPI";
import { MdDelete, MdEdit } from "react-icons/md";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
import { getToken } from "../services/localStorageServices";
import { useEffect } from "react";

const Hospitals = () => {
  const { access_token } = getToken();
  const [server_error_side, setServerError_side] = useState({});
  const [deleteHospital, { isLoading }] = useDeleteHospitalMutation();
  const [listData, setListData] = useState([]);
  const [hispotalId, setHospitalId] = useState();

  const { data, isSuccess } = useViewHospitalQuery({ token: access_token });
  console.log(data);
  useEffect(() => {
    if (data) {
      setHospitalId(data.id);
      setListData(data);
    }
  }, [data]);

  // const EditHospital = async (hospitalID) => {
  //   alert("sfgjk");

  //   // const formData = new FormData();
  //   // formData.append("token", access_token);
  //   // formData.append("Hospital_Id", hospitalID);
  //   // const req = await deleteHospital(formData);
  // };

  const DeleteHospital = async (hospitalID) => {
    const formData = new FormData();
    formData.append("token", access_token);
    formData.append("Hospital_Id", hospitalID);
    const req = await deleteHospital(formData);
  };

  const DoctorSeach = () => {
    var dropdown = $(".dropdown ul").hasClass("active");
    if (dropdown) {
      $(".dropdown ul").removeClass("active");
    } else {
      $(".dropdown ul").addClass("active");
    }
  };

  $(".dropdown ul li").on("click", function () {
    var text = $(".default_option").text();
    console.log(text);
    $(".default_option").val(text);
    $(".dropdown ul").removeClass("active");
  });
  return (
    <div>
      <SideBar>
        <NavbarComp />
        <div>
          <section className="doctorView">
            <div className="container-fluid">
              <div className="row mt-3 mb-10">
                <div className="col-lg-6">
                  <div className="wrapper">
                    <div className="search_box">
                      <div className="dropdown">
                        <div className="default_option" onClick={DoctorSeach}>
                          Location
                        </div>
                        <ul>
                          <li>Andheri</li>
                          <li>Bandra</li>
                          <li>Mira Road</li>
                        </ul>
                      </div>
                      <div className="search_field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Search Hospital"
                        />
                        <i className="fas fa-search" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                  <Link to="/addHospital">
                    <button
                      class="btn primary-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#addTaskModal"
                    >
                      <span class="material-symbols-outlined icon">add</span>
                      Add Hospital
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row">
                {listData &&
                  listData.map((workObj, index) => (
                    <div className="col-lg-6">
                      <div
                        className="CategoryCard"
                        value={workObj.list_of_account}
                      >
                        <div className="categImg">
                          <img src={workObj.logo} alt="" />
                        </div>
                        <div className="categText">
                          <h2>{workObj.first_name}</h2>
                          <p> {workObj.city}</p>
                        </div>
                        <div className="categButton">
                          <div>
                            <Link
                              to={`/addHospital/${workObj.list_of_account}`}
                            >
                              <div
                                className="editBtn"
                                // onClick={() =>
                                //   EditHospital(workObj.list_of_account)
                                // }
                              >
                                <MdEdit />
                              </div>
                            </Link>
                          </div>
                          <div>
                            <div
                              className="deleteBtn"
                              onClick={() =>
                                DeleteHospital(workObj.list_of_account)
                              }
                            >
                              <MdDelete />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {/* <div className="col-lg-6">
                  <div className="CategoryCard">
                    <div className="categImg">
                      <img src={Navanit} alt="" />
                    </div>
                    <div className="categText">
                      <h2>Nanavati Max Super Speciality Hospital</h2>
                      <p>Bandra West</p>
                    </div>
                    <div className="categButton">
                      <div>
                        <div className="editBtn">
                          <MdEdit />
                        </div>
                      </div>
                      <div>
                        <div className="deleteBtn">
                          <MdDelete />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="CategoryCard">
                    <div className="categImg">
                      <img src={Citi} alt="" />
                    </div>
                    <div className="categText">
                      <h2>Citi Hospital</h2>
                      <p>Mira Road East</p>
                    </div>
                    <div className="categButton">
                      <div>
                        <div className="editBtn">
                          <MdEdit />
                        </div>
                      </div>
                      <div>
                        <div className="deleteBtn">
                          <MdDelete />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="CategoryCard">
                    <div className="categImg">
                      <img src={kokilaben} alt="" />
                    </div>
                    <div className="categText">
                      <h2>Kokilaben Dhirubhai Ambani Hospital</h2>
                      <p>Andheri West</p>
                    </div>
                    <div className="categButton">
                      <div>
                        <div className="editBtn">
                          <MdEdit />
                        </div>
                      </div>
                      <div>
                        <div className="deleteBtn">
                          <MdDelete />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </SideBar>
    </div>
  );
};

export default Hospitals;
