import React from 'react'
import { Container } from 'reactstrap'
import Erp_Dash from "@/assets/images/Products_Page/Erp/ERP_dash.png"
import arrow from '@/assets/images/Products_Page/Clad/arrow.svg'
import dollar from "@/assets/images/Products_Page/Erp/dollar.png"
import Link from 'next/link'




export default function Bannar2() {
  return (
    <section>
        {/* <Container> */}
        <div className="home-bg" id="home">
          {/* <ul> 
            <li> <img src="../assets/images/landing/home/4.png" alt=""></li>
            <li> <img src="../assets/images/landing/home/5.png" alt=""></li>
            <li> <img src="../assets/images/landing/home/6.png" alt=""></li>
            <li> <img src="../assets/images/landing/home/7.png" alt=""></li>
            <li> <img src="../assets/images/landing/home/8.png" alt=""></li>
            <li> <img src="../assets/images/landing/home/9.png" alt=""></li>
          </ul> */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="home-text">
                {/* <div className="main-title">
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-shrink-0"><img src="../assets/images/landing/icon/Rocket.png" alt=""/></div>
                    <div className="flex-grow-1">
                      <p className="m-0">Simple, Flexible, and Powerfull</p>
                    </div>
                  </div>
                </div> */}
                <h2>CRM BONDIFY<img className="line-text" src="../assets/images/landing/home/line.png" alt=""/></h2>
                <p>Project management, Invoicing, Leads, Tasks, Time tracking and more.
                </p>
                <div className="docutment-button"> 
                    <a className="btn text-white me-3" href="https://erp.domapphub.com/signup" target="_blank">
                        Try Demo
                    </a>
                    <Link className="btn text-white me-3" target="_blank" href="/erp/pricing">
                        Pricing
                    </Link>
                    {/* <a className="mil-link mil-light mil-upper bundle-button erp p-0 ps-2 rounded" href="/erp/pricing">
                                Pricing
                                <span className="mil-arrow erp p-2 dis">
                                    <img src={dollar.src} alt="arrow" />
                                </span>
                            </a> */}
                    {/* <a className="btn text-white pricing_ERP" href="https://docs.pixelstrap.net/django/mofi/document/" target="_blank">
                        Pricing
                    </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="home-screen">
                <div className="screen-1"><img className="img-fluid" style={{borderRadius:'15px'}} src={Erp_Dash.src} alt=""/></div>
                {/* <div className="screen-2"><img className="img-fluid" src={d2.src} alt=""/></div>
                <div className="screen-3"><img className="img-fluid" src={d3.src} alt=""/></div> */}
              </div>
            </div>
          </div>
        </div>
        {/* </Container> */}
    </section>
  )
}
