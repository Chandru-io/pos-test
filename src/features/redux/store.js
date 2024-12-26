import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import authReducer from "./slice/authSlice";
import permissionReducer from "./slice/permissionSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    permission: permissionReducer,
  },
});

export default store;
