import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CardSection_1 from '@/assets/images/Products_Page/Rd/com.jpg'
import CardSection_2 from '@/assets/images/Products_Page/Rd/cost.jpg'

export default function Section_7() {
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
                        COMMUNICATION
                        </h2>
                        <p>
                        An e-mail is sent automatically from the application without human intervention, as once the any report is approved by the technical department manager, all technical reservations in the report will be sent to Stakeholders, the client and the contractor.
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
                            COST MONITORING  
                        </h2>
                        <p>
                        We have effectively developed a cost-per-meter technique that provides an estimated project value for each element in the Bill of Quantities (BOQ) during CPV ARABIA's operations in the Kingdom of Saudi Arabia.
                        This method has been programmed into the  RDAPP with detailed factors to enhance cost evaluations for projects and promptly notify Stakeholders of any flagged concerns.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
