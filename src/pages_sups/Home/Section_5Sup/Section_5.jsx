"use client"
import React from "react";
// import Slider from "react-slick";
import Slider from 'react-slick';
import { Container } from "reactstrap";
import pr1 from "@/assets/images/Home_Page/products/pr1.jpg"
import pr2 from "@/assets/images/Home_Page/products/pr2.jpg"
import pr3 from "@/assets/images/Home_Page/products/pr3.jpg"
import Image from "next/image";
import Link from "next/link";


function Section_5Sup() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const cardsData = [
    {
      src: pr1,
      title: 'Cladcut',
      link:'/cladCut',
    },
    {
      src: pr2,
      title: 'Windlaod',
      link:'/windload',
    },
    {
      src: pr3,
      title: 'Facade Static',
      link: '/facade',
    },

  ]
  return (
    <section className="home_section_5">
      <Container>
    <div className="slider-container">
      <Slider {...settings}>
        {cardsData.map((item,index) => (
        <div className="slider_card_product card-shadow">
          <Link href={item.link} style={{textDecoration: 'none'}}>
          <Image alt={item.title} src={item.src}/>
          <div className="fw-bold text-dark p-2 text-center">
            {item.title}
          </div>
          </Link>
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
