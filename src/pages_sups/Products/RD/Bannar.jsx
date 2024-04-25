import React from 'react'
import Image from 'next/image'
import Drop from '@/assets/images/back_drops/drop9.png'
import { Col, Container, Row } from 'reactstrap'
import labtop from '@/assets/images/Products_Page/Rd/bannar_lab.png'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import Shap_1 from "@/assets/images/Products_Page/Rd/mask-shape.png"
import Shap_2 from "@/assets/images/Products_Page/Rd/line-shape.png"

export default function Product({bannar,title,caption}) {
  return (
    <section className={`rd_bannar ${league}`}>
            <div className='rd'>
        <Container className='h-100'>
                <Row className='h-100 align-items-center'>
                    <Col sm={12} md={5}>
                        <div className='head-section text-center'>
                            <div className='banner_caption_text' style={{marginTop:'100px'}}>
                            <div className='mb-4'>
                                <h1>RD APP</h1>
                            </div>
                            <div className='mb-4'>
                                <p>
                                    Smart solutions that save time & Cost.
                                </p>
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className=' position-relative py-5' style={{zIndex:10}}>
                            <img src={labtop.src} alt="lab" className='mt-5'/>
                        </div>
                    </Col>
                </Row>
        </Container>
                    <div className='back_wave'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.547 325.915">
                            <defs></defs>
                            <g id="Group_1" data-name="Group 1" transform="translate(2.547 -753.617)">
                                <path id="Path_1" data-name="Path 1" class="cls-1" d="M1920,669.331V993.246H-2.547Z" transform="translate(0 84.287)"></path>
                                <path id="Path_2" data-name="Path 2" class="cls-2" d="M1920,669.331V902.469H-2.547Z" transform="translate(0 177.064)"></path>
                            </g>
                        </svg>
                    </div>
                    <div className='back_wave right_shap'>
                        <img src={Shap_1.src} alt="shap" />
                    </div>
                    <div className='back_wave top_left_shap'>
                        <img src={Shap_2.src} alt="shap" />
                    </div>
            </div>
    </section>
  )
}
