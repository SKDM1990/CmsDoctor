import React from "react";
import "../css/DoctorProfile.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import DoctorImg from "../Images/doctor-user.png";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";

const DoctorProfile = () => {
  return (
    <div>
      <SideBar>
        <NavbarComp />
        <div className="doctorProfileCover">
          <div className="doctorCoverPhoto">
            <div className="doctorProfilePicture">
              <img src={DoctorImg} />
            </div>
          </div>
          <div className="emptySpace m-0 p-0">{/* empty space */}</div>
          <div className="doctorProfileText m-0 ">
            <div className="row">
              <div className="col-3">
                <div className="profileTextHead">
                  <h2>Dr. Rahul Rane</h2>
                  <p>Orthopedic </p>
                </div>
              </div>
              <div className="col-9">
                <div className="profileTextDesc">
                  <p>
                    Dr. Rahul Rane Dr. Rahul Rane is a dynamic Orthopaedic
                    Specialist Doctor with more than 13 years of experience in
                    this field . He has done his Master in Orthopaedics ( MS
                    Ortho ) from Prestigious Lokmanya Tilak Medical College ,
                    Mumbai , Which is the largest Trauma Centre in Mumbai and
                    Western India.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="personalInfo">
              <div className="personalInfoHead">
                <h2>Personal Information</h2>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>Date of Birth</h6>
                    <h4>1982-08-06</h4>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>Gender</h6>
                    <h4>Male</h4>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>Category</h6>
                    <h4>Orthopedic and Spine Surgon</h4>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>Telephone Number</h6>
                    <h4>20002456</h4>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>Mobile Number</h6>
                    <h4>9876543215</h4>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>E-mail</h6>
                    <h4>rahulrane@gmail.com</h4>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>Degree</h6>
                    <h4>MBBS, MS, DNB</h4>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="personalInfoCol">
                    <h6>Additional Qualification</h6>
                    <h4>MNAMS, FISS Korea</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='personalInfo'>
                    <div className='personalInfoHead'>
                        <h2>Social Links</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                            <div className='personalInfoCol'>
                                <h6>Website</h6>
                                <h4>www.drrahulrane.com</h4>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                            <div className='personalInfoCol'>
                                <h6>Instagram Id:</h6>
                                <h4>dr.rahulrane</h4>
                                
                            </div>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                            <div className='personalInfoCol'>
                                <h6>Facebook Page</h6>
                                <h4>Dr Rahul Rane</h4>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                            <div className='personalInfoCol'>
                                <h6>Google MyBusiness</h6>
                                <h4> https://g.co/kgs/wMmD2K</h4>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                            <div className='personalInfoCol'>
                                <h6>Twitter Link</h6>
                                <h4>https://g.co/kgs/wMmD2K</h4>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                            <div className='personalInfoCol'>
                                <h6>Blogs</h6>
                                <h4>https://g.co/kgs/wMmD2K</h4>
                            </div>
                        </div>
                       
                    </div>
                </div> */}
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default DoctorProfile;
