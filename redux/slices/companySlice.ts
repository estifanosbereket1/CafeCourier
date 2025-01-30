import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CompaniesState {
  companies?: any | null;
  selectedCompany?: any | null;
}

const initialState: CompaniesState = {
  companies: null,
  selectedCompany: null,
};

export const companiesSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
    resetCompanies: (state) => {
      state.selectedCompany = null;
      state.companies = null;
    },
  },
});

export const { setCompanies, setSelectedCompany, resetCompanies } =
  companiesSlice.actions;

export default companiesSlice.reducer;
