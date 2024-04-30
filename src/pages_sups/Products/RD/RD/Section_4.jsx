import React from 'react'
import { Container } from 'reactstrap'
import Shape1 from "@/assets/images/shap/shap1.png"


export default function Section_4() {
  return (
    <section className='rd_section_4'>
        <Container>
            <div className='head' data-aos="fade-up" data-aos-duration="1000">
                <h1>DATABASE PROTECTION</h1>
                <p>Data protected by CITC Decision Number 424/1442 Date 27-01-1442.</p>
            </div>
        </Container>
        {/* <div className="shape1">
          <img src={Shape1.src} alt="shape" />
        </div> */}
    </section>
  )
}
