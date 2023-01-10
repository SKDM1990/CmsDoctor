import React, { useState ,useEffect } from "react";
import SideBar from "../components/Sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
import "../css/PatientProfile.css";
import { getToken } from "../services/localStorageServices";
import { useParams } from "react-router-dom";
import { selected } from "@syncfusion/ej2/pivotview";
import HospitalVector from "../Images/patients_profile.webp";


import { useAddPatientMutation,useViewPateintProfileQuery , useEditPatientMutation} from "../services/userAuthAPI";


const PatientProfile = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [imageFile, setImageFile] = useState();
  const [activeImage, setActiveImage] = useState("fetchImage");
  const { access_token } = getToken();
  const { pid } = useParams();
  console.log(pid);
  const [addPatient, { isLoading }] = useAddPatientMutation();
  const [server_error_side, setServerError_side] = useState({});
  const [listData, setListData] = useState([]);
  const [editPateint, { isupdate }] = useEditPatientMutation();
  const { data, isSuccess } = useViewPateintProfileQuery({
    token: access_token,
    patient_Id: pid,
  });
  useEffect(() => {
    if (pid) {
      setListData(data);
    }
  }, [data]);
  console.log(data);
  function handleChange(e) {
    setFile(e.target.files[0]);
    setImageFile(URL.createObjectURL(e.target.files[0]));
    setActiveImage("updateImage");

  }

  console.log(file);


  const submitPatient = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = new FormData();
    formData.append("patient_profile_Image", file);
    formData.append("patient_fname", data.get("fname"));
    formData.append("patient_lname", data.get("lname"));
    formData.append("patient_phone_no", data.get("phone"));
    formData.append("patient_email", data.get("emailID"));
    formData.append("patient_gender", data.get("Gender"));
    formData.append("pateint_date_of_birth", data.get("dateofbirth"));
    formData.append("marriage_status", data.get("marriageStatus")); 
    formData.append("date_of_marriage", data.get("dateofmarriage"));
    formData.append("patient_full_address", data.get("address"));
    formData.append("city", data.get("city"));
    formData.append("pincode", data.get("pincod"));
    formData.append("language", data.get("languag"));
    formData.append("token", access_token);

    const req = await addPatient(formData);
    console.log(req);
    if (req.error == "PARSING_ERROR") {
      setServerError_side(req.error.data);
    }

    if (req.data) {
      navigate("/Patients");
    }
    
  };

  const EditPatient = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = new FormData();
    formData.append("patient_profile_Image", file);
    formData.append("patient_fname", data.get("fname"));
    formData.append("patient_lname", data.get("lname"));
    formData.append("patient_phone_no", data.get("phone"));
    formData.append("patient_email", data.get("emailID"));
    formData.append("patient_gender", data.get("Gender"));
    formData.append("pateint_date_of_birth", data.get("dateofbirth"));
    formData.append("marriage_status", data.get("marriageStatus")); 
    formData.append("date_of_marriage", data.get("dateofmarriage"));
    formData.append("patient_full_address", data.get("address"));
    formData.append("city", data.get("city"));
    formData.append("pincode", data.get("pincod"));
    formData.append("language", data.get("languag"));
    
    formData.append("token", access_token);
    formData.append("patientID", pid);

    const req = await editPateint(formData);
    console.log(req);
    if (req.error) {
      setServerError_side(req.error.data);
    }

    if (req.data) {
      navigate("/patients");
    }
  };

  return (
    <div>
      <SideBar>
        <NavbarComp />
        <div className="AddPatientSection mt-40">
          <div className="patientProfileDetails">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <div className="auth-cover-wrapper bg-primary-100">
                    <div className="auth-cover">
                      <div className="title text-center">
                        
                        <h1 className="text-primary mb-10">{listData == "" ? "Add Patient" : "Edit Patient"}</h1>
                      </div>
                      <div className="cover-image">
                        
                        <img src={HospitalVector} alt="" />
                      </div>
                      <div className="shape-image">
                        <img
                          src="https://demo.plainadmin.com/assets/images/auth/shape.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                {listData == "" ? (
                  <form onSubmit={submitPatient}>
                    <div className="card-style settings-card-2 mb-30">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>First Name</label>
                            <input
                              type="text"
                              name="fname" 
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Last Name</label>
                            <input
                              type="text"
                              name="lname"
                              className="form-control"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Contact Number</label>
                            <input
                              type="number"
                              name="phone"
                              className="form-control"
                              placeholder="Enter contact number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Email</label>
                            <input type="email" className="form-control" name="emailID" placeholder="Enter email id" />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label className="form-label" for="customFile">
                              Profile Image
                            </label>
                            <input
                              name="image"
                              type="file"
                              className="form-control"
                              onChange={handleChange}
                              id="customFile"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Gender</label>
                            <select name="Gender" className="form-control" id="Gender">
                            <option selected disabled>Select Option</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Date of birth</label>
                            <input type="date" className="form-control" name="dateofbirth" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Age</label>
                            <div className="row">
                              <div className="col">
                                <input type="text" className="form-control" placeholder="Years" />
                              </div>
                              <div className="col">
                                <input type="text" className="form-control" placeholder="Moths" />
                              </div>
                              <div className="col">
                                <input type="text"  className="form-control" placeholder="Days" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Language</label>
                            <select name="languag" className="form-control">
                            <option selected disabled>Select Language</option>
                              <option value="English">English</option>
                              <option value="Hindi">Hindi</option>
                              <option value="Marathi">Marathi</option>
                              <option value="Gujrati">Gujrati</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Marriage Status</label>
                            <select className="form-control" name="marriageStatus">

                            <option selected disabled>Select Option</option>
                              <option value="Male">Married</option>
                              <option value="Unmarried">Unmarried</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Date of Marriage</label>
                            <input  className="form-control" type="date" name="dateofmarriage" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Married Since</label>
                            <div className="row">
                              <div className="col">
                                <input type="text" className="form-control"  placeholder="Years" />
                              </div>
                              <div className="col">
                                <input type="text" className="form-control" placeholder="Moths" />
                              </div>
                              <div className="col">
                                <input type="text" className="form-control" placeholder="Days" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-style-1">
                            <label>Address</label>
                            <input type="text" className="form-control" name="address" placeholder="Address Line 1" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>City</label>
                            <input type="text" className="form-control" name="city" placeholder="City" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-style-1">
                            <label>Pincode</label>
                            <input type="number" className="form-control" name="pincod" placeholder="Pincode" />
                          </div>
                        </div>

                        {/* <div className="col-md-6">
                          <div className="input-style-1">
                            <label>State</label>
                            <input type="text" name="state" placeholder="State Name" />
                          </div>
                        </div> */}
                        {/* <div className="col-md-6">
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
                        <label for="program">
                          Program Lauch WhatsApp Messsage
                        </label>
                        <br />
                        <input type="checkbox" id="program" name="programSms" />
                        <label for="program">Birthday WhatsApp Message</label>
                      </div>
                      <div className="col-md-6">
                        <label className="smsHeading">Emil Settings</label>
                        <input type="checkbox" id="program" name="programSms" />
                        <label for="program">Program Lauch Email</label>
                      </div> */}
                      </div>
                      <div className="patientDetailSubmit mt-5">
                        <button>Add Patient</button>
                      </div>
                    </div>
                  </form>
                   ) : (
                    ""
                  )}
                  {listData &&
                    listData.map((workObj, index) => (
                     // Assign a const variable in return a map function ?
                        <form onSubmit={EditPatient} >
                          <div className="card-style settings-card-2 mb-30">
                            <div className="row">
                            <div className="col-12 mb-5">
                            <input
                              type="file"
                              id="ProfileImamges"
                              className="productImages"
                              onChange={handleChange}
                              name="image"
                              placeholder=""
                              accept=".jpg, .png, .jpeg,.jfif"
                            />
                            <link
                              href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                              rel="stylesheet"
                            />
                            <div className="profileImage">
                              <img
                                src={
                                  activeImage == "fetchImage"
                                    ? workObj.patient_profile_Image
                                    : imageFile
                                }
                                className="main-profile-img fatchImage"
                              />
                              <label className="iputIcon" for="ProfileImamges">
                                <i className="fa fa-edit"></i>
                              </label>
                            </div>
                          </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    name="fname" 
                                    defaultValue={workObj.patient_first_name
                                    } 
                                    className="form-control"
                                    placeholder="First Name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    name="lname"
                                    defaultValue={workObj.patient_last_name
                                    }
                                    className="form-control"
                                    placeholder="Last Name"
                                  />
                                </div>
                              </div>
      
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Contact Number</label>
                                  <input
                                    type="number"
                                    name="phone"
                                    defaultValue={workObj.patient_phone_no}
                                    className="form-control"
                                    placeholder="Enter contact number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Email</label>
                                  <input type="email" defaultValue={workObj.patient_email} className="form-control" name="emailID" placeholder="Enter email id" />
                                </div>
                              </div>
                              {/* <div className="col-12 col-lg-6">
                                <div className="input-style-1">
                                  <label className="form-label"  for="customFile">
                                    Profile Image
                                  </label>
                                  <input
                                    name="image"
                                    type="file"
                                    className="form-control"
                                    onChange={handleChange}
                                    id="customFile"
                                  />
                                </div>
                              </div> */}
                              <div className="col-md-12">
                                <div className="input-style-1">
                                  <label>Gender</label>
                                  <select name="Gender" className="form-control" id="Gender">
                                  <option disabled {...workObj.patient_gender === 'Male' && workObj.patient_gender === 'Female' && workObj.patient_gender === 'Other' ?  "" : selected }>Select Option</option>
                                  {workObj.patient_gender === 'Male' ?
                                    <option selected value="Male">Male</option>
                                    :
                                    <option>Male</option>
                                  }
                                    {workObj.patient_gender === 'Female' ?
                                    <option selected value="Female">Female</option>
                                    :
                                    <option>Female</option>
                                  }
                                   {workObj.patient_gender === 'Other' ?
                                    <option selected value="Other">Other</option>
                                    :
                                    <option>Other</option>
                                  }
                                   </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Date of birth</label>
                                  <input type="date"  defaultValue={workObj.pateint_date_of_birth} className="form-control" name="dateofbirth" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Age</label>
                                  <div className="row">
                                    <div className="col">
                                      <input type="text" className="form-control" placeholder="Years" />
                                    </div>
                                    <div className="col">
                                      <input type="text" className="form-control" placeholder="Moths" />
                                    </div>
                                    <div className="col">
                                      <input type="text"  className="form-control" placeholder="Days" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Language</label>
                                  <select name="languag" className="form-control">
                                  <option disabled {...workObj.language === 'English' && workObj.language === 'Hindi' && workObj.language === 'Marathi' && workObj.language === 'Gujrati' ?  "" : selected } selected>Select Language</option>
                                  {workObj.language === 'English' ?
                                    <option selected value="English">English</option>
                                    :
                                    <option>English</option>
                                  }
                                  {workObj.language === 'Hindi' ?
                                    <option selected value="Hindi">Hindi</option>
                                    :
                                    <option>Hindi</option>
                                  }
                                  {workObj.language === 'Marathi' ?
                                    <option selected value="Marathi">Marathi</option>
                                    :
                                    <option>Marathi</option>
                                  }
                                  {workObj.language === 'Gujrati' ?
                                    <option selected value="Gujrati">Gujrati</option>
                                    :
                                    <option>Gujrati</option>
                                  }
                                  
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Marriage Status</label>
                                  <select className="form-control" name="marriageStatus">
      
                                 <option disabled  {...workObj.marriage_status === 'Married' && workObj.marriage_status === 'Unmarried' ?  "" : selected }>Select Option</option> 
                                   
                                 {workObj.marriage_status === 'Married' ?
                                    <option selected value="Married">Married</option>
                                    :
                                    <option>Married</option>
                                  }
                                    {workObj.marriage_status === 'Unmarried' ?
                                    <option selected value="Unmarried">Unmarried</option>
                                    :
                                    <option>Unmarried</option>
                                  }
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Date of Marriage</label>
                                  {workObj.marriage_status === 'Unmarried' ?  <input  className="form-control" type="date"  name="dateofmarriage"  disabled/> :  <input  className="form-control" defaultValue={workObj.date_of_marriage} type="date"  name="dateofmarriage" placeholder="" /> }

                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Married Since</label>
                                  <div className="row">
                                    <div className="col">
                                      <input type="text" className="form-control"  placeholder="Years"  disabled/>
                                    </div>
                                    <div className="col">
                                      <input type="text" className="form-control" placeholder="Moths" disabled />
                                    </div>
                                    <div className="col">
                                      <input type="text" className="form-control" placeholder="Days" disabled/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="input-style-1">
                                  <label>Address</label>
                                  <input type="text" defaultValue={workObj.patient_full_address} className="form-control" name="address" placeholder="Address Line 1" />
                                </div>
                              </div>
      
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>City</label>
                                  <input type="text" defaultValue={workObj.city} className="form-control" name="city" placeholder="City" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>Pincode</label>
                                  <input type="number" defaultValue={workObj.pincode} className="form-control" name="pincod" placeholder="Pincode" />
                                </div>
                              </div>
      
                              {/* <div className="col-md-6">
                                <div className="input-style-1">
                                  <label>State</label>
                                  <input type="text" name="state" placeholder="State Name" />
                                </div>
                              </div> */}
                              {/* <div className="col-md-6">
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
                              <label for="program">
                                Program Lauch WhatsApp Messsage
                              </label>
                              <br />
                              <input type="checkbox" id="program" name="programSms" />
                              <label for="program">Birthday WhatsApp Message</label>
                            </div>
                            <div className="col-md-6">
                              <label className="smsHeading">Emil Settings</label>
                              <input type="checkbox" id="program" name="programSms" />
                              <label for="program">Program Lauch Email</label>
                            </div> */}
                            </div>
                            <div className="patientDetailSubmit mt-5 ">
                              <button>Edit Patient</button>
                            </div>
                          </div>
                        </form>
                        ))}      
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default PatientProfile;
