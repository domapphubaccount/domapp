import React from 'react'
import Image from 'next/image'
import Drop from '@/assets/images/back_drops/drop9.png'

export default function Product({bannar,title,caption}) {
  return (
    <section className='erp_bannar'>
            <div className='products' style={{background: `#3f4448 url(${Drop.src})`}}>
            {/* <Image src={bannar} alt='product' className="bannar" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='chat_wave'>
                    <path fill="#ffffff" fill-opacity="1" d="M0,288L120,293.3C240,299,480,309,720,277.3C960,245,1200,171,1320,133.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            <div className='head-section'>
                <div className='mb-4'>
                    <h1><span style={{color:'#602c2c',textShadow:'-1px 2px 8px #fff'}}>ERP</span> System</h1>
                </div>
                <div className='mb-4'>
                    <p>
                        {caption}
                    </p>
                </div>
                <div>
                    <a href='https://erp.designal.cc/home'>
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
