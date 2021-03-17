import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    sidebar: false,
    roomId: null,
  },
  reducers: {
    isSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { isSidebar, enterRoom } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
