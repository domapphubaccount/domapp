import React from "react";
import Bannar from "@/pages_sups/Products/Software/Bannar";
import ScrollToTop from "react-scroll-to-top";
import Section_1 from "@/pages_sups/Products/Software/Software/Section_1";
import Section_2 from "@/pages_sups/Products/Software/Software/Section_2";

export default function Page() {
  return (
    <div className="page_hid">
      <Bannar />
      <Section_1 />
      <Section_2 />
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
