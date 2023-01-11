import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../css/AddDrugBox.css";
import { BsPlus } from "react-icons/bs";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Drug
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
          <div className="addDrugBoxHead">
            <h6>Add Drug</h6>
          </div>
          <div className="Facilities-Section2-tabpanel">
            <form action="#">
              <Tabs
                defaultActiveKey="DrugDetails"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
                {/* ========== Drugs Details ============= */}
                <Tab eventKey="DrugDetails" title="Drug Details">
                  <div className="Treatment-Con">
                    <div className="input-style-1">
                      <label>Brand Name</label>
                      <input type="text" placeholder="Enter Brand Name" />
                    </div>
                    <div className="input-style-1">
                      <label>Company Name</label>
                      <input type="text" placeholder="Enter Company Name" />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-style-1">
                          <label>MRP</label>
                          <input
                            type="number"
                            placeholder="Enter MRP in Rupees "
                          />
                        </div>
                      </div>
                      <div className="col-md-6">{/* empty sapce */}</div>
                      <div className="col-md-6">
                        <div className="input-style-1">
                          <label>Generic Name</label>
                          <input type="text" placeholder="Enter Generic Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-style-1">
                          <input type="checkbox" />
                          <label>Show Generic Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="radio"
                          id="oral"
                          name="oral"
                          value="oral"
                        />
                          <label for="oral">Oral</label> {" "}
                        <input
                          type="radio"
                          id="nonOral"
                          name="nonOral"
                          value="nonOral"
                        />
                          <label for="nonOral">Non-Oral</label> {" "}
                      </div>
                      <div className="col-md-6">{/* empty sapce */}</div>
                      <div className="col-12">
                        <input
                          type="radio"
                          id="Syrup"
                          name="Syrup"
                          value="Syrup"
                        />
                          <label for="Syrup">Syrup</label> {" "}
                        <input
                          type="radio"
                          id="Drops"
                          name="Drops"
                          value="Drops"
                        />
                          <label for="Drops">Drops</label> {" "}
                        <input
                          type="radio"
                          id="Tablet"
                          name="Tablet"
                          value="Tablet"
                        />
                          <label for="Tablet">Tablet</label> {" "}
                        <input
                          type="radio"
                          id="Capsule"
                          name="Capsule"
                          value="Capsule"
                        />
                          <label for="Capsule">Capsule</label> {" "}
                        <input
                          type="radio"
                          id="Capsule"
                          name="Capsule"
                          value="Capsule"
                        />
                          <label for="Capsule">Capsule</label> {" "}
                        <input
                          type="radio"
                          id="Vial"
                          name="Vial"
                          value="Vial"
                        />
                          <label for="Vial">Vial</label> {" "}
                        <input
                          type="radio"
                          id="Sachet"
                          name="Sachet"
                          value="Sachet"
                        />
                          <label for="Sachet">Sachet</label> {" "}
                        <input type="radio" id="RTD" name="RTD" value="RTD" /> {" "}
                        <label for="RTD">RTD</label> {" "}
                        <input
                          type="radio"
                          id="OralPowder"
                          name="Oral Powder"
                          value="Oral Powder"
                        />
                          <label for="OralPowder">Oral Powder</label> {" "}
                        <input
                          type="radio"
                          id="Biscuit"
                          name="Biscuit"
                          value="Biscuit"
                        />
                          <label for="Biscuit">Biscuit</label> {" "}
                        <input
                          type="radio"
                          id="diskette"
                          name="diskette"
                          value="diskette"
                        />
                          <label for="diskette">Diskette</label> {" "}
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* ========== Strength Details ============= */}
                <Tab eventKey="StrengthDetails" title="Strength Details">
                  <div className="Treatment-Con">
                    <div className="row">
                      <div className="col-4">
                        <div className="input-style-1">
                          <h6>1 Capsule = </h6>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="input-style-1">
                          <label>Strength</label>
                          <input type="number" placeholder="Strenght" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="input-style-1">
                          <label for="strenghtUnit">Strenght Unit</label>
                          <select name="strength Unit" id="strenghtUnit">
                            <option value="mg">mg</option>
                            <option value="ml">ml</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="addStrength">
                          <h6>
                            {" "}
                            <span>
                              {" "}
                              <BsPlus />{" "}
                            </span>{" "}
                            Add Strength
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* ========== Other Detail ============= */}
                <Tab eventKey="OtherDetails" title="Other Details">
                  <div className="Treatment-Con">
                    <div className="otherDetails">
                      <div className="frequencyBox">
                        <div className="row">
                          <div className="col-6">
                            <h6>Frequency</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
