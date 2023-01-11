import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="main-wrapper">
        <section className="Deshbord mt-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon purple">
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">Patient</h6>
                    <h3 className="text-bold mb-10">10</h3>
                  </div>
                </div>
                {/* End Icon Cart */}
              </div>
              {/* End Col */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon success">
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">Appointment</h6>
                    <h3 className="text-bold mb-10">74,567</h3>
                  </div>
                </div>
                {/* End Icon Cart */}
              </div>
              {/* End Col */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon primary">
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">Total Expense</h6>
                    <h3 className="text-bold mb-10">24,567</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="icon-card mb-30">
                  <div className="icon orange">
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                  <div className="content">
                    <h6 className="mb-10">New User</h6>
                    <h3 className="text-bold mb-10">34567</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
