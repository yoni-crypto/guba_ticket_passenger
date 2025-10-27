import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  loading: boolean;
  theme: "light" | "dark";
};

const initialState: AppState = {
  loading: false,
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setLoading, toggleTheme } = appSlice.actions;
export const appReducer = appSlice.reducer;
