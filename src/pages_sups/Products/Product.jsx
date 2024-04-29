import React from 'react'
import Image from 'next/image'
import { league } from '../Home/Section_1/Section_1'

export default function Product({bannar,title,caption,linkPage}) {
    console.log(bannar)

  return (
    <section className='ERP_bannar'>
            <div className='products'>
            <img src={bannar.src} alt='product' className="bannar" />
            <div className='head-section'>
                <div className='mb-4'>
                    <h1  className={league.className}>{title}</h1>
                </div>
                <div className='mb-4'>
                    <p>
                        {caption}
                    </p>
                </div>
                <div>
                    <a href={linkPage}>
                        {
                            title == "CladCut" ? 'Get Started' :
                            'Start For Free' 
                        }
                    </a>
                </div>
            </div>

        </div>
        
    </section>
  )
}
