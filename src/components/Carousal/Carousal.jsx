"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { carousalData } from "./carousalData";
import Section_head from "../Reuse/Section_Head/Section_head";
import { useRouter } from "next/navigation";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

function Carousal() {
  const lang = useSelector((state) => state.languageSlice.lang);
  const home = useSelector(state => state.homeRed.home);
  const navigate = useRouter();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    dots: false,
    focusOnSelect: true,
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings_video = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} carousal_arrow z-10`}
        style={{
          ...style,
          display: "block",
          background: "black",
          right: "0",
          width: "auto",
          height: "auto",
        }}
        onClick={onClick}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 z-10 carousal_arrow_next"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <div id="carusal_close_next"></div>
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} carousal_arrow carousal_arrow_prev z-10`}
        style={{
          ...style,
          display: "block",
          background: "black",
          left: "0",
          width: "auto",
          height: "auto",
          zIndex: "10",
        }}
        onClick={onClick}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <div id="carusal_close_prev"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Section_head
        sectionId={"products"}
        head={1}
        title_1={home(lang).sections.products.head.title}
        des_1={
          home(lang).sections.products.head.slogan
        }
      />
      <div className="carousal_container container">
        <div className="carousals_icons">
          <div className="slider-container">
            <Slider
              {...settings}
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {home(lang).sections.products.main.slices &&
                home(lang).sections.products.main.slices.map((item, index) => (
                  <div key={index}>
                    <div className="text-center p-3">
                      <div className="m-auto">{item.icon}</div>
                      <h6 className="m-auto mt-3" style={{ fontSize: "13px", maxWidth: '172px' }}>
                        {item.title}
                      </h6>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <div className="m-auto py-4" style={{ maxWidth: "800px" }}>
          <div className="carousals_icons">
            <div className="slider-container">
              <Slider
                {...settings_video}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
              >
                {home(lang).sections.products.main.slices &&
                  home(lang).sections.products.main.slices.map((item, index) => (
                    <div
                      key={index}
                      className=" shadow_inside pointer"
                      onClick={() => navigate.push(item.link)}
                    >
                      <img loading="lazy" src={item.src} className="rounded w-100 " />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousal;
