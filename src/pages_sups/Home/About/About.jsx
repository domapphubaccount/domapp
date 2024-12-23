import Section_head from "@/components/Reuse/Section_Head/Section_head";
import { Col, Container, Row } from "reactstrap";
import Cards from "../WhatWeDo/Section_sups/Cards";
import ResponsiveCarousel from "../WhatWeDo/Section_sups/Carousal";
import { about, whyUs } from "@/Store/Main/IDs";
import { useSelector } from "react-redux";
import Slider from "react-slick/lib/slider";
import customer from "/public/Why_us/customer.jpg";
import tech from "/public/Why_us/tech.jpg";
import innovation from "/public/Why_us/innovation.jpg";
import solutions from "/public/Why_us/solutions.jpg";
import software from "/public/Why_us/software.jpg";

export default function About() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);

  return (
    <section className="home_section_2" id={about}>
      {/* <Section_head
        head={1}
        title_1={home(lang).sections.about_us?.head.title}
        des_1={home(lang).sections.about_us?.head.slogan}
        sectionId={about}
      /> */}
      <div className="section-holder" >
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className="vc_column-inner vc_custom_1540536968497">
                <div className="wpb_wrapper">
                  <Row>
                    <Col sm={12} md={6}>
                      <div
                        className="vc_column-inner vc_custom_1545618139147"
                        data-className-mobile="vc_custom_1545618139153"
                      >
                        <div className="wpb_wrapper">
                          <div className="bp-element bp-element-image-box    demo-1 image-left color-1 layout-gradient">
                            <div
                              className="image-box"
                              style={{
                                backgroundImage:
                                  "url(https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-19.jpg)",
                              }}
                            >
                              <a href="https://ivy-school.thimpress.com/demo-4/">
                                <div className="icon-image"></div>

                                <div className="content">
                                  <h3 className="title"></h3>

                                  <div className="description">
                                    <small>
                                      {
                                        home(lang).sections.about_us?.main
                                          ?.slices[0]
                                      }
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="vc_empty_space"
                            style={{ height: "40px" }}
                          >
                            <span className="vc_empty_space_inner"></span>
                          </div>
                          <div className="bp-element bp-element-image-box    demo-1 image-left color-2 layout-gradient">
                            <div
                              className="image-box"
                              style={{
                                backgroundImage:
                                  "url(https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-19.jpg)",
                              }}
                            >
                              <a href="">
                                <div className="icon-image"></div>

                                <div className="content">
                                  <h3 className="title"></h3>

                                  <div className="description">
                                    <small>
                                      {
                                        home(lang).sections.about_us?.main
                                          ?.slices[1]
                                      }
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      sm={12}
                      md={6}
                      className="wpb_column vc_column_container vc_col-sm-6 pt-5 bp-background-size-auto"
                    >
                      <div className="vc_column-inner vc_custom_1545617895195">
                        <div className="wpb_wrapper">
                          <div className="bp-element bp-element-image-box    demo-1 image-left color-2 layout-gradient">
                            <div
                              className="image-box"
                              style={{
                                backgroundImage:
                                  "url(https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-19.jpg)",
                              }}
                            >
                              <a href="">
                                <div className="icon-image"></div>

                                <div className="content">
                                  <h3 className="title"></h3>

                                  <div className="description">
                                    <small>
                                      {
                                        home(lang).sections.about_us?.main
                                          ?.slices[2]
                                      }
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="vc_empty_space"
                            style={{ height: "40px" }}
                          >
                            <span className="vc_empty_space_inner"></span>
                          </div>
                          <div className="bp-element bp-element-image-box demo-1 image-left color-1 layout-gradient">
                            <div
                              className="image-box"
                              style={{
                                backgroundImage:
                                  "url(https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-19.jpg)",
                              }}
                            >
                              <a href="">
                                <div className="icon-image"></div>

                                <div className="content">
                                  <h3 className="title"></h3>

                                  <div className="description">
                                    <small>
                                      {
                                        home(lang).sections.about_us?.main
                                          ?.slices[3]
                                      }
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div
                className="vc_column-inner vc_custom_1545390792675"
                data-className-mobile="vc_custom_1545390792681"
              >
                <div className="wpb_wrapper">
                  <div className="bp-element bp-element-heading vc_custom_1724493821735 align-left layout-1  mobile-line-heading mobile-center">
                    <h3
                      className="title"
                      style={{
                        color: "#7c7c7c",
                        lineHeight: "1.625",
                        fontSize: "16px",
                        fontWeight: "300",
                        textTransform: "none",
                        margin: "0 0 5px 0",
                      }}
                    >
                      {home(lang).sections.about_us?.head.title}
                    </h3>

                    <span
                      className="sub-title"
                      style={{
                        color: "#292929",
                        lineHeight: "1.25",
                        fontSize: "35px",
                        fontWeight: "400",
                        textTransform: "none",
                        margin: "0 0 0px 0 ",
                      }}
                    >
                      {home(lang).sections.about_us?.main.title}
                    </span>

                    <div
                      className="line my-3"
                      style={{
                        height: "2px",
                        width: "87px",
                        backgroundColor: "#e1e1e1",
                      }}
                    ></div>
                  </div>
                  <div className="wpb_text_column wpb_content_element vc_custom_1540530003602 mobile-center">
                    <div className="wpb_wrapper">
                      <p>{home(lang).sections.about_us?.head.slogan}</p>
                    </div>
                  </div>

                  <div className="bp-element bp-element-button  rounded-pill align-left mobile-center shape-round icon_alignment-left  ">
                    <a
                      className="btn btn-primary bp-element-hover rounded-pill btn-normal border-0 px-4 py-2"
                      href="/#products"
                      title="LEARN MORE"
                      data-hover=""
                      style={{ backgroundColor: "#515A63" }}
                    >
                      <span className="inner-text">OUR PRODUCTS</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-holder">
        <Container>
          <WhyUs />
        </Container>
      </div>
    </section>
  );
}

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useRef, useState } from "react";
import { about_section, why_us_section } from "@/Store/Main/links/links";
function WhyUs() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);

  const slides = [
    {
      image: customer.src, // Replace with your image URL
    },
    {
      image: tech.src, // Replace with your image URL
    },
    {
      image: innovation.src, // Replace with your image URL
    },
    {
      image: solutions.src, // Replace with your image URL
    },
    {
      image: customer.src, // Replace with your image URL
    },
    {
      image: software.src, // Replace with your image URL
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="whyus-main-section">
      <div>
        <Section_head
        head={1}
        title_1={home(lang).sections.why_us.title}
        des_1={home(lang).sections.why_us.slogan}
        sectionId={whyUs}
      />
      </div>
      <div className="whyus-section" style={{ margin: "0 auto" }}>
        <div className="whyus-slider-text">
          <div className="relative">
            {/* Text Slider */}
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider) => setNav1(slider)}
              // arrows={true}
            >
              {home(lang).sections.what_we_do.main.slices.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "20px",
                    background: "#000",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                  dir={dir}
                >
                  <h2
                    className="mb-4"
                    style={{ marginBottom: "10px", fontSize: "3rem" }}
                  >
                    {item.title}
                  </h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </Slider>
            {/* Arrows */}

            <div className="navigation-buttons d-flex">
              <div
                onClick={() => nav1?.slickPrev()}
                className="rounded-circle border-2 p-2 mx-2 cursor-pointer"
              >
                <ArrowBack />
              </div>
              <div
                onClick={() => nav1?.slickNext()}
                className="rounded-circle border-2 p-2 mx-2 cursor-pointer"
              >
                <ArrowForward />
              </div>
            </div>
          </div>
        </div>

        <div className="whyus-slider-image">
          {/* Image Slider */}
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider) => setNav2(slider)}
            arrows={false}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{ position: "relative", borderRadius: "10px" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    // objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
