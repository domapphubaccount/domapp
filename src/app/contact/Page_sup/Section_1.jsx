import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
                        <TextField id="outlined-basic" className='w-100' label="Name" variant="outlined" />     
                        </Col>
                        <Col sm={12} className='my-2'>
                        <TextField id="outlined-basic" className='w-100' label="Email" variant="outlined" />   
                        </Col> 
                        <Col sm={12} className='my-2'>
                        <TextField id="outlined-basic" className='w-100' label="Title" variant="outlined" />
                        </Col>
                        <Col sm={12} className='my-2'>
                        <TextField
                                className='w-100'
                                id="standard-multiline-static"
                                label="Messege"
                                multiline
                                rows={6}
                                defaultValue="Messege"
                                variant="outlined"
                                /> 
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
            </div>
        </Container>
    </section>
  )
}
