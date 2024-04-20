"use client"

import React, { useState , useEffect , useRef} from 'react';
import Image from 'next/image';
import product_1 from "@/assets/images/Home_Page/products/pr1.jpg"
import product_2 from "@/assets/images/Home_Page/products/pr2.jpg"
import product_3 from "@/assets/images/Home_Page/products/pr3.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'reactstrap';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';


const MyCarousel = ({setConatiner}) => {
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
  inView ? setConatiner(true) : setConatiner(false)
  const items = [
    {
      index: 1,
      src: product_1,
      title: 'CladCut',
      link:'/cladCut',
      video: '/Products/Clad_1.mp4',
      caption: 'Section 1'
    },
    {
      index: 2,
      src: product_3,
      title: 'Windload',
      link:'/windload',
      video:'/Home_page/Section_2.mp4',
      caption: 'Section 3'
    },
    {
      index: 3,
      src: product_2,
      title: 'Facade Static',
      link: '/facade',
      video: '/Home_page/Section_2.mp4',
      caption: 'Section 2'
    },
    {
      index: 4,
      src: product_3,
      title: 'ERP System',
      link: '/erp',
      video:'/Home_page/Section_2.mp4',
      caption: 'Section 3'
    },
    {
      index: 5,
      src: product_3,
      title: 'ChatPlus',
      link: '/chat',
      video:'/Home_page/Section_2.mp4',
      caption: 'Section 3'
    },
    {
      index: 6,
      src: product_3,
      title: 'RD App',
      link: '/rd',
      video:'/Home_page/Section_2.mp4',
      caption: 'Section 3'
    }
  ];

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
    <div className='h-100'>
      <div className="carousal_container card_shadow ">
        <div  className="carousal_nav"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="3000"
        >
        <ul>
          <div className='transformed_circle' style={{transform: `translate(${activeIndex === 1 ? '0px' : activeIndex === 2 ? '95px' : activeIndex === 3 ? '200px' : activeIndex === 4 ? '322px' : activeIndex === 5 ? '435px' : '525px' })` , width: activeIndex === 3 ? '126px' : activeIndex === 4 && '120px'  }}></div>
            {items.map((item,index) => (
              <li key={index} className={`${item.index === activeIndex && 'active_card'}`} >
                  {item.index == activeIndex ?
                    <>
                    {console.log(activeIndex)}
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
        
        <div style={{position:'relative' , zIndex:'100'}} className={`carousal_card fade-in`} 
        // data-aos="zoom-in" data-aos-duration="500"
        >
          <div className={`slider-video-container ${inView && "slider-video-container-normal"}`}>
          <Slider
          ref={slider => {
            sliderRef = slider;
          }}
          {...settings}
          >
            {items.map((item,index)=>(

            <div key={index}>
            <div className={"carousel_inside_content"} >
                  <div className="h-100">
                    <Row className="h-100">
                      <Col className={`d-flex align-items-center justify-content-center rounded transformed_video  ${'video_col'}`} >
                        {/* <Image src={item.src} alt="product" style={{border: '2px solid gray'}}/> */}
                        <video  className="rounded h-100 w-100" preload="none" loop muted autoPlay>
                            <source src={item.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                      </Col>
                        <div className='text-center fw-bold'>-- {item.title} --</div>
                    </Row>
                  </div>
                </div>
            </div>
            ))}

        </Slider>
        </div>
        </div>
        <div className='catch' ref={ref}></div>
        {items.map((item,index)=> (
          item.index == activeIndex &&
          <div key={index} >
            <Link className='explore_more' href={`${item.link}`}>
                <div className='explore'>Explore</div> <div><i className="bi bi-arrow-right ar"></i></div>
            </Link>
        </div>
        ))
        }
        </div>
      </div>
  );
};

export default MyCarousel;





