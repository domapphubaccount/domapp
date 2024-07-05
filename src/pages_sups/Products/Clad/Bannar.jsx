import React from 'react'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import { Container } from 'reactstrap'
import arrow from '@/assets/images/Products_Page/Clad/arrow.svg'
import dollar from "@/assets/images/Products_Page/Clad/dollar.png"
import bannar from "@/assets/images/Products_Page/Clad/bannar.jpg"

export default function Bannar() {

  return (
    <section className='ERP_bannar'>
        <div className='products2'>
            <div className='dark-bannar' style={{zIndex:'2',backgroundColor:'#00000091'}}></div>
                <Container>
                    <img src={bannar.src} alt='products2' className="bannar" />
                    <div className="mil-background-grid mil-top-space"></div>
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-90">
                                    <h1 className=" mil-light mil-mb-60 fw-bold" style={{fontSize:'60px'}}>
                                    <br />
                                    <span className={`mil-upper mil-accent fw-bold clad_bannar_title ${league.className}`}style={{fontSize:'60px',textStrokeWidth: '3px',textStroketrokeColor:' black'}}>
                                    CLADCUT
                                    </span>
                                    <br/>
                                    <span style={{fontSize:'1.5rem' }}>Produce detailed fabrication drawings with exceptional speed and efficiency.</span>
                                    </h1>
                                    <a className="mil-link mil-light mil-upper me-3" href=" https://domapphub.com/cladcuthome/">
                                        TRY FOR FREE
                                        <span className="mil-arrow">
                                            <img src={arrow.src} alt="arrow" />
                                        </span>
                                    </a>
                                    <a className="mil-link mil-light mil-upper bundle-button" href=" https://domapphub.com/pricing/">
                                        Pricing
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
                                            square meter
                                            <br/> of 
                                            Cladding produced  
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
