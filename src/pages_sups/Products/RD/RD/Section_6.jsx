import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CardSection_1 from '@/assets/images/Products_Page/Rd/quality.jpg'
import CardSection_2 from '@/assets/images/Products_Page/Rd/doc.jpg'
import Shape1 from "@/assets/images/shap/shap1.png"


export default function Section_6() {
  return (
    <section className='rd_section_3'>
        <Container>
            <Row>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3' data-aos="fade-up" data-aos-duration="1000">
                        <div >
<i className="bi bi-check custom_icon"></i>
                        </div>
                        <h2>
                        QUALITY CONTROL
                        </h2>
                        <p>
                        One of the key standout capabilities of the  RDApp is its capacity to enhance process excellence it achieves this automatically by highlighting the technical reservations according to the Saudi Building Code in each project to Stakeholders, the client, and the inspection engineer this way the  RDApp reduces the potential human errors factor and streamlines the inspection process for the engineers. 
Identifying projects requiring advanced technical engagement and routing them to the respective subject matter experts.
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src={CardSection_1.src} alt='' />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src={CardSection_2.src} alt='' />
                    </div>
                </Col>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3' data-aos="fade-up" data-aos-duration="1000">
                        <div>
<i className="bi bi-check custom_icon"></i>
                        </div>
                        <h2>
                        DOCUMENTATION

                        </h2>
                        <p>
                        With the built-in documentation system, users can easily create, edit, and share project reports at the same moment, ensuring efficient collaboration among team members. 
The documentation system offers advanced search and filtering capabilities, allowing users to quickly locate specific documents based on project numbers, locations, dates, and engineers who participated in the project, etc. 
The application's documentation system includes automated notifications and reminders, ensuring that technical reservations, notes, and all the project updates have been received by the engineers. 
</p>
                    </div>
                </Col>
            </Row>
        </Container>
        {/* <div className="shape1">
          <img src={Shape1.src} alt="shape" />
        </div> */}
    </section>
  )
}
