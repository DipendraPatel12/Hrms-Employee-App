import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  signupApi,
  loginApi,
  forgetPasswordApi,
  verifyOtpApi,
  resetPasswordApi,
} from "../../services/auth.services";

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

      // Persist the token first so the employee lookup below is authorized
      // (the axios interceptor reads the token from AsyncStorage).
      if (token) await AsyncStorage.setItem("token", token);

      return res;
    } catch (error) {
      console.log("LOGIN ERROR:", error.message, error.response?.data);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Login failed"
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

export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async (_, thunkAPI) => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        return {
          user: storedUser ? JSON.parse(storedUser) : null,
          token: storedToken
        };
      }
      return null;
    } catch (error) {
      return null;
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isInitialized: false,
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

      AsyncStorage.removeItem("user");
      AsyncStorage.removeItem("token");
      // reset the project dashboard's selected project on logout
      AsyncStorage.removeItem("projectDashboardSelection");
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

        AsyncStorage.setItem("user", JSON.stringify(action.payload.data.user));
        AsyncStorage.setItem("token", action.payload.data.access_token);
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        state.isAuthenticated = false;
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
      .addCase(initializeAuth.fulfilled, (state, action) => {
        state.isInitialized = true;
        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isAuthenticated = true;
        }
      });

  }

});



export const { logout } = authSlice.actions;

export default authSlice.reducer;