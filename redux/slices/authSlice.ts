// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface AuthState {
//   user?: any | null;
//   accessToken?: string;
//   refreshToken?: string;
// }

// const initialState: AuthState = {
//   user: null,
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     setAccessToken: (state, action: PayloadAction<string>) => {
//       state.accessToken = action.payload;
//     },
//     setRefreshToken: (state, action: PayloadAction<string>) => {
//       state.refreshToken = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.accessToken = undefined;
//       state.refreshToken = undefined;
//     },
//   },
// });

// export const { setUser, setAccessToken, setRefreshToken, logout } =
//   authSlice.actions;

// export default authSlice.reducer;


// authSlice.js
export interface AuthState {
  user?: any | null;
  accessToken?: string;
  refreshToken?: string;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set the user data in Redux
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = undefined;
      state.refreshToken = undefined;
    },
  },
});

export const { setUser, setAccessToken, setRefreshToken, logout } = authSlice.actions;

export default authSlice.reducer;
