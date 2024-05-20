"use client"
import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import Footer from '@/components/Layout/Footer/Footer'
import Header from '@/components/Layout/Header/Header'
import Link from 'next/link'

export default function Pricing() {
    // const [priceToggle , setPriceToggle] = useState(true)
    const [priceIcon , setPriceIcon] = useState(false)
  return (
    <>
    <Header />
    <section className={league.className + ' pricing-section mb-5'}>
        <div className='mb-2'>
            <Section__head />
        </div>
            <Monthly priceIcon={priceIcon}/>
    </section>
    <Footer/>
    </>
  )
}

function Monthly(){
    const handleDemoClick = () => {
        window.location.href = 'https://erp.domapphub.com/signup';
    }
    return(
        <>

        <div className='py-5 wind'>
        <Container>
            <div style={{maxWidth:'1000px'}} className='m-auto'>
            <Row>
                <Col sm={12} md={4} className='my-3'>
                    <div className='pricing-container wind pricing-card p-4 py-4 erp border-0 m-3' style={{borderRadius: '15px'}}>
                        <div className='mb-3'>
                            <div className='fw-bold text-secondary'>Basic</div>
                            <h4><del>250</del><small> SAR</small></h4>
                            <h1>200<small> SAR</small></h1>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-wind-data'>
                                <li><i class="bi bi-check-circle-fill"></i>50 report</li>

                            </ul>
                        </div>

                        <div>
                            <a href="https://wa.me/201501060885"><button className='pricing-btn-wind'>CONTACT SALES</button></a>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} className='my-3'>
                    <div className='pricing-container wind pricing-card p-4 py-4 erp border-0 m-3' style={{borderRadius: '15px'}}>
                        <div className='mb-3'>
                        <div className='fw-bold text-secondary'>Standard</div>
                            <h4><del>750</del><small> SAR</small></h4>
                            <h1>562<small> SAR</small></h1>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-wind-data'>
                                <li><i class="bi bi-check-circle-fill"></i>150 report</li>
                            </ul>
                        </div>

                        <div>
                            <a href="https://wa.me/201501060885"><button className='pricing-btn-wind'>CONTACT SALES</button></a>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} className='my-3'>
                    <div className='pricing-container wind pricing-card p-4 py-4 erp border-0 m-3' style={{borderRadius: '15px'}}>
                        <div className='mb-3'>
                            <div className='fw-bold text-secondary'>Professional</div>
                            <h4><del>1500</del><small> SAR</small></h4>
                            <h1>975<small> SAR</small></h1>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-wind-data'>
                                <li><i class="bi bi-check-circle-fill"></i>300 report</li>
                            </ul>
                        </div>

                        <div>
                            <a href="https://wa.me/201501060885"><button className='pricing-btn-wind'>CONTACT SALES</button></a>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} className='m-auto my-3 '>
                    <div className='pricing-container wind pricing-card p-4 py-4 erp border-0 m-3' style={{borderRadius: '15px'}}>
                        <div className='mb-3'>
                            {/* <div className='fw-bold text-secondary'>Free</div> */}
                            {/* <h4><del>0</del><small> SAR</small></h4> */}
                            <h1>FREE<small> Trial</small></h1>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-wind-data'>
                                <li><i class="bi bi-check-circle-fill"></i>6 report</li>
                            </ul>
                        </div>

                        <div>
                            <a href="https://wa.me/201501060885"><button className='pricing-btn-wind'>CONTACT SALES</button></a>
                        </div>
                    </div>
                </Col>



            </Row>
            </div>
        </Container>
        </div>
        </>
    )
}


function Section__head() {
  return (
    <section className='pricing_wind_head'>
        <div>
            <div className='head_container'>
                <h1 style={{zIndex:4}} className='position-relative'>
                Windload Pricing
                </h1>
            </div>
        </div>
        <div className='dark_bannar'></div>
        <div className='back_wave'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.547 325.915">
                            <defs></defs>
                            <g id="Group_1" data-name="Group 1" transform="translate(2.547 -753.617)">
                                <path id="Path_1" data-name="Path 1" className="cls-1" d="M1920,669.331V993.246H-2.547Z" transform="translate(0 84.287)"></path>
                                <path id="Path_2" data-name="Path 2" className="cls-2" d="M1920,669.331V902.469H-2.547Z" transform="translate(0 177.064)"></path>
                            </g>
                        </svg>
                    </div>
    </section>
  )
}

