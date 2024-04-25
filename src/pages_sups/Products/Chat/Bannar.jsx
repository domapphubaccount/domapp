import React from 'react'
import Image from 'next/image'
import { Col, Row } from 'reactstrap'
import ChatIcon from "@/assets/images/back_drops/drop4.png"
import Chat_bannar from "@/assets/images/Products_Page/Chat/bannar/bannar_icon.png"
import { league } from '@/pages_sups/Home/Section_1/Section_1'

export default function Bannar({bannar,title,caption}) {


  return (
    <section className='chat_bannar' >
            <div className={`products ${league.className}`} style={{background:'#1c3f39'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className='chat_wave' viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,101.3C672,107,768,181,864,202.7C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                                 
                        <div className='head-section' data-aos="fade-right">
                            <div className='mb-4'>
                                <h1>{title}</h1>
                            </div>
                            <div className='mb-4'>
                                <p>
                                    {caption}
                                </p>
                            </div>
                            <div>
                                <a href='https://whatsappdome.onrender.com/dashboard'>
                                    Get Started
                                </a>
                            </div>
                        </div>
            </div>
    </section>
  )
}
