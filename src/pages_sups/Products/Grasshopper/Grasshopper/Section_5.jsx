import React from "react";
import { Col, Container, Row } from "reactstrap";
import grass1 from "@/assets/images/Grasshopper/1.png";
import grass2 from "@/assets/images/Grasshopper/2.png";
import grass3 from "@/assets/images/Grasshopper/3.png";
import grass4 from "@/assets/images/Grasshopper/4.png";
import SectionHeader from "@/components/Reuse/Section_Head/SectionHeader";
import { useSelector } from "react-redux";

function Section_5() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { grasshopper } = useSelector((state) => state.grasshopperRed);

  return (
    <section
      className="grass_imgs_section py-5"
      dir={dir}
      style={{ backgroundColor: "#191919" }}
    >
      <Container>
        <Row>
          <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
            <div className="p-2 my-2">
              <div className="description py-5 px-3 rounded">
                <h4>{grasshopper(lang).sections.Examples[0].title}</h4>
                <p>
                  <span className="fw-bold">
                    {grasshopper(lang).sections.Examples[0].first.title}
                  </span>
                  {grasshopper(lang).sections.Examples[0].first.slogan}
                </p>
                <br />
                <p>
                  <span className="fw-bold">
                    {grasshopper(lang).sections.Examples[0].seconed.title}
                  </span>{" "}
                  {grasshopper(lang).sections.Examples[0].seconed.slogan}{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
            <div className="h-100 d-flex align-items-center my-2">
              <img src={grass1.src} className="rounded" alt="" />
            </div>
          </Col>

          <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
            <div className="h-100 d-flex align-items-center my-2">
              <img src={grass2.src} className="rounded" alt="" />
            </div>
          </Col>

          <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
            <div className="p-5 my-2">
              <div className="description py-5 px-3 rounded">
                <h4>{grasshopper(lang).sections.Examples[1].title}</h4>
                <p>
                  <span className="fw-bold">
                    {grasshopper(lang).sections.Examples[1].first.title}
                  </span>
                  {grasshopper(lang).sections.Examples[1].first.slogan}
                </p>
                <br />
                <p>
                  <span className="fw-bold">
                    {grasshopper(lang).sections.Examples[1].seconed.title}
                  </span>{" "}
                  {grasshopper(lang).sections.Examples[1].seconed.slogan}{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
            <div className="p-5 my-2">
              <div className="description py-5 px-3 rounded">
              <h4>{grasshopper(lang).sections.Examples[2].title}</h4>
              <p>
                  <span className="fw-bold">
                    {grasshopper(lang).sections.Examples[2].first.title}
                  </span>
                  {grasshopper(lang).sections.Examples[2].first.slogan}
                </p>
                <br />
                <p>
                  <span className="fw-bold">
                    {grasshopper(lang).sections.Examples[2].seconed.title}
                  </span>{" "}
                  {grasshopper(lang).sections.Examples[2].seconed.slogan}{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000">
            <div className="h-100 d-flex align-items-center my-2">
              <img src={grass3.src} className="rounded" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section_5;
