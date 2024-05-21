"use client"

import React, { useState , useEffect , useRef} from 'react';
import { items } from './Carousal_data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'reactstrap';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [getinviw,setinview] = useState();
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next)
  };
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(()=>{
    document.documentElement.style.setProperty('--product-src', `url('${items.find(item => item.index === activeIndex)?.src}')`);

    const handleScroll = () => {
      if (carouselRef.current) {
        const { top, bottom } = carouselRef.current.getBoundingClientRect();
        const isInView = top >= 0 && bottom <= window.innerHeight;
        isInView ? document.documentElement.style.setProperty(`--view`, `0`) : document.documentElement.style.setProperty(`--view`, `-100px`);
        setinview(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  function handleCarouselNav(itemIndex){
    setActiveIndex(itemIndex);
}


  return (
    <div className='h-100 '>
      <div className="carousal_container card_shadow ">
        <div  
          className="carousal_nav"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
        <ul>
          <div className='transformed_circle' style={{transform: `translate(${activeIndex === 1 ? '0px' : activeIndex === 2 ? '105px' : activeIndex === 9 ? '200px' : activeIndex === 3 ? '240px' : activeIndex === 4 ? '384px' : '480px' })` , width: activeIndex === 3 ? '140px' : activeIndex === 4 ? '100px' : activeIndex === 5 ? '94px': activeIndex === 1 ? '110px' : activeIndex === 2 && '140px'  }}></div>
            {items.map((item,index) => (
              <li key={index} className={`${item.index === activeIndex && 'active_card'}`} >
                  {item.index == activeIndex ?
                    <>
                    <div 
                      data-aos="fade-up"
                      data-aos-duration="1000">
                      {item.title}
                    </div>
                    </>
                    :
                    <button onClick={(e)=>{handleCarouselNav(item.index);sliderRef.slickGoTo(item.index - 1); console.log(item.index)}}>
                      {item.title}
                    </button>
                  }
              </li>
            ))
            }
          </ul>
        </div>
        <div  className={`carousal_card fade-in`}
        >
          <div className={`slider-video-container ${inView && "slider-video-container-normal"}`} style={{position:'relative'}}>
            <div className='container'>
              <Slider
                ref={slider => {
                  sliderRef = slider;
                }}
              {...settings}
              >
                {items.map((item,index)=>(
                <div key={index}>
                <div className={"carousel_inside_content"} >
                      <div className="h-100 card_inside">
                        <Row className="h-100">
                          <Col sm={4} md={4} lg={4}>
                            <div className='py-4'>
                              <h4>{item.title}</h4>
                              <div>
                                <p>
                                  {item.caption}
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8} md={8} lg={8} className={`d-flex align-items-center justify-content-center rounded transformed_video video_col`} >
                            <img  src={item.video} className="rounded h-100 w-100" />
                          </Col>
                            {/* <div className='text-center fw-bold'>-- {item.title} --</div> */}
                        </Row>
                      </div>
                    </div>
                </div>
                ))}

              </Slider>
          </div>
        </div>
        </div>
        <div className='catch' ref={ref}></div>
        {items.map((item,index)=> (
          item.index == activeIndex &&
          <div key={index} >
            <Link className='explore_more' href={`${item.link}`} shallow>
                <div className='explore'>Explore</div> <div>
                  <i className="bi bi-arrow-right ar"></i>  
                </div>
            </Link>
        </div>
        ))
        }
        </div>
      </div>
  );
};

export default MyCarousel;





