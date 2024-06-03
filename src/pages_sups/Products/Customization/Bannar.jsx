import React from 'react'
import Image from 'next/image'
import Drop from '@/assets/images/back_drops/drop9.png'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import iconCard from "@/assets/images/Products_Page/Customization/icon.png"
import iconCard2 from "@/assets/images/Grasshopper/icon-2.png"
import iconCard3 from "@/assets/images/Grasshopper/icon-3.png"
import Link from 'next/link'

export default function Bannar() {
  return (
    <section className={`customization_bannar ${league} position-relative`}>
        <div 
        className="slider-activation">
            <div 
            className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" 
            data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner mb-5">
                                <h1 className="title theme-gradient"
                                >Grasshopper®<br/>3D   
                                </h1>
                                <p className='text-white'>Precision engineering for exquisite facade fabrication.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-wrapper mb-5 service-white">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="service service__style--1">
                                    <div className="icon">
                                        <img src={iconCard.src} alt="Digital Agency"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">The Ultimate Tool for Creativity and Efficiency</h4>
                                        <p className='text-xs leading-relaxed'>shopper for Rhino is the ultimate tool for architects, engineers, and designers seeking to push the boundaries of creativity and efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={iconCard2.src} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Empowering Designers and Engineers</h4>
                                    <p className='text-xs leading-relaxed'>Grasshopper empowers designers and engineers to push the boundaries of traditional modelling through a flexible, intuitive, and powerful dynamic design environment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service service__style--1">
                        <div className="icon">
                            <img src={iconCard3.src} alt="Digital Agency"/>
                        </div>
                        <div className="content">
                            <h4 className="title">Significant Time Savings</h4>
                            <p className='text-xs leading-relaxed'>Grasshopper can save approximately 40-80% of the time typically required for complex design and modelling tasks by automating repetitive processes, enabling rapid iterations, and integrating analysis tools, this estimate assumes that users have a moderate to high level of proficiency with Grasshopper, as familiarity with the tool greatly enhances its efficiency benefits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div></div>
    </section>
  )
}
