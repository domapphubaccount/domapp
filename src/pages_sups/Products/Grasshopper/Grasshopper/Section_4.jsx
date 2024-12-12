import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

function Section_4() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { grasshopper } = useSelector((state) => state.grasshopperRed);

  return (
    <div className="grass_features py-5" dir={dir}>
      <Container>
        <div className="section-heading text-center grass_whyus mb-5">
          <h2 className="subtitle text-white" style={{ fontSize: "2.5rem" }}>
            {grasshopper(lang).sections.Why_us.head.title}
          </h2>
          <p className="m-0 p-5 py-3 text-secondary">
            {grasshopper(lang).sections.Why_us.head.slogan}
          </p>
        </div>
        <div className="mobile-res">
          {grasshopper(lang).sections.Why_us.slice.map((item, index) => (
            <div className="grass_whyUs_card mb-5" id="g_1" key={index}>
              <div>
                <span className="fw-bold text-white">{item.title}</span>
                {item.slogan}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Section_4;
