"use client";
import { createSlice } from "@reduxjs/toolkit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// start data center
const initialState = {
  language: "en", // options are ['en','ar']
  dir: "rtl", // options are ['ltr','rtl']
  footer: [],
  content: {
    pages: {
      service_page: [],
    },
  },
};
// end data center

export const MainData = createSlice({
  name: "maindata",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = MainData.actions;

export default MainData.reducer;
