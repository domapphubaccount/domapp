import Image from 'next/image'
import React from 'react'
import { logo } from '@/Store/Main/assets/images'

export default function Loading_page() {
  return (
    <section className='loading_section'>
        <div>
            <Image src={logo} alt='logo' className='feed_logo'/>
        </div>
    </section>
  )
}
