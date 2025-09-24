import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: null,
  currency: "USD",
  isManual: false,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry(state, action) {
      state.country = action.payload.country;
      state.currency = action.payload.currency;
      state.isManual = action.payload.isManual || false;
    },
  },
});

export const { setCountry } = countrySlice.actions;
export default countrySlice.reducer;
