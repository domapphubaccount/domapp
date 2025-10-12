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
} from "@/stores/Main/assets/images";
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
  why_us_section,
  windmaster_page,
} from "@/stores/Main/links/links";
import en from "@/Store/Language/en.json";
import ar from "@/Store/Language/ar.json";

const translations = { en, ar };

const t = (key, lang) => translations[lang]?.[key] || key;

const initialState = {
  value: 0,
  contact_Toggle: false,
  header: (lang) => {
    return {
      logo,
      nav: [
        {
          name: t("HOME", lang),
          link: `/${home_section}`,
          list: false,
        },
        {
          name: t("PRODUCTS", lang),
          link: `/${products_section}`,
          list: [
            {
              title: t("Design_Software", lang),
              sub_title: false,
              products: [
                {
                  name: t("CladCut", lang),
                  img: cladIcon,
                  link: cladcut_page,
                },
                {
                  name: t("Wind_Master", lang),
                  img: windmasterIcon,
                  link: windmaster_page,
                },
              ],
            },
            {
              title: t("Business_Adminstration", lang),
              sub_title: false,
              products: [
                {
                  name: t("bondify_CRM", lang),
                  img: bondifycrmIcon,
                  link: bondifycrm_page,
                },
              ],
            },
            {
              title: t("Risk_Assessment", lang),
              sub_title: t("comply_with_SBC", lang),
              products: [
                {
                  name: t("RDAPP", lang),
                  img: rdappIcon,
                  link: rdapp_page,
                },
              ],
            },
            {
              title: t("Communication", lang),
              sub_title: false,
              products: [
                {
                  name: t("ChatPlus", lang),
                  img: chatplusIcon,
                  link: chatplus_page,
                },
              ],
            },
            {
              title: t("Developement_Services", lang),
              sub_title: false,
              products: [
                {
                  name: t("Custom_Software", lang),
                  img: customizationIcon,
                  link: customization_page,
                },
              ],
            },
            {
              title: t("Facade_Fabrication", lang),
              sub_title: false,
              products: [
                {
                  name: t("Grasshopper_Modules", lang),
                  img: grassIcon,
                  link: grasshopper_page,
                },
              ],
            },
            {
              title: t("generative_ai", lang),
              sub_title: false,
              products: [
                {
                  name: t("BYLD", lang),
                  img: byldIcon,
                  link: byld_page,
                },
              ],
            },
          ],
        },
        {
          name: t("WHAT_WE_DO", lang),
          link: `/${whatwedo_section}`,
          list: false,
        },
        {
          name: t("ABOUT_US", lang),
          link: `/${about_section}`,
          list: false,
        },
        {
          name: t("ًWHY_US", lang),
          link: `/${why_us_section}`,
          list: false,
        },
        {
          name: t("CONTACT_US", lang),
          link: "#",
          list: false,
          contact: true,
        },
      ],
    };
  },
};

export const headerRed = createSlice({
  name: "counter",
  initialState,
  reducers: {
    contact_Toggle: (state, action) => {
      state.contact_Toggle = action.payload;
    },
  },
});

export const { contact_Toggle } = headerRed.actions;

export default headerRed.reducer;
