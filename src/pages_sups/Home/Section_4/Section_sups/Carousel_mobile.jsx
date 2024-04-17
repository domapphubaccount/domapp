"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'reactstrap';

const FadeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    };

    return (
        <Slider {...settings}>
            <div>
            <div className="carousel_inside_content">
                  <div className="h-100">
                    <Row className="h-100">
                      <Col className={`d-flex align-items-center justify-content-center rounded transformed_video  ${'video_col'}`} >
                        {/* <Image src={item.src} alt="product" style={{border: '2px solid gray'}}/> */}
                        <video className="rounded h-100 w-100" preload="none" loop muted autoPlay>
                            <source src="/Home_page/Section_2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                      </Col>
                    </Row>
                  </div>
                </div>
            </div>
            <div>
            <div className="carousel_inside_content">
                  <div className="h-100">
                    <Row className="h-100">
                      <Col className={`d-flex align-items-center justify-content-center rounded transformed_video  ${'video_col'}`} >
                        {/* <Image src={item.src} alt="product" style={{border: '2px solid gray'}}/> */}
                        <video className="rounded h-100 w-100" preload="none" loop muted autoPlay>
                            <source src="/Home_page/Section_2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                      </Col>
                    </Row>
                  </div>
                </div>
            </div>
            <div>
            <div className="carousel_inside_content">
                  <div className="h-100">
                    <Row className="h-100">
                      <Col className={`d-flex align-items-center justify-content-center rounded transformed_video  ${'video_col'}`} >
                        {/* <Image src={item.src} alt="product" style={{border: '2px solid gray'}}/> */}
                        <video className="rounded h-100 w-100" preload="none" loop muted autoPlay>
                            <source src="/Home_page/Section_2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                      </Col>
                    </Row>
                  </div>
                </div>
            </div>
        </Slider>
    );
};

export default FadeCarousel;
