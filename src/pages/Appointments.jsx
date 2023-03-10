// import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
import { RiStethoscopeFill, RiFileEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import "../css/Appointments.css";
//import './index.css';
import * as React from "react";
// import AppointmentDemo from "./AppointmentDemo.jsx";
import { render } from "react-dom";
import Demo from "./demo";
import UserIcon from "../Images/user-icon.jpg";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import AddAppointmentbox from "../components/AddAppointmentBox/AddAppointmentbox.jsx";
import NewAppointment from "./NewAppointment.jsx";

const Appointments = () => {
  // render(<Demo />, document.getElementById("root"));

  return (
    <div>
      <SideBar>
        <NavbarComp />
        <div className="appointmentSection">
          {/* <div className="appointmentsHead">
            <h2>Appointments</h2>
          </div> */}
          {/* =========== search boxes ============= */}
          <div className="searchBoxes">
            <div className="row">
              <div className="col-3">
                <div className="searchBox">
                  <div className="input-style-1">
                    <label>Clinic:</label>
                    <select name="Clinic" id="Clinic">
                      <option value="Rakhsa">Rakhsa</option>
                      <option value="Kokilaben">Kokilaben</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <div className="col-3">
                <div className="searchBox">
                  <div className="input-style-1">
                    <label>Date:</label>

                    <input type="date" />
                  </div>
                </div>
              </div> */}
              <div className="col-3">
                <div className="searchBox">
                  <div className="input-style-1">
                    <label>Timings:</label>
                    <select name="Timings" id="Timings">
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="searchBox">
                  <div className="input-style-1">
                    <label>Search:</label>
                    <input type="search" placeholder="patient name" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* <div className="searchBox">
                  <Link>
                    <button>+ Add Appointment</button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          {/* appointment box */}
          {/* <div className="appointmentBox">
                  <div className="appointmentBoxHead">
                    <div className="headName">
                      <h6>Prakash Yadav</h6>
                      <p>12:30pm - 1:00pm</p>
                    </div>
                    <div className="appointmentBoxIcon">
                      <RiFileEditFill />
                      <MdDelete />
                    </div>
                  </div>
                  <div className="appointmentBoxText">
                    <p>Male</p>
                    <p>31 years 4 months</p>
                    <p>9877765432</p>
                  </div>
                </div> */}
          {/* Appointment Calender */}
          <div className="appointmentCalender">
            <NewAppointment />

            {/* Appointment Detail Box */}
            <div className="appointmentDetailBox">
              <div className="patientProfileApb">
                <img src={UserIcon} />
              </div>
              <div className="PatientDetailAdb">
                <h4>Amar Upadhyay</h4>
                <div className="phoneAdb">
                  <h6>
                    <span>
                      <FiPhoneCall />
                    </span>
                    +91 9876543212
                  </h6>
                </div>
                <div className="emailAdb">
                  <h6>
                    <span>
                      <FiMail />
                    </span>
                    upadhyayamar34@gmail.com
                  </h6>
                </div>
              </div>
              <hr />
              <div className="moreDetailAdb">
                <h6>
                  <span>Type:</span> Offline
                </h6>
                <h6>
                  <span>Time:</span> 9:30 to 10:00
                </h6>
                <h6>
                  <span>Reason:</span> Spine Ingury
                </h6>
                <div className="buttonsAdb">
                  <div className="adbEdit">
                    <RiFileEditFill />
                  </div>
                  <div className="deleteAdb">
                    <MdDelete />
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Appointment Detail Box */}
            <div className="AddAppointmentSidebar appointmentDetailBox">
              <div className="AddAppointmentSidebarHead">
                <h6>
                  Add Appointment: <span>10:20 - 10:30 am</span>
                </h6>
              </div>
              <from>
                <div className="input-style-1">
                  <label>Patient Name: </label>
                  <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className="input-style-1">
                  <label> PUID: </label>
                  <input
                    type="text"
                    name="patient id"
                    placeholder="Patient Unique ID"
                  />
                </div>
                <div className="input-style-1">
                  <label> Clinic ID: </label>
                  <input type="number" name="name" placeholder="Clinic ID" />
                </div>
                <div className="input-style-1">
                  <label> Mobile No: </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="input-style-1">
                  <label> Blood Group: </label>
                  <select name="cars" id="cars">
                    <option value="">Select Blood Group</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                  </select>
                </div>
                <div className="input-style-1">
                  <label> Gender: </label>
                  <select name="gender" id="gender">
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="input-style-1">
                  <label> Purpose of visit: </label>
                  <input type="text" name="purpose" />
                </div>
                <div className="input-style-1">
                  <label> Age: </label>
                  <input type="number" name="age" />
                </div>
                <div className="bookAppointmentBtn">
                  <button>Book Appointment</button>
                </div>
              </from>
            </div>
          </div>

          {/* Add Appointment Box */}
          {/* <AddAppointmentbox /> */}

          {/* -- */}
        </div>
      </SideBar>
    </div>
  );
};

export default Appointments;
