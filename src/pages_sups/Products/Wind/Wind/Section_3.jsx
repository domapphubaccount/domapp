"use client"
import React from "react";
import windmasterImage from "@/assets/images/windmaster/windmaster.png";
import { useSelector } from "react-redux";

export default function Section_3() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { windmaster } = useSelector((state) => state.windmasterRed);

  return (
    <div className="container mt-20 relative ">
      <div
        className="row align-items-center  social-feature-right"
        data-aos="fade-up"
        dir={dir}
      >
        <div className="col-lg-5 col-md-6 order-1 order-md-2">
          <img
            alt=""
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="img-fluid rounded-md shadow-lg p-5 bg-white w-full"
            style={{ color: "transparent", height: "auto" }}
            sizes="100vw"
            src={windmasterImage.src}
          />
        </div>
        <div
          className={`col-lg-7 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0`}
          
        >
          <div className={`section-title ${dir == 'rtl' && 'text-end'}`}>
            <h4 className="mb-4">
              {windmaster(lang).sections.Collaborate.head.part_1} <br />{" "}
              {windmaster(lang).sections.Collaborate.head.part_2}
            </h4>
            <p className="text-muted mb-0 para-desc">
              <span className="text-primary fw-bold">Wind Master </span>{" "}
              {windmaster(lang).sections.Collaborate.slogan}
            </p>

            {windmaster(lang).sections.Collaborate.slice.map((item,index)=>(

            <div className="d-flex align-items-center text-start mt-4 pt-2" key={index}>
              <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                {item.icon}
              </div>
              <div className={`flex-1 ${dir == 'rtl' && 'text-end'}`}>
                {item.slogan}
              </div>
            </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
}
