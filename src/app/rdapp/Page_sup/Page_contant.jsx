import React from "react";
import Bannar from "@/pages_sups/Products/RD/Bannar";
import Section_2 from "@/pages_sups/Products/RD/RD/Section_2";
import Section_3 from "@/pages_sups/Products/RD/RD/Section_3";
import Section_4 from "@/pages_sups/Products/RD/RD/Section_4";
import Section_1 from "@/pages_sups/Products/RD/RD/Section_1";
import Section_5 from "@/pages_sups/Products/RD/RD/Section_5";
import Section_7 from "@/pages_sups/Products/RD/RD/Section_7";
import RD_heading from "@/pages_sups/Products/RD/RD/RD_heading";
import RD_cards from "@/pages_sups/Products/RD/RD/RD_cards";
import RD_features_cards from "@/pages_sups/Products/RD/RD/RD_features_cards";
import RD_Content_section from "@/pages_sups/Products/RD/RD/RD_Content_section";
import dynamic from "next/dynamic";
import RDvideo from "@/pages_sups/Products/RD/RD/RD_video";
import { useSelector } from "react-redux";

function Page() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  return (
    <div className="page_hid">
      <Bannar />
      <RDvideo />
      <RD_cards />
      <RD_heading
        title={rdapp(lang).sections.Head_1.title}
        body={rdapp(lang).sections.Head_1.slogan}
      />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <RD_heading
        title={rdapp(lang).sections.Head_2.title}
        body={rdapp(lang).sections.Head_2.slogan}
      />
      <RD_features_cards />
      <RD_Content_section />
      <RD_heading
        title={rdapp(lang).sections.Head_3.slogan}
        body={rdapp(lang).sections.Head_3.slogan}
      />
      <Section_7 />
    </div>
  );
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });
