import { createSlice } from "@reduxjs/toolkit";

function removeItemAtIndex(arr, index) {
  console.log("remove", arr, index);
  if (index > -1 && index < arr.length) {
    arr.splice(index, 1);
  }
  return arr;
}

const initialState = {
  propertyImages: [],
};

const userUtilitySlice = createSlice({
  name: "userUtility",
  initialState,
  reducers: {
    setPropertyImage: (state, action) => {
      state.propertyImages = action.payload;
    },
    addPropertyImage: (state, action) => {
      let temp = state.propertyImages;
      temp.push(action.payload);
      state.propertyImages = temp;
    },
    removePropertyImage: (state, action) => {
      let temp = removeItemAtIndex([...state.propertyImages], action.payload);
      state.propertyImages = temp;
    },
  },
});

export const { setPropertyImage, addPropertyImage, removePropertyImage } =
  userUtilitySlice.actions;
export default userUtilitySlice.reducer;
