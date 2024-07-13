import { league } from '@/pages_sups/Home/Section_1/Section_1'
import React from 'react'
import { Container } from 'reactstrap'

export default function Head_2() {
  return (
    <section className='RD-head position-relative mt-5 pt-5' data-aos="fade-up-right">
        <Container>
            <div className='text-center'>
                <h1 >
                    CladCut
                </h1>
                <div className='sub-title'>
                    <div>
                    <h4 style={{fontSize:'1rem',fontSize: "2rem",color: "black",textShadow: "1px 1px 0px #000"}} className='fw-bold'>Exclusive Features</h4>
                    <h2>Make us proud</h2>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
