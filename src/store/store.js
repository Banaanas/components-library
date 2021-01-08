import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./slices/sideMenuSlice";

// REDUX STORE
const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
  },
});

export default store;
