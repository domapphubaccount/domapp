"use client"
import { Col, Container, Row } from "reactstrap"
import CountUp from 'react-countup';

export default function Section_3() {
    const counterData = [
        {
            number: 300,
            title: 'Clients'
        },
        {
            number: 20,
            title: 'Products'
        },
        {
            number: 25000,
            title: 'Successful Projects'
        },
        {
            number: 24,
            title: 'Support Availability'
        }
    ]


  return (
    <section className="home_section_3 shadow_inside">
        <Container>
            <Row>
            {
                counterData.map((item,index)=>(
                    <Col key={index}>
                        <div className="h-100">
                            <h2 className="fw-bold">
                                <CountUp end={item.number} duration={15}/>
                               {
                                item.title === "Support Availability" ?
                                '/7':
                                '+'
                               }
                            </h2>
                            <div className="fw-bold">
                                {item.title}
                            </div>
                        </div>
                    </Col>
                ))
            }
            </Row>
        </Container>
    </section>
  )
}
