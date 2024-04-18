import Section_head from "@/components/Reuse/Section_Head/Section_head";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
// import SectionVideo from "@/assets/videos/Home_page/Section_2.mp4";
import Test from '@/assets/images/Home_Page/bannar_home.jpg'
import Cards from "./Section_sups/Cards";

export default function Section_2() {
  return (
    <section className="home_section_2" id="about">
        <Section_head head={1}  title_1={'Our mission'}des_1={'Our mission is to enhance our customer’s success through unique solutions.'}/>

        <Container>
            <Row>
                <Col sm={12} lg={6} md={12}className="p-4">
                    <div className="card_shadow rounded h-100 video_container" data-aos="fade-down" data-aos-duration="2000" >
                        <div className="h-100 card_shadow ">
                            <video className="rounded h-100 w-100" preload="none" style={{ objectFit: 'cover' }} loop muted autoPlay>
                                <source src="/Home_page/Section_2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="about_us_Description typewriter"><h1>About Us</h1></div>
                        </div>

                    </div>
                </Col>
                <Col sm={12} lg={6} md={12} className="p-4">
                    <div className="card_shadow card_dis rounded" data-aos="fade-up" data-aos-duration="2000" >
                        <div><h5>At Domapp, we specialize in crafting innovative solutions that redefine possibilities.</h5></div>
                        <div className="card_list">
                            <ul>
                                <li>
                                We design solutions that surpass expectations and propel our clients towards success.
                                </li>
                                <li>
                                Our unwavering commitment lies in delivering consistent, reliable, and cost-effective services that adhere to the highest quality standards. We continuously strive to meet and exceed the needs and expectations of our clients, ensuring their utmost satisfaction.
                                </li>
                                {/* <li>
                                We craft and refine client-driven concepts to seamlessly integrate with our precisely designed applications ensuring optimal functionality and user satisfaction at every step.
                                </li>
                                <li>
                                With our expertise, we develop, and design applications tailored to the client's requirements. Our expertise allows us to customize and modify the applications we design to aligns perfectly with the client's company and business visions.
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            <Section_head head={1} title_1={'What we do'} des_1={'We develop remarkable and exceptional innovative software solutions.'} />
            <div>
                <Cards />
            </div>

        </Container>
    </section>
  )
}
