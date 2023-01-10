import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import {
  useAddNewHospitalMutation,
  useViewOnlyHospitalQuery,
  useEditHospitalMutation,
} from "../services/userAuthAPI";
import "../css/AddHospital.css";
import { useParams } from "react-router-dom";
import HospitalVector from "../Images/hospital-vector.png";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
import { getToken } from "../services/localStorageServices";

const AddHospital = () => {
  const [file, setFile] = useState();
  const [imageFile, setImageFile] = useState();
  const [activeImage, setActiveImage] = useState("fetchImage");
  const navigate = useNavigate();
  const { access_token } = getToken();
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [addNewHospital, { isLoading }] = useAddNewHospitalMutation();
  const [editHospital, { isupdate }] = useEditHospitalMutation();
  const { data, isSuccess } = useViewOnlyHospitalQuery({
    token: access_token,
    hospital_ID: id,
  });
  const [listData, setListData] = useState([]);
  console.log(data);
  useEffect(() => {
    if (id) {
      setListData(data);
    }
  }, [data]);

  const [server_error_side, setServerError_side] = useState({});
  function handleChange(e) {
    setFile(e.target.files[0]);
    setImageFile(URL.createObjectURL(e.target.files[0]));
    setActiveImage("updateImage");
  }

  console.log(file);
  console.log(imageFile);
  console.log(activeImage);

  const submitHospital = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = new FormData();
    formData.append("logo", file);
    formData.append("hospital_Name", data.get("name"));
    formData.append("address", data.get("address"));
    formData.append("phone_no", data.get("phone"));
    formData.append("Description", data.get("shortDesc"));
    formData.append("city", data.get("city"));
    formData.append("state", data.get("state"));
    formData.append("token", access_token);

    const req = await addNewHospital(formData);
    console.log(req);
    if (req.error == "PARSING_ERROR") {
      setServerError_side(req.error.data);
    }

    if (req.data) {
      navigate("/hospitals");
    }
  };

  const EditHospital = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = new FormData();
    formData.append("profile_Image", file);
    formData.append("hospitalName", data.get("name"));
    formData.append("address", data.get("address"));
    formData.append("phone_no", data.get("phone"));
    formData.append("Description", data.get("shortDesc"));
    formData.append("city", data.get("city"));
    formData.append("state", data.get("state"));
    formData.append("token", access_token);
    formData.append("list_of_Account", id);

    const req = await editHospital(formData);
    console.log(req);
    if (req.error) {
      setServerError_side(req.error.data);
    }

    if (req.data) {
      navigate("/hospitals");
    }
  };

  return (
    <div>
      <SideBar>
        <NavbarComp />
        {/* =========== Add Hospital Form ================ */}
        <section className="doctorDetails">
          <div className="conainer-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="auth-cover-wrapper bg-primary-100">
                  <div className="auth-cover">
                    <div className="title text-center">
                      <h1 className="text-primary mb-10">
                        {" "}
                        {listData == "" ? "Add Hospital" : "Edit Hospital"}
                      </h1>
                    </div>
                    <div className="cover-image" onSubmit={EditHospital}>
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
                <div className="card-style settings-card-2 mb-30">
                  {listData == "" ? (
                    <form onSubmit={submitHospital}>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Hospital Name</label>
                            <input
                              type="text"
                              className="name1"
                              name="name"
                              placeholder="Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Address </label>
                            <input
                              type="text"
                              name="address"
                              placeholder="Enter Address"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>Phone No</label>
                            <input
                              type="number"
                              name="phone"
                              placeholder="Phone No"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>City </label>
                            <input
                              type="text"
                              name="city"
                              placeholder="Enter City Name"
                            />
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
                              onChange={handleChange}
                              className="form-control"
                              id="customFile"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="input-style-1">
                            <label>State </label>
                            <input
                              type="text"
                              name="state"
                              placeholder="Enter State"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-style-1">
                            <label>Hospital Short Description</label>
                            <textarea
                              name="shortDesc"
                              placeholder="Type here"
                              rows={6}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Add Hospital
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    ""
                  )}
                  {listData &&
                    listData.map((workObj, index) => (
                      <form onSubmit={EditHospital}>
                        <div className="row">
                          <div className="col-12 mb-5">
                            <input
                              type="file"
                              id="ProfileImamges"
                              className="productImages"
                              onChange={handleChange}
                              name="image"
                              placeholder=""
                              accept=".jpg, .png, jpeg"
                            />
                            <link
                              href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                              rel="stylesheet"
                            />
                            <div className="profileImage">
                              <img
                                src={
                                  activeImage == "fetchImage"
                                    ? workObj.logo
                                    : imageFile
                                }
                                className="main-profile-img fatchImage"
                              />
                              <label className="iputIcon" for="ProfileImamges">
                                <i className="fa fa-edit"></i>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="input-style-1">
                              <label>Hospital Name</label>
                              <input
                                type="text"
                                className="name1"
                                defaultValue={workObj.first_name}
                                name="name"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="input-style-1">
                              <label>Address </label>
                              <input
                                type="text"
                                name="address"
                                defaultValue={workObj.address}
                                placeholder="Enter Address"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="input-style-1">
                              <label>Phone No</label>
                              <input
                                type="number"
                                defaultValue={workObj.mobile}
                                name="phone"
                                placeholder="Phone No"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="input-style-1">
                              <label>City </label>
                              <input
                                type="text"
                                defaultValue={workObj.city}
                                name="city"
                                placeholder="Enter City Name"
                              />
                            </div>
                          </div>
                          {/* <div className="col-12 col-lg-6">
                            <div className="input-style-1">
                              <label className="form-label" for="customFile">
                                Profile Image
                              </label>
                              <input
                                name='image'
                                type="file"
                                onChange={handleChange}
                                className="form-control"
                                id="customFile"
                              />
                            </div>
                          </div> */}
                          <div className="col-12 col-lg-12">
                            <div className="input-style-1">
                              <label>State </label>
                              <input
                                type="text"
                                defaultValue={workObj.state}
                                name="state"
                                placeholder="Enter State"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-style-1">
                              <label>Hospital Short Description</label>
                              <textarea
                                name="shortDesc"
                                placeholder="Type here"
                                rows={6}
                                defaultValue={workObj.description}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                              Edit Hospital
                            </button>
                          </div>
                        </div>
                      </form>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SideBar>
    </div>
  );
};

export default AddHospital;
