import React, { useState } from 'react';
import { Col, Form, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Email({modal,setModal}) {
    const toggleModal = () => setModal(!modal);

    const initialValues = {
        name:'',
        email:'',
        title:'',
        message:''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        title: Yup.string().required('Title is required'),
        message: Yup.string().required('Message is required'),
    });

    return (
        <div>
            <Modal isOpen={modal} toggle={toggleModal} size="md"> 
                <ModalHeader toggle={toggleModal}>DOMEAPP</ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={initialValues} 
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <ul className='p-1'>
                                    <li>
                                        <div>
                                            <h2>Get in Touch</h2>
                                        </div>
                                    </li>  
                                    <li className='pt-3'>
                                        <div>
                                            <Row className='justify-content-center'>
                                                <Col lg={12} md={12} sm={12}>
                                                    <Row>
                                                        <Col sm={12} className='my-2'>
                                                            <input 
                                                                type="text" 
                                                                className='w-100 p-3 rounded border border-2' 
                                                                placeholder="Name" 
                                                                name="name" 
                                                                value={values.name} 
                                                                onChange={handleChange}
                                                            />
                                                            {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}     
                                                        </Col>
                                                        <Col sm={12} className='my-2'>
                                                            <input 
                                                                type="email" 
                                                                className='w-100 p-3 rounded border border-2' 
                                                                placeholder="Email" 
                                                                name="email" 
                                                                value={values.email} 
                                                                onChange={handleChange}
                                                            />
                                                            {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}     
                                                        </Col> 
                                                        <Col sm={12} className='my-2'>
                                                            <input 
                                                                type="text" 
                                                                className='w-100 p-3 rounded border border-2' 
                                                                placeholder="Title" 
                                                                name="title" 
                                                                value={values.title} 
                                                                onChange={handleChange}
                                                            />
                                                            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}     
                                                        </Col>
                                                        <Col sm={12} className='my-2'>
                                                            <textarea 
                                                                rows="6" 
                                                                placeholder='Message' 
                                                                className='w-100 p-3 rounded border border-2' 
                                                                name="message" 
                                                                value={values.message} 
                                                                onChange={handleChange}
                                                            ></textarea>
                                                            {errors.message && touched.message && <div className="text-danger">{errors.message}</div>}     
                                                        </Col>
                                                        <Col className='text-end'>
                                                            <button 
                                                                type="submit" 
                                                                variant="contained" 
                                                                className='my-3 bg-secondary px-4 py-2 rounded text-light fw-bold card_shadow m-3'
                                                            >
                                                                Send
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                </ul>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
                <ModalFooter>
                    <button color="secondary" onClick={toggleModal}>Close</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

function handleSubmit(values) {
    // Handle form submission here
    console.log(values);
}
