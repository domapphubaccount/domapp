import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Section_1() {
  return (
    <section className='rd_section_1'>
        <Container>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    <div className='h-100 text-center card' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                        <i className="bi bi-database-up"></i>
                        </div>    
                        <div>
                            <h4>
                            Good Performance
                            </h4>
                            <p>
                            Appropriately grow competitive leadership rather than strategic technically sound processes without state.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className='h-100 text-center card' data-aos="fade-up" data-aos-duration="1000">
                        <div>
                        <i className="bi bi-file-lock"></i>                        </div>    
                        <div>
                            <h4>
                            Highly Secure
                            </h4>
                            <p>
                            Appropriately grow competitive leadership rather than strategic technically sound processes without state.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className='h-100 text-center card' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                        <i className="bi bi-code-slash"></i>
                        </div>    
                        <div>
                            <h4>
                            Fast Development
                            </h4>
                            <p>
                            Appropriately grow competitive leadership rather than strategic technically sound processes without state.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
