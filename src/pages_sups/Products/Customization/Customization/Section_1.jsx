import React from 'react'
import cardImg from '@/assets/images/Products_Page/Customization/bg-image-1.jpg'
import Modle from './GLTF/Modle'

export default function Section_1() {
  return (
    <section className='customization_section_1'>
        <div className="about-area about-position-top pb--120">
            <div className="about-wrapper">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5 col-md-12 h-100">
                            <div className="thumbnail h-100">
                                {/* <img className="w-100 cust" src={cardImg.src} alt="About Images" /> */}
                                <Modle />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h2 className="title">About</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                                </div>
                                <div className="row mt--30 mt_sm--10">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            <h3 className="title">Who we are</h3>
                                            <p>DomApp is a leading software development company, distinguished by extensive experience and high capability in designing and programming any software your company needs.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            <h3 className="title">Who we are</h3>
                                            <p>Whether it’s our own development or customization of other software, we are here to provide the optimal solutions for your success.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
