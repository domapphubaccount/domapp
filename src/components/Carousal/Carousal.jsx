"use client"
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { carousalData } from "./carousalData";
import Section_head from "../Reuse/Section_Head/Section_head";
import { useRouter } from "next/navigation";
import { Container } from "reactstrap";

function Carousal() {
  const navigate = useRouter()
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
        infinite: false,
        speed: 500,
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    const settings_video = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} carousal_arrow`}
        style={{ ...style, display: "block", background: "black",right:'0' , width:'auto' , height: 'auto'}}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} carousal_arrow`}
        style={{ ...style, display: "block", background: "black",left: '0', width:'auto' , height: 'auto' , zIndex:'10' }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

        </div>
    );
  }

  return (
    <>
    <div id="products"></div>
      <Section_head head={1}  title_1={'Our Products'}des_1={'Each developed with precision, passion, and a deep commitment to excellence.'}/>
      <div className="carousal_container container">

          <div className="carousals_icons">
              <div className="slider-container">
              <Slider {...settings} asNavFor={nav1}
              ref={slider => (sliderRef2 = slider)}
              swipeToSlide={true}
              focusOnSelect={true}>
                  {
                      carousalData &&
                      carousalData.map((item,index)=>(
                          <div key={index}>
                              <div className="text-center p-3">
                              <div className="m-auto">
                                {item.icon}
                              </div>
                              <h6 className="mt-3" style={{fontSize:'13px'}}>{item.title}</h6>
                              </div>
                          </div>
                  ))    
                  }
              </Slider>
              </div>
          </div>

          <div className="m-auto py-4" style={{maxWidth:'800px'}}>
          <div className="carousals_icons">
              <div className="slider-container">
              <Slider {...settings_video} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                  {
                      carousalData &&
                      carousalData.map((item,index)=>(
                      <div key={index} className=" shadow_inside pointer" onClick={()=>navigate.push(item.link)}>
                          <img  src={item.src} className="rounded w-100 " />
                      </div>
                ))
                }
              </Slider>
              </div>
          </div>
          </div>

      </div>
    </>
  );
}

export default Carousal;
