import React from 'react'
import { Col, Container } from 'reactstrap'
import Task from "@/assets/images/Products_Page/Erp/Features/task.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_8() {
  return (
    <section className='erp_section_7' id="Tas">
        <Container>
            <div className='row g-0 section_container' id='Task'>
                <Col sm={12} md={6} lg={6}>
                    <img src={Task.src} className='image_manage product_image-card' alt="manage" data-aos="fade-up" data-aos-duration="2500"/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h3>Task Management</h3>
                            <p>
                            Ensure task completion on schedule to accomplish your goals. Utilize the application's advanced functionalities like task cloning, timers, reminders, and more to enhance productivity and efficiency. Assign tasks to both team members and clients to streamline collaboration.                            </p>
                        </div>
                        <div>
                            <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Task assignment.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Task control.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span><span>Task cloning.</span> </div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span><span>Task summary and overview.</span> </div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span><span>Task reminder.</span> </div>
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
