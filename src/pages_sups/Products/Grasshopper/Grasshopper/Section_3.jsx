import React from 'react'
import { Col, Row } from 'reactstrap'
import shap1 from "@/assets/images/Products_Page/Customization/bubble-12.png"
import shap2 from "@/assets/images/Products_Page/Customization/bubble-16.png"
import shap3 from "@/assets/images/Products_Page/Customization/bubble-13.png"
import shap4 from "@/assets/images/Products_Page/Customization/bubble-14.png"
import shap5 from "@/assets/images/Products_Page/Customization/bubble-15.png"

function Section_3() {
  return (
    <section className='cust_section_3'>
        <div className="section call-to-action-area">
            <div className="container">
                <Row>
                    <Col>
                        <div className="call-to-action">
                            <div className="section-heading heading-light">
                                <span className="subtitle">Let's Work Together</span>
                                <h2 className="title">Need a successful project?</h2>
                                {/* <a className="axil-btn btn-large btn-fill-white" href="/demo/react/abstrak/contact">Estimate Project</a> */}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="contact-form-box shadow-box" style={{transform:'translateY(-200px)'}}>
                            <h3 className="title">Contact us for a free consultation!</h3>
                            <form className="axil-contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="contact-name" placeholder="John Smith" required="" fdprocessedid="u5jczt" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="contact-email" placeholder="example@mail.com" required="" fdprocessedid="i4lqz6" />
                                </div>
                                <div className="form-group mb--40">
                                    <label>Phone</label>
                                    <input type="tel" className="form-control" name="contact-phone" placeholder="+123456789" required="" fdprocessedid="6fiee" />
                                </div>
                                <div className="form-group mb--40">
                                    <label>Project description</label>
                                    <textarea type="tel" className="form-control" name="contact-phone" placeholder="What do you have ?" required="" fdprocessedid="6fiee" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn" fdprocessedid="71fagi">Estimate Project</button>
                                </div>
                                <div className="form-group">
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>

            </div>
            <ul className="list-unstyled shape-group-9">
                <li className="shape shape-1">
                    <img src={shap1.src} alt="Comments"/>
                </li>
                <li className="shape shape-2">
                    <img src={shap2.src} alt="Comments"/>
                </li>
                <li className="shape shape-3">
                    <img src={shap3.src} alt="Comments"/>
                </li>
                <li className="shape shape-4">
                    <img src={shap4.src} alt="Comments"/>
                </li>
                <li className="shape shape-5">
                    <img src={shap5.src} alt="Comments"/>
                </li>
                <li className="shape shape-6">
                    <img src={shap5.src} alt="Comments"/>
                </li>
                <li className="shape shape-7">
                    <img src={shap2.src}  alt="Comments"/>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Section_3