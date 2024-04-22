"use client"
import React from "react";
// import Slider from "react-slick";
import Slider from 'react-slick';
import { Col, Container } from "reactstrap";
import pr1 from "@/assets/images/Home_Page/products/pr1.jpg"
import pr2 from "@/assets/images/Home_Page/products/pr2.jpg"
import pr3 from "@/assets/images/Home_Page/products/pr3.jpg"
import Image from "next/image";
import Link from "next/link";


function Section_5Sup() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: false,
    
  };

  const cardsData = [
        
    {
        title: 'Our mission',
        description: 'to enhance our customer’s success through unique solutions.     ',
        link: '/cladCut'
    },
    {
        title: 'Cutting-Edge Software',
        description: 'We specialize in developing applications that meets the needs of our clients with precision and creativity, utilizing the latest tech and frameworks.',
        link: '/cladCut'
    },
    {
        title: 'Tech Advancement',
        description: 'Embracing innovation in artificial intelligence, virtual reality, and big data analytics to drive our clients, businesses forward with creativity and expertise.' ,
        link: '/cladCut'
    },
    {
        title: 'Creative Innovation',
        description: 'From Cladcut to Chatplus, our projects showcase our commitment to pushing boundaries and creating groundbreaking solutions that make a difference. ',
        link: '/cladCut'
    },
    {
        title: 'Tailored Solutions',
        description: 'Crafting custom applications to fulfill unique requirements and objectives, ensuring our clients, success and business growth. ',
        link: '/cladCut'
    },
    {
        title: 'Client-Centric Approach',
        description: 'Putting our clients at the heart of everything we do, we strive to exceed expectations and deliver exceptional results that propel their success.',
        link: '/cladCut'
    },
]

  return (
    <section className="home_section_5 section_2_mobile_carousal">
      <Container>
    <div className="slider-container">
      <Slider {...settings}>
        {cardsData.map((item,index) => (
                <div className="card_column p-4" key={index}>
                  <div className="home_section_2_card">
                    <h4>{item.title}</h4>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
        ))
        }
      </Slider>
    </div>
    </Container>
    </section>
  );
}

export default Section_5Sup;
