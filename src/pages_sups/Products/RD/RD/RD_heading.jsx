import React from 'react'
import { Container } from 'reactstrap'

export default function RD_heading({body}) {
  return (
    <section className='RD-head position-relative' data-aos="fade-up-right">
        <Container>
            <div className='text-center'>
                <h1 >
                    ABOUT APP
                </h1>
                <div className='sub-title'>
                    <div>
                    <h4>Exclusive Features</h4>
                    <h2>{body}</h2>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
