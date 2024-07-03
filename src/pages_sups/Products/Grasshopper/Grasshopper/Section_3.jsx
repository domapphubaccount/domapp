"use client"
import React, { useState } from 'react'
import { Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import shap1 from "@/assets/images/Products_Page/Customization/bubble-12.png"
import shap2 from "@/assets/images/Products_Page/Customization/bubble-16.png"
import shap3 from "@/assets/images/Products_Page/Customization/bubble-13.png"
import shap4 from "@/assets/images/Products_Page/Customization/bubble-14.png"
import shap5 from "@/assets/images/Products_Page/Customization/bubble-15.png"
import axios from 'axios'



function Section_3() {
    const [module , setModule] = useState(false)

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().matches(/^[0-9]+$/, "Phone number is not valid").required('Phone number is required'),
        message: Yup.string().required('Project description is required')
    });
    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            phone: '',
            Product: '',
            title: '',
            message: '',

        },
        validationSchema: validationSchema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
                // Handle form submission logic here
                axios.post('https://domapphub.com/Care/contacts.php',values).then(res => {setModule(true); console.log('done')})
                console.log(values);
                actions.setSubmitting(false); 
            },
        });
        const toggleModule = () => {
            setModule(!module)
        }

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
                                <form className="axil-contact-form" onSubmit={formik.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="John Smith"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                            <div className="text-danger">{formik.errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="example@mail.com"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-danger">{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group mb--40">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="+123456789"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.phone}
                                        />
                                        {formik.touched.phone && formik.errors.phone ? (
                                            <div className="text-danger">{formik.errors.phone}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group mb--40">
                                        <label htmlFor="message">Project description</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            placeholder="What do you have?"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.message}
                                        />
                                        {formik.touched.message && formik.errors.message ? (
                                            <div className="text-danger">{formik.errors.message}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Estimate Project</button>
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
                        <img src={shap2.src} alt="Comments"/>
                    </li>
                </ul>
            </div>
            <Modal isOpen={module} toggle={toggleModule} size="lg"> {/* Toggle modal visibility */}
                <ModalHeader toggle={toggleModule}>Thanks for your message</ModalHeader>
                <ModalBody>
                    <div className='text-center py-4'>

                       <h5 className='pb-3'> We have received your message </h5>
                       <p> we will contact you as soon as posible</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                <button color="secondary" onClick={toggleModule}>Close</button>
                </ModalFooter>
            </Modal>
        </section>
    )
}

export default Section_3
