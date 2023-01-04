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

const Appointments = () => {
  // render(<Demo />, document.getElementById("root"));

  return (
    <div>
      <SideBar>
        <NavbarComp />
        <div className="appointmentSection">
          <div className="appointmentsHead">
            <h2>Appointments</h2>
          </div>
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
              <div className="col-3">
                <div className="searchBox">
                  <div className="input-style-1">
                    <label>Date:</label>
                    <input type="date" />
                  </div>
                </div>
              </div>
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
            <Demo />
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
          </div>

          {/* -- */}
        </div>
      </SideBar>
    </div>
  );
};

export default Appointments;
