import React from "react";
import { Col, Row, Container } from "reactstrap";
import CladBannar from "@/assets/images/Clad/logo2.png";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Section_3() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);

  return (
    <section className="mil-dark-bg mil-relative mil-o-hidden bcg-clad position-relative">
      <div className="dark-bannar" style={{ backgroundColor: "#000000bf" }}>
        {" "}
      </div>
      <Container>
        <Row className="z-1 position-relative" dir={dir}>
          <Col sm={12} md={4}>
            <Image loading="lazy"
              width={200}
              height={100}
              src={CladBannar.src}
              alt="cladcut bannar title"
            />
            <h2
              className="mil-upper mil-light mil-up mil-mb-30 h2_clad"
              style={{
                fontSize: "2.5rem",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
                borderImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 1px, hsla(0, 0%, 100%, .2) 0, hsla(0, 0%, 100%, .2) 3px) 5",
              }}
            >
              {cladcut(lang).sections.CLAD_FOOTER.title}
            </h2>
          </Col>
          <Col sm={12} md={8}>
            <ul>
              {cladcut(lang).sections.CLAD_FOOTER.slice.map((item, index) => (
                <li
                  key={index}
                  style={{ borderBottom: "5px solid hsla(0, 0%, 100%, .2)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
