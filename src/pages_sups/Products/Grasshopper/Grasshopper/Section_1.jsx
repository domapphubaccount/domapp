import React from 'react';
import cardImg from '@/assets/images/Grasshopper/insect.png';
import grass from "@/assets/images/Grasshopper/insect.png"

export default function Section_1() {
  return (
    <div className="about-area about-position-top pb--120 bg_color--1">
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="thumbnail" data-aos="fade-up" data-aos-duration="2000" >
                <img className="w-90" src={grass.src} alt="About Images" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="about-inner inner">
                <div className="section-title" data-aos="fade-down" data-aos-duration="2000" >
                  <h2 className="title fw-bold">About Grasshopper</h2>
                  <p className="description">
                  Grasshopper is a powerful visual programming language and environment integrated within the Rhino Modules modelling software. It allows users to create and manipulate complex designs that offers significant time savings and enhanced design capabilities.               </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
