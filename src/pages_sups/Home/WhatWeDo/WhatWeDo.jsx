import React from "react";
import { Container } from "reactstrap";
import Section_head from "@/components/Reuse/Section_Head/Section_head";
import Cards from "./Section_sups/Cards";
import ResponsiveCarousel from "./Section_sups/Carousal";
import { useSelector } from "react-redux";
import { whatWeDo } from "@/Store/Main/IDs";


function WhatWeDo() {
  const lang = useSelector((state) => state.languageSlice.lang);
  const home = useSelector(state => state.homeRed.home);
  
  return (
    <section>
      <Container>
        <Section_head
          head={1}
          title_1={home(lang).sections.what_we_do.head.title}
          des_1={home(lang).sections.what_we_do.head.slogan}
          sectionId={whatWeDo}
        />
        <div className="section_2_mobile_cards">
          <Cards />
        </div>
        <div className="pc_res">
          <ResponsiveCarousel />
        </div>
      </Container>
    </section>
  );
}

export default WhatWeDo;
