import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/userAuthAPI";
import { getToken, storeToken } from "../services/localStorageServices";
import { useDispatch } from "react-redux";
import { setUserToken } from "../features/authSlice";
import "../css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [server_error, setServerError] = useState({});
  const [server_error_side, setServerError_side] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // ================================= Validation ===============================
    var phone;
    var password;

    if (data.get("phone") == "") {
      phone = "This field is required.";
    } else if (data.get("phone").length > 10) {
      phone = "Please enter valid number.";
    } else if (data.get("phone").length < 10) {
      phone = "Please enter valid number.";
    }

    if (data.get("password") == "") {
      password = "This field is required.";
    }

    const errorValidation = {
      phone: phone,
      password: password,
    };

    const actualData = {
      phone: data.get("phone"),
      password: data.get("password"),
    };

    console.log(errorValidation);
    setServerError(errorValidation);

    if (
      data.get("phone") != "" &&
      data.get("phone").length == 10 &&
      data.get("password") != ""
    ) {
      const res = await loginUser(actualData);
      console.log(res);
      if (res.error) {
        setServerError_side(res.error.data);
      }

      if (res.data) {
        // fetch(
        //   "https://2factor.in/API/V1/52022fd1-7569-11ed-9158-0200cd936042/SMS/" +
        //     res.data.phone +
        //     "/" +
        //     res.data.otp +
        //     "/"
        // )
        //   .then((res) => res.json())
        //   .then((result) => {
        //     console.log(result);
        //   });
        storeToken(res.data.token);
        dispatch(setUserToken({ token: res.data.token }));
        navigate("/enterOtp");
      }
    }
  };

  return (
    <div>
      <section className="signin-section">
        <div className="container-fluid">
          <div className="row g-0 auth-row">
            <div className="col-lg-6">
              <div className="auth-cover-wrapper bg-primary-100">
                <div className="auth-cover">
                  <div className="title text-center">
                    <h1 className="text-primary mb-10">Welcome Back</h1>
                    <p className="text-medium">
                      Sign in to your Existing account to continue
                    </p>
                  </div>
                  <div className="cover-image">
                    <img
                      src="https://demo.plainadmin.com/assets/images/auth/signin-image.svg"
                      alt=""
                    />
                  </div>
                  <div className="shape-image">
                    {/* <img
                      src="https://demo.plainadmin.com/assets/images/auth/shape.svg"
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="signin-wrapper">
                <div className="form-wrapper">
                  <h6 className="mb-15">Sign In Form</h6>
                  <p className="text-sm mb-25">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Phone</label>
                          <input
                            type="phone"
                            placeholder="Phone Number"
                            name="phone"
                          />
                          {server_error.phone ? (
                            <span style={{ color: "red" }}>
                              {" "}
                              {server_error.phone}{" "}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                          />
                          {server_error.password ? (
                            <span style={{ color: "red" }}>
                              {" "}
                              {server_error.password}{" "}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-xxl-6 col-lg-12 col-md-6">
                        <div className="form-check checkbox-style mb-30">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="checkbox-remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-remember"
                          >
                            Remember me next time
                          </label>
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-xxl-6 col-lg-12 col-md-6">
                        <div className="text-start text-md-end text-lg-start text-xxl-end mb-30">
                          <a
                            href="reset-password.html"
                            className="hover-underline"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-12">
                        <div className="button-group d-flex justify-content-center flex-wrap">
                          <button
                            className="main-btn primary-btn btn-hover w-100 text-center"
                            type="submit"
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                      {server_error_side.status == "Failed" ? (
                        <div className="alert alert-danger" role="alert">
                          Please Enter Valid phone and password !
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                  <div className="singin-option pt-40">
                    {/* <p className="text-sm text-medium text-center text-gray">
                      Easy Sign In With
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
                      Don’t have any account yet?
                      <Link to="/signup">Create an account</Link>
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
    </div>
  );
};

export default Login;
