"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Bannar from "@/pages_sups/Products/Clad/Bannar";
import Head from "@/pages_sups/Products/Clad/Clad/Head";
import Section_1 from "@/pages_sups/Products/Clad/Clad/Section_1";
import Section_3 from "@/pages_sups/Products/Clad/Clad/Section_3";
import Section_4 from "../../../pages_sups/Products/Clad/Clad/Section_4";
import Head_2 from "@/pages_sups/Products/Clad/Clad/Head_2";

export default function Page() {
  return (
    <div className="facade_page cladcut">
      <Bannar />
      <Head head={""} body={""} />
      <Section_1 />
      <Head_2 />
      <Section_4 />
      <Section_3 />
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
