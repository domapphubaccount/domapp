import React from "react";
import { useSelector } from "react-redux";

function Section_3() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { grasshopper } = useSelector((state) => state.grasshopperRed);

  return (
    <div className="grass_features py-5" dir={dir}>
      <div className="container bootstrap snippets bootdey">
        <div className="row margin-bottom-10">
          {grasshopper(lang).sections.Heads.map((item, index) => (
            <div
            key={index}
              className="col-sm-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="servive-block servive-block-red rounded">
                <i className="icon-2x color-light fa fa-globe"></i>
                <h2 className="heading-md">{item.title}</h2>
                <p>
                  {item.slogan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_3;
