"use client"
import React, { useEffect, useState, useRef } from 'react';
import cont from "@/assets/images/Home_Page/customer-support.png";
import Email from './email/Email';
import Link from 'next/link';
import { Tooltip } from 'reactstrap';
import cross from '@/assets/images/Home_Page/cross.png'

export default function Contact({handleToggle,toggle,setToggle}) {
    const [modal, setModal] = useState(false); 
    const [placebox, setPlacebox] = useState(false);
    const [timebox, setTimebox] = useState(false);
    const [whatsTooltipOpen, setWhatsTooltipOpen] = useState(false);
    const [contactTooltipOpen, setContactTooltipOpen] = useState(false);
    const [timeTooltipOpen, setTimeTooltipOpen] = useState(false);
    const [placeTooltipOpen, setPlaceTooltipOpen] = useState(false);

    const boxPlaceRef = useRef(null);
    const boxTimeRef = useRef(null);

    const handlePlaceToggle = () => {
        setPlacebox(!placebox);
    }

    const handleTimeToggle = () => {
        setTimebox(!timebox);
    }

    const toggleTooltip = (tooltip) => {
        switch (tooltip) {
            case 'whats':
                setWhatsTooltipOpen(!whatsTooltipOpen);
                break;
            case 'contact':
                setContactTooltipOpen(!contactTooltipOpen);
                break;
            case 'time':
                setTimeTooltipOpen(!timeTooltipOpen);
                break;
            case 'place':
                setPlaceTooltipOpen(!placeTooltipOpen);
                break;
            default:
                break;
        }
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
                    <div className='contact_circle_content pointer' id='whats' onClick={() => toggleTooltip('whats')}>
                        <Tooltip
                            placement="left"
                            isOpen={whatsTooltipOpen}
                            autohide={false}
                            target="whats"
                            toggle={() => toggleTooltip('whats')}
                        >
                            Contact us on WhatsApp
                        </Tooltip>
                        <a href="https://wa.me/201501060885" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                    <div className='contact_circle_content pointer' id="contact" onClick={() => toggleTooltip('contact')}>
                        <Tooltip
                            placement="left"
                            isOpen={contactTooltipOpen}
                            autohide={false}
                            target="contact"
                            toggle={() => toggleTooltip('contact')}
                        >
                            Send Message
                        </Tooltip>
                        <Link href="/contact">
                            <i className="bi bi-envelope-at-fill"></i>
                        </Link>
                    </div>
                    <div className='contact_circle_content pointer position-relative' onClick={handleTimeToggle} id="time">
                        <Tooltip
                            placement="left"
                            isOpen={timeTooltipOpen}
                            autohide={false}
                            target="time"
                            toggle={() => toggleTooltip('time')}
                        >
                            Work time
                        </Tooltip>
                        
                        <i className="bi bi-clock-history"></i>
                        {timebox &&
                            <div className='box_place' data-aos="fade-up" data-aos-duration="500" ref={boxTimeRef}>
                                <ul>
                                    <li className='d-flex'>
                                        <div className='me-2'>
                                            <i class="bi bi-clock text-dark"></i> 
                                        </div>
                                        <div>
                                         Saturday to Thursday from 
                                         <div className='my-2'>
                                            <span className='fw-bold text-light bg-primary rounded p-1'> 8 Am</span> <span className='fw-bold'>To</span> <span className='fw-bold text-light bg-primary rounded p-1'>5 Pm</span>
                                        </div>
                                        <div>(Local Time in <span className='fw-bold'>Makkah, Saudi Arabia</span>)</div>
                                        </div>
                                    </li>
                                    <li className='d-flex'>
                                        <div className='me-2'>
                                            <i class="bi bi-clock text-dark"></i> 
                                        </div>
                                        <div>
                                         Saturday to Thursday from <div className='my-2'><span className='fw-bold text-light bg-primary rounded p-1'>9 Am</span> <span className='fw-bold'>To</span> <span className='fw-bold text-light bg-primary rounded p-1'>5 Pm</span></div>
                                        <div>(Local Time in <span className='fw-bold'>Cairo, Egypt</span>)</div>
                                        </div>
                                    </li>
                                    <li className='d-flex'>
                                        <div className='me-2'>
                                            <i class="bi bi-clock text-dark"></i> 
                                        </div>
                                        <div >
                                         Saturday to Thursday from <div className='my-2'><span className='fw-bold text-light bg-primary rounded p-1'>5 Am</span> <span className='fw-bold'>To</span> <span className='fw-bold text-light bg-primary rounded p-1'>2 Pm</span></div>
                                        <div>(Local Time in <span className='fw-bold'>UTC</span>)</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className='contact_circle_content pointer position-relative' onClick={handlePlaceToggle} id='place'>
                        <Tooltip
                            placement="left"
                            isOpen={placeTooltipOpen}
                            autohide={false}
                            target="place"
                            toggle={() => toggleTooltip('place')}
                        >
                            Find us here
                        </Tooltip>
                        <i className="bi bi-geo-alt-fill"></i>
                        {placebox &&
                            <div className='box_place' data-aos="fade-up" data-aos-duration="500" ref={boxPlaceRef}>
                                <ul>
                                    {/* <li>
                                        <small className='fw-bold'>1- </small>2198 , Al Malaz, Salah Ad Din Al Ayyubi Rd, Building No. 7259 , Al Riyadh , Saudi Arabia
                                    </li> */}
                                    <li className='d-flex'>
                                    <div className='fw-bold me-2'>
                                        <span> 
                                            <i class="bi bi-geo-alt text-dark"></i>
                                        </span>
                                    </div>
                                    <span>20A, Salah Salem Rd, Al Obour Building, New Cairo, Egypt</span>
                                    </li>
                                    <li className='d-flex'>
                                        <div className='fw-bold me-2'>
                                            <i class="bi bi-geo-alt text-dark"></i>
                                        </div>
                                        <span>Al Geish Rd, Jad Allah Tower,4th Floor, Office No 309, 412, KFS, Egypt</span>
                                    </li>
                                    <li className='d-flex'>
                                        <div className='fw-bold me-2'>
                                            <i class="bi bi-geo-alt text-dark"></i>
                                        </div>
                                        <span>Al Geish Rd, Al Motahda Tower, 2nd Floor, Office No 3, KFS, Egypt</span>
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
                    <img src={!toggle ? cont.src : cross.src} alt=""/>
                </div>
            </div>
            <Email modal={modal} setModal={setModal}/>
        </div>
    );
}
