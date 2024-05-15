import React from 'react'
import bannar from "@/assets/images/Products_Page/Clad/bannar.jpg"
import { Col, Row , Container } from 'reactstrap'

export default function Section_3() {
  return (
    <section className="mil-dark-bg mil-relative mil-o-hidden bcg-clad position-relative">
        <div className='dark-bannar' style={{backgroundColor:'#000000bf'}}> </div>
        <Container>
            <Row className='z-1 position-relative'>
            <Col sm={12} md={4}>
            <p style={{color:'#fff',fontSize:"1.8rem"}}>CladCut </p>
            <h2 className="mil-upper mil-light mil-up mil-mb-30 h2_clad" style={{fontSize: '2.5rem',translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1 ,borderImage: "repeating-linear-gradient(-45deg, transparent, transparent 1px, hsla(0, 0%, 100%, .2) 0, hsla(0, 0%, 100%, .2) 3px) 5"}}>Takes the lead</h2>
            </Col>
            <Col sm={12} md={8}>
                <ul>
                    <li style={{borderBottom: "5px solid hsla(0, 0%, 100%, .2)"}}>Creates precise unfold views for each sheet.</li>
                    <li style={{borderBottom: "5px solid hsla(0, 0%, 100%, .2)"}}>Optimally positions fixing angles, avoiding clashes.</li>
                    <li style={{borderBottom: "5px solid hsla(0, 0%, 100%, .2)"}}>Automatically generates dimensions for clear reference.</li>
                    <li style={{borderBottom: "5px solid hsla(0, 0%, 100%, .2)"}}>Exports fabrication-ready files: PDF, DXF, and CNC formats for each panel.</li>
                    <li style={{borderBottom: "5px solid hsla(0, 0%, 100%, .2)"}}>Provides installation drawings for seamless Fabrication Process.</li>
                </ul>
            </Col>
            </Row>
        </Container>

    </section>
  )
}
