import API from "./api";

import { API_ENDPOINTS } from "../constants/api";


export const signupApi = async (data) => {

  const response = await API.post(
    API_ENDPOINTS.AUTH.SIGNUP,
    data
  );

  return response.data;
};


export const loginApi = async (data) => {

  const response = await API.post(
    API_ENDPOINTS.AUTH.LOGIN,
    data
  );
  // console.log("response",response)

  return response.data;
};

export const forgetPasswordApi = async (data) => {

  const response = await API.post(
    API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
    data
  );  
  return response.data;
};

export const verifyOtpApi = async (data) => {

  const response = await API.post(  
    API_ENDPOINTS.AUTH.VERIFY_OTP,
    data
  );
  return response.data;
};

export const resetPasswordApi = async (data) => { 
  const response = await API.post(
    API_ENDPOINTS.AUTH.RESET_PASSWORD,
    data
  );
  return response.data;
}