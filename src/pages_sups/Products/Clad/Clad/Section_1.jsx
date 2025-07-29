import React from "react";
import { Container } from "reactstrap";
import cl1 from "@/assets/images/Clad/2.jpg";
import checked from "@/assets/images/Clad/checkmark.png";
import { useSelector } from "react-redux";

export default function Section_1() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { cladcut } = useSelector((state) => state.cladcutRed);

  return (
    <section>
      <Container>
        <div
          className="row justify-content-between align-items-center flex-sm-row-reverse"
          style={{ overflow: "hidden" }}
          dir={dir}
        >
          <div className="col-lg-5">
            <div className="mil-mb-90">
              <h4
                className="mil-upper mil-up mil-mb-30"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                {cladcut(lang).sections.WORK_FLOW.title}
              </h4>
              <div
                className="mil-up mil-mb-40"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                {cladcut(lang).sections.WORK_FLOW.slice.map((item, index) => (
                  <div className="d-flex mb-3" key={index}>
                    <img loading="lazy"
                      src={checked.src}
                      alt=""
                      className="mx-3"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="mil-illustration mil-up mil-mb-90"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <div className="mil-image-frame">
                <img loading="lazy"
                  src={cl1.src}
                  alt="img"
                  className="mil-scale"
                  data-value-1="1"
                  data-value-2="1.3"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform:
                      "translate3d(0px, 0px, 0px) scale(1.2185, 1.2185)",
                  }}
                />
              </div>
              <div className="mil-about-counter">
                <h1
                  className="mil-counter mil-right mil-mb-10"
                  data-number="17"
                >
                  {cladcut(lang).sections.WORK_FLOW.work_history.many}
                </h1>
                <h5 className="mil-upper mil-right">
                  <span className="mil-marker">
                    {cladcut(lang).sections.WORK_FLOW.work_history.type}
                  </span>{" "}
                  {cladcut(lang).sections.WORK_FLOW.work_history.by} <br />{" "}
                  {cladcut(lang).sections.WORK_FLOW.work_history.mid} <br />{" "}
                  {cladcut(lang).sections.WORK_FLOW.work_history.end}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
