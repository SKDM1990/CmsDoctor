import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/Users.css";
import $ from "jquery";
import { Link } from "react-router-dom";
const Users = () => {
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
    <>
      <div className="main-wrapper">
        <section className="doctorView">
          <div className="container-fluid">
            <div className="row mt-3 mb-10">
              <div className="col-lg-6">
                <div className="wrapper">
                  <div className="search_box">
                    <div className="dropdown">
                      <div className="default_option" onClick={DoctorSeach}>
                        Speciality
                      </div>
                      <ul>
                        <li>Orthopedics</li>
                        <li>Internal Medicine</li>
                        <li>Obstetrics and Gynecology</li>
                        <li>Dermatology</li>
                        <li>Pediatrics</li>
                        <li>Radiology</li>
                        <li>General Surgery</li>
                        <li>Pathology</li>
                      </ul>
                    </div>
                    <div className="search_field">
                      <input
                        type="text"
                        className="input"
                        placeholder="Search doctors"
                      />
                      <i className="fas fa-search" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                <Link to="/doctorDetail">
                  <button
                    class="btn primary-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#addTaskModal"
                  >
                    <span class="material-symbols-outlined icon">add</span>
                    Doctor Add
                  </button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="CategoryCard">
                  <div className="categImg">
                    <img
                      src="http://adorre.in/rootToRiseAdmin/assets/img/undraw_profile.svg"
                      alt=""
                    />
                  </div>
                  <div className="categText">
                    <h2>Dr Shantanu Sharma</h2>
                    <p>Implantologist</p>
                  </div>
                  <div className="categTex"></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="CategoryCard">
                  <div className="categImg">
                    <img
                      src="http://adorre.in/rootToRiseAdmin/assets/img/undraw_profile.svg"
                      alt=""
                    />
                  </div>
                  <div className="categText">
                    <h2>Dr Shantanu Sharma</h2>
                    <p>Implantologist</p>
                  </div>
                  <div className="categTex"></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="CategoryCard">
                  <div className="categImg">
                    <img
                      src="http://adorre.in/rootToRiseAdmin/assets/img/undraw_profile.svg"
                      alt=""
                    />
                  </div>
                  <div className="categText">
                    <h2>Dr Shantanu Sharma</h2>
                    <p>Implantologist</p>
                  </div>
                  <div className="categTex"></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="CategoryCard">
                  <div className="categImg">
                    <img
                      src="http://adorre.in/rootToRiseAdmin/assets/img/undraw_profile.svg"
                      alt=""
                    />
                  </div>
                  <div className="categText">
                    <h2>Dr Shantanu Sharma</h2>
                    <p>Implantologist</p>
                  </div>
                  <div className="categTex"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <a href="#" className="expandButton">
          <span className="material-symbols-outlined icon">group_add</span>
          <span className="text">Doctor Add</span>
        </a> */}
      </div>
    </>
  );
};

export default Users;
