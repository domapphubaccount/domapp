import React from 'react'
import { Col, Container } from 'reactstrap'
import Pay from "@/assets/images/Products_Page/Erp/Features/porp.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_13() {
  return (
    <section className='erp_section_11'>
        <Container>
            <div className='row g-0 section_container'>
                <Col sm={12} md={6} lg={6}>
                    <img src={Pay.src} className='image_manage' alt="manage" data-aos="fade-up" data-aos-duration="2500"/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h3>Proposals</h3>
                            <p>
                            Initial impressions are paramount. Showcase professionalism to potential clients through impeccably crafted project proposals. Our intuitive interface ensures ease of use without the need for design expertise.
                            </p>    
                        </div>
                        <div>
                            <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>create professional and customizable proposals quickly and efficiently.</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </div>
        </Container>
    </section>
  )
}
