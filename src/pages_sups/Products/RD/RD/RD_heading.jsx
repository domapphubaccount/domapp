import React from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap'

export default function RD_heading({body,title}) {
    const { lang, dir } = useSelector((state) => state.languageSlice);


  return (
    <section className='RD-head position-relative' dir={dir} data-aos="fade-up-right">
        <Container>
            <div className='text-center'>
                <h1 >
                    ABOUT APP
                </h1>
                <div className='sub-title'>
                    <div>
                    <h4>{title}</h4>
                    <h2>{body}</h2>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
