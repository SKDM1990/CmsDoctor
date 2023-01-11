import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./AddAppointmentBox.css";

export default function AppointmentModel(props) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={props.show}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="addAppointmentBox">
              <div className="appointmentAddBoxHeader">
                <h6>
                  Add Appointment: <span>2:20 - 2:30</span>
                </h6>
              </div>
              <div className="addAppointmentForm">
                <form action="#">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="input-style-1">
                        <label>Patient Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-style-1">
                        <label> PUID: </label>
                        <input
                          type="text"
                          name="patient id"
                          placeholder="Patient Unique ID"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-style-1">
                        <label>Clinic ID:</label>
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone No"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-style-1">
                        <label>Purpose of visit</label>
                        <input type="text" name="city" placeholder="" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-style-1">
                        <label> Mobile No: </label>
                        <input
                          type="number"
                          name="phone"
                          placeholder="Mobile number"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-style-1">
                        <label> Gender: </label>
                        <select name="gender" id="gender">
                          <option value="">Select Gender</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-style-1">
                        <label> Blood Group: </label>
                        <select name="blood-group" id="BloodGroup">
                          <option value="">Select Blood Group</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="A+">A+</option>
                          <option value="B+">B+</option>
                          <option value="AB+">AB+</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input-style-1">
                        <label> Age: </label>
                        <input type="number" name="age" />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="input-style-1">
                        <label>Address</label>
                        <textarea
                          name="shortDesc"
                          placeholder="Type here"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={props.close}>Add Appointment</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
