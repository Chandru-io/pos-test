import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  primaryColor: "#3490dc",
  secondaryColor: "#ffed4a",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setClientTheme: (state, action) => {
      state.primaryColor = action.payload.primary;
      state.secondaryColor = action.payload.secondary;
    },
    setCustomColors: (state, action) => {
      state.primaryColor = action.payload.primary;
      state.secondaryColor = action.payload.secondary;
    },
  },
});

export const { toggleTheme, setClientTheme, setCustomColors } =
  themeSlice.actions;

export default themeSlice.reducer;
