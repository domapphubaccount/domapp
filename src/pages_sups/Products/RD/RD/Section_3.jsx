import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CardSection_1 from '@/assets/images/Products_Page/Rd/s1.svg'
import CardSection_2 from '@/assets/images/Products_Page/Rd/integ.jpg'
import Shape1 from "@/assets/images/shap/shap1.png"
// import Shape2 from "@/assets/images/shap/shap2.svg"

export default function Section_3() {
  return (
    <section className='rd_section_3'>
        <Container>
            <Row>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3' data-aos="fade-up" data-aos-duration="1000">
                        <div >
<i className="bi bi-check custom_icon"></i>
                        </div>
                        <h2>
                        USER FRIENDLY
                        </h2>
                        <p>
                        The  RDApp boasts a user-friendly interface, ensuring smooth navigation and effortless interactions for all users. By displaying all the reports issued for the project, all the tickets for the project, and clarifying the project status. 
The  RDAPP’s straightforward layout and clearly labeled options make it a breeze for users to accomplish tasks and access information.
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src={CardSection_1.src} alt='' />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src={CardSection_2.src} alt='' />
                    </div>
                </Col>
                <Col sm={12} md={5} lg={5}>
                    <div className='about-content py-3' data-aos="fade-up" data-aos-duration="1000">
                        <div>
<i className="bi bi-check custom_icon"></i>
                        </div>
                        <h2>
                        INTEGRATION
                        </h2>
                        <p>
                        Integrating all technical reports and relevant documents into one application that is designed with specific limits according to the Saudi Building Code, with easy access for all users to create, edit, and share documents according to their specific roles.  
The RDApp streamlines the issuance of RD and inspection reports for technical engineers, automatically populating data across all reports and eliminating redundant data entry. 
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
                
        {/* <div className="shape1">
          <img src={Shape1.src} alt="shape" />
        </div> */}
        {/* <div className="shape7">
          <img src={Shape2.src} alt="shape" />
        </div> */}

    </section>
  )
}
