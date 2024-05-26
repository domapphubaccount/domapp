import React from 'react'
import Image from 'next/image'
import Drop from '@/assets/images/back_drops/drop9.png'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import iconCard from "@/assets/images/Products_Page/Customization/icon.png"
import Link from 'next/link'

export default function Bannar() {
  return (
    <section className={`customization_bannar ${league} position-relative`}>
        <div 
        class="slider-activation">
            <div 
            class="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" 
            data-black-overlay="6">
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner mb-5">
                                <h1 class="title theme-gradient"
                                >A digital <br/> agency. 
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="service-wrapper mb-5 service-white">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="service service__style--1">
                                    <div class="icon">
                                        <img src={iconCard.src} alt="Digital Agency"/>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Business Stratagy</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="service service__style--1">
                                <div class="icon">
                                    <img src={iconCard.src} alt="Digital Agency"/>
                                </div>
                                <div class="content">
                                    <h4 class="title">Website Development</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div class="service service__style--1">
                        <div class="icon">
                            <img src={iconCard.src} alt="Digital Agency"/>
                        </div>
                        <div class="content">
                            <h4 class="title">Marketing &amp; Reporting</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div></div>
    </section>
  )
}
