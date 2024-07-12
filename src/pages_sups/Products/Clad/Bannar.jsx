import React from 'react'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import { Container } from 'reactstrap'
import arrow from '@/assets/images/Products_Page/Clad/arrow.svg'
import dollar from "@/assets/images/Products_Page/Clad/dollar.png"
import bannar from "@/assets/images/Products_Page/Clad/bannar.png"
import cladWhiteHouse from "@/assets/images/Products_Page/Clad/bannar.jpg"
import CladBannar from "@/assets/images/Products_Page/Clad/Logo_Bannar.png"
import objectDrop from "@/assets/images/Products_Page/Clad/object_drop.png"
import Image from 'next/image'
import cladback from "@/assets/images/Products_Page/Clad/cladback.jpeg"
import SVGS from "@/assets/images/Products_Page/Clad/Sprinkle.svg"

import Shape_1 from "@/assets/images/Products_Page/Clad/shape.svg"
import Shape_2 from "@/assets/images/Products_Page/Clad/shape_2.svg"

export default function Bannar() {

  return (
    <section className='cladCut-bannar'>
        <div className='products2'>
            {/* <div className='light-purple-bannar'></div>  */}
                {/* <Container>

            </Container> */}
            <Bannar2 />
        </div>
    </section>
  )
}



function Bannar2(){
    return (
      <>
        <div className="load-speed-section py-5 pt-160 pb-160 lg-pt-100 lg-pb-80 mil-top-space clad-background">
        <div className='absolute h-100 w-100 clad-upper-bannar'  />

			<div className="container relative" style={{zIndex:'3'}}>
				<div className="row align-items-center" >
					<div className="col-xxl-5 col-lg-6 wow fadeInLeft" style={{visibility: "visible", animationName: "fadeInLeft"}}>
						<div className="ln-title-one my-5">
							<h2 className="title fw-500 tx-dark">               
                                <Image width={300} height={100} src={CladBannar.src} alt="cladcut bannar title" />
                            </h2>
						</div>
						{/* <p className="fs-18 mt-35 mb-55 lg-mb-30 lg-mt-20"> */}

                        <div className='slogan my-5 fw-bold'>Produce detailed fabrication drawings with 
                        <span class="position-relative d-inline-block">
                            exceptional speed 
                            <img src={Shape_2.src} className='absolute' alt="" />
                        </span> and efficiency.
                      </div>

                      <div className='flex'>
                        <a style={{textDecoration:'none'}} href=" https://platform.domapphub.com/cladcuthome/">
                        <button className='try-button'>
                            TRY FOR FREE
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                        </a>
                        <a style={{textDecoration: 'none'}} href=" https://platform.domapphub.com/pricing/">
                        <button className='try-button mx-3'>
                            PRICING
                        </button>
                        </a>
                    </div>
					</div>


					<div className="col-lg-6 ms-auto">
						<div className="block-container position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-40">
							<div className="row gx-xxl-5 align-items-center">
								<div className="col-sm-6 wow fadeInRight cladcard" style={{visibility: "visible", animationName: "fadeInRight"}}>
									<div className="block-wrapper d-flex flex-column align-items-center justify-content-center mb-40 xs-mb-20">
										<div className="rating font-recoleta">
                                        <h4 className="mil-accent mil-mb-10">
                                            <span className="mil-counter clad-text-color fw-bold" data-number="99">100+</span>
                                        </h4>
                                        <p className='fw-bold'>Users <br/> <div className='pt-2 pb-3'></div></p>
                                        </div>
										<ul className="style-none p-0 d-flex align-items-center justify-content-center rating-star mt-15">
											<li><i className="bi bi-star-fill"></i></li>
											<li><i className="bi bi-star-fill"></i></li>
											<li><i className="bi bi-star-fill"></i></li>
											<li><i className="bi bi-star-fill"></i></li>
											<li><i className="bi bi-star-fill"></i></li>
										</ul>
									</div> 
								</div>
								<div className="col-sm-6 wow fadeInLeft cladcard" style={{visibility: "visible" ,animationName: "fadeInLeft"}}>
									<div className="block-wrapper d-flex flex-column align-items-center justify-content-center mb-40 xs-mb-20">
										<div className="rating font-recoleta">
                                            <h4 className="mil-accent mil-mb-10">
                                                <span className="mil-counter clad-text-color fw-bold" data-number="346">
                                                    190K+
                                                </span>
                                            </h4>
                                            <p className='fw-bold'>
                                            square meter
                                            <br/> of 
                                            Cladding produced  
                                            </p>
                                        </div>
									</div> 

									<div className="block-wrapper mt-4 d-flex flex-column align-items-center justify-content-center mb-40 xs-mb-20">
										<div className="rating font-recoleta">
                                            <h4 className="mil-accent mil-mb-10">
                                                <span className="mil-counter clad-text-color fw-bold" data-number="9">
                                                    18K+
                                                </span>
                                            </h4>
                                            <p className='fw-bold'>
                                                Reduced <br/>Working Hours
                                            </p>
                                        </div>
									</div> 
								</div>
							</div>
							<img src={Shape_1.src} alt="" className="shapes shape-one" />
						</div> 
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }

//   <img src={SVGS.src} alt='' className='cladback' />
//   <div className="mil-background-grid mil-top-space"></div>
//   <div className="mil-banner-content">
//       <div className="row align-items-end">
//           <div className="col-xl-7">
//               <div className="mil-mb-90 mil-mt-90">
//                   <h1 className="mil-mb-60 fw-bold" style={{fontSize:'60px'}}>
//                       <br />
//                           {/* <div className='back-drop-object'></div> */}
//                           <Image width={300} height={100} src={CladBannar.src} alt="cladcut bannar title" />
//                       <br/>
//                       <span className='slogan'>Produce detailed fabrication drawings with exceptional speed and efficiency.</span>
//                   </h1>
            //   <div className='flex'>
            //       <a style={{textDecoration:'none'}} href=" https://platform.domapphub.com/cladcuthome/">
            //       <button className='try-button'>
            //           TRY FOR FREE
            //           <div className="arrow-wrapper">
            //               <div className="arrow"></div>
            //           </div>
            //       </button>
            //       </a>
            //       <a style={{textDecoration: 'none'}} href=" https://platform.domapphub.com/pricing/">
            //       <button className='try-button mx-3'>
            //           PRICING
            //       </button>
            //       </a>
            //   </div>
//               </div>
//           </div>
//           <div className="col-xl-5">
//               <div className="row mil-mb-60">
//                   <div className="col-6">
//                       <div className="mil-counter-frame mil-mb-30">
                        //   <h4 className="mil-accent mil-mb-10">
                        //       <span className="mil-counter clad-text-color fw-bold" data-number="346">
                        //           190K+
                        //       </span>
                        //   </h4>
                        //   <p className='fw-bold'>
                        //   square meter
                        //   <br/> of 
                        //   Cladding produced  
                        //   </p>
//                       </div>
//                   </div>
//               <div className="col-6">
//           <div className="mil-counter-frame mil-mb-30">
            //       <h4 className="mil-accent mil-mb-10">
            //       <span className="mil-counter clad-text-color fw-bold" data-number="9">
            //           18K+
            //       </span>
            //   </h4>
            //   <p className='fw-bold'>
            //       Reduced <br/>Working Hours
            //   </p>
//           </div>
//       </div>
//       <div className="col-6">
//           <div className="mil-counter-frame mil-mb-30">
            //   <h4 className="mil-accent mil-mb-10">
            //       <span className="mil-counter clad-text-color fw-bold" data-number="99">100+</span>
            //   </h4>
            //   <p className='fw-bold'>Users <br/> <div className='pt-2 pb-3'></div></p>
//           </div>
//       </div>
//   </div>
// </div>
// </div>
// </div>