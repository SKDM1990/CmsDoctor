import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://doctorcms.adorre.in/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "accounts/register.php/",
          method: "post",
          body: user,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login.php",
          method: "post",
          body: user,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: (user) => {
        return {
          url: "otp_verfication.php",
          method: "post",
          body: user,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    addNewHospital: builder.mutation({
      query: (user) => {
        return {
          url: "Account_List_Registration.php",
          method: "post",
          body: user,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    ViewHospital: builder.query({
      query: (data) => {
        return {
          url: "Account_List_View.php",
          method: "post",
          body: data,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    ViewOnlyHospital: builder.query({
      query: (data) => {
        return {
          url: "Account_List_View.php",
          method: "post",
          body: data,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    EditHospital: builder.mutation({
      query: (data) => {
        return {
          url: "Account_List_Update.php",
          method: "post",
          body: data,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    DeleteHospital: builder.mutation({
      query: (user) => {
        return {
          url: "Account_List_Delete.php",
          method: "post",
          body: user,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    ViewDoctorProfile: builder.query({
      query: (data) => {
        return {
          url: "Dr_Profile_View.php",
          method: "post",
          body: data,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    ViewPateintProfile: builder.query({
      query: (data) => {
        return {
          url: "Patient_Profile_View.php",
          method: "post",
          body: data,
          header: {
            "Content-type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
  useAddNewHospitalMutation,
  useDeleteHospitalMutation,
  useEditHospitalMutation,
  useVerifyOtpMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useViewHospitalQuery,
  useViewOnlyHospitalQuery,
  useViewDoctorProfileQuery,
  useViewPateintProfileQuery,

} = userAuthApi;