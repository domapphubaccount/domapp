import React from 'react'
import { Col, Container } from 'reactstrap'
import Manage from "@/assets/images/Products_Page/Erp/Features/manage.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_7() {
  return (
    <section className='erp_section_7 pt-5 mt-5' id="Proj">
        <Container>
            <div className='row g-0 section_container data-aos="fade-up"'>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100'>
                        <div>
                            <h3>Project Management</h3>
                            <p>
                            This application offers highly advanced features designed to streamline project management. Enhance your efficiency further by utilizing the project templates and project cloning capabilities, making your workflow even smoother.
                            </p>
                        </div>
                        <div>
                            <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Project overview, assign users, mangers.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Project details, status, progression and completion.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span><span>Project cloning, activity and time spent.</span> </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img src={Manage.src} className='image_manage product_image-card' alt="manage" data-aos="fade-up" />
                </Col>
            </div>
        </Container>
    </section>
  )
}
