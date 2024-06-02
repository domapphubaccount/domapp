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
              <div className="thumbnail">
                <img className="w-100" src={grass.src} alt="About Images" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title fw-bold">About</h2>
                  <p className="description">
                  	Grasshopper can save approximately 40-80% of the time typically required for complex design and modelling tasks by automating repetitive processes, enabling rapid iterations, and integrating analysis tools, this estimate assumes that users have a moderate to high level of proficiency with Grasshopper, as familiarity with the tool greatly enhances its efficiency benefits.                  </p>
                </div>
                <div className="row mt--30 mt_sm--10">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Who we are</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Who we are</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
