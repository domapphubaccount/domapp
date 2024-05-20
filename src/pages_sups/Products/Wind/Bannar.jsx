import React from 'react'
import Image from 'next/image'
import { league } from '@/pages_sups/Home/Section_1/Section_1'
import Link from 'next/link'

export default function Bannar({bannar,title,caption,linkPage}) {
    console.log(bannar)

  return (
    <section className='wind_bannar'>
            <div className='products'>
            <div className='dark_bannar'></div>
            {/* <img src={bannar} alt='product' className="bannar" /> */}
            <div className='head-section wind_bannar'>
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
                    <Link href={'/windload/pricing'}>
                        $ Pricing
                    </Link>
                </div>
                <div className='sq1'></div>
                <div className='sq2'></div>
                <div className='sq3'></div>
                <div className='sq4'></div>
            </div>

        </div>
        
    </section>
  )
}
