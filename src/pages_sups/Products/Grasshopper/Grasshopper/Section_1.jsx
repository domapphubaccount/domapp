import React from 'react'
import shap1 from "@/assets/images/Products_Page/Customization/circle-2.png"
import shap2 from "@/assets/images/Products_Page/Customization/bubble-2.png"
import shap3 from "@/assets/images/Products_Page/Customization/bubble-1.png"
import iconSoft from "@/assets/images/Products_Page/Customization/seo.webp"
import iconSoft2 from "@/assets/images/Products_Page/Customization/wp.webp"
import iconSoft3 from "@/assets/images/Products_Page/Customization/WP2.webp"
import iconSoft4 from "@/assets/images/Products_Page/Customization/wp3.webp"
import sectioncard from "@/assets/images/Products_Page/Customization/img5.png"
import sectioncardabout from "@/assets/images/Products_Page/Customization/img4.png"

export default function Section_1() {
  return (
    <section className='cust_section_1 '>
        <div className="section section-padding">
            <div className="container">
                {/* <div className="section-heading heading-left mb--20 mb_md--70 ">
                    <div className="subtitle">What We Can Do For You</div>
                    <h2 className="title">Services we can <br /> help you with</h2>
                    <p></p>
                </div>
                <div className="row">
                    <div className="col-lg-4 mt--200 mt_md--0">
                        <div className="services-grid service-style-2">
                            <div className="thumbnail">
                                <img src={iconSoft.src} alt="icon"/>
                            </div>
                            <div className="content">
                                <h5 >
                                Custom Software Development:
                                </h5>
                                <p>"We create software solutions that meet your specific needs. From analysis to implementation, we ensure a software designed specifically to meet your requirements."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt--100 mt_md--0">
                        <div className="services-grid service-style-2">
                            <div className="thumbnail">
                            <img src={iconSoft2.src} alt="icon"/>
                            </div>
                            <div className="content">
                                <h5 >
                                Software Customization
                                </h5>
                                <p>"Have existing software that needs customization? Our team can modify and customize any software to align with your unique business needs."</p> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt--0">
                        <div className="services-grid service-style-2">
                            <div className="thumbnail">
                            <img src={iconSoft3.src} alt="icon"/>
                            </div>
                            <div className="content">
                                <h5>
                                Web Development
                                </h5>
                                <p>"We develop high-quality web applications to ensure a seamless and efficient user experience."</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 mt--0">
                        <div className="services-grid service-style-2">
                            <div className="thumbnail">
                            <img src={iconSoft4.src} alt="icon"/>
                            </div>
                            <div className="content">
                                <h5>
                                Support and Maintenance
                                </h5>
                                <p>"We provide ongoing support and maintenance services to ensure your software continues to run efficiently."</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-7 list-unstyled">
                <li className="shape shape-1">
                    <img src={shap1.src} alt="circle" />
                </li>
                {/* <li className="shape shape-2">
                    <img src={shap2.src} alt="Line" />
                </li> 
                <li className="shape shape-3">
                    <img src={shap3.src} alt="Line" />
                </li>
            </ul> */}

            <AboutUs />
            <SectionContent />
      
       </div>
        </div>
    </section>
  )
}


function SectionContent(){
    return <>
    
    <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head style-1">
                    <h6 className="sub-title bgl-primary m-b20 text-primary">Fetures</h6>
                    <h2 className="title">Our Working Process To Help Your Boost Your Business</h2>
                </div>
            <div className="section-wraper-one">
                <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-red">
                        <a href="#" className="icon-cell">
                            <i className="flaticon-idea"></i>
                        </a>
                    </div>
                    <div className="icon-content">
                        <h4 className="dlab-title">Idea &amp; Analysis Gathering</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-yellow">
                        <a href="#" className="icon-cell">
                            <i className="flaticon-line-graph"></i>
                        </a>
                    </div>
                    <div className="icon-content">
                        <h4 className="dlab-title">Designing &amp; Developing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                </div>
                <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-green">
                        <a href="#" className="icon-cell">
                            <i className="flaticon-rocket"></i>
                        </a>
                    </div>
                    <div className="icon-content">
                        <h4 className="dlab-title">Testing &amp; Lunching</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-5 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
            <div className="dlab-media">
                <img src={sectioncard.src} className="move-2" alt="" />
            </div>
        </div>
    </div></>
}

function AboutUs(){
    return <>
    <div className="row align-items-center cust_about">
        <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="dz-media"><img src={sectioncardabout.src} className="move-2" alt="" /></div></div><div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s"><div className="section-head style-1 mb-4"><h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6><h2 className="title">How We Can Help You Achieve Your Business Goal</h2></div><p>Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.</p><p className="m-b30">Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue.</p></div></div>
    </>
}