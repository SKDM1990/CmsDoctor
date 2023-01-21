import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { getToken } from "../../services/localStorageServices";
import Slide from "@mui/material/Slide";
import { BiPlus } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import {
  useHospitalScheduleMutation,
  useHospitalScheduleListQuery,
  useDeletehospitalScheduleDayMutation,
} from "../../services/userAuthAPI";

function AlertDialogSlide(props) {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  const [hospitalSchedule, { isLoading }] = useHospitalScheduleMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { access_token } = getToken();

  const addDayTime = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = new FormData();

    formData.append("hospital_Week_name", data.get("days"));
    formData.append("hospital_Start_Time", data.get("startTime"));
    formData.append("hospital_End_Time", data.get("endTime"));
    formData.append("hospital_Slot_Duration", data.get("slotDuration"));
    formData.append("hospital_id", props.hospitalID);
    formData.append("token", props.token);

    const req = await hospitalSchedule(formData);
    console.log(req);
  };

  // ================= Show Schedule time list ====================

  const [sheduleList, setSheduleList] = useState([]);

  const { data, isSuccess } = useHospitalScheduleListQuery({
    hospital_id: props.hospitalID,
    token: props.token,
  });

  React.useEffect(() => {
    if (data && isSuccess) {
      setSheduleList(data);
    }
  }, [data, isSuccess]);

  console.log(sheduleList);

  // ============ Shedule day delete =====================

  const [deleteScheduleDay, { isDeleting }] =
    useDeletehospitalScheduleDayMutation();

  const deleteDayTime = async (hospital_schedule_Id) => {
    const formData = new FormData();
    formData.append("token", access_token);
    formData.append("Hospital_Sedule_Id", hospital_schedule_Id);
    const req = await deleteScheduleDay(formData);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        keepMounted
        onClose={props.close}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className="AddScheduleHead">
            <h6>{props.hospitalName} Day and Time</h6>
          </div>

          <div className="addDayTime">
            <div className="inputBox">
              <div className="inputBoxHead">
                <div className="inputboxHeadInner row">
                  <div className="inputboxHeadBox col-3">
                    <h6>Day</h6>
                  </div>
                  <div className="inputboxHeadBox col-3">
                    <h6>Start Time</h6>
                  </div>
                  <div className="inputboxHeadBox col-3">
                    <h6>End Time</h6>
                  </div>
                  <div className="inputboxHeadBox col-3">
                    <h6>Slot Time</h6>
                  </div>
                  {/* <div className="col-1"></div> */}
                </div>
              </div>

              {/* ========== Added Day ande Time ========== */}
              <div className="addedDayTime mt-2">
                {sheduleList &&
                  sheduleList.map((listObject, index) => (
                    <div key={index} className="row addedDayTimeInner">
                      <div className="addedDayTimeBox col-3 d-flex justify-content-center">
                        <h6>{listObject.hospital_weeek_name}</h6>
                      </div>
                      <div className="addedDayTimeBox col-3 d-flex justify-content-center">
                        <h6> {listObject.hospital_start_time}</h6>
                      </div>

                      <div className="addedDayTimeBox col-3 d-flex justify-content-center">
                        <h6>{listObject.hospital_end_time} </h6>
                      </div>

                      <div className="addedDayTimeBox col-2 m-0 d-flex justify-content-center">
                        <h6>{listObject.hospital_slot_duration}</h6>
                      </div>

                      <div
                        className="col-1 addedDayTimeDeleteIcon d-flex justify-content-start"
                        onClick={() =>
                          deleteDayTime(listObject.hospital_schedule_Id)
                        }
                      >
                        <MdDelete />
                      </div>
                    </div>
                  ))}
              </div>

              {/* ======== Input Box for Say and Time ====== */}
              <form onSubmit={addDayTime}>
                <div className="inputBoxInput">
                  <div className="row inputBoxInoutInner d-flex justify-content-space-around">
                    {/* <div className="inputBoxInoutInnerDiv d-flex justify-content-center ">
                      <div className="addInputButton">
                        <BiPlus />
                      </div>
                    </div> */}

                    <div className="col-3 inputBoxInoutInnerDiv">
                      <div className="input-style-1">
                        <select name="days" id="days">
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednusday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-3 inputBoxInoutInnerDiv">
                      <div className="input-style-1">
                        <input type="time" name="startTime" placeholder="" />
                      </div>
                    </div>
                    <div className="col-3 inputBoxInoutInnerDiv">
                      <div className="input-style-1">
                        <input type="time" name="endTime" placeholder="" />
                      </div>
                    </div>
                    <div className="col-2 inputBoxInoutInnerDiv">
                      <div className="input-style-1">
                        <input
                          type="slotDuration"
                          name="slotDuration"
                          placeholder="Slot Minutes"
                        />
                      </div>
                    </div>
                    <div className="col-1 inputBoxInoutInnerDiv d-flex justify-content-center align-items-center">
                      <button type="submit" className="checkCircleButton">
                        <BsCheck2Circle />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialogSlide;
