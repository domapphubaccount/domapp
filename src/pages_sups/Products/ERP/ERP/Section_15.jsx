import React from 'react'
import { Col, Container } from 'reactstrap'
import Pay from "@/assets/images/Products_Page/Erp/Features/leads.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_15() {
  return (
    <section className='erp_section_15' id="Lea">
        <Container>
            <div className='row g-0 section_container'>
                <Col sm={12} md={6} lg={6}>
                    <img src={Pay.src} className='image_manage' alt="manage" data-aos="fade-up" data-aos-duration="2500"/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h3>Leads & Opportunities</h3>
                            <p>
                            Effectively manage your opportunities and guide leads into paying customers seamlessly Utilize our advanced form builder to effortlessly capture new leads, which can then be embedded on any website. 
                            </p>    
                        </div>
                        <div>
                            <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Create contacts, companies form leads.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Convert emails, messages and anything into a lead.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Assign users, supervisors and managers.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Add a lead reminder.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Manage and control leads.</span></div>
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
