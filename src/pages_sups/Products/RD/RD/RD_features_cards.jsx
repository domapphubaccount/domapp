import React from "react";
import { Container } from "reactstrap";
import I1 from "@/assets/images/Products_Page/Rd/stopwatch.png";
import I4 from "@/assets/images/Products_Page/Rd/virtual-assistant.png";
import I5 from "@/assets/images/Products_Page/Rd/search.png";
import I6 from "@/assets/images/Products_Page/Rd/encrypted.png";
import I8 from "@/assets/images/Products_Page/Rd/toolbox.png";
import I9 from "@/assets/images/Products_Page/Rd/help-desk.png";
import { useSelector } from "react-redux";

export default function RD_features_cards() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  let icons = [I1, I4, I5, I6, I8, I9];

  return (
    <section className="rd_section_cards2">
      <Container>
        <div className="row">
          {rdapp(lang).sections.Cards_2.map((item, index) => (
            <div
              key={index}
              dir={dir}
              className="col-xxl-4 col-md-6 slideInUp wow mt-5"
              style={{ visibility: "visible", animationName: "slideInUp" }}
            >
              <div className="framework-box">
                <div className="frame-icon">
                  <img src={icons[index].src} alt="" />
                </div>
                <div className="frame-details">
                  <h5>{item.title}</h5>
                  <p className="f-light">{item.slogan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
