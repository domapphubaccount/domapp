import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import grass1 from "@/assets/images/Grasshopper/1.png"
import grass2 from "@/assets/images/Grasshopper/2.png"
import grass3 from "@/assets/images/Grasshopper/3.png"
import grass4 from "@/assets/images/Grasshopper/4.png"
import SectionHeader from '@/components/Reuse/Section_Head/SectionHeader'

function Section_5() {
  return (
    <section className='grass_imgs_section py-5' style={{backgroundColor: '#191919'}}>
        {/* <SectionHeader
        title="Welcome to My Website"
        subtitle="We provide awesome services"
        // buttons={buttons}
      /> */}
        <Container>
            <Row>
                <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000" >
                    <div className='p-2 my-2'>
                        <div className='description py-5 px-3 rounded'>
                            <h4>Visualization and Documentation</h4>
                            <p><span className='fw-bold'>Immediate Visualization:</span> Preview designs in real-time with custom display settings, facilitating faster evaluations and presentations. </p>
                            <br/>
                            <p><span className='fw-bold'>Clear Documentation:</span> Annotate and document design logic directly within the Grasshopper canvas, making it easier to understand and communicate complex designs. </p>
                        </div>
                    </div>
                </Col>

                <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000" >
                    <div className='h-100 d-flex align-items-center my-2'>
                        <img src={grass1.src} className='rounded'  alt=''/>
                    </div>
                </Col>

                <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000" >
                    <div className='h-100 d-flex align-items-center my-2'>
                        <img src={grass2.src} className='rounded'  alt=''/>
                    </div>
                </Col>

                <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000" >
                    <div className='p-5 my-2'>
                        <div className='description py-5 px-3 rounded'>
                            <h4>Rapid Iterations</h4>
                            <p><span className='fw-bold'>Dynamic Modifications: </span> Quickly explore different design options by adjusting sliders or parameters, enabling rapid prototyping and iteration.</p>
                            <br/>
                            <p><span className='fw-bold'>Immediate Feedback: </span> Visual updates in real-time help identify design issues and improvements instantly, speeding up the decision-making process.</p>
                        </div>
                    </div>
                </Col>

                <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000" >
                    <div className='p-5 my-2'>
                    <div className='description py-5 px-3 rounded'>
                            <h4>Complex Calculations and Geometries</h4>
                            <p><span className='fw-bold'>Advanced Computational Power: </span> Perform complex geometric calculations and manipulations that would be time-consuming and error-prone if done manually.</p>
                            <br/>
                            <p><span className='fw-bold'>Automated Analysis: </span> Integrate analysis tools (like structural or environmental analysis) directly within the design process, providing immediate insights without needing separate software.</p>
                        </div>
                    </div>
                </Col>

                <Col md={6} sm={12} data-aos="fade-up" data-aos-duration="2000" >
                    <div className='h-100 d-flex align-items-center my-2'>
                        <img src={grass3.src} className='rounded'  alt=''/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section_5