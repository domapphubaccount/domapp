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

export default function Bannar() {

  return (
    <section className='cladCut-bannar'>
        <div className='products2'>
            <div className='light-purple-bannar'></div> 
                <Container>
                    {/* <img src={cladWhiteHouse.src} alt='products2' className="bannar" /> */}
                        <img src={SVGS.src} alt='' className='cladback' />
                    <div className="mil-background-grid mil-top-space"></div>
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-90 mil-mt-90">
                                    <h1 className="mil-mb-60 fw-bold" style={{fontSize:'60px'}}>
                                        <br />
                                            {/* <div className='back-drop-object'></div> */}
                                            <Image width={300} height={100} src={CladBannar.src} alt="cladcut bannar title" />
                                        <br/>
                                        <span className='slogan'>Produce detailed fabrication drawings with exceptional speed and efficiency.</span>
                                    </h1>
                                <div className='flex'>
                                    <button className='try-button'>
                                        TRY FOR FREE
                                        <div class="arrow-wrapper">
                                            <div class="arrow"></div>
                                        </div>
                                    </button>
                                    <button className='try-button mx-3'>
                                        PRICING
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="row mil-mb-60">
                                    <div className="col-6">
                                        <div className="mil-counter-frame mil-mb-30">
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
                                <div className="col-6">
                            <div className="mil-counter-frame mil-mb-30">
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
                        <div className="col-6">
                            <div className="mil-counter-frame mil-mb-30">
                                <h4 className="mil-accent mil-mb-10">
                                    <span className="mil-counter clad-text-color fw-bold" data-number="99">100+</span>
                                </h4>
                                <p className='fw-bold'>Users <br/> <div className='pt-2 pb-3'></div></p>
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
