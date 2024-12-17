import Section_head from "@/components/Reuse/Section_Head/Section_head";
import { Col, Container, Row } from "reactstrap";
import Cards from "../WhatWeDo/Section_sups/Cards";
import ResponsiveCarousel from "../WhatWeDo/Section_sups/Carousal";
import { about } from "@/Store/Main/IDs";
import { useSelector } from "react-redux";

export default function About() {
  const {lang,dir} = useSelector((state) => state.languageSlice);
  const {home} = useSelector(state => state.homeRed);

  return (
    <section className="home_section_2">
      <Section_head
        head={1}
        title_1={home(lang).sections.about_us?.head.title}
        des_1={home(lang).sections.about_us?.head.slogan}
        sectionId={about}
      />
      <Container>
        <Row className="card_shadow card_dis rounded mb-5" >
          <Col sm={12} lg={6} md={12} className="p-4">
            <div
              className="card_shadow rounded h-100 video_container my-3"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="h-100 card_shadow ">
                <video
                  className="rounded h-100 w-100"
                  preload="none"
                  style={{ objectFit: "cover" }}
                  loop
                  muted
                  autoPlay
                >
                  <source src={home(lang).sections.about_us?.main.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <div className="about_us_Description typewriter"><h1>About Us</h1></div> */}
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6} md={12} dir={dir}>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div>
                <h5>{home(lang).sections.about_us?.main.title}</h5>
              </div>
              <div className="card_list">
                <ul>
                  {home(lang).sections.about_us?.main?.slices?.map((item, i) => (
                    <li key={i}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
