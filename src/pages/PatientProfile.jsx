import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
import "../css/PatientProfile.css";

const PatientProfile = () => {
  return (
    <div>
      <SideBar>
        <NavbarComp />

        <div className="AddPatientSection">
          <div className="patientsProfileHead">
            <h1>Add Patient </h1>
          </div>
          <div className="patientProfileDetails">
            <div className="row">
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Patient Name</label>
                  <input type="text " placeholder="Patient Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Gender</label>
                  <select name="Gender" id="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Contact Number</label>
                  <input type="number" placeholder="Enter contact number" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Email</label>
                  <input type="email" placeholder="Enter email id" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Date of birth</label>
                  <input type="date" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Age</label>
                  <div className="row">
                    <div className="col">
                      <input type="text" placeholder="Years" />
                    </div>
                    <div className="col">
                      <input type="text" placeholder="Moths" />
                    </div>
                    <div className="col">
                      <input type="text" placeholder="Days" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Date of Marriage</label>
                  <input type="date" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Married Since</label>
                  <div className="row">
                    <div className="col">
                      <input type="text" placeholder="Years" />
                    </div>
                    <div className="col">
                      <input type="text" placeholder="Moths" />
                    </div>
                    <div className="col">
                      <input type="text" placeholder="Days" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Address</label>
                  <input type="text" placeholder="Address Line 1" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label className="addressLable">Address</label>
                  <input type="text" placeholder="Address Line 2" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>City</label>
                  <input type="text" placeholder="City Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>Pincode</label>
                  <input type="number" placeholder="City Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>District</label>
                  <input type="text" placeholder="Enter district" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style-1">
                  <label>State</label>
                  <input type="text" placeholder="State Name" />
                </div>
              </div>
              <div className="col-md-6">
                <label className="smsHeading">SMS Settings</label>
                <input type="checkbox" id="program" name="programSms" />
                <label for="program">Program Lauch SMS</label>
                <br />
                <input type="checkbox" id="program" name="programSms" />
                <label for="program">Birthday SMS</label>
              </div>
              <div className="col-md-6">
                <label className="smsHeading">WhatsApp Settings</label>
                <input type="checkbox" id="program" name="programSms" />
                <label for="program">Program Lauch WhatsApp Messsage</label>
                <br />
                <input type="checkbox" id="program" name="programSms" />
                <label for="program">Birthday WhatsApp Message</label>
              </div>
              <div className="col-md-6">
                <label className="smsHeading">Emil Settings</label>
                <input type="checkbox" id="program" name="programSms" />
                <label for="program">Program Lauch Email</label>
              </div>
            </div>
            <div className="patientDetailSubmit">
              <button>Submit </button>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default PatientProfile;
