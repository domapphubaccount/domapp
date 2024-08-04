import React from 'react'
import { Container } from 'reactstrap'
import arrows from "@/assets/images/Clad/arrows.svg"

export default function Section_2() {
  return (
    <section>
        <Container>
        <div className="mil-center mil-mb-90 text-center mil-clad">
            <span className="mil-suptitle mil-upper mil-up mil-mb-30" style={{translate: "none", rotate: "none" ,scale: "none" , transform: "translate(0px, 0px)", opacity: "1"}}>
                Easy to use
            </span>
            <h2 className="mil-upper mil-up mil-mb-30" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: " 1"}}>Clad-Cut Does the Heavy Lifting</h2>
            {/* <p className="mil-up" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}>Generate fabrication drawings and CNC files in minutes, <br/> not days.</p> */}
            </div>
            <div className='row'>

            <div className="col-md-6 col-lg-3">
                <div 
                    className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60" 
                    style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}>
                        <h4 className="mil-upper mil-mb-30"></h4>
                        <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src={arrows.src} alt="icon" />
                        </div>
                        <p>Creates precise unfold views for each sheet.</p>
                    </div>
                </div>
            <div className="col-md-6 col-lg-3">
                <div 
                    className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60" 
                    style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}>
                        <h4 className="mil-upper mil-mb-30"></h4>
                        <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src={arrows.src} alt="icon" />
                        </div>
                        <p>Optimally positions fixing angles, avoiding clashes.</p>
                    </div>
                </div>
            <div className="col-md-6 col-lg-3">
                <div 
                    className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60" 
                    style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}>
                        <h4 className="mil-upper mil-mb-30"></h4>
                        <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src={arrows.src} alt="icon" />
                        </div>
                        <p>Automatically generates dimensions for clear reference.</p>
                    </div>
                </div>
            <div className="col-md-6 col-lg-3">
                <div 
                    className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60" 
                    style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1}}>
                        <h4 className="mil-upper mil-mb-30"></h4>
                        <div className="mil-icon mil-icon-border mil-mb-30">
                            <img src={arrows.src} alt="icon" />
                        </div>
                        <p>Exports fabrication-ready files: PDF, DXF, and CNC formats for each panel.</p>
                    </div>
                </div>
            </div>
                



        </Container>
    </section>
  )
}
