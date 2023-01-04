import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import '../css/Appointments.css';
import { RiStethoscopeFill, RiFileEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments,
    ViewSwitcher,
    Toolbar,
    DragDropProvider,
    EditRecurrenceMenu,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useState } from 'react';

const appointments = [{
    title: 'Amar Upadhyay',
    startDate: new Date(2018, 5, 25, 9, 30),
    endDate: new Date(2018, 5, 25, 10, 0),
    id: 0,
    rRule: 'FREQ=DAILY;COUNT=1',
    exDate: '20180628T063500Z,20180626T063500Z',
}, {
    title: 'Mahesh Gandhi',
    startDate: new Date(2018, 5, 25, 12, 30),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    rRule: 'FREQ=DAILY;COUNT=1',
    exDate: '20180627T091100Z',
}, {
    title: 'Sarita Mehra',
    startDate: new Date(2018, 5, 26, 12, 0),
    endDate: new Date(2018, 5, 26, 12, 30),
    id: 1,
    rRule: 'FREQ=DAILY;COUNT=1',
    exDate: '20180627T091100Z',
}, {
    title: 'Ajit Mehta',
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 0),
    id: 2,
    rRule: 'FREQ=DAILY;COUNT=1',
}];



export default class Demo extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const { data } = this.state;
        const appearBox = () => {
            console.log("on click working");
            var AppointmentcalenderBox = document.getElementsByClassName(
                "Appointment-appointment"
            );
            AppointmentcalenderBox.classList.add("appointmentDetailBoxAppear");
        };
        return (
            <Paper>
                <Scheduler
                    data={data}
                >
                    <ViewState
                        defaultCurrentDate="2018-06-25"
                    />
                    <EditingState
                        onCommitChanges={this.commitChanges}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={15}
                    />
                    <MonthView />

                    <Appointments />


                    <Toolbar />
                    <ViewSwitcher />

                    <EditRecurrenceMenu />

                    <DragDropProvider />
                </Scheduler>



            </Paper>

        );
    }
}
