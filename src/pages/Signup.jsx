import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="signin-section">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="row g-0 auth-row">
            <div className="col-lg-6">
              <div className="auth-cover-wrapper bg-primary-100">
                <div className="auth-cover">
                  <div className="title text-center">
                    <h1 className="text-primary mb-10">Get Started</h1>
                    <p className="text-medium">
                      Start creating the best possible user experience
                      <br className="d-sm-block" />
                      for you customers.
                    </p>
                  </div>
                  <div className="cover-image">
                    <img
                      src="https://demo.plainadmin.com/assets/images/auth/signin-image.svg"
                      alt=""
                    />
                  </div>
                  <div className="shape-image">
                    <img
                      src="https://demo.plainadmin.com/assets/images/auth/shape.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-6">
              <div className="signup-wrapper">
                <div className="form-wrapper">
                  <h6 className="mb-15">Sign Up Form</h6>
                  <p className="text-sm mb-25">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                  <form action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Name</label>
                          <input type="text" placeholder="Name" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Email</label>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Password</label>
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Confirm Password</label>
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="form-check checkbox-style mb-30">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="checkbox-not-robot"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-not-robot"
                          >
                            I'm not robot
                          </label>
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="button-group d-flex justify-content-center flex-wrap">
                          <button className="main-btn primary-btn btn-hover w-100 text-center">
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                  </form>
                  <div className="singup-option pt-40">
                    {/* <p className="text-sm text-medium text-center text-gray">
                      Easy Sign Up With
                    </p>
                    <div className="button-group pt-40 pb-40 d-flex justify-content-center flex-wrap">
                      <button className="main-btn primary-btn-outline m-2">
                        <i className="lni lni-facebook-filled mr-10" />
                        Facebook
                      </button>
                      <button className="main-btn danger-btn-outline m-2">
                        <i className="lni lni-google mr-10" />
                        Google
                      </button>
                    </div> */}
                    <p className="text-sm text-medium text-dark text-center">
                      Already have an account? <Link href="/">Sign In</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
      </section>
    </>
  );
};

export default Signup;
