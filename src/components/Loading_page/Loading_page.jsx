import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/images/Header/dark-logo.WebP'

export default function Loading_page() {
  return (
    <section className='loading_section'>
      <div>
        <Image loading="lazy" src={Logo} alt='logo' className='feed_logo' />
      </div>
    </section>
  )
}
