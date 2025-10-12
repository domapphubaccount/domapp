"use client";
import { createSlice } from "@reduxjs/toolkit";
import { contact_page, whatsapp } from "@/stores/Main/links/links";
import en from "@/Store/Language/en.json";
import ar from "@/Store/Language/ar.json";
import { byld_icon1, byld_icon2, byld_icon3 } from "../Main/assets/images";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  contact_Toggle: false,
  custom_software: (lang) => {
    return {
      sections: {
        bannar: {
          contact_btn: t("CUSTOM_SOFTWARE_PAGE_CONTACT_BTN", lang),
          slogan: t("CUSTOM_SOFTWARE_PAGE_SLOGAN", lang),
        },
        About_us: t("CUSTOM_SOFTWARE_PAGE_ABOUT", lang),
        Services: t("CUSTOM_SOFTWARE_PAGE_SERVICES", lang),
        Contact: t("CUSTOM_SOFTWARE_PAGE_CONTACT", lang),
      },
    };
  },
};

export const customSoftwareRed = createSlice({
  name: "customSoftware",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = customSoftwareRed.actions;

export default customSoftwareRed.reducer;
