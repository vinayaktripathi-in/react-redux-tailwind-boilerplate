// redux/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

// Import your slices
import userAuthSlice from "./slices/userAuth-slice";
import userUtilitySlice from "./slices/utillitySlice";
import appSlice from "./slices/appSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import userSlice from "./slices/userLoginSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine all slices into a single root reducer
const rootReducer = combineReducers({
  app: appSlice,
  auth: userAuthSlice,
  userUtility: userUtilitySlice,
  user: userSlice
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore(
  {
    reducer: persistedReducer,
  },
  composeWithDevTools()
);

// Create a persistor
export const persistor = persistStore(store);
