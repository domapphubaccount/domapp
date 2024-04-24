import React from 'react'
import { Col, Container } from 'reactstrap'
import Pay from "@/assets/images/Products_Page/Erp/Features/invoice.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_11() {
  return (
    <section className='erp_section_11' id="Sub">
        <Container>
            <div className='row g-0 section_container'>
                <Col sm={12} md={6} lg={6}>
                    <img src={Pay.src} className='image_manage' alt="manage" data-aos="fade-up" data-aos-duration="2500"/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h3>Subscriptions</h3>
                            <p>
                            This functionality allows you to automatically bill your clients for your products and services. You have the flexibility to set the billing cycle to weekly, monthly, yearly, and more. The system will then automatically generate a new invoice and charge your client's credit card accordingly.                            
                            </p>    
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
            </div>
        </Container>
    </section>
  )
}
