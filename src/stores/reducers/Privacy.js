"use client";
import { createSlice } from "@reduxjs/toolkit";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  contact_Toggle: false,
  policy: (lang) => {
    return {
      sections: {
        policy: t("PRIVACY", lang),
      },
    };
  },
};

export const privacyRed = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = privacyRed.actions;

export default privacyRed.reducer;
