import React, { useEffect, useState } from "react";
import $ from "jquery";
import "../css/Patients.css";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
// images
import Patient1 from "../Images/patients/patient-1.jpg";
import {
  useViewPateintProfileQuery,
  useDeletePatientMutation,
} from "../services/userAuthAPI";
// import Patient2 from "../Images/patients/patient-2.jpg";
// import Patient3 from "../Images/patients/patient-3.jpg";
// import Patient4 from "../Images/patients/patient-4.jpg";
// import Patient5 from "../Images/patients/patient-5.jpg";
// icons
import { getToken } from "../services/localStorageServices";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Patinents = () => {
  const { access_token } = getToken();
  const [server_error_side, setServerError_side] = useState({});
  const [listData, setListData] = useState([]);
  const { data, isSuccess } = useViewPateintProfileQuery({
    token: access_token
  });
  const [deletePatient, { isLoading }] = useDeletePatientMutation();

  useEffect(() => {
    if (data) {
      console.log(data);
      setListData(data);
    }
  }, [data]);

  console.log(data);

  const DeletePateint = async (pid) => {
    const formData = new FormData();
    formData.append("token", access_token);
    formData.append("patient_Id", pid);
    const req = await deletePatient(formData);
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
                  <th scope="col">Bookmark</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {listData &&
                  listData.map((workObj, index) => (
                    <tr>
                      <th
                        scope="row"
                        style={{ fontWeight: "500", color: "#2b5a89" }}
                      >
                        {workObj.pid}
                      </th>
                      <td className="d-flex justify-content-center">
                        <div className="patientImg">
                          <img src={workObj.patient_profile_Image} alt="" />
                        </div>
                      </td>
                      <td>
                        {workObj.patient_first_name +
                          " " +
                          workObj.patient_last_name}
                      </td>
                      <td>{workObj.patient_phone_no}</td>
                      <td>
                        <div className="careTakerNo">
                          {workObj.patient_email}
                        </div>
                      </td>
                      <td>
                        <div className="patientTypeBox favouriteClass">
                          Favourite
                        </div>
                      </td>
                      <td>
                        <Link to={`/patientProfile/${workObj.pid}`}>
                          <div className="tableIcon editIcon">
                            <FaEdit />
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div
                          className="tableIcon deleteIcon"
                          onClick={() => DeletePateint(workObj.pid)}
                        >
                          <MdDelete />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Patinents;
