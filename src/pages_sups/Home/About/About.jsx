import Section_head from "@/components/Reuse/Section_Head/Section_head";
import { Col, Container, Row } from "reactstrap";
import Cards from "../WhatWeDo/Section_sups/Cards";
import ResponsiveCarousel from "../WhatWeDo/Section_sups/Carousal";
import { about, whyUs } from "@/Store/Main/IDs";
import { useSelector } from "react-redux";


export default function About() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);

  return (
    <section className="home_section_2">
      <div className="section-holder">
        <Container>
          <div>
            <Section_head
              head={1}
              title_1={home(lang).sections.about_us?.head_section.title}
              des_1={home(lang).sections.about_us.head_section.slogan}
              sectionId={about}
            />
          </div>
          <Row>
            <Col sm={12} md={6}>
              <div className="vc_column-inner vc_custom_1540536968497">
                <div className="wpb_wrapper">
                  <Row>
                    <Col sm={12} md={6}>
                      <div
                        className="vc_column-inner vc_custom_1545618139147"
                      >
                        <div className="wpb_wrapper">
                          <div className="bp-element bp-element-image-box  demo-1 image-left color-1 layout-gradient">
                            <div
                              className="image-box"
                              style={{
                                backgroundImage:
                                  "url(https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-19.jpg)",
                              }}
                            >
                              <div className="icon-image"></div>

                              <div className="content">
                                <h3 className="title"></h3>

                                <div className="description">
                                  <h4 className="mb-4">
                                    {
                                      home(lang).sections.about_us?.main
                                        ?.slices[0].title
                                    }
                                  </h4>
                                  <small>
                                    {
                                      home(lang).sections.about_us?.main
                                        ?.slices[0].slogan
                                    }
                                  </small>
                                </div>
                              </div>
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
                              <div className="icon-image"></div>

                              <div className="content">
                                <h3 className="title"></h3>

                                <div className="description ">
                                  <h4 className="mb-4">
                                    {
                                      home(lang).sections.about_us?.main
                                        ?.slices[1].title
                                    }
                                  </h4>
                                  <small>
                                    {
                                      home(lang).sections.about_us?.main
                                        ?.slices[1].slogan
                                    }
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      sm={12}
                      md={6}
                      className="wpb_column vc_column_container vc_col-sm-6 pt-5 bp-background-size-auto d-flex align-items-center"
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
                              <div className="icon-image"></div>

                              <div className="content">
                                <h3 className="title"></h3>

                                <div className="description text-black" >
                                  <h4 className="mb-4">
                                    {
                                      home(lang).sections.about_us?.main
                                        ?.slices[2].title
                                    }
                                  </h4>
                                  <small>
                                    {
                                      home(lang).sections.about_us?.main
                                        ?.slices[2].slogan
                                    }
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="vc_empty_space"
                            style={{ height: "40px" }}
                          >
                            <span className="vc_empty_space_inner"></span>
                          </div>
                          {/* <div className="bp-element bp-element-image-box demo-1 image-left color-1 layout-gradient">
                            <div
                              className="image-box"
                              style={{
                                backgroundImage:
                                  "url(https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-19.jpg)",
                              }}
                            >
                    
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
                           
                            </div>
                          </div> */}
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
                dir={dir}
              >
                <div className="wpb_wrapper">
                  <div className="bp-element bp-element-heading vc_custom_1724493821735 align-left layout-1  mobile-line-heading mobile-center">
                    {/* <h3
                      className="title"
                      style={{
                        color: "#7c7c7c",
                        lineHeight: "1.625",
                        fontSize: "3rem",
                        fontWeight: "600",
                        textTransform: "none",
                        margin: "0 0 5px 0",
                      }}
                    >
                      {home(lang).sections.about_us?.head.title}
                    </h3> */}

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
                      {home(lang).sections.about_us?.head.slogan.map(
                        (item, index) => (
                          <div className="mb-3" key={index}>
                            <p key={index}>{item}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* <div className="bp-element bp-element-button  rounded-pill align-left mobile-center shape-round icon_alignment-left  ">
                    <a
                      className="btn btn-primary bp-element-hover rounded-pill btn-normal border-0 px-4 py-2"
                      href="/#products"
                      title="LEARN MORE"
                      data-hover=""
                      style={{ backgroundColor: "#515A63" }}
                    >
                      <span className="inner-text">OUR PRODUCTS</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
