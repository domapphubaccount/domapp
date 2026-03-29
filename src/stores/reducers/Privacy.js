"use client";
import { createSlice } from "@reduxjs/toolkit";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";

import de from "@/stores/Language/de.json";
import es from "@/stores/Language/es.json";
import nl from "@/stores/Language/nl.json";

const translations = { en, ar , de , es , nl };

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
