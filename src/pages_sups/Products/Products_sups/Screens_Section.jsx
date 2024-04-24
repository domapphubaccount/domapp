import React from 'react'
import { Container } from 'reactstrap'
import Slider from "react-slick";
import S1 from '@/assets/images/Products_Page/Clad/Carousal/as1.png'
import S2 from '@/assets/images/Products_Page/Clad/Carousal/as2.png'
import S3 from '@/assets/images/Products_Page/Clad/Carousal/as3.png'
import S4 from '@/assets/images/Products_Page/Clad/Carousal/as4.png'
import Image from 'next/image';

export default function Screens_Section({sections}) {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      };
      const screens = [
        S1,S2,S3,S4
      ]
  return (
    <section className=''>
            <div className='screens_section'>
                <Container>
                <div className="row align-items-center mb-5 card_shadow p-3 row-card carousal_inside" data-aos="fade-up" data-aos-duration="3000">
                    <div className="col-lg-6 services-details">
                        <div className="services-details-desc caption_products">
                        <h3>
                            {
                            sections.first.caption.header
                            }
                        </h3>
                        <p>
                            {sections.first.caption.body}
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-6 services-details-image">
                    <div className="slider-container rounded">
                        <Container>
                            <Slider {...settings}>
                                {screens.map(
                                    (item,index)=>(
                                        <div key={index} >
                                            <img src={item.src}  style={{ height: "400px", width: "350px", objectFit: "cover" }} alt='image' />
                                        </div>
                                    )
                                )}
                            </Slider> 
                        </Container>
                    </div>
                        
                    </div>
                </div>
                </Container>
            </div>
    </section>
  )
}
