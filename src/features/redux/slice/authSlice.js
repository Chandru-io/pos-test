import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  role: null,
  token: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginAction: (state, action) => {
      console.log(action.payload);

      state.userName = action.payload.userName;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },

    Logout: (state, action) => {
      state.userName = action.payload.null;
      (state.role = action.payload.null),
        (state.token = action.payload.null),
        (state.userId = action.payload.null);
    },
  },
});

export const { LoginAction, Logout } = authSlice.actions;

export default authSlice.reducer;
