import React from "react";
import $ from "jquery";
import "../css/Patients.css";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
// images
import Patient1 from "../Images/patients/patient-1.jpg";
import Patient2 from "../Images/patients/patient-2.jpg";
import Patient3 from "../Images/patients/patient-3.jpg";
import Patient4 from "../Images/patients/patient-4.jpg";
import Patient5 from "../Images/patients/patient-5.jpg";
// icons
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Patinents = () => {
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
        {/* Patients List */}
        <div className="PatientsListSection">
          <div className="patientListHead">
            <h1>Patients List</h1>
            <div className="addPatientBtn">
              <Link to="/patientProfile">
                <button>+ Add Patient</button>
              </Link>
            </div>
          </div>
          <div className="patientsListTable">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Patient ID</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Patient Type</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient1} alt="" />
                    </div>
                  </td>
                  <td>Monika Chaturvedi</td>
                  <td>9876543215</td>
                  <td>
                    <div className="careTakerNo">chaturvedimonn@gmail.com</div>
                  </td>
                  <td>
                    <div className="patientTypeBox favouriteClass">
                      Favourite
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient2} alt="" />
                    </div>
                  </td>
                  <td>Rohit Sharma</td>
                  <td>9874543212</td>
                  <td>
                    <div className="careTakerNo">rohit@gmail.com</div>
                  </td>
                  <td>
                    <div className="patientTypeBox notoriousClass">
                      Notorious
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient3} alt="" />
                    </div>
                  </td>
                  <td>Manan Bajaj</td>
                  <td>7874543212</td>
                  <td>
                    <div className="careTakerNo">mananbajaj@gmail.com</div>
                  </td>
                  <td></td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient4} alt="" />
                    </div>
                  </td>
                  <td>Samiksha Gawai</td>
                  <td>7874543212</td>
                  <td>
                    <div className="careTakerNo">sammgawai@gmail.com</div>
                  </td>
                  <td>
                    <div className="patientTypeBox surgicalClass">Surgical</div>
                  </td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient5} alt="" />
                    </div>
                  </td>
                  <td>Ruchi Patel</td>
                  <td>7874543212</td>
                  <td>
                    <div className="careTakerNo">patelruchi@gmail.com</div>
                  </td>
                  <td>
                    <div className="patientTypeBox favouriteClass">
                      Favourite
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient1} alt="" />
                    </div>
                  </td>
                  <td>Monika Khanna</td>
                  <td>9876543215</td>
                  <td>
                    <div className="careTakerNo">khannamonika@gmail.com</div>
                  </td>
                  <td>
                    <div className="patientTypeBox surgicalClass">Surgical</div>
                  </td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient2} alt="" />
                    </div>
                  </td>
                  <td>Rohit Yadav</td>
                  <td>9874543212</td>
                  <td>
                    <div className="careTakerNo">rohittadav@gmail.com</div>
                  </td>
                  <td></td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient3} alt="" />
                    </div>
                  </td>
                  <td>Manan Gupta</td>
                  <td>7874543212</td>
                  <td>
                    <div className="careTakerNo">mgupta@gmail.com</div>
                  </td>
                  <td>
                    <div className="patientTypeBox favouriteClass">
                      Favourite
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon editIcon tableEdit">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient4} alt="" />
                    </div>
                  </td>
                  <td>Samiksha Salgavkar</td>
                  <td>7874543212</td>
                  <td>
                    <div className="careTakerNo">Samiksha@gmail.com</div>
                  </td>
                  <td></td>
                  <td>
                    <div className="tableIcon editIcon tableIcon">
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td className="d-flex justify-content-center">
                    <div className="patientImg">
                      <img src={Patient5} alt="" />
                    </div>
                  </td>
                  <td>Ruchi Soni</td>
                  <td>7874543212</td>
                  <td>
                    <div className="careTakerNo">sonir@gmail.com</div>
                  </td>
                  <td>
                    <div className="patientTypeBox favouriteClass">
                      Favourite
                    </div>
                  </td>
                  <td>
                    <div className="tableIcon editIcon">
                      <FaEdit />
                    </div>
                  </td>

                  <td>
                    <div className="tableIcon deleteIcon">
                      <MdDelete />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Patinents;
