import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";
import AddDrugBox from "../components/AddDrug/AddDrugBox";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import Zoom from "react-reveal/Zoom";
// import Slide from "react-reveal/Slide";
// import Bounce from "react-reveal/Bounce";
// import Fade from "react-reveal/Fade";
import { BiPlus } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender, SlOptionsVertical } from "react-icons/sl";
import { AiTwotoneSave } from "react-icons/ai";
import "../css/appointmentDetails.css";
// images
import UserImg from "../Images/user-icon.jpg";

const appointmentDetail = () => {
  return (
    <div>
      <SideBar>
        <NavbarComp />
        <div className="prescriptionPage">
          <div className="row">
            <div className="col-4">
              <div className="prescriptionSuggestSection">
                <div className="patientProfilePss">
                  <div className="patientImgName">
                    <div className="patientImg">
                      <img src={UserImg} alt="" />
                    </div>
                    <div className="patientName">
                      <h6>Arbaz Ansari </h6>
                      <p>
                        23 Y 4 M <span>| Mob: 9876543212</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wordSuggestionSearchBox">
                  <div className="search_field">
                    <input
                      type="text"
                      className="input"
                      placeholder="Search Hospital"
                    />
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="wordSuggestionsBox">
                  <div className="wordSuggestionWords">
                    <span>
                      <button>Tab FOLITRAX (7.5mg)</button>
                    </span>
                    <span>
                      <button>Tab FALVOITE(5MG)</button>
                    </span>
                    <span>
                      <button>Oral Powder GO LEAN</button>
                    </span>
                    <span>
                      <button>Tab HCQ (200mg)</button>
                    </span>
                    <span>
                      <button>Tab FAWOUND DS</button>
                    </span>
                    <span>
                      <button>Tab FRACSURE PLUS</button>
                    </span>
                    <span>
                      <button>Capsule ALTRADAY</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="diagnosisFromSection">
                <div className="Facilities-Section2-tabpanel">
                  <Tabs
                    defaultActiveKey="DIAGNOSIS"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                  >
                    {/* ========== Diagnosis Tab ============= */}
                    <Tab eventKey="DIAGNOSIS" title="DIAGNOSIS">
                      <div className="Treatment-Con">
                        <form action="#">
                          {/* Diagnois INput Box */}
                          <div className="inputBox">
                            <div className="inputBoxHead">
                              <div className="inputBoxTitle">
                                <h6>Diagnosis</h6>
                              </div>
                              <div className="inputBoxButton">
                                <button>View Medical History</button>
                              </div>
                            </div>
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="addInputButton">
                                    <BiPlus />
                                  </div>
                                </div>
                                <div className="col-10">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="inputBox centerInputBox">
                            <div className="inputBoxHead ">
                              <div className="inputBoxTitle">
                                <h6>Complaints</h6>
                              </div>
                              <div className="inputBoxTitle">
                                <h6>Duration</h6>
                              </div>
                            </div>
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="addInputButton">
                                    <BiPlus />
                                  </div>
                                </div>
                                <div className="col-5">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-2">
                                  <div className="input-style-1">
                                    <select name="duration" id="duration">
                                      <option value="days">Days</option>
                                      <option value="months">Months</option>
                                      <option value="years">Years</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="inputBox">
                            <div className="inputBoxHead ">
                              <div className="inputBoxTitle">
                                <h6>Findings</h6>
                              </div>
                            </div>
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="addInputButton">
                                    <BiPlus />
                                  </div>
                                </div>
                                <div className="col-10">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="inputBox mt-4">
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="addInputButton">
                                    <BiPlus />
                                  </div>
                                </div>
                                <div className="col-10">
                                  <div className="input-style-1">
                                    <textarea
                                      className="form-control"
                                      rows={4}
                                      type="text"
                                      placeholder="Enter detailed clinical/ surgical notes here"
                                    />
                                  </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Tab>

                    {/* ========== Prescription Tab ============= */}
                    <Tab eventKey="PRESCRIPTION" title="PRESCRIPTION">
                      <div className="Treatment-Con">
                        <div className="prescriptionSection">
                          {/* Add drugs button */}
                          <div className="addDrugsButton">
                            <AddDrugBox />
                            {/* <button>Add New Drug</button>{" "} */}
                            <span>Add drugs to your directory</span>
                          </div>

                          {/* Add Gugs Allergy Button */}
                          <div className="drugAllergySection">
                            <div className="drugAllerygyText">
                              <h6>Drug Allery</h6>
                            </div>
                            <div className="drugAllergyButtons">
                              <div className="drugAllergyAddIcon">
                                <BiPlus />
                              </div>
                              <div className="allergyBtn">
                                <button>Add Allergy</button>
                              </div>
                              <div className="medicalHistoryBtn">
                                <button>View Medical History</button>
                              </div>
                            </div>
                          </div>

                          {/* Add Prescription Box */}
                          <div className="inputBox ">
                            <div className="inputBoxHead inputBoxPrescription">
                              <div class="row">
                                <div className="col-2">
                                  <div className="inputBoxTitle">
                                    <h6>Drug</h6>
                                  </div>
                                </div>
                                <div className="col-2">
                                  <div className="inputBoxTitle">
                                    <h6>Dosage</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxTitle">
                                    <h6>M</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxTitle">
                                    <h6>A</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxTitle">
                                    <h6>E</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxTitle">
                                    <h6>N</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxTitle">
                                    <h6>SOS</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxTitle">
                                    <h6>Stat</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxTitle">
                                    <h6>Duration</h6>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxHeadIcons d-flex">
                                    <div className="headIcon">
                                      <BsFillPrinterFill />
                                    </div>
                                    <div className="headIcon">
                                      <MdDelete />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inputBoxInput">
                              <div class="row">
                                <div className="col-2">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-2">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="input-style-1">
                                    <input
                                      type="checkbox"
                                      name="morning"
                                      value="morning"
                                    />
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="input-style-1">
                                    <input
                                      type="checkbox"
                                      name="afternoon"
                                      value="afternoon"
                                    />
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="input-style-1">
                                    <input
                                      type="checkbox"
                                      name="evening"
                                      value="evening"
                                    />
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="input-style-1">
                                    <input
                                      type="checkbox"
                                      name="night"
                                      value="night"
                                    />
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="input-style-1">
                                    <input
                                      type="checkbox"
                                      name="sos"
                                      value="sos"
                                    />
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="input-style-1">
                                    <input
                                      type="checkbox"
                                      name="stat"
                                      value="stat"
                                    />
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="input-style-1 prescreptionDuration">
                                    <input type="text" name="duration" />
                                    <select name="duration" id="duration">
                                      <option value="days">Days</option>
                                      <option value="months">Months</option>
                                      <option value="years">Years</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="inputBoxHeadIcons">
                                    <div className="headIcon">
                                      <MdDelete />
                                    </div>
                                    <div className="headIcon">
                                      <SlOptionsVertical />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="inputBoxInputText">
                                <p>
                                  Please use the search pan to add drugs to this
                                  prescription
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Add instructions box */}
                          <div className="inputBox mt-4">
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-10">
                                  <div className="input-style-1">
                                    <textarea
                                      className="form-control"
                                      rows={4}
                                      type="text"
                                      placeholder="Enter specific prescription instructions here"
                                    />
                                  </div>
                                </div>
                                <div className="col-2 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>

                    {/* ========== Instructions Tab ============= */}
                    <Tab eventKey="INSTRUCTIONS" title="INSTRUCTIONS">
                      <div className="Treatment-Con">
                        <from action="#">
                          {/* test instruction box */}
                          <div className="inputBox testSection">
                            <div className="inputBoxHead">
                              <div className="inputBoxTitle testInputHead d-flex justify-content-center align-items-center">
                                <div>
                                  <h6 className="m-0">Tests</h6>
                                </div>
                                <div className="inputTitleIcon">
                                  <CiLocationOn />
                                </div>
                                <div className="inputTitleIcon">
                                  <SlCalender />
                                </div>
                              </div>
                              <div className="inputBoxButton d-flex">
                                <div className="inputBoxBtnIcon inputTestIcon">
                                  <BsFillPrinterFill />
                                </div>
                                <button>View Medical History</button>
                              </div>
                            </div>
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="addInputButton">
                                    <BiPlus />
                                  </div>
                                </div>
                                <div className="col-10">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Instructions Box */}
                          <div className="inputBox">
                            <div className="inputBoxHead">
                              <div className="inputBoxTitle instructionsInputBoxTitle">
                                <h6>
                                  Instructions{" "}
                                  <span>
                                    Please limit your instructions to 75
                                    characters
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="addInputButton">
                                    <BiPlus />
                                  </div>
                                </div>
                                <div className="col-10">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Procedures Box */}
                          <div className="inputBox">
                            <div className="inputBoxHead ">
                              <div className="inputBoxTitle proceduresInputTitle d-flex">
                                <div>
                                  {" "}
                                  <h6 className="m-0">Procedures</h6>
                                </div>
                                <div className="inputTitleIcon">
                                  <CiLocationOn />
                                </div>
                                <div className="inputTitleIcon">
                                  <SlCalender />
                                </div>
                              </div>
                            </div>
                            <div className="inputBoxInput">
                              <div className="row">
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="addInputButton">
                                    <BiPlus />
                                  </div>
                                </div>
                                <div className="col-10">
                                  <div className="input-style-1">
                                    <input type="text" placeholder="" />
                                  </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                  <div className="checkCircleButton">
                                    <BsCheck2Circle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Handouts Box */}
                          <div className="inputBox">
                            <div className="inputBoxHead">
                              <div className="inputBoxTitle handoutInputTitle">
                                <h6>
                                  Handouts/ Videos{" "}
                                  <span>
                                    Please use the search pan to add Handouts{" "}
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </from>
                      </div>
                    </Tab>

                    {/* ========== Summary Tab ============= */}
                    <Tab eventKey="SUMMARY" title="SUMMARY">
                      <div className="Treatment-Con m-0 p-0">
                        {/* save print buttons  */}
                        <div className="savePrintButtons">
                          <div className="savePrintButton">
                            <button>
                              <span className="savePrintBtnIcon">
                                <AiTwotoneSave />
                              </span>
                              Save
                            </button>
                          </div>
                          <div className="savePrintButton">
                            <button>
                              <span className="savePrintBtnIcon">
                                <BsFillPrinterFill />
                              </span>
                              Save and Print
                            </button>
                          </div>
                          <div className="savePrintButton">
                            <button>Next Appointment</button>
                          </div>
                          <div className="savePrintButton">
                            <button>Save as Template</button>
                          </div>
                        </div>

                        {/* Name and complaints section */}
                        <div className="nameComplaintSection">
                          <div className="nameLine">
                            <div className="nameAge d-flex">
                              <h6>Sunny Jaiswal</h6>
                              <h6>
                                21 <span>Y</span>
                              </h6>
                              <h6>
                                7 <span>M</span> <span>/</span>
                              </h6>
                              <h6>
                                Male <span>(987)</span>
                              </h6>
                            </div>
                            <div className="nameLineDate">
                              <h6>5th January 2023</h6>
                            </div>
                          </div>
                          <hr />
                          <div className="complaintsDiagnosisSmy">
                            <div className="row">
                              <div className="col-6">
                                <h6>Complaints</h6>
                                <ol>
                                  <li>Right Wrist Pain</li>
                                  <li>
                                    Ankle Pain due to twisting since 2 days
                                  </li>
                                </ol>
                              </div>
                              <div className="col-6">
                                <h6>Diagnosis</h6>
                                <ol>
                                  <li>Knee Pain</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Drugs Section */}
                        <div className="drugsSectionsSmy">
                          <div className="drugsHeadSmy">
                            <h6>
                              Drugs <span>(Rx)</span>
                            </h6>
                          </div>
                          <div className="drugsListSmy">
                            {/* <table>
                              <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                              </tr>
                              <tr>
                                <td>TAB FOLVITE</td>
                                <td>1 Morning, 1 Night</td>
                                <td>15 days</td>
                              </tr>
                              <tr>
                                <td>SYP CYPON </td>
                                <td>10ml Night</td>
                                <td>15 days</td>
                              </tr>
                              <tr>
                                <td>TAB FRACTSURE PLUS</td>
                                <td>2 TABS Morning </td>
                                <td>10 days</td>
                              </tr>
                            </table> */}
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Drug Name</th>
                                  <th scope="col">Time </th>
                                  <th scope="col">Duration</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>TAB FOLVITE</td>
                                  <td>1 Morning, 1 Night</td>
                                  <td>
                                    <div className="careTakerNo">15 days</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>SYP CYPON </td>
                                  <td>10ml Night</td>
                                  <td>
                                    <div className="careTakerNo">15 days</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>TAB FRACTSURE PLUS</td>
                                  <td>2 TABS Morning</td>
                                  <td>
                                    <div className="careTakerNo">10 days</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="drugsInstructionsSm">
                            <h6>SPECIFIC DRUG INSTRUCTIONS:</h6>
                            <p>Take rest after taking medicines.</p>
                            <p>Don't skip meals.</p>
                          </div>
                        </div>

                        <hr />

                        {/* ===== Instructions ===== */}
                        <div className="instructionsBoxesSmy">
                          <div className="row">
                            <div className="col-6">
                              <div className="instructionsBoxSmy">
                                <h6>INSTRUCTIONS:</h6>
                                <ol>
                                  <li>Apple Crep Bandage</li>
                                  <li>Apply Ice pack</li>
                                </ol>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="instructionsBoxSmy">
                                <h6>INVESTIGATION ADVISED:</h6>
                                <ol>
                                  <li>
                                    X ray Ankle AP & LAT View to be done on 7th
                                    Jan
                                  </li>
                                  <li>Blood test</li>
                                </ol>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="instructionsBoxSmy">
                                <h6>PROCEDURES:</h6>
                                <ol>
                                  <li>Plaster</li>
                                </ol>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="instructionsBoxSmy">
                                <h6>HANDOUTS:</h6>
                                <ol>
                                  <li>Knee- Problems and solution </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default appointmentDetail;
