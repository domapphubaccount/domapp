import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Section_2() {
  return (
    <section className='rd_section_2'>
        <Container>
            <Row>
                <Col sm={12} md={4} lg={4}>
                    <div className='p-4'>
                        <h3 className='mb-3'>
                        Get ahead of your Competition with Flowshot Pro Tool
                        </h3>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have , or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={8} lg={8}>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className='h-100 text-center rd-cards-blue' >
                                <div style={{fontSize:'3rem'}}>
                                    <i class="bi bi-2-circle"></i>
                                </div>
                                <h3>Clean RD</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatipn.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className='h-100 text-center rd-cards-blue'>
                                <div style={{fontSize:'3rem'}}>
                                    <i class="bi bi-2-circle"></i>
                                </div>
                                <h3>Clean RD</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatipn.
                                </p>
                            </div>
                        </Col>
                    </Row>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}
