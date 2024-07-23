import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: 'light', // or 'dark' depending on your default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice;
