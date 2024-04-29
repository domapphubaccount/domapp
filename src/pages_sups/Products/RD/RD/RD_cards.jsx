import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import quotes from "@/assets/images/Products_Page/Rd/quotes-left.svg"


export default function RD_cards() {
  return (
    <section className=''>
        <Container>
            <Row>
                <Col>
                    <div className='py-4 qute'>
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
