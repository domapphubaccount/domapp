"use client"
import React, { useEffect, useState } from 'react'
import cont from "@/assets/images/Home_Page/customer-support.png"

export default function Contact() {
    const [toggle,setToggle] = useState(false)
    const [mainIcon,setMainIcon] = useState()
    const handleToggle = () => {
        setToggle(!toggle)
        console.log("zeft")
    }
    const icons = [
        "bi bi-whatsapp",
        "bi bi-chat-left-text",
        "bi bi-telephone-forward",
        "bi bi-chat-right-dots"
    ]
    useEffect(()=>{
        function handleMainIcon(){
            
        }
        setInterval(handleMainIcon,1000)
    },[])

  return (
    <div className='contact_center'>
        {
            toggle &&
        <div data-aos="fade-up">
                <div className='contact_circle_content'>
                <i class="bi bi-whatsapp"></i>
                </div>
                <div className='contact_circle_content'>
                <i class="bi bi-envelope-at-fill"></i>
                </div>
                <div className='contact_circle_content'>
                <i class="bi bi-telephone-forward"></i>
                </div>
                <div className='contact_circle_content'>
                <i class="bi bi-clock-history"></i>
                </div>
                <div className='contact_circle_content'>
                <i class="bi bi-geo-alt-fill"></i>
                </div>
        </div>
        }
            <div className='contact_container'>
            <div className='border_circle'></div>
            <div className='contact_circle z-1 position-relative' onClick={handleToggle}>
                {
                    <img src={cont.src} alt=""/>
                }
            </div>
        </div>
    </div>
  )
}
