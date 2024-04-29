import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Pay from "@/assets/images/Products_Page/Erp/Features/pay.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_10() {
  return (
    <section className='erp_section_7 mb-5' id="Invo">
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
                            We’ve developed an incredibly user-friendly invoicing system, removing the necessity for third-party invoicing tools. Within the ERP System, you can easily create invoices with diverse options such as time billing, product billing, task billing, and others. Invoices are automatically sent to clients via email, enabling them to conveniently make payments via credit card or PayPal.
                            </p>    
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                        <li>
                                            <div><h5>Invoices</h5></div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span> <span>Create, Send, Track.</span></div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span> <span>Customize Template.</span></div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span><span>Invoice Automation.</span> </div>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                        <li>
                                            <div><h5>Payments</h5></div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span> <span>Track payments.</span></div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span> <span>Receive and generate payments.</span></div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span><span>Payment status overview.</span> </div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span><span>Determine payment method paypal, credit card.</span> </div>
                                        </li>
                                        <li>
                                            <div><span><img src={yesI.src} alt='true' /></span><span>Control product, time, and task billing.</span> </div>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </div>
        </Container>
    </section>
  )
}
