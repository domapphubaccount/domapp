import React from 'react'
import { Container } from 'reactstrap'

export default function Heading({back,head,body}) {
  return (
    <section className='RD-head position-relative' data-aos="fade-up-right">
        <Container>
            <div className='text-center'>
                <h1 >
                    {back}
                </h1>
                <div className='sub-title'>
                    <div>
                    <h4>{head}</h4>
                    <h2>{body}</h2>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
