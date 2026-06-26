import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  signupApi,
  loginApi,
  forgetPasswordApi,
  verifyOtpApi,
  resetPasswordApi,
} from "../../services/auth.services";

// Access levels that should see the full admin console.
const ADMIN_ACCESS_LEVELS = ["ADMIN", "SUB_ADMIN"];

// Decide which layout/section a logged-in user belongs to, using the
// access_level returned in the login response.
// - No access_level / no employeeId => company owner/employer => ADMIN
// - access_level ADMIN/SUB_ADMIN => ADMIN
// - Otherwise (EMPLOYEE / GENERAL_EMPLOYEE) => EMPLOYEE
const resolveLayoutRole = (user) => {
  if (!user?.employeeId) return "ADMIN";
  return ADMIN_ACCESS_LEVELS.includes(user?.access_level)
    ? "ADMIN"
    : "EMPLOYEE";
};

// SIGNUP

export const signupUser = createAsyncThunk(
  "auth/signupUser",

  async (userData, thunkAPI) => {
    try {
      return await signupApi(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

// LOGIN

export const loginUser = createAsyncThunk(
  "auth/loginUser",

  async (userData, thunkAPI) => {
    try {
      console.log("Login data in thunk:", userData);
      const res = await loginApi(userData);

      const token = res?.data?.access_token;
      const user = res?.data?.user || {};

      // Persist the token first so the employee lookup below is authorized
      // (the axios interceptor reads the token from localStorage).
      if (token) localStorage.setItem("token", token);

      const layoutRole = resolveLayoutRole(user);

      return {
        ...res,
        data: {
          ...res.data,
          user: { ...user, layoutRole },
        },
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",

  async (userData, thunkAPI) => {
    try {
      console.log("Forget password data in thunk:", userData);
      return await forgetPasswordApi(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Forget Password failed"
      );
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (userData, thunkAPI) => {
    try {
      console.log("Verify OTP data in thunk:", userData);
      return await verifyOtpApi(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "OTP Verification failed"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (userData, thunkAPI) => {
    try {
      console.log("Reset password data in thunk:", userData);
      return await resetPasswordApi(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Password Reset failed"
      );
    }
  }
);

const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("token");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      // reset the project dashboard's selected project on logout
      localStorage.removeItem("projectDashboardSelection");
    },

  },


  extraReducers: (builder) => {

    builder

      // SIGNUP

      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // LOGIN

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("action payload", action.payload)
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.access_token;
        state.isAuthenticated = true;


        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        localStorage.setItem("token", action.payload.data.access_token);
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.isAuthenticated = false
      })
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      }
      )
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
      }
      )
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  }

});



export const { logout } = authSlice.actions;

export default authSlice.reducer;