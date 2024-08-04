"use client";

import React from "react";
import Bannar from "@/pages_sups/Products/Grasshopper/Bannar";
import ScrollToTop from "react-scroll-to-top";
import Section_1 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_1";
import Section_2 from "@/pages_sups/Products/Customization/Customization/Section_2";
import Section_3 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_3";
import Section_4 from "@/pages_sups/Products/Customization/Customization/Section_4";
import Section_5 from "@/pages_sups/Products/Customization/Customization/Section_5";
import Section_6 from "@/pages_sups/Products/Customization/Customization/Section_6";

export default function Page() {

  return (
    <div className="page_hid">
      <Bannar />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#525A63",
          padding: "5px",
          borderRadius: "50%",
          left: "20px",
        }}
      />
    </div>
  );
}
