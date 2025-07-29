// "use client"

// import React, { useState , useEffect , useRef} from 'react';
// import Image from 'next/image';
// import product_1 from "@/assets/images/Home_Page/products/pr1.jpg"
// import product_2 from "@/assets/images/Home_Page/products/pr2.jpg"
// import product_3 from "@/assets/images/Home_Page/products/pr3.jpg"
// import { Col, Row } from 'reactstrap';

// const MyCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [getinviw,setinview] = useState()
//   const carouselRef = useRef(null);


//   const items = [
//     {
//       index: 1,
//       src: product_1,
//       title: 'CladCut',
//       caption: 'Section 1'
//     },
//     {
//       index: 2,
//       src: product_2,
//       title: 'Facade-Static',
//       caption: 'Section 2'
//     },
//     {
//       index: 3,
//       src: product_3,
//       title: 'Windload',
//       caption: 'Section 3'
//     },
//     {
//       index: 4,
//       src: product_3,
//       title: 'ERP',
//       caption: 'Section 3'
//     },
//     {
//       index: 5,
//       src: product_3,
//       title: 'ChatPlus',
//       caption: 'Section 3'
//     },
//     {
//       index: 6,
//       src: product_3,
//       title: 'RD-App',
//       caption: 'Section 3'
//     }
//   ];
//   function handleCarouselNav(itemIndex){
//     setActiveIndex(itemIndex)
//   }
//   useEffect(()=>{
//     document.documentElement.style.setProperty('--product-src', `url('${items.find(item => item.index === activeIndex)?.src}')`);

//     const handleScroll = () => {
//       if (carouselRef.current) {
//         const { top, bottom } = carouselRef.current.getBoundingClientRect();
//         const isInView = top >= 0 && bottom <= window.innerHeight;
//         isInView ? document.documentElement.style.setProperty(`--view`, `0`) : document.documentElement.style.setProperty(`--view`, `-100px`);
//         setinview(isInView);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   },[])


//   return (
//     <div>
//       <div ref={carouselRef} className="carousal_container card_shadow ">
//         {getinviw &&
//         <div  className="carousal_nav"
//               data-aos="fade-down"
//               data-aos-easing="linear"
//               data-aos-duration="1500"
//         >
//           <ul>
//             {items.map((item,index) => (
//                 <li key={index} className={`${item.index === activeIndex && 'active_card'}`} >
//                   {item.index == activeIndex ?

//                     <div
//                       data-aos="fade-up"
//                       data-aos-duration="1000">
//                       {item.title}
//                     </div>
//                     :
//                     <button onClick={()=>{handleCarouselNav(item.index)}}>
//                       {item.title}
//                     </button>
//                   }
//               </li>
//             ))
//             }
//           </ul>
//         </div>
//         }
//       <div className="carousel_content">
//           {
//             items.map((item,index) => (
//               item.index === activeIndex &&
//               <div key={index} className={`carousal_card fade-in`} data-aos="zoom-in" data-aos-duration="500">
//                 {/* <Image loading="lazy"  src={item.src} alt="product image" className="carousal_image" width="100%" height="100%"/> */}

//                 <div className="carousel_inside_content">
//                   <div className="h-100">
//                     <Row className="h-100">
//                       <Col className={`d-flex align-items-center justify-content-center rounded transformed_video  ${'video_col'}`} >
//                         {/* <Image loading="lazy"  src={item.src} alt="product" style={{border: '2px solid gray'}}/> */}
//                         <video className="rounded h-100 w-100" preload="none" loop muted autoPlay>
//                             <source src="/Home_page/Section_2.mp4" type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                       </Col>
//                     </Row>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCarousel;

