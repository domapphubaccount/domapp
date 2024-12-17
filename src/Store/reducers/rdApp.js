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
  rdapp: (lang) => {
    return {
      sections: {
        bannar: {
          slogan: t("RDAPP_PAGE_BANNAR_SLOGAN", lang),
          try_btn: t("BRDAPP_PAGE_TRY_BTN", lang),
        },
        Quick_start: t("RDAPP_PAGE_QUICK_START", lang),
        Note_1: t("RDAPP_PAGE_NOTE_1", lang),
        Head_1: t("RDAPP_PAGE_HEAD_1", lang),
        Head_2: t("RDAPP_PAGE_HEAD_2", lang),
        Head_3: t("RDAPP_PAGE_HEAD_3", lang),
        Cards_1: t("RDAPP_PAGE_CARDS_1", lang),
        Cards_1_icon: [
          <i key={1} className="bi bi-database-up"></i>,
          <i key={2} className="bi bi-file-lock"></i>,
          <i key={3} className="bi bi-code-slash"></i>
        ],
        Info_1: t("RDAPP_PAGE_INFO_1", lang),
        Info_2: t("RDAPP_PAGE_INFO_2", lang),
        Info_3: t("RDAPP_PAGE_INFO_3", lang),
        Info_4: t("RDAPP_PAGE_INFO_4", lang),
        Head_2: t("RDAPP_PAGE_HEAD_2", lang),
        Cards_2: t("RDAPP_PAGE_CARDS_2", lang),
        Cards_3: t("RDAPP_PAGE_CARDS_3", lang),

      },
    };
  },
};

export const rdAppRed = createSlice({
  name: "rdapp",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = rdAppRed.actions;

export default rdAppRed.reducer;
