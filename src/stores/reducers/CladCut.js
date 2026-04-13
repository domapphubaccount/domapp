"use client";
import { createSlice } from "@reduxjs/toolkit";
import { contact_page, whatsapp } from "@/stores/Main/links/links";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";
import {
  clad_icon1,
  clad_icon2,
  clad_icon3,
  clad_icon4,
  clad_icon5,
} from "../Main/assets/images";

import de from "@/stores/Language/de.json";
import es from "@/stores/Language/es.json";
import nl from "@/stores/Language/nl.json";

const translations = { en, ar, de, es, nl };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  contact_Toggle: false,
  cladcut: (lang) => {
    return {
      sections: {
        bannar: {
          slogan: t("CLADCUT_PAGE_BANNAR_SLOGAN", lang),
          try_btn: t("CLADCUT_PAGE_TRY_BTN", lang),
          pricing_btn: t("CLADCUT_PAGE_PRICING_BTN", lang),
          slice: t("CLADCUT_PAGE_BANNAR_SLICE", lang),
        },
        Quick_start: {
          title: t("CLADCUT_PAGE_QUICK_START_TITLE", lang),
          slogan: t("CLADCUT_PAGE_QUICK_START_SLOGAN", lang),
          cta: t("CLADCUT_PAGE_QUICK_START_CTA", lang),
        },
        Head_NOTE_1: {
          title: t("CLADCUT_PAGE_HEAD_NOTE_1_TITLE", lang),
          slogan: t("CLADCUT_PAGE_HEAD_NOTE_1_SLOGAN", lang),
        },
        WORK_FLOW: {
          title: t("CLADCUT_PAGE_WORK_FLOW_TITLE", lang),
          slice: t("CLADCUT_PAGE_WORK_FLOW_SLICE", lang),
          work_history: t("CLADCUT_PAGE_WORK_FLOW_HISTORY", lang),
        },
        Head_NOTE_2: {
          title: t("CLADCUT_PAGE_HEAD_NOTE_2_TITLE", lang),
          slogan: t("CLADCUT_PAGE_HEAD_NOTE_2_SLOGAN", lang),
        },
        CARDS: [
          {
            icon: clad_icon1,
            title: t("CLADCUT_PAGE_CARDS_TITLE_1", lang),
            slogan: t("CLADCUT_PAGE_CARDS_SLOGAN_1", lang),
          },
          {
            icon: clad_icon2,
            title: t("CLADCUT_PAGE_CARDS_TITLE_2", lang),
            slogan: t("CLADCUT_PAGE_CARDS_SLOGAN_2", lang),
          },
          {
            icon: clad_icon3,
            title: t("CLADCUT_PAGE_CARDS_TITLE_3", lang),
            slogan: t("CLADCUT_PAGE_CARDS_SLOGAN_3", lang),
          },
          {
            icon: clad_icon4,
            title: t("CLADCUT_PAGE_CARDS_TITLE_4", lang),
            slogan: t("CLADCUT_PAGE_CARDS_SLOGAN_4", lang),
          },
          {
            icon: clad_icon5,
            title: t("CLADCUT_PAGE_CARDS_TITLE_5", lang),
            slogan: t("CLADCUT_PAGE_CARDS_SLOGAN_5", lang),
          },
        ],
        CLAD_FOOTER: {
          title: t("CLADCUT_PAGE_FOOTER_TITLE", lang),
          slice: t("CLADCUT_PAGE_FOOTER_SLICE", lang),
        },
        PROBLEMS: {
          title: t("CLADCUT_PAGE_PROBLEMS_TITLE", lang),
          slice1: t("CLADCUT_PAGE_PROBLEMS_SLICE1", lang),
          slice2: t("CLADCUT_PAGE_PROBLEMS_SLICE2", lang),
          slice3: t("CLADCUT_PAGE_PROBLEMS_SLICE3", lang),
        },
        SIMPLIFIED_WORKFLOW: {
          title: t("CLADCUT_PAGE_SIMPLIFIED_WORKFLOW_TITLE", lang),
          step1: t("CLADCUT_PAGE_SIMPLIFIED_WORKFLOW_STEP_1_TITLE", lang),
          step1_slogan: t(
            "CLADCUT_PAGE_SIMPLIFIED_WORKFLOW_STEP_1_SLOGAN",
            lang,
          ),
          step2: t("CLADCUT_PAGE_SIMPLIFIED_WORKFLOW_STEP_2_TITLE", lang),
          step2_slogan: t(
            "CLADCUT_PAGE_SIMPLIFIED_WORKFLOW_STEP_2_SLOGAN",
            lang,
          ),
          step3: t("CLADCUT_PAGE_SIMPLIFIED_WORKFLOW_STEP_3_TITLE", lang),
          step3_slogan: t(
            "CLADCUT_PAGE_SIMPLIFIED_WORKFLOW_STEP_3_SLOGAN",
            lang,
          ),
        },
        TESTIMONIALS: {
          title: t("CLADCUT_PAGE_TESTIMONIALS_TITLE", lang),
          subtitle: t("CLADCUT_PAGE_TESTIMONIALS_SUBTITLE", lang),
          cta: t("CLADCUT_PAGE_TESTIMONIALS_CTA", lang),
          items: [
            t("CLADCUT_PAGE_TESTIMONIALS_SLICE_1", lang),
            t("CLADCUT_PAGE_TESTIMONIALS_SLICE_2", lang),
            t("CLADCUT_PAGE_TESTIMONIALS_SLICE_3", lang),
          ],
        },
      },
    };
  },
};

export const cladcutRed = createSlice({
  name: "cladcut",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = cladcutRed.actions;

export default cladcutRed.reducer;
