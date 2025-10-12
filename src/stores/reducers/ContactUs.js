"use client";
import { createSlice } from "@reduxjs/toolkit";
import { contact_page, whatsapp } from "@/stores/Main/links/links";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  contact_Toggle: false,
  contact_card: (lang) => {
    return {
      whatsapp: {
        title: t("CONTACT_CARD_WHATSAPP", lang),
        link: whatsapp,
      },
      send_message: {
        title: t("CONTACT_CARD_MESSAGE", lang),
        link: `${contact_page}`,
      },
      work_time: {
        title: t("CONTACT_CARD_WORK_TIME", lang),
        slice: t("CONTACT_CARD_WORK_TIME_SLICE", lang),
      },
      find_us: {
        title: t("CONTACT_FIND_US", lang),
        slice: t("CONTACT_CARD_PLACE", lang),
      },
    };
  },
  contact_page: (lang) => {
    return {
      bannar: {
        title: t("CONTACT_US", lang),
      },
      head: {
        title: t("CONTACT_PAGE_HEAD_TITLE", lang),
        slogan: t("CONTACT_PAGE_HEAD_SLOGAN", lang),
      },
      form: {
        Name: t("CONTACT_PAGE_FORM_NAME", lang),
        Phone: t("CONTACT_PAGE_FORM_PHONE", lang),
        Email: t("CONTACT_PAGE_FORM_EMAIL", lang),
        Option: t("CONTACT_PAGE_FORM_OPTIONS", lang),
        Subject: t("CONTACT_PAGE_FORM_SUBJECT", lang),
        Message: t("CONTACT_PAGE_FORM_MESSAGE", lang),
        Send: t("CONTACT_PAGE_FORM_SEND", lang),
      },
    };
  },
};

export const contactRed = createSlice({
  name: "contact",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = contactRed.actions;

export default contactRed.reducer;
