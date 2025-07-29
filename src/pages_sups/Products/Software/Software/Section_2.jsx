"use client";
import React, { Suspense, useState } from "react";
import {
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import shap1 from "@/assets/images/Products_Page/Customization/bubble-12.png";
import shap2 from "@/assets/images/Products_Page/Customization/bubble-16.png";
import shap3 from "@/assets/images/Products_Page/Customization/bubble-13.png";
import shap4 from "@/assets/images/Products_Page/Customization/bubble-14.png";
import shap5 from "@/assets/images/Products_Page/Customization/bubble-15.png";
import axios from "axios";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useSelector } from "react-redux";

function Section_2() {
  const [module, setModule] = useState(false);
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { custom_software } = useSelector((state) => state.customSoftwareRed);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      // .matches(/^[0-9]$/, "Phone number is not valid")
      .required("Phone number is required"),
    message: Yup.string().required("Project description is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      Product: "7",
      title: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // Handle form submission logic here
      console.log(values);
      axios
        .post("https://domapphub.com/Care/contacts.php", values)
        .then((res) => {
          setModule(true);
          console.log("done");
        });
      console.log(values);
      actions.setSubmitting(false);
    },
  });
  const toggleModule = () => {
    setModule(!module);
  };

  return (
    <section className="cust_section_3">
      <Suspense fallback={""}>
        <div className="section call-to-action-area">
          <div className="container" dir={dir}>
            <Row>
              <Col>
                <div className="call-to-action">
                  <div className="section-heading heading-light">
                    <h2 className="title">
                      {custom_software(lang).sections.Contact.title}
                    </h2>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="contact-form-box shadow-box"
                  style={{ transform: "translateY(-100px)" }}
                >
                  <h4 className="title">
                    {custom_software(lang).sections.Contact.form.title}
                  </h4>
                  <form
                    className="axil-contact-form"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="name">
                        {custom_software(lang).sections.Contact.form.name}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        // placeholder={lang === "en" && "Ahmed Ibrahim"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        {custom_software(lang).sections.Contact.form.Email}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        // placeholder={lang === "en" && "ahm34@gmail.com"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div className="form-group mb--40">
                      <label htmlFor="phone">
                        {custom_software(lang).sections.Contact.form.phone}
                      </label>
                      <PhoneInput
                        className="form-control p-2 z-10 flex"
                        style={{ display: "flex" }}
                        defaultCountry="sa"
                        name="phone"
                        placeholder="151515"
                        onChange={(e) => formik.setFieldValue("phone", e)}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-danger">{formik.errors.phone}</div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label htmlFor="title">
                        {custom_software(lang).sections.Contact.form.Title}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        // placeholder={lang === "en" && "Message title"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                      />
                      {formik.touched.title && formik.errors.title ? (
                        <div className="text-danger">{formik.errors.title}</div>
                      ) : null}
                    </div>

                    <div className="form-group mb--40">
                      <label htmlFor="message">
                        {
                          custom_software(lang).sections.Contact.form
                            .Description
                        }
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder={lang === "en" && "what do we have?"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      />
                      {formik.touched.message && formik.errors.message ? (
                        <div className="text-danger">
                          {formik.errors.message}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="axil-btn btn-fill-primary btn-fluid btn-primary"
                        name="submit-btn"
                      >
                        {custom_software(lang).sections.Contact.form.submit}
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
          <ul className="list-unstyled shape-group-9">
            <li className="shape shape-1">
              <img loading="lazy" src={shap1.src} alt="Comments" />
            </li>
            <li className="shape shape-2">
              <img loading="lazy" src={shap2.src} alt="Comments" />
            </li>
            <li className="shape shape-3">
              <img loading="lazy" src={shap3.src} alt="Comments" />
            </li>
            <li className="shape shape-4">
              <img loading="lazy" src={shap4.src} alt="Comments" />
            </li>
            <li className="shape shape-5">
              <img loading="lazy" src={shap5.src} alt="Comments" />
            </li>
            <li className="shape shape-6">
              <img loading="lazy" src={shap5.src} alt="Comments" />
            </li>
            <li className="shape shape-7">
              <img loading="lazy" src={shap2.src} alt="Comments" />
            </li>
          </ul>
        </div>
        <Modal isOpen={module} toggle={toggleModule} size="lg">
          {" "}
          {/* Toggle modal visibility */}
          <ModalHeader toggle={toggleModule}>
            Thanks for your message
          </ModalHeader>
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
      </Suspense>
    </section>
  );
}

export default Section_2;
