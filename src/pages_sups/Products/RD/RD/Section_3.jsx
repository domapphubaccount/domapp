import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CardSection_1 from '@/assets/images/Products_Page/Rd/s1.svg'
import CardSection_2 from '@/assets/images/Products_Page/Rd/s2.svg'

export default function Section_3() {
  return (
    <section className='rd_section_3'>
        <Container>
            <Row>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3'>
                        <div className='icon'>
                        <i class="bi bi-amd"></i>
                        </div>
                        <h2>
                        There are many variations of passages available
                        </h2>
                        <p>
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div>
                        <img src={CardSection_1.src} alt='' />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div>
                        <img src={CardSection_2.src} alt='' />
                    </div>
                </Col>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3'>
                        <div className='icon'>
                        <i class="bi bi-amd"></i>
                        </div>
                        <h2>
                        There are many variations of passages available
                        </h2>
                        <p>
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
