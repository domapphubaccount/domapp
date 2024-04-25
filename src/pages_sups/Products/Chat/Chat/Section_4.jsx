import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Section_4() {
  return (
    <section className='chat_section_4_cards'>
        <Container>
            <Row>
                <Col sm={12} md={4} lg={4} className='g-0 p-3'>
                <div className='h-100' data-aos="fade-up" data-aos-duration="3000">
                    <div className='h-100 chat_card_icon_container'>
                        <div className='card_icon d-inline-block'>
                            <i class="bi bi-telephone-x"></i>
                        </div>
                        <div>
                            <h4>Support Interaction</h4>
                            <p>
                            Empower agents to provide dynamic and personalized support interactions
                            </p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className='g-0 p-3' >
                <div className='h-100' data-aos="fade-up" data-aos-duration="1000">
                    <div className='h-100 chat_card_icon_container'>
                        <div className='card_icon d-inline-block'>
                            <i class="bi bi-postage-fill"></i>
                        </div>
                        <div>
                            <h4>Error-Free Communication</h4>
                            <p>
                            Implement advanced algorithms and AI technologies to ensure error-free communication, reducing the risk of misunderstandings and inaccuracies.                            </p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className='g-0 p-3'>
                <div className='h-100' data-aos="fade-up" data-aos-duration="500">
                    <div className='h-100 chat_card_icon_container'>
                        <div className='card_icon d-inline-block'>
                            <i class="bi bi-lock"></i>
                        </div>
                        <div>
                            <h4>Fortified Communication Channels
</h4>
                            <p>
                            Establish secure communication channels with end-to-end encryption to safeguard sensitive information and protect against cyber threats.
                            </p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className='g-0 p-3'>
                <div className='h-100' data-aos="fade-up" data-aos-duration="3000">
                    <div className='h-100 chat_card_icon_container'>
                        <div className='card_icon d-inline-block'>
                            <i class="bi bi-broadcast-pin"></i>
                        </div>
                        <div>
                            <h4>Streamlined Communication Workflows
</h4>
                            <p>
                            Optimize communication workflows to minimize redundancy and maximize efficiency, enabling seamless collaboration and information sharing.
                            </p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className='g-0 p-3'>
                <div className='h-100' data-aos="fade-up" data-aos-duration="2000">
                    <div className='h-100 chat_card_icon_container'>
                        <div className='card_icon d-inline-block'>
                            <i class="bi bi-phone"></i>
                        </div>
                        <div>
                            <h4>Mobile Responsiveness
</h4>
                            <p>
                            Enhance mobile responsiveness by providing automated replies tailored to the specific needs and preferences of mobile users.
                            </p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className='g-0 p-3'>
                    <div className='h-100' data-aos="fade-up" data-aos-duration="500">
                    <div className='h-100 chat_card_icon_container' >
                        <div className='card_icon d-inline-block'>
                        <i class="bi bi-archive"></i>
                        </div>
                        <div>
                            <h4>Efficient Communication Archive
</h4>
                            <p>
                            Implement a robust archiving system to store and retrieve past conversations effortlessly, enabling quick access to historical data for analysis and reference.
                            </p>
                        </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
