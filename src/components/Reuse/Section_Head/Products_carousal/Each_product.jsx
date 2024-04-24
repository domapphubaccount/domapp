import React from "react";
import Slider from "react-slick";
import s1 from "@/assets/images/Products_Page/Erp/Features/pay.jpg"
import s2 from "@/assets/images/Products_Page/Erp/Features/porp.jpg"
import s3 from "@/assets/images/Products_Page/Erp/Features/repay.jpg"
import s4 from "@/assets/images/Products_Page/Erp/Features/task.jpg"
import { Container } from "reactstrap";

export default function Each_product() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <section>
        <Container>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={s1.src} alt="product" />
        </div>
        <div>
          <img src={s2.src} alt="product" />
        </div>
        <div>
          <img src={s3.src} alt="product" />
        </div>
        <div>
          <img src={s4.src} alt="product" />
        </div>
      </Slider>
    </div>
    </Container>
    </section>
  );
}
