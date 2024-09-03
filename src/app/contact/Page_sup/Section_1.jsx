"use client";

import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Contact from "@/assets/images/Products_Page/contact/contact.jpg";
import axios from "axios";

export default function Section_1() {
  const [module, setModule] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    title: "",
    product: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    // product: Yup.string().required('Email is required'),
    phone: Yup.string().matches(
      /^\+?[0-9]{8,14}$/,
      "Phone number is not valid"
    ),
    title: Yup.string().required("Title is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, actions) => {
    // Handle form submission logic here
    axios
      .post("https://domapphub.com/Care/contacts.php", values)
      .then((res) => {
        setModule(true);
        console.log("done");
      });
    console.log(values);
    actions.setSubmitting(false);
  };

  const toggleModule = () => {
    setModule(!module);
  };

  return (
    <section className="privacy-content">
      <Container>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <ul className="p-1">
                  <li>
                    <div>
                      <h2>Get in Touch</h2>
                      <p>
                        Welcome to DomApphubApps! We're here to assist you with
                        any questions, feedback, or inquiries you may have.
                        Please feel free to reach out to us using the contact
                        information provided below. Your privacy is important to
                        us, and we're committed to handling your information
                        with care and transparency.
                      </p>
                    </div>
                  </li>
                  <li className="pt-3">
                    <div>
                      <Row className="justify-content-center">
                        <Col lg={5} md={6} sm={12}>
                          <Row>
                            <Col sm={12} className="my-2">
                              <input
                                type="text"
                                className="w-100 p-3 rounded border border-2"
                                placeholder="Name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                              />
                              {errors.name && touched.name && (
                                <div className="text-danger">{errors.name}</div>
                              )}
                            </Col>
                            <Col sm={12} className="my-2">
                              <input
                                type="text"
                                className="w-100 p-3 rounded border border-2"
                                placeholder="Phone"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                              />
                              {errors.phone && touched.phone && (
                                <div className="text-danger">
                                  {errors.phone}
                                </div>
                              )}
                            </Col>
                            <Col sm={12} className="my-2">
                              <input
                                type="email"
                                className="w-100 p-3 rounded border border-2"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                              />
                              {errors.email && touched.email && (
                                <div className="text-danger">
                                  {errors.email}
                                </div>
                              )}
                            </Col>
                            <Col sm={12} className="my-2">
                              <select
                                className="w-100 p-3 rounded border border-2 pe-3"
                                placeholder="Select Product"
                                name="product"
                                value={values.product}
                                onChange={handleChange}
                              >
                                <option className="p-2" value="">
                                  Select an option
                                </option>
                                <option className="p-2" value="1">
                                  CladCut
                                </option>
                                {/* <option className="p-2" value="2">FacadStatic</option> */}
                                <option className="p-2" value="3">
                                  Wind Master
                                </option>
                                <option className="p-2" value="4">
                                  bondify CRM
                                </option>
                                <option className="p-2" value="5">
                                  RDAPP
                                </option>
                                <option className="p-2" value="6">
                                  ChatPlus
                                </option>
                                <option className="p-2" value="7">
                                  Software & Customization
                                </option>
                                <option className="p-2" value="8">
                                  Grasshopper  Modules
                                </option>
                                <option className="p-2" value="9">
                                  BYLD
                                </option>
                              </select>
                              {errors.product && touched.product && (
                                <div className="text-danger">
                                  {errors.product}
                                </div>
                              )}
                            </Col>
                            <Col sm={12} className="my-2">
                              <input
                                type="text"
                                className="w-100 p-3 rounded border border-2"
                                placeholder="Subject"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                              />
                              {errors.title && touched.title && (
                                <div className="text-danger">
                                  {errors.title}
                                </div>
                              )}
                            </Col>
                            <Col sm={12} className="my-2">
                              <textarea
                                rows="6"
                                placeholder="Message"
                                className="w-100 p-3 rounded border border-2"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                              ></textarea>
                              {errors.message && touched.message && (
                                <div className="text-danger">
                                  {errors.message}
                                </div>
                              )}
                            </Col>
                            <Col className="text-end">
                              <button
                                type="submit"
                                variant="contained"
                                className="my-3 bg-secondary px-4 py-2 rounded text-light fw-bold card_shadow m-3"
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
          <div>
            <Row>
              <Col sm={12} lg={4} md={6}>
                <img src={Contact.src} alt="contact" />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Modal isOpen={module} toggle={toggleModule} size="lg">
        {" "}
        {/* Toggle modal visibility */}
        <ModalHeader toggle={toggleModule}>Thanks for your message</ModalHeader>
        <ModalBody>
          <div className="text-center py-4">
            <h5 className="pb-3"> We have received your message </h5>
            <p> we will contact you as soon as posible</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button color="secondary" onClick={toggleModule}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </section>
  );
}
