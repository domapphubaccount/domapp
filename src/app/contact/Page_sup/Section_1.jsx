import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Contact from "@/assets/images/Products_Page/contact/contact.jpg"

export default function Section_1() {
  return (
    <section className='privacy-content'>
        <Container>
            <div>
                <ul>
                    <li>
                        <div>
                            <h2>Get in Touch</h2>
                            <p>
                            Welcome to DomapphubApps! We're here to assist you with any questions, feedback, or inquiries you may have. Please feel free to reach out to us using the contact information provided below. Your privacy is important to us, and we're committed to handling your information with care and transparency.
                            </p>
                        </div>
                    </li>  
                    <li className='py-5'>
                        <div>
                       <Row className='justify-content-center'>
                        <Col lg={5} md={6} sm={12}>
                       <Row>

                        <Col sm={12} className='my-2'>
                        <input type="text" className='w-100 p-3 rounded border border-2' placeholder="Name" />     
                        </Col>
                        <Col sm={12} className='my-2'>
                        <input type="email" className='w-100 p-3 rounded border border-2' placeholder="Email" />     
                        </Col> 
                        <Col sm={12} className='my-2'>
                        <input type="text" className='w-100 p-3 rounded border border-2' placeholder="Title" />     
                        </Col>
                        <Col sm={12} className='my-2'>
                        <textarea rows="6" placeholder='Messege' className='w-100 p-3 rounded border border-2'></textarea>
                        </Col>
                        <Col className='text-end'>

                        <button variant="contained" className='my-3 bg-secondary px-4 py-2 rounded text-light fw-bold card_shadow m-3'>
                            Send
                        </button>

                        </Col>
                        </Row>
                        </Col>
                        </Row>
                        
                        </div>
                    </li>
                </ul>
                <div>
                    <Row>
                        <Col sm={12} lg={4} md={6}>
                    <img src={Contact.src} alt="contact" />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </section>
  )
}
