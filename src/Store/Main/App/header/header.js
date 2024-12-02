import { bondifycrmIcon, byldIcon, chatplusIcon, cladIcon, customizationIcon, grassIcon, logo, rdappIcon, windmasterIcon } from "../../assets/images"
import { about_section, bondifycrm_page, byld_page, chatplus_page, cladcut_page, customization_page, grasshopper_page, home_section, products_section, rdapp_page, whatwedo_section, windmaster_page } from "../../links/links";

export const header = {
    logo,
    nav:[
  {
    name: "HOME",
    link: `/${home_section}` ,
    list: false,
  },
  {
    name: "PRODUCTS",
    link: `/${products_section}`,
    list: [
      {
        title: "Design Software",
        sub_title: false,
        products: [
          {
            name: "CladCut",
            img: cladIcon,
            link: cladcut_page,
          },
          {
            name: "Wind Master",
            img: windmasterIcon,
            link: windmaster_page,
          },
        ],
      },
      {
        title: "Business Adminstration",
        sub_title: false,
        products: [
          {
            name: "bondify CRM",
            img: bondifycrmIcon,
            link: bondifycrm_page,
          },
        ],
      },
      {
        title: "Risk Assessment",
        sub_title: "comply with SBC",
        products: [
          {
            name: "RDAPP",
            img: rdappIcon,
            link: rdapp_page,
          },
        ],
      },
      {
        title: "Communication",
        sub_title: false,
        products: [
          {
            name: "ChatPlus",
            img: chatplusIcon,
            link: chatplus_page,
          },
        ],
      },
      {
        title: "Developement Services",
        sub_title: false,
        products: [
          {
            name: "Custom Software",
            img: customizationIcon,
            link: customization_page,
          },
        ],
      },
      {
        title: "Facade Fabrication",
        sub_title: false,
        products: [
          {
            name: "Grasshopper Modules",
            img: grassIcon,
            link: grasshopper_page,
          },
          {
            name: "BYLD",
            img: byldIcon,
            link: byld_page,
          },
        ],
      },
    ],
  },
  {
    name: "WHAT WE DO",
    link: `/${whatwedo_section}`,
    list: false,
  },
  {
    name: "ABOUT US",
    link: `/${about_section}`,
    list: false,
  },
]};
