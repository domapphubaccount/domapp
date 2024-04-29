import React from 'react'
import { Container } from 'reactstrap'
import { league } from '../Home/Section_1/Section_1'

export default function Head_CWF({head,body}) {
  return (
    <section className='head_CWF'>
        <Container>
            <div className='text-center'>
                <h2 className={`${league.className} fw-bold`}>{head}</h2>
                <p className={`${league.className} `} style={{color: 'rgba(41, 41, 41, 0.75)' , fontSize:'1.2rem'}}>{body}</p>
            </div>
        </Container>
    </section>
  )
}
