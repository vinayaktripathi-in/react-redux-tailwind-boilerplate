import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../axios-baseurl";

export const loginUser = createAsyncThunk("loginUser", async (authInfo, { rejectWithValue }) => {
    try {
        const response = await client.post("/user/login", authInfo, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
});

export const registerUser = createAsyncThunk("registerUser", async (authInfo, { rejectWithValue }) => {
    try {
        const response = await client.post("/user/signup", authInfo, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
});

export const verifyUser = createAsyncThunk("verifyUser", async (info, { rejectWithValue }) => {
    try {
        const response = await client.post("/user/otp/verify", info, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
});

export const resendOtp = createAsyncThunk("resendOtp", async (email, { rejectWithValue }) => {
    try {
        const response = await client.post("/user/otp/generate", email, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
});

export const resetPassword = createAsyncThunk("resetPassword", async ({ userId, token, password }, { rejectWithValue }) => {
    try {
        const response = await client.patch(`/user/reset-password/${userId}/${token}`, { password }, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
});

export const logOutUser = createAsyncThunk("logOutUser", async (a = "", { rejectWithValue }) => {
    try {
        const response = await client("/admin/user/logout", {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
});


export const updatePassword = createAsyncThunk("updatePassword", async (info, { rejectWithValue }) => {
    try {
        const response = await client.patch("/user/update-password", info, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
});