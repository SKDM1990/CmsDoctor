import React from "react";
import "./App.css";
// import SideBar from "./components/Sidebar/SideBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import DoctorDetails from "./pages/DoctorDetails";
import Hospitals from "./pages/Hospitals";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Patinents from "./pages/Patinents";
import AddHospital from "./pages/AddHospital";
import DoctorProfile from "./pages/DoctorProfile";
import Signup from './pages/Signup.jsx';
import EnterOtp from "./pages/EnterOtp";
import PatientProfile from "./pages/PatientProfile";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctorDetail" element={<DoctorDetails />} />
        <Route path="/doctor" element={<Users />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/patients" element={<Patinents />} />
        <Route path="/addHospital/:id" element={<AddHospital />} />
        <Route path="/addHospital" element={<AddHospital />} />
        <Route path="/settings/profile" element={<DoctorProfile />} />
        <Route path="/patientProfile" element={<PatientProfile />} />
        <Route path="/patientProfile/:pid" element={<PatientProfile />} />
        <Route path="/enterOtp" element={<EnterOtp />} />
        <Route path="/appointment" element={<Appointments />} />
        {/* <Route path="*" element={<> not found</>} /> */}
      </Routes>
      {/* </SideBar> */}
    </Router >
  );
}

export default App;
