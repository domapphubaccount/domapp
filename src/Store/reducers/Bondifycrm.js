"use client";
import { createSlice } from "@reduxjs/toolkit";
import en from "@/Store/Language/en.json";
import ar from "@/Store/Language/ar.json";
import { byld_icon1, byld_icon2, byld_icon3 } from "../Main/assets/images";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  contact_Toggle: false,
  bondifycrm: (lang) => {
    return {
      sections: {
        bannar: {
          try_btn: t("BONDIFYCRM_PAGE_TRY_BTN", lang),
          pricing_btn: t("BONDIFYCRM_PAGE_PRICING_BTN", lang),
        },
        Heading_1: t("BONDIFYCRM_PAGE_HEADING_1",lang),
        Quick_start: t("BONDIFYCRM_PAGE_QUICK_START", lang),
        Break_1: t("BONDIFYCRM_PAGE_BREAK_1",lang),
        Card_1: t("BONDIFYCRM_PAGE_CARD_1",lang),
        Card_2: t("BONDIFYCRM_PAGE_CARD_2",lang),
        Card_3: t("BONDIFYCRM_PAGE_CARD_3",lang),
        Card_4: t("BONDIFYCRM_PAGE_CARD_4",lang),
        Card_5: t("BONDIFYCRM_PAGE_CARD_5",lang),
        Card_6: t("BONDIFYCRM_PAGE_CARD_6",lang),
        Break_2: t("BONDIFYCRM_PAGE_BREAK_2",lang),
        Card_7: t("BONDIFYCRM_PAGE_CARD_7",lang),
        Card_8: t("BONDIFYCRM_PAGE_CARD_8",lang),
        Card_9: t("BONDIFYCRM_PAGE_CARD_9",lang),
        Card_10: t("BONDIFYCRM_PAGE_CARD_10",lang),
        Card_11: t("BONDIFYCRM_PAGE_CARD_11",lang),
        Card_12: t("BONDIFYCRM_PAGE_CARD_12",lang),



        FEATURES: {
          why_us: t("BYLD_PAGE_FEATURES_WHY_US",lang),
          title: t("BYLD_PAGE_FEATURES_TITLE",lang),
          slice: t("BYLD_PAGE_FEATURES_SLICE",lang),
          icons: [
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>,
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              ></path>
            </svg>,
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>,
          ],
        },
        CARDS_IMAGES: [byld_icon1, byld_icon2, byld_icon3],
        CARDS: t("BYLD_PAGE_CARDS", lang),
        Head_NOTE_1: {
          title: t("BYLD_PAGE_HEAD_TITLE", lang),
          slogan: t("BYLD_PAGE_HEAD_SLOGAN", lang),
        },
      },
    };
  },
};

export const bondifycrmRed = createSlice({
  name: "bondifycrm",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = bondifycrmRed.actions;

export default bondifycrmRed.reducer;
