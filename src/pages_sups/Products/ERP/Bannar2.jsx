import React from 'react'
import Erp_Dash from "@/assets/images/Products_Page/Erp/ERP_dash.png"
import Link from 'next/link'
import Bondify from "@/assets/images/Products_Page/Erp/bannar.png"

export default function Bannar2() {
  return (
    <section>
        <div className="home-bg relative">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="home-text">
                <h2>BONDIFY CRM</h2>
                <p>Project management, Invoicing, Leads, Tasks, Time tracking and more.
                </p>
                <div className="docutment-button"> 
                    <a className="btn text-white me-3 mb-3" href="https://bondifycrm.domapphub.com/signup" target="_blank">
                        Try Demo
                    </a>
                    <Link className="btn text-white me-3 mb-3" target="_blank" href="/bondifycrm/pricing">
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

          <img src={Bondify.src} className='absolute w-100 h-100' style={{zIndex: -1 , top: 0, left: 0}} alt='bondify bannar' />
        </div>
    </section>
  )
}
