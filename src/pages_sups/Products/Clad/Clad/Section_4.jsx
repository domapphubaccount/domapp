import React from "react";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

export default function Section_4() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);

  return (
    <section className="py-5">
      <Container>
        <Row>
          {cladcut(lang).sections.CARDS.map((item, index) => (
            <div className="col-lg-4" key={index} dir={dir}>
              <span
                className="mil-service-card mil-up mil-mb-30 d-inline-block"
                style={{
                  height: "90%",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <div className="mil-card-number">01.</div>
                <div className="mil-center">
                  <div className="mil-icon-lg mil-mb-30 image_card_clad">
                    <img loading="lazy" src={item.icon.src} alt="Interior Decor" />
                  </div>
                  <h6 className="mil-upper mil-mb-20">{item.title}</h6>
                  <div className="mil-divider-sm mil-mb-20"></div>
                  <p className="mil-service-text">
                    {item.slogan}
                  </p>
                  <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg"></div>
                </div>
              </span>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
}
