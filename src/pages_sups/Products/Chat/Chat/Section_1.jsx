import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Section_1({section}) {
  return (
    <section>
        <Container>
        <Row>{section.cards.map((item,index)=>(
            <Col sm={12} md={12} lg={6} key={index}>
            <div>
                <div className="chat_card_container" >
                <Image src={item.image_container} alt='card' className='card-banar_chat' />
                <Image src={item.image_icon} alt="chat_card" className='chat_card'/>
                <div className='text-center d-flex align-items-center justify-content-center h-100 flex-column chat_card_content'>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
                </div>
            </div>
            </Col>
            ))}
        </Row>
        </Container>
    </section>
  )
}
