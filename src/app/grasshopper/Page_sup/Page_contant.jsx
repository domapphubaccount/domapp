"use client";

import React from "react";
import Bannar from "@/pages_sups/Products/Grasshopper/Bannar";
import Section_1 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_1";
import Section_2 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_2";
import Section_3 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_3";
import Section_4 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_4";
import Section_5 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_5";
import Section_6 from "@/pages_sups/Products/Grasshopper/Grasshopper/Section_6";
import Heading from "@/components/Reuse/Section_Head/Heading";
import VideoSection from "@/pages_sups/Products/Grasshopper/Grasshopper/VideoSection";



export default function Page() {

  return (
    <div className="page_hid">
      <Bannar />
              <Heading
                head="Grasshopper"
                // body= {bondifycrm(lang).sections.Heading_1.slogan}
                back="Grasshopper"
              />
              <VideoSection/>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
    </div>
  );
}
