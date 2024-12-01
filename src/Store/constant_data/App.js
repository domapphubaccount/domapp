import { bondifycrmIcon, byldIcon, chatplusIcon, cladIcon, customizationIcon, grassIcon, rdappIcon, windmasterIcon } from "./images";

export const header = [
  {
    name: "HOME",
    link: "/#home",
    list: false,
  },
  {
    name: "PRODUCTS",
    link: "/#products",
    list: [
      {
        title: "Design Software",
        sub_title: false,
        products: [
          {
            name: "CladCut",
            img: cladIcon,
            link: "/cladcut",
          },
          {
            name: "Wind Master",
            img: windmasterIcon,
            link: "/windmaster",
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
            link: "/bondifycrm",
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
            link: "/rdapp",
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
            link: "/chatplus",
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
            link: "/customization",
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
            link: "/grasshopper",
          },
          {
            name: "BYLD",
            img: byldIcon,
            link: "/byld",
          },
        ],
      },
    ],
  },
  {
    name: "WHAT WE DO",
    link: "/#whatwedo",
    list: false,
  },
  {
    name: "ABOUT US",
    link: "/#about",
    list: false,
  },
];
