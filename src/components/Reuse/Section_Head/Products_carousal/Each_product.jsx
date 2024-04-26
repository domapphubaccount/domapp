import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";

export default function Each_product({product_carousal}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray",borderRadius:'50%' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray",borderRadius:'50%' }}
        onClick={onClick}
      />
    );
  }
  return (
    <section className="py-5">
        <Container>
    <div className="slider-container">
      <Slider {...settings}>
        {
          product_carousal.map((item,index) => (

        <div key={index}>
          <img src={item.src} alt="product" />
        </div>
          ))
        }
      </Slider>
    </div>
    </Container>
    </section>
  );
}
