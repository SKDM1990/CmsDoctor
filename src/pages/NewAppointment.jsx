import React, { useState } from "react";

import Scheduler from "devextreme-react/scheduler";

import { data } from "./data.js";

import $ from "jquery";
import jQuery from "jquery";

import moment from "moment";
import { useNavigate } from "react-router-dom";
import AppointmentModel from "../components/AddAppointmentBox/AddAppointmentbox";

// const currentDate = moment().format("YYYY-MM-DD");

const NewAppointment = () => {
  const currentDate = new Date(2021, 3, 29);
  const views = ["day", "week", "month"];

  const renderAppointmentTooltip = (model) => {
    return (
      <div>
        <i>
          {model.appointmentData.text} ({model.appointmentData.year})
        </i>
      </div>
    );
  };

  function onAppointmentFormOpening(e) {
    e.cancel = true;
  }

  const [activeDialogue, setActiveDialogue] = useState(false);

  $(document).on("click", ".dx-scheduler-date-table-cell", function (e) {
    e.preventDefault();
    console.log("Empty Cell clicked");
    setActiveDialogue(true);
  });

  const navigate = useNavigate();

  $(document).on("dblclick", ".dx-item-content", function () {
    navigate("/appointmentDetail");
  });
  return (
    <>
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        defaultCurrentView="day"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={11}
        endDayHour={13}
        cellDuration={10}
        // appointmentRender={renderAppointmentTooltip}
        // onAppointmentFormOpening={}
        onAppointmentFormOpening={onAppointmentFormOpening}
      />
      <div>
        <AppointmentModel
          show={activeDialogue}
          close={() => setActiveDialogue(false)}
        />
      </div>
    </>
  );
};

export default NewAppointment;
