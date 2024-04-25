import Image from 'next/image'
import React from 'react'
import Mob from '@/assets/images/Products_Page/Chat/mobile/mobile.jpg'
import { Col, Container, Row } from 'reactstrap'

export default function Section_3() {
    const firstCols = [
        {
            title:'Maximize support interaction',
            body:'Enhance customer interaction, lead quality, and communication effectiveness and provide real-time customer support to answering queries, resolving issues, handling complaints, etc.          '
          },
          {
            title:'Improve Precision',
            body: 'Enhance communication accuracy by eliminating human error.'
          },
          {
            title:'Secure Communication',
            body:'Guarantee end-to-end encryption for every communication. '
          },
          {
            title:'Communication efficiency',
            body:'Minimize time and effort for specific communication tasks. '
          },
    ]
    const seconedCols = [
        //         {
        //   title:'Diverse Communication',
        //   body:'Allows Manual, Hybrid communication.'
        // },
        {
          title:'Auto-reply',
          body:'Customized automated reply.'
        },
        {
          title:'Archive',
          body:'Archive and access past conversations effortlessly, Store and retrieve chat transcripts seamlessly, ensuring easy reference and review. Organize your communication history efficiently for enhanced productivity and knowledge retention.          '
        },
        {
          title:'Automated Business',
          body:'Chat Plus offers versatile Automated business processes enhancing efficiency across multiple industries.          '
        },
        {
          title:'API Integration',
          body:'Offers integration with your CRM & ERP.'
        }
    ]
  return (
    <section className='chat_section_2 mb-5'>
        <Container>
            <div className='py-4'>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <div className='d-flex justify-content-between flex-column h-100 text-end m-3' data-aos="fade-up">{
                            firstCols.map((item,index)=>(
                            <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                            </div>
                            ))}
                        </div>
                        
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <Image src={Mob} alt='mobile' data-aos="fade-right"/>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                    <div className='d-flex justify-content-between flex-column h-100 text-start m-3' data-aos="fade-up">{
                            seconedCols.map((item,index)=>(
                            <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                            </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}
