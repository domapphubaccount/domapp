import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Te1 from '@/assets/images/Home_Page/s3-1.jpg'
import Te2 from '@/assets/images/Home_Page/s3-2.jpg'

export default function About_2() {
  return (
    <div className='mb-5'>
            <Row>
                <Col sm={12} md={6}>
                    <div className='h-100 p-3 m-3' data-aos="fade-up">
                        <div className='position-relative'>
                            <Image src={Te1} alt="tech1" className='rounded'/>
                            <div className='dark-bannar rounded'></div>
                        </div>
                        <div className='p-3' data-aos="fade-right" data-aos-duration="3000">
                            <h5>
                            Our Expertise Shines Bright
                            </h5>
                            <p className='py-1'>
                            At DomApp, our team of developers collaborates to align with your business objectives.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='h-100 p-3 m-3' data-aos="fade-down">
                        <div className='position-relative'>
                            <Image src={Te2} alt="tech1" className='rounded'/>
                            <div className='dark-bannar rounded'></div>
                        </div>
                        <div className='p-3' data-aos="fade-right" data-aos-duration="3000">
                            <h5>
                                Tailored Solutions
                            </h5>
                            <p className='py-1'>
                                Whether it's crafting administrative applications or engineering marvels, we excel in creating custom software that caters to the unique needs of each client.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
    </div>
  )
}
