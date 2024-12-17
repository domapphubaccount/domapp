"use client";
import { createSlice } from "@reduxjs/toolkit";
import en from "@/Store/Language/en.json";
import ar from "@/Store/Language/ar.json";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  chatplus: (lang) => {
    return {
      sections: {
        bannar: {
          slogan: t("CHATPLUS_PAGE_SLOGAN", lang),
          try_btn: t("CHATPLUS_PAGE_TRY_BTN", lang),
          pricing_btn: t("CHATPLUS_PAGE_PRICING_BTN", lang),
        },
        video_section: {
          title: t("CHATPLUS_PAGE_QUICK_START_TITLE", lang),
          slogan: t("CHATPLUS_PAGE_QUICK_START_SLOGAN", lang)
        },
        GROW:{
            title: t( "CHATPLUS_PAGE_PRICING_GROW",lang)
        },
        Collaborate: {
            head: t("CHATPLUS_PAGE_COLLABORATE_HEAD",lang),
            slogan: t("CHATPLUS_PAGE_COLLABORATE_SLOGAN",lang),
            slice: 
              {
                support: t("CHATPLUS_PAGE_CUSTOMER_SUPPORT", lang),
                archive: t("CHATPLUS_PAGE_ARCHIVE", lang),
                auto_reply: t("CHATPLUS_PAGE_AUTO_REPLY", lang),
                broadcast: t("CHATPLUS_PAGE_BROADCAST", lang),
                chatboat: t("CHATPLUS_PAGE_CHATBOAT", lang),
                msgtemplate:  t("CHATPLUS_PAGE_MSGTEMPLATE", lang),
              }
          },
        heads: t("CHATPLUS_PAGE_HEADS",lang),
        CARDS: t("CHATPLUS_PAGE_CARDS",lang),
        INFO_CARDS: [
          {
            icon: (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h3 mb-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"></path>
              </svg>
            ),
            title: t("WINDMASTER_PAGE_INFO_CARDS_TITLE_1", lang),
            slogan: t("WINDMASTER_PAGE_INFO_CARDS_SLOGAN_1", lang),
          },
          {
            icon: (
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h3 mb-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                <polygon points="12 15 17 21 7 21 12 15"></polygon>
              </svg>
            ),
            title: t("WINDMASTER_PAGE_INFO_CARDS_TITLE_2", lang),
            slogan: t("WINDMASTER_PAGE_INFO_CARDS_SLOGAN_2", lang),
          },
          {
            icon: (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h3 mb-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M18 13v7H4V6h5.02c.05-.71.22-1.38.48-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5l-2-2zm-1.5 5h-11l2.75-3.53 1.96 2.36 2.75-3.54zm2.8-9.11c.44-.7.7-1.51.7-2.39C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12 19.3 8.89zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
              </svg>
            ),
            title: t("WINDMASTER_PAGE_INFO_CARDS_TITLE_3", lang),
            slogan: t("WINDMASTER_PAGE_INFO_CARDS_SLOGAN_3", lang),
          },
        ],
        FEATUERS_CARDS_L: t("CHATPLUS_PAGE_FEATUERS_CARDS_L",lang),
        FEATUERS_CARDS_R: t("CHATPLUS_PAGE_FEATUERS_CARDS_R",lang),
        get_started: {
            title: t("WINDMASTER_PAGE_GET_STARTED_TITLE",lang),
            slogan: t("WINDMASTER_PAGE_GET_STARTED_SLOGAN",lang),
            btn: t("WINDMASTER_PAGE_GET_STARTED_BTN",lang)
        },
        CHATPLUS_PRICING: t("CHATPLUS_PRICING_PAGE",lang)
      },
    };
  },
};

export const chatplusRed = createSlice({
  name: "chatplus",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = chatplusRed.actions;

export default chatplusRed.reducer;
