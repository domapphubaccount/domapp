"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  bondifycrmIcon,
  byldIcon,
  chatplusIcon,
  cladIcon,
  customizationIcon,
  grassIcon,
  logo,
  rdappIcon,
  windmasterIcon,
} from "@/Store/Main/assets/images";
import {
  about_section,
  bondifycrm_page,
  byld_page,
  chatplus_page,
  cladcut_page,
  customization_page,
  grasshopper_page,
  home_section,
  products_section,
  rdapp_page,
  whatwedo_section,
  windmaster_page,
} from "@/Store/Main/links/links";
import en from "@/Store/Language/en.json";
import ar from "@/Store/Language/ar.json";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  contact_Toggle: false,
  footer: (lang) => {
    return {
      about: t("FOOTER_ABOUT", lang),
      products: t("FOOTER_PRODUCTS",lang),
      services: t("FOOTER_SERVICES",lang),
      summary: t("FOOTER_SUMMARY",lang),
      social: t("FOOTER_SOCIAL",lang),
      community: t("FOOTER_COMMUNITY",lang),
      legal: t("LEGAL",lang)
    };
  },
};

export const footerRed = createSlice({
  name: "counter",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = footerRed.actions;

export default footerRed.reducer;
