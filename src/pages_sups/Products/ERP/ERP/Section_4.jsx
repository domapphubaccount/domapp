import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import F6 from '@/assets/images/Products_Page/Erp/Features/f6.jpg'
import { items } from '@/app/Page_data'

export default function Section_3() {
    
  return (
    <section className='erp_section_3 se4'>
        <Container>
            <div className='card_container card_shadow'>
                <Row>
                    <Col sm={12} md={7} lg={7}>
                        <div className='h-100' data-aos="fade-up" data-aos-duration="3000">
                            {items.filter((item) => item.link === '/erp' ).map((item,index) => 
                                <div className='card_content' key={index}>
                                    <div>
                                        {item.Section_4.features_1.title}
                                    </div>
                                    <ul>
                                        {item.Section_4.features_1.list.map((item,index)=>(
                                        <li key={index}>
                                            <div>
                                                {console.log(item.head.slice(0,3))}
                                                <a href={`#${item.head.slice(0,3)}`}><h5>{item.head}</h5></a>
                                                <p>{item.caption}</p>
                                            </div>
                                        </li> 
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col sm={12} md={5} lg={5}>
                        <div className='h-100 p-3 d-flex align-items-center' data-aos="fade-down" data-aos-duration="3000">
                            <Image src={F6} alt='f6' />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}
