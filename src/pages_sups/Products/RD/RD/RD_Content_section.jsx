import React from "react";
import { Container } from "reactstrap";
import CardSection_1 from "@/assets/images/Products_Page/Rd/quality.jpg";
import CardSection_2 from "@/assets/images/Products_Page/Rd/doc.jpg";
import { useSelector } from "react-redux";

export default function RD_Content_section() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  const IMGS = [CardSection_1, CardSection_2];

  console.log(rdapp(lang).sections)

  return (
    <section>
      <Container>
        {rdapp(lang).sections.Cards_3.map((item, index) => (
          <div className="single-content" key={index} dir={dir}>
            <div className="inner">
              <div className="row row--30 align-items-center">
                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                  <div className="content">
                    <div
                      className="animated fadeInUp"
                      style={{ animationDuration: "1s" }}
                    >
                      <span className="date-of-timeline"></span>
                    </div>
                    <div
                      className="animated fadeInUp"
                      style={{ animationDuration: "1s" }}
                    >
                      <h2 className="title">{item.title}</h2>
                    </div>
                    <div
                      className="animated fadeInUp"
                      style={{ animationDuration: "1s" }}
                    >
                      <p className="description">{item.slogan_1}</p>
                    </div>
                    <div className="row row--30">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="working-list">
                          <div
                            className="animated fadeInUp"
                            style={{ animationDuration: "1s" }}
                          >
                            <h5 className="working-title"></h5>
                          </div>
                          <div
                            className="animated fadeInUp"
                            style={{ animationDuration: "1s" }}
                          >
                            <p>{item.slogan_2}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="working-list">
                          <div
                            className="animated fadeInUp"
                            style={{ animationDuration: "1s" }}
                          >
                            <h5 className="working-title"></h5>
                          </div>
                          <div
                            className="animated fadeInUp"
                            style={{ animationDuration: "1s" }}
                          >
                            <p>{item.slogan_3}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 order-lg-2 col-lg-6">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={IMGS[index].src}
                      alt="Corporate React Template"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
