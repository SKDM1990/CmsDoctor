import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../services/userAuthAPI";
import { getToken } from "../services/localStorageServices";
import "../css/EnterOtp.css";
import OtpVerify from "../Images/verify-otp.png";

const EnterOtp = (buttonProps) => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const { access_token } = getToken();
  const [verifyUser, { isLoading }] = useVerifyOtpMutation();
  const [server_error, setServerError] = useState({});
  const otpSubmit = async (e) => {
    const actualData = {
      token: access_token,
      otp: OTP,
    };
    if (OTP != "") {
      const res = await verifyUser(actualData);
      console.log(res);
      if (res.error) {
        setServerError(res.error.data);
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
        navigate("/dashboard");
      }
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="otpBox">
        <div className="row">
          <div className="col-6 d-flex flex-column align-itmems-center ">
            <div className="otpBoxHead">
              <h2>OTP Verification</h2>
            </div>
            <div className="otpValue">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure
              />
            </div>
            <div className="resendBtnBox">
              <button className="resendBtn" {...buttonProps}>
                {buttonProps.remainingTime !== 0 ? `Resend OTP` : "Resend"}
              </button>
            </div>

            <button className="submutBtn" onClick={otpSubmit}>
              Submit
            </button>
            {server_error.status == "Failed" ? (
              <div className="alert alert-danger" role="alert">
                Please Enter Valid OTP !
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-6">
            <div className="otpImage">
              <img src={OtpVerify} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOtp;
