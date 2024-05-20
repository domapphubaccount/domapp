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
        {/* <div className='d-flex justify-content-center'>
            <div className='' style={{overflow: 'hidden', borderRadius:'20px',border:'1px solid #23834B',boxShadow:'0px 4px 20px 2px #ccc'}}>
                <button className={`pricing_toggle  ${priceToggle ? 'toggle-2' : 'toggle-1'}`}  onClick={()=>setPriceToggle(true)}>Monthly</button>
                <button className={`pricing_toggle  ${priceToggle ? 'toggle-1' : 'toggle-2'}`} onClick={()=> setPriceToggle(false)}>Annual</button>
            </div>
        </div> */}
        {/* {
            priceToggle ? */}
            <Monthly priceIcon={priceIcon}/>
            {/* : */}
            {/* <Annual priceIcon={priceIcon}/> */}
        {/* } */}

    </section>
    <Footer/>
    </>
  )
}

function Monthly({priceIcon}){
    const [showFree , setShowFree] = useState(false)

    const handleDemoClick = () => {
        window.location.href = 'https://erp.domapphub.com/signup';
    }
    return(
        <>

        <div className='py-3'>
        <Container>
            <div style={{maxWidth:'1000px'}} className='m-auto'>
            <Row className=' position-relative'>
                    <div className='free-button' onClick={()=> setShowFree(true)}>FREE</div>
                    <div className='interprise-button' onClick={()=> setShowFree(false)}>Interprise</div>
                    {
    showFree &&

                <Col sm={12} md={4} lg={3} className='me-auto my-4'>
                    <div className='pricing-container mb-4 pricing-card-3 p-4 py-4 erp erp-demo border-0 h-100' style={{borderRadius: '15px',boxShadow:'0px 0px 10px #ccc' , border: "1.5px solid #1B255A !important"}}>
                        <div className='mb-3 position-relative text-center'>
                            {/* <p className='demo-erp'>TRY DEMO</p>
                            <p className='demo-erp'>Works for 12 hours</p>
                             */}
                            <h3>FREE</h3>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-erp-data'>
                                <li><i class="bi bi-check-circle-fill"></i>2 users</li>
                                <li><i class="bi bi-check-circle-fill"></i>12 HOURS</li>
                            </ul>
                        </div>

                        <div>
                            <button className='pricing-btn-erp' onClick={handleDemoClick}>START DEMO</button>
                        </div>
                    </div>
                </Col>
}
                <Col sm={12} md={4} lg={3} className='ms-auto my-4'>
                    <div className='pricing-container mb-4 pricing-card-3 p-4 py-4 erp erp-demo border-0 h-100' style={{borderRadius: '15px',boxShadow:'0px 0px 10px #ccc' , border: "1.5px solid #1B255A !important"}}>
                        <div className='mb-3 position-relative text-center'>
                            {/* <p className='demo-erp'>TRY DEMO</p>
                            <p className='demo-erp'>Works for 12 hours</p> */}
                            
                            <h3>Basic</h3>
                            <p>Yearly Subscription</p>
                            <h4 className='fw-light'><del>6000</del><small> SAR</small></h4>
                            <h3>5000<small> SAR</small></h3>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-erp-data'>
                                <li><i class="bi bi-check-circle-fill"></i>5 users</li>
                                <li><i class="bi bi-check-circle-fill"></i>Setup fees</li>
                                <li><i class="bi bi-check-circle-fill"></i>First year Subscription</li>
                                <li><i class="bi bi-check-circle-fill"></i>Online training</li>
                            </ul>
                        </div>
                            <small className='mb-2 d-block fw-bold' style={{fontSize: '.7rem'}}>* Next year renewed 1800 SAR</small>

                        <div>
                        <a href="https://wa.me/201501060885"><button className='pricing-btn-erp'>CONTACT SALES</button></a>

                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={3} className='ms-auto my-4'>
                    <div className='pricing-container mb-4 pricing-card-3 p-4 py-4 erp erp-demo border-0 h-100' style={{borderRadius: '15px',boxShadow:'0px 0px 10px #ccc' , border: "1.5px solid #1B255A !important"}}>
                        <div className='mb-3 position-relative text-center'>
                            {/* <p className='demo-erp'>TRY DEMO</p>
                            <p className='demo-erp'>Works for 12 hours</p> */}
                            
                            <h3>Standard</h3>
                            <p>Yearly Subscription</p>
                            <h4 className='fw-light'><del>14500</del><small> SAR</small></h4>
                            <h3>9000<small> SAR</small></h3>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-erp-data'>
                                <li><i class="bi bi-check-circle-fill"></i>15 users</li>
                                <li><i class="bi bi-check-circle-fill"></i>Setup fees</li>
                                <li><i class="bi bi-check-circle-fill"></i>First year Subscription</li>
                                <li><i class="bi bi-check-circle-fill"></i>Online training</li>
                            </ul>
                        </div>
                            <small className='mb-2 d-block fw-bold' style={{fontSize: '.7rem'}}>* Next year renewed 5000 SAR</small>
                        <div>
                        <a href="https://wa.me/201501060885"><button className='pricing-btn-erp'>CONTACT SALES</button></a>

                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={3} className='ms-auto my-4'>
                    <div className='pricing-container mb-4 pricing-card-3 p-4 py-4 erp erp-demo border-0 h-100' style={{borderRadius: '15px',boxShadow:'0px 0px 10px #ccc' , border: "1.5px solid #1B255A !important"}}>
                        <div className='mb-3 position-relative text-center'>
                            {/* <p className='demo-erp'>TRY DEMO</p>
                            <p className='demo-erp'>Works for 12 hours</p> */}
                            
                            <h3>Professional</h3>
                            <p>Yearly Subscription</p>
                            <h4 className='fw-light'><del>24000</del><small> SAR</small></h4>
                            <h3>13000<small> SAR</small></h3>
                            <p>Includes .</p>
                        </div>
                        <div className='mb-4'>
                            <ul className='pricing-erp-data'>
                                <li><i class="bi bi-check-circle-fill"></i>25 users</li>
                                <li><i class="bi bi-check-circle-fill"></i>Setup fees</li>
                                <li><i class="bi bi-check-circle-fill"></i>First year Subscription</li>
                                <li><i class="bi bi-check-circle-fill"></i>Online training</li>
                            </ul>
                        </div>
                            <small className='mb-2 d-block fw-bold' style={{fontSize: '.7rem'}}>* Next year renewed 7500 SAR</small>
                        <div>
                        <a href="https://wa.me/201501060885"><button className='pricing-btn-erp'>CONTACT SALES</button></a>

                        </div>
                    </div>
                </Col>
{!showFree &&
                <Col sm={12} md={4} lg={3} className='me-auto my-4'>
                    <div className='pricing-container pricing-card-3 p-4 py-4 erp border-0 h-100' style={{borderRadius: '15px',boxShadow:'0px 0px 10px #ccc'}}>
                        <div className='mb-3 text-center'>
                        <h3>Enterprise</h3>
                        {/* <p>Yearly Subscription</p> */}
                            {/* <h4 className='fw-light'><del>6000</del><small> SAR</small></h4>
                            <h3>5000<small> SAR</small></h3> */}
                        </div>
                        <div className='mt-5 pt-5'>
                            <p>Get customized features for your organization</p>
                        <div className='mb-4'>
                            <ul className='pricing-erp-data'>
                                {/* <li><i class="bi bi-check-circle-fill"></i>Get customized features for your organization</li> */}
                                {/* <li><i class="bi bi-check-circle-fill"></i>First year Cloud Free</li>
                                <li><i class="bi bi-check-circle-fill"></i>First year Hosting Free</li>
                                <li><i class="bi bi-check-circle-fill"></i>One Time setUp Fee</li>
                                <li><i class="bi bi-check-circle-fill"></i>Online training</li>
                                <li><i class="bi bi-check-circle-fill"></i>Maintainance and Updates</li> */}
                            </ul>
                        </div>

                        <div>
                            <a href="https://wa.me/201501060885"><button className='pricing-btn-erp'>CONTACT SALES</button></a>
                        </div>
                        </div>
                    </div>
                </Col>
}

            </Row>
            </div>
        </Container>
        </div>
        </>
    )
}
function Annual({priceIcon}){
    return(
        <>
        <div className='py-5'>
        <Container>
            <div style={{maxWidth:'1000px'}} className='m-auto'>
            <Row>
                <Col sm={12} md={4}>
                    <div className='text-center pricing-container pricing-card-3'>
                        <div className='mb-3'>
                        <i class="bi bi-person"></i>
                            <h3>Standard</h3>
                            <p><span className='fw-bold' style={{fontSize:'1.2rem'}}>5</span> Users</p>
                        </div>
                        <div className='mb-2'>
                            <h2 className='price'>1200 {priceIcon ? '$' : <small>SAR</small>}
                            <br/>
                            <small><del></del></small></h2>
                            <small></small>
                            <br/>
                            <small className='dis'>The price does not include tax</small>
                        </div>
                        <div className='mb-3'><small className='dis'>Meta Message fee not included <br/><Link href="#">...learn more</Link></small></div>
                        <div>
                            <button>CONTACT SALES</button>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className='text-center pricing-container pricing-card'>
                        <div className='mb-3'>
                        <i class="bi bi-building"></i>
                            <h3>Professional</h3>
                            <p><span className='fw-bold' style={{fontSize:'1.2rem'}}>10</span> Users</p>
                        </div>
                        <div className='mb-2'>
                            <h2 className='price'>
                            <small><del>2400 {priceIcon ? '$' : <small>SAR</small>}</del></small>
                            <br/>
                                2208 {priceIcon ? '$' : <small>SAR</small>}
                            
                            </h2>
                            <small className='dis fw-bold text-dark' style={{fontSize: '1rem'}}>( 8% Discount )</small>
                            <br/>
                            <small className='dis'>The price does not include tax</small>

                        </div>
                        <div className='mb-3'><small className='dis'>Meta Message fee not included <br/><Link href="#">...learn more</Link></small></div>
                        <div>
                            <button>CONTACT SALES</button>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className='text-center pricing-container pricing-card-2'>
                        <div className='mb-3'>
                            <i class="bi bi-buildings"></i>
                            <h3>Premium</h3>
                            <p><span className='fw-bold' style={{fontSize:'1.2rem'}}>15</span> Users</p>
                        </div>
                        <div className='mb-2'>
                            <h2 className='price'>
                            <small><del>4500 {priceIcon ? '$' : <small>SAR</small>}</del></small>
                            <br/>
                                4050 {priceIcon ? '$' : <small>SAR</small>}
                            </h2>
                            <small className='dis fw-bold text-dark' style={{fontSize: '1rem'}}>( 10% Discount )</small>
                            <br/>
                            <small className='dis'>The price does not include tax</small>

                        </div>
                        <div className='mb-3'><small className='dis'>Meta Message fee not included <br/><Link href="#">...learn more</Link></small></div>
                        <div>
                            <button>CONTACT SALES</button>
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
    <section className='pricing_erp_head'>
        <div>
            <div className='head_container'>
                <h1 style={{zIndex:4}} className='position-relative'>
                ERP PRICING
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

