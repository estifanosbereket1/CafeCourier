import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import companySlice from "./companySlice";
import cartSlice from "./cartSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  compnay: companySlice,
  cart: cartSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
