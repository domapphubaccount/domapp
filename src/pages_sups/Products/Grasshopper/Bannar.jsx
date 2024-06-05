import React from 'react'
import Image from 'next/image'
import Drop from '@/assets/images/back_drops/drop9.png'
import { Container } from 'reactstrap'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import shap1 from '@/assets/images/Products_Page/Customization/bubble-9.png'
import shap2 from '@/assets/images/Products_Page/Customization/line-4.png'
import item from '@/assets/images/Products_Page/Customization/project-8.png'
import item2 from '@/assets/images/Products_Page/Customization/pic1.png'
import Link from 'next/link'

export default function Bannar() {
  return (
    <section className={`cast_bannar ${league} position-relative`}>
        <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-heading heading-left">
                        {/* <h6 data-wow-duration="1s" data-wow-delay="0.5s" class="wow fadeInUp sub-title text-primary" style={{color: '#896eff!important'}}>We Create Ideas</h6> */}
                            <h1 className="title h2">SOFTWARE AND CUSTOMIZATION</h1>
                            <div><div className='d-inline-block m-auto text-primary fw-bold px-5'>We create ideas, build and customize stunning applications.</div></div>
                            {/* <p>"Unleash Your Brand's Potential with DomApp Website Customization services"</p> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <div className="position-relative" style={{position: "relative",willChange: "transform", 
                            // transform: "perspective(2000px) rotateX(17.5deg) rotateY(-3.95deg) scale3d(1, 1, 1)"
                            }}>
                                <img className='move-2 position-absolute' src={item2.src} alt="Illustration"/>
                                <img className='move-2' src={item.src} alt="Illustration"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <img src={shap1.src} alt="Bubble"/>
                </li>
                <li className="shape shape-3">
                    <img src={shap2.src} alt="Line"/>
                </li>
            </ul>
        </div>


    </section>
  )
}
