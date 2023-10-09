import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebarVisibility",
  initialState,
  reducers: {
    sidebarOpen(state) {
      state.isSidebarOpen = true;
    },
    sidebarClose(state) {
      state.isSidebarOpen = false;
    },
  },
});

const store = configureStore({
  reducer: sidebarSlice.reducer,
});

export const sidebarActions = sidebarSlice.actions;
export default store;
