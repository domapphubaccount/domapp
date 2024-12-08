import { league } from "@/pages_sups/Home/Bannar/Bannar";
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

export default function Head_2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);
  
  return (
    <section
      className="RD-head position-relative mt-5 pt-5"
      data-aos="fade-up-right"
    >
      <Container>
        <div className="text-center" >
          <h1>CladCut</h1>
          <div className="sub-title" dir={dir}>
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontSize: "2rem",
                  color: "black",
                  textShadow: "1px 1px 0px #000",
                }}
                className="fw-bold"
              >
                {cladcut(lang).sections.Head_NOTE_2.title}
              </h4>
              <h2>{cladcut(lang).sections.Head_NOTE_2.slogan}</h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
