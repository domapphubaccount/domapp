import React from 'react'
import Image from 'next/image'

export default function Product({bannar,title,caption,linkPage}) {


  return (
    <section className='ERP_bannar'>
            <div className='products'>
            <Image src={bannar} alt='product' className="bannar" />
            <div className='head-section'>
                <div className='mb-4'>
                    <h1>{title}</h1>
                </div>
                <div className='mb-4'>
                    <p>
                        {caption}
                    </p>
                </div>
                <div>
                    <a href={linkPage}>
                        Get Started
                    </a>
                </div>
            </div>

        </div>
        
    </section>
  )
}
