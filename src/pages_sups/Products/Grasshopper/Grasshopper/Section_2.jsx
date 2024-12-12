import React from "react";
import { useSelector } from "react-redux";

function Section_2() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { grasshopper } = useSelector((state) => state.grasshopperRed);

  return (
    <div className="service-area ptb--80  bg_image bg_image--3" dir={dir}>
      <div className="container">
        <div className="row">
          <div className=" col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10 text-center">
              <h2 className="title text-center">
                {grasshopper(lang).sections.Services.head.title}
              </h2>
              <p>{grasshopper(lang).sections.Services.head.slogan}</p>
            </div>
          </div>
          <div className="col-lg-12 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {grasshopper(lang).sections.Services.slice.map((item, index) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-12"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  key={index}
                >
                  <div className="service service__style--2 d-flex align-items-start gap-3">
                    <div className="icon">
                      {grasshopper(lang).sections.Services.icons[index]}
                    </div>
                    <div className="content">
                      <h3 className="title">{item.title}</h3>
                      <p>{item.slogan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
