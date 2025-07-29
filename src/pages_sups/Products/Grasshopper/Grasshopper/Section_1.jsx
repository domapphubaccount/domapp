import React from 'react';
import grass from "@/assets/images/Grasshopper/insect.png"
import { useSelector } from 'react-redux';

export default function Section_1() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { grasshopper } = useSelector((state) => state.grasshopperRed);

  return (
    <div className="about-area about-position-top pb--120 bg_color--1">
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="thumbnail" data-aos="fade-up" data-aos-duration="2000" >
                <img loading="lazy" className="w-80" src={grass.src} alt="About Images" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="about-inner inner" dir={dir}>
                <div className="text-white" data-aos="fade-down" data-aos-duration="500">
                  <h2 className="title fw-bold mb-3">{grasshopper(lang).sections.Quick_start.title}</h2>
                  <p className="description">{grasshopper(lang).sections.Quick_start.slogan}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
