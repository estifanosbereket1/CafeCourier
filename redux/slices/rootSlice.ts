import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import companySlice from "./companySlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  compnay: companySlice,
});
export type RootState = ReturnType<typeof rootReducer>;
