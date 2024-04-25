import React from 'react'
import { Col, Container } from 'reactstrap'
import Time from "@/assets/images/Products_Page/Erp/Features/repay.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_14() {
  return (
    <section className='erp_section_11' id="Rec">
        <Container>
            <div className='row g-0 section_container'>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100' data-aos="fade-up" data-aos-duration="2500">
                        <div>
                            <h3>Recurring Billing</h3>
                            <p>
                            You have the flexibility to generate recurring invoices on a daily, weekly, monthly, or yearly basis. The system will autonomously generate new invoices and send them to your clients via email.</p>
                        </div>
                        {/* <div>
                            <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Project overview</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Project Details</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span><span>Time spent</span> </div>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img src={Time.src} className='image_manage product_image-card' alt="manage" data-aos="fade-up" data-aos-duration="3000"/>
                </Col>
            </div>
        </Container>
    </section>
  )
}
