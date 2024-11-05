import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pin: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPin: (state, action) => {
      state.pin = action.payload;
    },
  },
});

export const { setPin } = appSlice.actions;

export default appSlice.reducer;