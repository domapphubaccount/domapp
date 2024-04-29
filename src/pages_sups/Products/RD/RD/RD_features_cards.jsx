import React from 'react'
import { Container } from 'reactstrap'
import I1 from "@/assets/images/Products_Page/Rd/stopwatch.png"
import I2 from "@/assets/images/Products_Page/Rd/newspaper.png"
import I3 from "@/assets/images/Products_Page/Rd/notification.png"
import I4 from "@/assets/images/Products_Page/Rd/virtual-assistant.png"
import I5 from "@/assets/images/Products_Page/Rd/search.png"
import I6 from "@/assets/images/Products_Page/Rd/encrypted.png"
import I7 from "@/assets/images/Products_Page/Rd/dashboard.png"
import I8 from "@/assets/images/Products_Page/Rd/toolbox.png"
import I9 from "@/assets/images/Products_Page/Rd/help-desk.png"

export default function RD_features_cards() {
  return (
    <section className='rd_section_cards2'>
        <Container>
            <div className='row'>
                <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I1.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Real-Time Collaboration</h5>
                        <p className="f-light">
                        Enable seamless collaboration among team members with real-time document editing and sharing capabilities.</p>
                      </div>
                    </div>
                  </div>
                {/* <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I2.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Customizable Reporting</h5>
                        <p className="f-light">
                        Tailor reports to specific project requirements with customizable templates.</p>
                      </div>
                    </div>
                  </div> */}
                {/* <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I3.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Automated Notifications</h5>
                        <p className="f-light">
                        Stay informed about project updates and deadlines with automated notifications.</p>
                      </div>
                    </div>
                  </div> */}
                <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I4.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Mobile Accessibility</h5>
                        <p className="f-light">
                        Access project information anytime, anywhere with mobile accessibility.</p>
                      </div>
                    </div>
                  </div>
                <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I5.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Audit Trail</h5>
                        <p className="f-light">
                        Maintain accountability and transparency with an audit trail of document revisions and user actions.</p>
                      </div>
                    </div>
                  </div>
                <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I6.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Data Security</h5>
                        <p className="f-light">
                        Protect sensitive project data with robust security measures.</p>
                      </div>
                    </div>
                  </div>
                {/* <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I7.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Analytics Dashboard</h5>
                        <p className="f-light">
                        Protect sensitive project data with robust security measures.</p>
                      </div>
                    </div>
                  </div> */}
                <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I8.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Integration</h5>
                        <p className="f-light">
                          RD App offers Integration with existing systems ensuring smooth data flow.</p>
                      </div>
                    </div>
                  </div>
                <div className="col-xxl-4 col-md-6 slideInUp wow mt-5" style={{visibility: "visible", animationName: "slideInUp"}}>
                    <div className="framework-box">
                      <div className="frame-icon"> <img src={I9.src} alt=""/></div>
                      <div className="frame-details">
                        <h5>Rsponsive Support</h5>
                        <p className="f-light">
                        Dedicated experts ensure smooth operations with prompt.</p>
                      </div>
                    </div>
                  </div>
            </div>
        </Container>

    </section>
  )
}
