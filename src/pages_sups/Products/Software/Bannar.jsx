import React from 'react'
import { league } from '@/pages_sups/Home/Bannar/Bannar'
import shap1 from '@/assets/images/Products_Page/Customization/bubble-9.png'
import shap2 from '@/assets/images/Products_Page/Customization/line-4.png'
import item from '@/assets/images/Products_Page/Customization/project-8.png'
import item2 from '@/assets/images/Products_Page/Customization/pic1.png'
import Link from 'next/link'
import customlogo from "@/assets/images/customization/Custom.png"
import { contact_page } from '@/Store/Main/links/links'
import { useSelector } from 'react-redux'

export default function Bannar() {
    const { lang, dir } = useSelector((state) => state.languageSlice);
    const { custom_software } = useSelector((state) => state.customSoftwareRed);

    return (
        <section className={`cast_bannar ${league} position-relative`}>
            <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-heading heading-left">
                                {/* <h1 className="title h2 head_bannar">Custome Software</h1> */}
                                {/* <div><div className='d-inline-block m-auto text-primary fw-bold px-5'>Tailored solutions, turning your vision into reality.</div></div> */}
                                <img loading="lazy" src={customlogo.src} />
                                <div><p className='fw-bold mb-2'>{custom_software(lang).sections.bannar.slogan}</p></div>
                                <div><Link className='btn btn-primary font-bold mt-4' href={contact_page}>{custom_software(lang).sections.bannar.contact_btn}</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-thumbnail">
                                <div className="position-relative" style={{ position: "relative", willChange: "transform" }}>
                                    <img loading="lazy" className='move-2 position-absolute w-full' src={item2.src} alt="Illustration" />
                                    <img loading="lazy" className='move-2 w-full' src={item.src} alt="Illustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="shape-group-8 list-unstyled">
                    <li className="shape shape-1">
                        <img loading="lazy" src={shap1.src} width={100} alt="Bubble" />
                    </li>
                    <li className="shape shape-3">
                        <img loading="lazy" src={shap2.src} width={100} alt="Line" />
                    </li>
                </ul>
            </div>
        </section>
    )
}
