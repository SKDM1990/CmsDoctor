import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
import "../css/DoctorDetails.css";

// Doctor registration form
const DoctorDetails = () => {
  return (
    <div>
      <SideBar>
        <div>
          <NavbarComp />
          <section className="doctorDetails">
            <div className="conainer-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card-style settings-card-1 mb-30">
                    <div className="title mb-30 d-flex justify-content-between align-items-center">
                      <h6>Search Here</h6>
                    </div>
                    {/* <div className="d-flex align-items-center mb-30">
                    <div className="profile-image">
                      <img
                        src="https://demo.plainadmin.com/assets/images/profile/profile-1.png"
                        alt=""
                      />
                    </div>
                    <div className="profile-meta">
                      <h5 className="text-bold text-dark mb-10">John Doe</h5>
                      <p className="text-sm text-gray">
                        Web &amp; UI/UX Design
                      </p>
                    </div>
                  </div> */}
                    <hr />
                    <div className="header-search">
                      <form action="#">
                        <input type="text" placeholder="Search..." />
                        <button>
                          <i className="fa fa-search" aria-hidden="true" />
                        </button>
                      </form>
                    </div>
                    <hr />

                    <div className="searchBarResult">
                      <div className="row">
                        <div className="col mt-3">
                          <span>Left&nbsp;Heel&nbsp;Pain</span>
                        </div>
                        <div className="col mt-3">
                          <span>Common&nbsp;cold</span>
                        </div>
                        <div className="col mt-3">
                          <span>Diphtheria</span>
                        </div>
                        <div className="col mt-3">
                          <span>Infectiousm&nbsp;ononucleosis</span>
                        </div>
                        <div className="col mt-3">
                          <span>Mononucleosis</span>
                        </div>

                        <div className="col mt-3">
                          <span>paracetamol&nbsp;500mg</span>
                        </div>
                        <div className="col mt-3">
                          <span>Colds&nbsp;and&nbsp;Flu</span>
                        </div>
                        <div className="col mt-3">
                          <span>Diarrhea</span>
                        </div>
                        <div className="col mt-3">
                          <span>Stomach&nbsp;Aches</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="card-style settings-card-2 mb-30">
                    <div className="btn-group">
                      <div className="btn-inner">Add Profile</div>
                      <div className="btn-inner">Add Clinic</div>
                    </div>
                    <div className="title mb-30 d-flex justify-content-between align-items-center">
                      <h6>Add Profile</h6>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Full Name</label>
                            <input type="text" placeholder="Full Name" />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Phone No</label>
                            <input type="number" placeholder="Phone No" />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Doctor Category</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Option:</option>
                              <option value="">Radiology</option>
                              <option value="">General Surgery</option>
                              <option value="">Pathology</option>
                              <option value="">Pediatrics</option>
                              <option value="">Dermatology</option>
                              <option value="">
                                Obstetrics and Gynecology
                              </option>
                              <option value="">Internal Medicine</option>
                              <option value="">Orthopedics</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label className="form-label" for="customFile">
                              Profile Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="customFile"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Years of Experience</label>
                            <input
                              type="number"
                              placeholder="Years of Experience"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-style-1">
                            <label>About Me</label>
                            <textarea
                              placeholder="Type here"
                              rows={6}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="button" class="btn btn-primary">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SideBar>
    </div>
  );
};

export default DoctorDetails;
