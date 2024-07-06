import React from 'react'
import Erp_Dash from "@/assets/images/Products_Page/Erp/ERP_dash.png"
import Link from 'next/link'

export default function Bannar2() {
  return (
    <section>
        <div className="home-bg" id="home">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="home-text">
                <h2>BONDIFY CRM<img className="line-text" src="../assets/images/landing/home/line.png" alt=""/></h2>
                <p>Project management, Invoicing, Leads, Tasks, Time tracking and more.
                </p>
                <div className="docutment-button"> 
                    <a className="btn text-white me-3" href="https://erp.domapphub.com/signup" target="_blank">
                        Try Demo
                    </a>
                    <Link className="btn text-white me-3" target="_blank" href="/bondifycrm/pricing">
                        Pricing
                    </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="home-screen">
                <div className="screen-1"><img className="img-fluid" style={{borderRadius:'15px'}} src={Erp_Dash.src} alt=""/></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
