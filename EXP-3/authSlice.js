import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

let user = null;

try {
  if (token) {
    user = JSON.parse(atob(token.split(".")[1]));
  }
} catch (error) {
  localStorage.removeItem("token");
}

const initialState = {
  token: token || null,
  isAuthenticated: !!token,
  user: user,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
    },

    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
