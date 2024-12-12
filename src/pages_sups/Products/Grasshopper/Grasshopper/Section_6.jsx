import React from 'react'
import { useSelector } from 'react-redux';

export default function Section_6() {
    const { lang, dir } = useSelector((state) => state.languageSlice);
    const { grasshopper } = useSelector((state) => state.grasshopperRed);
  return (
    <section className='customization_section_2'>
        <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120" dir={dir}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <span>{grasshopper(lang).sections.Contact.sup}</span>
                            <h2>{grasshopper(lang).sections.Contact.title}</h2>
                            <a className="rn-button-style--2" href="/contact">
                                <span>{grasshopper(lang).sections.Contact.btn}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
