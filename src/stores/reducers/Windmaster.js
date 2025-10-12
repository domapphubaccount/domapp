"use client";
import { createSlice } from "@reduxjs/toolkit";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  windmaster: (lang) => {
    return {
      sections: {
        bannar: {
          try_btn: t("WINDMASTER_PAGE_TRY_BTN", lang),
          pricing_btn: t("WINDMASTER_PAGE_PRICING_BTN", lang),
        },
        Quick_start: t("WINDMASTER_PAGE_QUICK_START", lang),
        CARDS: [
          {
            icon: (
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h3 mb-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11.042 19.933a9.798 9.798 0 0 1 -3.342 -.933l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.127 1.814 3.052 4.36 2.694 6.808"></path>
                <path d="M15 19l2 2l4 -4"></path>
              </svg>
            ),
            title: t("WINDMASTER_PAGE_CARDS_TITLE_1", lang),
            slogan: t("WINDMASTER_PAGE_CARDS_SLOGAN_1", lang),
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h3 mb-0"
                height="1em"
                width="1em"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
            ),
            title: t("WINDMASTER_PAGE_CARDS_TITLE_2", lang),
            slogan: t("WINDMASTER_PAGE_CARDS_SLOGAN_2", lang),
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h3 mb-0"
                height="1em"
                width="1em"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            ),
            title: t("WINDMASTER_PAGE_CARDS_TITLE_3", lang),
            slogan: t("WINDMASTER_PAGE_CARDS_SLOGAN_3", lang),
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h3 mb-0"
                height="1em"
                width="1em"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            ),
            title: t("WINDMASTER_PAGE_CARDS_TITLE_4", lang),
            slogan: t("WINDMASTER_PAGE_CARDS_SLOGAN_4", lang),
          },
        ],
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
                strokeLinecap="round"
                strokeLinejoin="round"
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
        Collaborate: {
          head: t("WINDMASTER_PAGE_COLLABORATE_HEAD", lang),
          slogan: t("WINDMASTER_PAGE_COLLABORATE_SLOGAN", lang),
          slice: [
            {
              icon: (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                  <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                  <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                  <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                </svg>
              ),
              slogan: t("WINDMASTER_PAGE_COLLABORATE_CARDS_SLOGAN_1", lang),
            },
            {
              icon: (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              ),
              slogan: t("WINDMASTER_PAGE_COLLABORATE_CARDS_SLOGAN_2", lang),
            },
            {
              icon: (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              ),
              slogan: t("WINDMASTER_PAGE_COLLABORATE_CARDS_SLOGAN_3", lang),
            },
          ],
        },
        get_started: {
          title: t("WINDMASTER_PAGE_GET_STARTED_TITLE", lang),
          slogan: t("WINDMASTER_PAGE_GET_STARTED_SLOGAN", lang),
          btn: t("WINDMASTER_PAGE_GET_STARTED_BTN", lang),
        },
        Pricing: t("WINDMASTER_PRICING_PAGE", lang),
      },
    };
  },
};

export const windmasterRed = createSlice({
  name: "windmaster",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = windmasterRed.actions;

export default windmasterRed.reducer;
