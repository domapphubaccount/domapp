import React from "react";

import Section_1 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_1";

import Section_2 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_2";

import Section_3 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_3";

import Section_4 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_4";

import Section_5 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_5";

import Section_6 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_6";

import Section_7 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_7";

// import Section_8 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_8";

import Section_9 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_9";

import Section_10 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_10";

import Section_11 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_11";

import Section_12 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_12";

import Section_13 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_13";

import Section_14 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_14";

import Section_15 from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Section_15";

import ScrollToTop from "react-scroll-to-top";

import Heading from "@/components/Reuse/Section_Head/Heading";

import Bannar from "@/pages_sups/Products/BondifyCRM/Bannar";
import Break from "@/pages_sups/Products/BondifyCRM/BondifyCRM/Break";
import VideoSection from "@/pages_sups/Products/BondifyCRM/BondifyCRM/VideoSection";

export default function Page() {
  return (
    <div className="erp_page">
      <>
        <Bannar />
        <Heading
          head="bondify CRM"
          body="First Choice For Your Business"
          back="bondify CRM"
        />
        <VideoSection/>
        <Section_1 />
        <Break body={'REDUCED COST IMPROVED PRODUCTIVITY'} />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
        <Section_7 />
        <Break body={'INTEGRATED BUSINESS MODALES CREATED FOR SPEED & EFFICIENCY'} />
        <Section_9 />
        <Section_10 />
        <Section_11 />
        <Section_12 />
        <Section_13 />
        <Section_14 />
        <Section_15 />
      </>

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
