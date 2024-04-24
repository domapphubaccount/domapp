import React from 'react'
import { Col, Container } from 'reactstrap'
import Pay from "@/assets/images/Products_Page/Erp/Features/pay.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_10() {
  return (
    <section className='erp_section_7'>
        <Container>
            <div className='row g-0 section_container'>
                <Col sm={12} md={6} lg={6}>
                    <img src={Pay.src} className='image_manage' alt="manage" data-aos="fade-up" data-aos-duration="2500"/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h3>Invoices & Payments</h3>
                            <p>
                                We’ve developed an incredibly user-friendly invoicing system, removing the necessity for third-party invoicing tools. Within the CRM, you can easily create invoices with diverse options such as time billing, product billing, task billing, and others. Invoices are automatically sent to clients via email, enabling them to conveniently make payments via credit card or PayPal.
                            </p>    
                        </div>
                        <div>
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
                        </div>
                    </div>
                </Col>
            </div>
        </Container>
    </section>
  )
}
