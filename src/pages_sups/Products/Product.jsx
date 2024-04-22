import React from 'react'
import Pr1 from '@/assets/images/Home_Page/products/pr1.jpg'
import Pr2 from '@/assets/images/Home_Page/products/pr2.jpg'
import Image from 'next/image'

export default function Product({bannar,title,caption}) {


  return (
    <section>
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
                    <a href='#'>
                        Get Started
                    </a>
                </div>
            </div>

        </div>
    </section>
  )
}
