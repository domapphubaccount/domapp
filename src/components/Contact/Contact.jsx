"use client"
import React, { useEffect, useState, useRef } from 'react';
import cont from "@/assets/images/Home_Page/customer-support.png";
import Email from './email/Email';
import Link from 'next/link';

export default function Contact() {
    const [modal, setModal] = useState(false); 
    const [toggle, setToggle] = useState(false);
    const [placebox, setPlacebox] = useState(false);
    const [timebox, setTimebox] = useState(false);
    const toggleRef = useRef(null);
    const boxPlaceRef = useRef(null);
    const boxTimeRef = useRef(null);

    const handleToggle = () => {
        setToggle(!toggle);
        console.log("zeft");
    }

    const handlePlaceToggle = () => {
        setPlacebox(!placebox);
    }

    const handleTimeToggle = () => {
        setTimebox(!timebox);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (placebox && boxPlaceRef.current && !boxPlaceRef.current.contains(event.target)) {
                setPlacebox(false);
            }
            if (timebox && boxTimeRef.current && !boxTimeRef.current.contains(event.target)) {
                setTimebox(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [placebox, timebox]);

    return (
        <div className='contact_center'>
            {toggle &&
                <div data-aos="fade-up">
                    <div className='contact_circle_content pointer'>
                        <a href="https://wa.me/201501060885" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                    <div className='contact_circle_content pointer' >
                        <Link href="/contact">
                            <i className="bi bi-envelope-at-fill"></i>
                        </Link>
                    </div>
                    <div className='contact_circle_content pointer position-relative' onClick={handleTimeToggle}>
                        <i className="bi bi-clock-history"></i>
                        {timebox &&
                            <div className='box_place' data-aos="fade-up" data-aos-duration="500" ref={boxTimeRef}>
                                <ul>
                                    <li>
                                    Saturday to Thursday from 9 am to 5 pm
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className='contact_circle_content pointer position-relative' onClick={handlePlaceToggle}>
                        <i className="bi bi-geo-alt-fill"></i>
                        {placebox &&
                            <div className='box_place' data-aos="fade-up" data-aos-duration="500" ref={boxPlaceRef}>
                                <ul>
                                    <li>
                                        Al Malaz, Salah Ad Din Al Ayyubi Rd, Riyadh Saudi Arabia
                                    </li>
                                    <li>
                                        20A, Salah Salem Rd, Al Obour Building, New Cairo, Egypt
                                    </li>
                                    <li>
                                        Al Geish Rd, Jad Allah Tower,4th Floor, Office No 309, 412, KFS, Egypt
                                    </li>
                                    <li>
                                        Al Geish Rd, Al Motahda Tower, 2nd Floor, Office No 3, KFS, Egypt
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            }
            <div className='contact_container'>
                <div className='border_circle'></div>
                <div className='contact_circle z-1 position-relative pointer' onClick={handleToggle} >
                    <img src={cont.src} alt=""/>
                </div>
            </div>
            <Email modal={modal} setModal={setModal}/>
        </div>
    );
}
