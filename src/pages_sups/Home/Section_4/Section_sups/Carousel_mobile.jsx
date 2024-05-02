"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'reactstrap';
import { items } from './Carousal_data'; 
import Link from 'next/link';

const FadeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    };

    return (
        <Slider {...settings}>
            {items.map((item,index)=>(
              <div key={index}>
                <Link href={item.link} shallow>
                <div className="carousel_inside_content">
                    <div className="h-100">
                      <Row className="h-100">
                        <Col className={`d-flex align-items-center justify-content-center rounded transformed_video  ${'video_col'}`} >
                            <video className="rounded h-100 w-100" preload="none" loop muted autoPlay>
                                <source src={item.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                          </Col>
                        </Row>
                    </div>
                </div>
                </Link>
              </div>         
           ))}


        </Slider>
    );
};

export default FadeCarousel;
