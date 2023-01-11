import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavbarComp from "../components/NavbarComp/NavbarComp.js";

const Drugs = () => {
  return (
    <div>
      <SideBar>
        <NavbarComp />
        <div className="drugsPage"></div>
      </SideBar>
    </div>
  );
};

export default Drugs;
