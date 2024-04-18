"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Logo from "../../../assets/images/Header/dark-logo.png";
import DarkLogo from "../../../assets/images/Header/dark-logo.png";
import MobileNav from './Mobile_nav/Mobile_nav';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
    const headerScrol = useRef();
    const [getWidowY, setWindowY] = useState();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter()
    console.log(router)

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    useEffect(() => {
        const handleScroll = () => {
            setWindowY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <Container className='nav-container'>
                <div className={`navbar_container ${getWidowY >= 600 && 'nav_active'}`} id="main_nav" ref={headerScrol}>
                    <div>
                        <Image onClick={()=>router.push('/')} src={getWidowY >= 600 ? Logo : DarkLogo} alt="main logo" className="main_logo" style={{cursor:'pointer'}} />
                    </div>
                    <div className="nav">
                        <nav>
                            <ul className='nav-list-container'>
                                <li>
                                    <Link href="/" className='nav-link-item'>HOME</Link>
                                </li>
                                <li className="custom-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                                    <Link href="/#products" className='nav-link-item'>PRODUCTS</Link>
                                    {dropdownOpen && (
                                        <div className="dropdown-menu-cust shadow_inside" data-aos="fade-up" data-aos-duration="300">
                                            <Row>
                                                <Col sm={6} md={6} lg={6}>
                                                    <ul className='products-category first-col'>
                                                        <li>
                                                            <div>Design SoftWare</div>
                                                            <ul>
                                                                <li><Link href={'/cladCut'}>Cladcut</Link></li>
                                                                <li><Link href={'/windload'}>Windload</Link></li>
                                                                <li><Link href={'/facade'}>Facade Static</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div>Business Adminstration</div>
                                                            <ul>
                                                                <li><Link href={'/erp'}>ERP System</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col sm={6} md={6} lg={6}>
                                                    <ul className='products-category last-col'>
                                                        <li>
                                                            <div>Risk Assessment <div className='text-secondary'>comply with SBC</div></div>
                                                            <ul>
                                                                <li>
                                                                    <Link href={'/rd'}>RD-App</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div>Communication</div> 
                                                            <ul>
                                                                <li>
                                                                    <Link href={'/chat'}>ChatPlus</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link href="/#about" className='nav-link-item'>WHAT WE DO</Link>
                                </li>
                                <li>
                                    <Link href="/#about" className='nav-link-item'>ABOUT US</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='mobile_nav'>
                        <MobileNav />
                    </div>
                </div>
            </Container>
        </header>
    )
}
