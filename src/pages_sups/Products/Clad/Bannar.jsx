import React, { useState } from 'react'
import Image from 'next/image'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import arrow from '@/assets/images/Products_Page/Clad/arrow.svg'
import { Container } from 'reactstrap'
import dollar from "@/assets/images/Products_Page/Clad/dollar.png"

export default function Bannar({bannar,title,caption,linkPage}) {
    const [iconset,setIcon] = useState(false)

  return (
    <section className='ERP_bannar'>
        <div className='products2'>
            <div className='dark-bannar' style={{zIndex:'2',backgroundColor:'#00000091'}}></div>
        <Container>
            <img src={bannar} alt='products2' className="bannar" />
            <div className="mil-background-grid mil-top-space"></div>
            <div className="mil-banner-content">
                <div className="row align-items-end">
                    <div className="col-xl-7">
                        <div className="mil-mb-90">
                            {/* <span className="mil-suptitle mil-light mil-upper mil-mb-60 fw-bold" style={{fontSize:'60px',paddingTop:'90px'}}>
                                The future
                            </span> */}
                            <h1 className="mil-upper mil-light mil-mb-60 fw-bold" style={{fontSize:'60px'}}>
                            <span style={{fontSize:'1.8rem'}}>Fast</span>
                            <br />
                            <span className="mil-accent fw-bold" style={{fontSize:'60px'}}>
                            CladCut
                            </span>
                            <br/>
                            <span style={{fontSize:'1.5rem'}}>Efficient, accurate aluminum cladding fabrication</span>
                            </h1>
                            <a className="mil-link mil-light mil-upper me-3" href="https://dometools-fv24.onrender.com/login/">
                                TRY FOR FREE
                                <span className="mil-arrow">
                                    <img src={arrow.src} alt="arrow" />
                                </span>
                            </a>
                            <a className="mil-link mil-light mil-upper bundle-button" href="https://domapphub.surge.sh/pricing/">
                                Bundles
                                <span className="mil-arrow p-2 dis">
                                    <img src={dollar.src} alt="arrow" />
                                </span>
                                <span className='mil-arrow nul'>
                                    <img src={arrow.src} alt="arrow" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="row mil-mb-60">
                            <div className="col-6">
                                <div className="mil-counter-frame mil-light mil-mb-30">
                                    <h4 className="mil-accent mil-thin mil-mb-10">
                                        <span className="mil-counter " data-number="346">
                                            190K+
                                        </span>
                                    </h4>
                                    <p className="mil-light">
                                        Succeeded 
                                    <br/>
                                    m&sup2;
                                    </p>
                                </div>
                            </div>
                        <div className="col-6">
                    <div className="mil-counter-frame mil-light mil-mb-30">
                            <h4 className="mil-accent mil-thin mil-mb-10">
                            <span className="mil-counter" data-number="9">
                                18K+
                            </span>
                        </h4>
                        <p className="mil-light">
                            Reduced <br/>Working Hours
                        </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="mil-counter-frame mil-light mil-mb-30">
                        <h4 className="mil-accent mil-thin mil-mb-10">
                            <span className="mil-counter" data-number="10">5</span>
                        </h4>
                        <p className="mil-light">Years <br/>Experience</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="mil-counter-frame mil-light mil-mb-30">
                        <h4 className="mil-accent mil-thin mil-mb-10">
                            <span className="mil-counter" data-number="99">100+</span>
                        </h4>
                        <p className="mil-light">Users <br/> <div className='pt-2 pb-3'></div></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>

        </Container>
        </div>
 
    </section>
  )
}
