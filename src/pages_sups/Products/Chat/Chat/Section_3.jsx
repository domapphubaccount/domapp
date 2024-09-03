import Image from 'next/image'
import React from 'react'
import Mob from '@/assets/images/chatPlus/chatPhone.png'
import { Col, Container, Row } from 'reactstrap'

export default function Section_3() {
    const firstCols = [
        {
            title:'Maximize Support Interaction',
            body:'Enhance customer interaction, lead quality, and communication effectiveness and provide real-time customer support to answer queries, resolve issues, handle complaints, etc.          '
          },
          {
            title:'Message Templates',
            body: 'Create and customize multiple templates tailored for different scenarios.'
          },
          {
            title:'Broadcast Messaging',
            body:'Sending a single message to a large number of recipients simultaneously.'
          },
          {
            title:'Performance Report',
            body:"Provides an analysis of the team's efficiency and effectiveness in handling customer interactions."
          },
    ]
    const seconedCols = [
        //         {
        //   title:'Diverse Communication',
        //   body:'Allows Manual, Hybrid communication.'
        // },
        {
          title:'Auto-reply',
          body:'Customized automated reply feature offers a range of capabilities designed to enhance customer engagement and streamline business communications.'
        },
        {
          title:'Archive',
          body:'Archive and access past conversations effortlessly, store and retrieve chat transcripts seamlessly, ensuring easy reference and review.          '
        },
        {
          title:'Automated Processes',
          body:'ChatPlus offers versatile Automated business processes enhancing efficiency such as appointment scheduling, order tracking, and more.'
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
                    <Col sm={12} md={4} lg={4} className='flex items-center'>
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
