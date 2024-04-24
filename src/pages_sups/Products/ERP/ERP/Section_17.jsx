import React from 'react'
import { Col, Container } from 'reactstrap'
import Pay from "@/assets/images/Products_Page/Erp/Features/work.jpg"
import yesI from "@/assets/images/Products_Page/Erp/Features/yes.svg"

export default function Section_17() {
  return (
    <section className='erp_section_15'>
        <Container>
            <div className='row g-0 section_container'>
                <Col sm={12} md={6} lg={6}>
                    <img src={Pay.src} className='image_manage' alt="manage" data-aos="fade-up" data-aos-duration="2500"/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='content h-100' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h3>Workflow Automation</h3>
                            <p>
                            Workflow automation for projects and estimates enables the automation of repetitive tasks. You can specify actions triggered when an estimate is accepted by your client or when a project is marked as completed. These automations enhance your team's efficiency and ensure no steps are overlooked in your workflow.
                            </p>    
                        </div>
                        <div>
                            <ul className='list' data-aos="fade-right"  data-aos-duration="1500">
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>create, customize, and automate business processes.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>automate routine tasks.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Confirm invoice payments.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Automate recurring tasks, projects.</span></div>
                                </li>
                                <li>
                                    <div><span><img src={yesI.src} alt='true' /></span> <span>Automate task, project creation.</span></div>
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
