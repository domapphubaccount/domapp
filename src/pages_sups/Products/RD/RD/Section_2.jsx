import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CardSection_1 from '@/assets/images/Products_Page/Rd/s1.svg'
import CardSection_2 from '@/assets/images/Products_Page/Rd/s2.svg'
import porp from "@/assets/images/Products_Page/Rd/rd.jpg"
import quotes from "@/assets/images/Products_Page/Rd/quotes-left.svg"

export default function Section_3() {
  return (
    <section className='rd_section_3'>
        <Container>
            <Row className='justify-content-between'>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                        <i className="bi bi-amd custom_icon"></i>
                        </div>
                        <h2>
                        RD APP PURPOSE
                        </h2>
                        <p>
                        The RD APP is designed with the main purpose of assuring that each project is complying with the Saudi Building Code and receives the technical attention needed for high-quality output.
                        Tracking the stages of progress for each project and ensuring seamless coordination with the various parties involved, starting from receiving the project, followed by the initial risk assessment and any deeper review by the experts in several fields of civil engineering, such as geotechnical studies, structural analysis, innovative materials..etc. and going through each technical inspection stage on-site with efficiency. 
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <img src={porp.src} alt='' />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <div className='text-start' data-aos="fade-up" data-aos-duration="500">
                            <img src={quotes.src} className='me-auto' alt="qute" />
                        </div>
                        <div className='py-5 text-center' data-aos="fade-up" data-aos-duration="2000">
                            <Container>
                            <p>
                            “CHOOSING RD APP MEANS BENEFITING FROM THE BEST OF SMART SOLUTIONS THAT SAVE TIME AND COST AND ENHANCE EFFICIENCY AND COMMUNICATION EFFORTS ,  IT IS A GREAT COMPETITIVE ADVANTAGE , IN LINE WITH SAUDI BUILDING CODE.”
                            </p>
                            </Container>
                        </div>
                        <div className='text-end' data-aos="fade-up" data-aos-duration="500">
                            <img src={quotes.src}   className="ms-auto" alt="qute" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
