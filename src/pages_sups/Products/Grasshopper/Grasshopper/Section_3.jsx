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
        <div class="section call-to-action-area">
            <div class="container">
                <Row>
                    <Col>
                        <div class="call-to-action">
                            <div class="section-heading heading-light">
                                <span class="subtitle">Let's Work Together</span>
                                <h2 class="title">Need a successful project?</h2>
                                {/* <a class="axil-btn btn-large btn-fill-white" href="/demo/react/abstrak/contact">Estimate Project</a> */}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="contact-form-box shadow-box" style={{transform:'translateY(-200px)'}}>
                            <h3 class="title">Contact us for a free consultation!</h3>
                            <form class="axil-contact-form">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" name="contact-name" placeholder="John Smith" required="" fdprocessedid="u5jczt" />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="contact-email" placeholder="example@mail.com" required="" fdprocessedid="i4lqz6" />
                                </div>
                                <div class="form-group mb--40">
                                    <label>Phone</label>
                                    <input type="tel" class="form-control" name="contact-phone" placeholder="+123456789" required="" fdprocessedid="6fiee" />
                                </div>
                                <div class="form-group mb--40">
                                    <label>Message</label>
                                    <textarea type="tel" class="form-control" name="contact-phone" placeholder="hi?" required="" fdprocessedid="6fiee" />
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn" fdprocessedid="71fagi">Estimate Project</button>
                                </div>
                                <div class="form-group">
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>

            </div>
            <ul class="list-unstyled shape-group-9">
                <li class="shape shape-1">
                    <img src={shap1.src} alt="Comments"/>
                </li>
                <li class="shape shape-2">
                    <img src={shap2.src} alt="Comments"/>
                </li>
                <li class="shape shape-3">
                    <img src={shap3.src} alt="Comments"/>
                </li>
                <li class="shape shape-4">
                    <img src={shap4.src} alt="Comments"/>
                </li>
                <li class="shape shape-5">
                    <img src={shap5.src} alt="Comments"/>
                </li>
                <li class="shape shape-6">
                    <img src={shap5.src} alt="Comments"/>
                </li>
                <li class="shape shape-7">
                    <img src={shap2.src}  alt="Comments"/>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Section_3