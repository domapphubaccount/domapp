"use client"
import Contact from '@/components/Contact/Contact';
import Pricing from '@/pages_sups/Products/Wind/Pricing'
import React, { useState } from 'react'

export default function Page() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
        <Pricing />
        <Contact
        handleToggle={handleToggle}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  )
}
