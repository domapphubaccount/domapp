import React from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap'

export default function RD_heading({body}) {
    const { lang, dir } = useSelector((state) => state.languageSlice);
    const { rdapp } = useSelector((state) => state.rdAppRed);

  return (
    <section className='RD-head position-relative' data-aos="fade-up-right">
        <Container>
            <div className='text-center'>
                <h1 >
                    ABOUT APP
                </h1>
                <div className='sub-title'>
                    <div>
                    <h4>{rdapp(lang).sections.Head_1.title}</h4>
                    <h2>{rdapp(lang).sections.Head_1.slogan}</h2>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
