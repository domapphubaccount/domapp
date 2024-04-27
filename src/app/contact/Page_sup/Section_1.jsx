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
                            <input type='text' placeholder='Name' className='p-2 rounded w-100 border border-2'  />
                        </Col>
                        <Col sm={12} className='my-2'>
                            <input type='text' placeholder='Email' className='p-2 rounded w-100 border border-2' />
                        </Col> 
                        <Col sm={12} className='my-2'>
                            <input type='text' placeholder='Title' className='p-2 rounded w-100 border border-2' />
                        </Col>
                        <Col sm={12} className='my-2'>
                            <textarea rows="6" placeholder='Messsege' className='p-2 rounded w-100 border border-2'></textarea>
                        </Col>
                        <Col className='text-end'>

                        <Button variant="contained" className='my-3 bg-secondary' endIcon={<SendIcon />}>
                            Send
                        </Button>

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
