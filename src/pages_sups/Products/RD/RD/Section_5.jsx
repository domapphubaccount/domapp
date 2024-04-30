import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CardSection_1 from '@/assets/images/Products_Page/Rd/cont.jpg'
import CardSection_2 from '@/assets/images/Products_Page/Rd/produc.jpg'
import Shape1 from "@/assets/images/shap/shap1.png"


export default function Section_5() {
  return (
    <section className='rd_section_3'>
        <Container>
            <Row>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3' data-aos="fade-up" data-aos-duration="1000">
                        <div >
                        <i className="bi bi-amd custom_icon"></i>
                        </div>
                        <h2>
                        PROCESS CONTROL
                        </h2>
                        <p>
                        The documentary cycle of each report is transferred from one specialist engineer to another, with more than different possible paths for each project that provide full technical disciplines that can guarantee automatically higher quality for each report issued.  
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
                        <i className="bi bi-amd custom_icon"></i>
                        </div>
                        <h2>
                        PRODUCTIVITY
                        </h2>
                        <p>
                        RD APP will increase the productivity of each report issued 50% reduction in time, organizing each report cycle, and connecting all parties involved faster.
 The RD APP will provide an Instant Unified Report Update with each step within the paths designed making both the design review and the site inspection visits according to the Saudi Building Code, and much more efficient.
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
