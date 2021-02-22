import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    sidebar: false,
  },
  reducers: {
    isSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { isSidebar } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
