import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Privacy from "@/assets/images/Products_Page/privacy/privacy.jpg"


export default function Section_1() {
  return (
    <section className='privacy-content'>
        <Container>
            <div>
                <ul>
                    <li>
                        <div>
                            <h2>1. Introduction</h2>
                            <p>
                            Welcome to DomapphubApps . We are committed to protecting your privacy and providing transparency about how we collect, use, and share your information. This Privacy Policy outlines our practices regarding your personal data and how you can exercise your privacy rights.
                            </p>
                        </div>
                    </li>  
                    <li>
                        <div>
                            <h2>2. Information We Collect</h2>
                            <p>
                            2.1 Personal Information: We may collect personal information, such as your name, email address, and other identifiable information, when you use our website.
                            </p>
                            <p>
                            2.2 Usage Information: We automatically collect information about your usage of the website, such as your IP address, browser type, device information, and pages visited.
                            </p>
                            <p>
                            2.3 Cookies: We use cookies to enhance your experience on our website. You can manage cookie preferences through your browser settings.
                            </p>
                        </div>
                    </li> 
                    <li>
                        <div>
                            <h2>3. How We Use Your Information</h2>
                            <div>
                                <h4>We use the collected information for various purposes, including:</h4>
                                <ol>
                                    <li>
                                    <p>Providing and maintaining our services</p>
                                    </li>
                                    <li>
                                    <p>Improving our website</p>
                                    </li>
                                    <li>
                                    <p>Sending newsletters or promotional materials with your consent</p>
                                    </li>
                                    <li>
                                    <p>Responding to your inquiries or requests</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li> 
                    <li>
                        <div>
                            <h2>4. Data Sharing</h2>
                            <div>
                                <h4>
                                We may share your information with third parties under the following circumstances:
                                </h4>
                                <ol>
                                    <li>
                                    <p>With your consent</p>
                                    </li>
                                    <li>
                                    <p>To comply with legal obligations</p>
                                    </li>
                                    <li>
                                    <p>To protect our rights, privacy, safety, or property</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>
                            5. Your Choices
                            </h2>
                            <div>
                                <h4>You have the right to:</h4>
                            <ol>
                                <li>
                                <p>Access, correct, or delete your personal information</p>
                                </li>
                                <li>
                                <p>Opt-out of receiving promotional communications</p>
                                </li>
                                <li>
                                <p>Disable cookies through your browser settings</p>
                                </li>
                            </ol>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>6. Security</h2>
                            <p>
                            We implement reasonable security measures to protect your information from unauthorized access or disclosure
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                    <Row>
                        <Col sm={12} lg={4} md={6}>
                            <img src={Privacy.src} alt="privacy" />
                        </Col>
                    </Row>
                </div>
        </Container>
    </section>
  )
}
