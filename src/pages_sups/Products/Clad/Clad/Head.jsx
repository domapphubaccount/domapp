import React from 'react'
import { Container } from 'reactstrap'
import { league } from '@/pages_sups/Home/Section_1/Section_1'

export default function Head({head,body}) {
  return (
    <section className='py-5 mt-5'>
        <Container>
        <div className={"mil-center mil-mb-90 text-center mil-clad" + league.className}>
            <span className="mil-suptitle mil-upper mil-up mil-mb-30" style={{translate: "none", rotate: "none" ,scale: "none" , transform: "translate(0px, 0px)", opacity: "1"}}>
              {head}
            </span>
            <h2 className="mil-upper mil-up mil-mb-30" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: " 1"}}>Unleash the Speed of Aluminum Cladding Fabrication with <br/> Clad-Cut</h2>
            <p className={"mil-up" + league.className} style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}>Generate fabrication drawings and CNC files in minutes, <br/> not days.</p></div>
        </Container>
    </section>
  )
}
