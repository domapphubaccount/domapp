"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Logo from "../../../assets/images/Header/dark-logo.png";
import DarkLogo from "../../../assets/images/Header/dark-logo.png";
import MobileNav from './Mobile_nav/Mobile_nav';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PositionedSnackbar from '@/components/Reuse/Section_Head/SnackBar';

export default function Header({handleToggle}) {
    const headerScrol = useRef();
    const [getWidowY, setWindowY] = useState();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [open, setOpen] = React.useState(false);
    const router = useRouter()
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

    const handleClick = (newState) => () => {
        setOpen(true);
      };
    return (
        <header>
            <Container className='nav-container'>
                <div className={`navbar_container ${getWidowY >= 100 && 'nav_active'}`} id="main_nav" ref={headerScrol}>
                    <div>
                        <Image onClick={()=>router.push('/')} src={getWidowY >= 600 ? Logo : DarkLogo} alt="main logo" className="main_logo" style={{cursor:'pointer'}} />
                    </div>
                    <div className="nav">
                        <nav>
                            <ul className='nav-list-container'>
                                <li>
                                    <Link href="/#home" className='nav-link-item' shallow>HOME</Link>
                                </li>
                                <li className="custom-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                                    <Link href="/#products" className='nav-link-item'>PRODUCTS</Link>
                                    {dropdownOpen && (
                                        <div className="dropdown-menu-cust shadow_inside" data-aos="fade-up" data-aos-duration="300">
                                            <Row>
                                                <Col sm={12} md={12} lg={12}>
                                                    <ul className='products-category first-col'>
                                                        <li>
                                                            <div>Design SoftWare</div>
                                                            <ul>
                                                                <li><Link className='d-block w-100 h-100' href={'/cladCut'} shallow>Cladcut</Link></li>
                                                                <li><Link className='d-block w-100 h-100' href={'/windload'} shallow>Windload <span className='free_icon_product' >Free</span></Link></li>
                                                                {/* <li><Link className='d-block w-100 h-100' href={'/facade'}>Facade Static <span className='free_icon_product' >Free</span></Link></li> */}
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div>Business Adminstration</div>
                                                            <ul>
                                                                <li><Link className='d-block w-100 h-100' href={'/erp'} shallow>Dom ERP</Link></li>
                                                            </ul>
                                                        </li>
                                                    {/* </ul>
                                            
                                                    <ul className='products-category last-col'> */}
                                                        <li>
                                                            <div>Risk Assessment <div className='text-secondary'>comply with SBC</div></div>
                                                            <ul>
                                                                <li onClick={handleClick}>
                                                                    <Link className='d-block w-100 h-100' href={'/rd'} shallow>RD-App</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div>Communication</div> 
                                                            <ul>
                                                                <li>
                                                                    <Link className='d-block w-100 h-100' href={'/chat'} shallow>Dom CRM</Link>
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
                                    <Link href="/#whatwedo" className='nav-link-item' shallow>WHAT WE DO</Link>
                                </li>
                                <li>
                                    <Link href="/#about" className='nav-link-item' shallow>ABOUT US</Link>
                                </li>
                                <li>
                                    <a onClick={handleToggle} className='pointer nav-link-item'>CONTACT US</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='mobile_nav'>
                        <MobileNav />
                    </div>
                </div>
            </Container>
            <PositionedSnackbar handleClick={handleClick} setOpen={setOpen} open={open}/>
        </header>
    )
}
