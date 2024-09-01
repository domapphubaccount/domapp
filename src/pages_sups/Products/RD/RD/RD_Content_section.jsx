import React from 'react'
import { Container } from 'reactstrap'
import CardSection_1 from '@/assets/images/Products_Page/Rd/quality.jpg'
import CardSection_2 from '@/assets/images/Products_Page/Rd/doc.jpg'



export default function RD_Content_section() {
  return (
    <section>
        <Container>
            <div className="single-content">
                <div className="inner">
                    <div className="row row--30 align-items-center">
                        <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                            <div className="content"><div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                                <span className="date-of-timeline">
                                
                                </span>
                            </div>
                        <div className="animated fadeInUp" style={{animationDuration:"1s"}}>
                    <h2 className="title">QUALITY CONTROL</h2>
                </div><div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                    <p className="description">
                    One of the key standout capabilities of the  RDAPP is its capacity to enhance process excellence it achieves this automatically by highlighting the technical reservations according to the Saudi Building Code in each project to Stakeholders
                    </p>
                </div>
                <div className="row row--30">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="working-list">
                            <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                                <h5 className="working-title"></h5>
                            </div>
                        <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                            <p>
                            the client, and the inspection engineer this way the  RDAPP reduces the potential human errors factor and streamlines the inspection process for the engineers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="working-list">
                        <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                            <h5 className="working-title"></h5>
                        </div>
                    <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                        <p> 
                        Identifying projects requiring advanced technical engagement and routing them to the respective subject matter experts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="order-1 order-lg-2 col-lg-6">
            <div className="thumbnail">
                <img className="w-100" src={CardSection_1.src}  alt="Corporate React Template"/>
            </div>
        </div>
        </div>
        </div>
            </div>

            <div className="single-content">
                <div className="inner">
                    <div className="row row--30 align-items-center">
                        
                        <div className="order-1 order-lg-2 col-lg-6">
                            <div className="thumbnail">
                                <img className="w-100" src={CardSection_2.src}  alt="Corporate React Template"/>
                            </div>
                        </div>
                        <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                            <div className="content"><div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                                <span className="date-of-timeline">
                                
                                </span>
                            </div>
                        <div className="animated fadeInUp" style={{animationDuration:"1s"}}>
                    <h2 className="title">DOCUMENTATION</h2>
                </div><div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                    <p className="description">
                    With the built-in documentation system, users can easily create, edit, and share project reports at the same moment, ensuring efficient collaboration among team members. The documentation system offers advanced search and filtering capabilities                    </p>
                </div>
                <div className="row row--30">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="working-list">
                            <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                                <h5 className="working-title"></h5>
                            </div>
                        <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                            <p>
                            allowing users to quickly locate specific documents based on project numbers, locations, dates, and engineers who participated in the project, etc.                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="working-list">
                        <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                            <h5 className="working-title"></h5>
                        </div>
                    <div className="animated fadeInUp" style={{animationDuration: "1s"}}>
                        <p> 
                        The application's documentation system includes automated notifications and reminders, ensuring that technical reservations, notes, and all the project updates have been received by the engineers.                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </Container>
    </section>
  )
}
