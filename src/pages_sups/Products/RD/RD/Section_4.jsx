import React from 'react'
import { Container } from 'reactstrap'
import Shape1 from "@/assets/images/shap/shap1.png"
import { useSelector } from 'react-redux';


export default function Section_4() {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { rdapp } = useSelector((state) => state.rdAppRed);
  return (
    <section className='rd_section_4'>
        <Container>
            <div className='head' data-aos="fade-up" data-aos-duration="1000">
                <h1>{rdapp(lang).sections.Head_2.title}</h1>
                <p>{rdapp(lang).sections.Head_2.slogan}</p>
            </div>
        </Container>
    </section>
  )
}
