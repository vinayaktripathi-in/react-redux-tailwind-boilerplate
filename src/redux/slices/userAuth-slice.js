import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  verifyUser,
  resendOtp,
  resetPassword,
  logOutUser,
  updatePassword,
} from "../actions/userAuth-action";

const initialState = {
  profile: localStorage.getItem("userInfo") !== undefined ? JSON.parse(localStorage.getItem("userInfo")) : null,
  isLoggingIn: false,
  isLoggingOut: false,
  isRegistering: false,
  isRegisterSuccessfull: false,
  registerMessage: "",
  registeringError: false,
  isVerifying: false,
  isVerificationSuccessfull: false,
  verifyingError: null,
  verifyMessage: "",
  error: "",
  loginMessage: "",
  resendOtpSuccessfull: false,
  resendingOtp: false,
  resendingOtpError: "",
  changePasswordSuccessfull: false,
  changingPassword: false,
  changingPasswordError: "",
  changedPasswordMessage: "",
  resetPasswordUrl: null,
  isLogoutSuccess: false,
  isUpdatingPassword: false,
  isUpdatePasswordSuccessfull: false,
  updatePasswordError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeError: (state, action) => {
      state.error = "";
      state.loginMessage = "";
    },
    removeChangingPasswordError: (state, action) => {
      state.changingPasswordError = "";
      state.changePasswordSuccessfull = false;
      state.changedPasswordMessage = "";
    },
    removeRegisterError: (state, action) => {
      state.registeringError = "";
      state.registerMessage = "";
    },
    removeVerifyError: (state, action) => {
      state.verifyingError = "";
      state.isVerificationSuccessfull = false;
      state.verifyMessage = "";
      state.resetPasswordUrl = null;
    },
    removeResendOtpError: (state, action) => {
      state.resendOtpSuccessfull = false;
      state.resendingOtpError = "";
    },
    resetLogoutSuccess: (state, action) => {
      state.isLogoutSuccess = false;
    },
    removeUpdatePasswordError: (state, action) => {
      state.updatePasswordError = "";
    },
    resetIsUpdatePasswordSuccessfull: (state, action) => {
      state.isUpdatePasswordSuccessfull = false;

    },
  },
  extraReducers: (builder) => {
    //login
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoggingIn = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoggingIn = false;
      state.profile = action.payload.profile;
      state.error = "";
      state.loginMessage = action.payload.message;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.profile));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoggingIn = false;
      state.error = action.payload;
    });

    //logout
    builder.addCase(logOutUser.pending, (state, action) => {
      state.isLoggingOut = true;
      state.isLogoutSuccess = false;
    });
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.isLoggingOut = false;
      localStorage.removeItem("userInfo");
      state.profile = null;
      state.error = "";
      state.isLogoutSuccess = true;
    });
    builder.addCase(logOutUser.rejected, (state, action) => {
      state.isLoggingIn = false;
      state.error = action.payload;
      state.isLogoutSuccess = false;
    });

    //register user
    builder.addCase(registerUser.pending, (state, action) => {
      state.isRegistering = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isRegistering = false;
      state.profile = action.payload.profile;
      state.isRegisterSuccessfull = true;
      state.registerMessage = action.payload.message;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.profile));
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isRegistering = false;
      state.registeringError = action.payload;
    });

    builder.addCase(verifyUser.pending, (state, action) => {
      state.isVerifying = true;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.isVerifying = false;
      state.isVerificationSuccessfull = true;
      state.verifyMessage = action.payload.message;
      if (action.payload?.isVerification) {
        state.profile = { ...state.profile, isVerified: true };
        localStorage.setItem("userInfo", JSON.stringify(state.profile));
      } else {
        state.resetPasswordUrl = action.payload?.url;
      }
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.isVerifying = false;
      state.verifyingError = action.payload;
    });

    builder.addCase(resendOtp.pending, (state, action) => {
      state.resendingOtp = true;
    });
    builder.addCase(resendOtp.fulfilled, (state, action) => {
      state.resendingOtp = false;
      state.resendOtpSuccessfull = true;
    });
    builder.addCase(resendOtp.rejected, (state, action) => {
      state.resendingOtp = false;
      state.resendingOtpError = action.payload;
    });

    builder.addCase(resetPassword.pending, (state, action) => {
      state.changingPassword = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.changingPassword = false;
      state.changePasswordSuccessfull = true;
      state.changedPasswordMessage = action.payload.message;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.changingPassword = false;
      state.changingPasswordError = action.payload;
    });

    //update password

    builder.addCase(updatePassword.pending, (state, action) => {
      state.isUpdatingPassword = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isUpdatingPassword = false;
      state.isUpdatePasswordSuccessfull = true;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.isUpdatingPassword = false;
      state.updatePasswordError = action.payload;
    });
  },
});

export const {
  removeError,
  removeRegisterError,
  removeVerifyError,
  removeResendOtpError,
  removeChangingPasswordError,
  resetLogoutSuccess,
  resetIsUpdatePasswordSuccessfull,
  removeUpdatePasswordError,
} = authSlice.actions;
export default authSlice.reducer;
