import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Products_Des({section}) {
  return (
    <section>
        <Container>
            <div className=''>
                <div className='text-center p-4'>
                    <h3>
                        {section.title}
                    </h3>
                </div>
            </div>
            <div className='py-4'>
                <Row>
                    {
                        section.cards.map((item,index)=>(
                            <Col sm={12} md={6} lg={6} key={index}>
                                <div className='p-4 h-100'>
                                    <div className='p-3 card_shadow h-100 rounded'>
                                    <h5>
                                        {item.title}
                                    </h5>
                                    <p>
                                        {item.body}
                                    </p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>
    </section>
  )
}
