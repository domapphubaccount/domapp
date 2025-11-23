"use client";
import React, { useEffect, useState } from "react";
import Header from '@/components/Layout/Header/Header'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";



export default function CreateAccount() {
  const [planOption, setPlanOption] = useState([])


  useEffect(() => {
    fetch("https://bondifycrm.com/api/bondify/plans")
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          const options = result.data.flatMap((plan) => [
            {
              value: `monthly_${plan.id}`,
              label: `${plan.name} - $${plan.pricing.monthly}/month`,
              planId: plan.id,
              type: "monthly",
              pricing: plan.pricing.monthly
            },
            {
              value: `yearly_${plan.id}`,
              label: `${plan.name} - $${plan.pricing.yearly}/year`,
              planId: plan.id,
              type: "yearly",
              pricing: plan.pricing.yearly
            }
          ]);
          setPlanOption(options);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  const validationSchema = Yup.object({
    full_name: Yup.string().required("Full Name is required"),
    account_name: Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, "must only contain letters and numbers")
      .required("Account Name is required"),
    email_address: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be a minimum of 6 characters")
      .required("Password is required"),
    plan: Yup.object().nullable().required("Plan is required"),
  });

  return (
    <div className="bondifycrm-page pt-[120px]">
      <Header />

      <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/create-account-illustration.png"
            alt="Create Account"
            className="w-[85%] max-w-[480px] object-contain"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#6772e5] ">Create Your Account</h2>
          <p className="mb-[30px] text-[#797687]">Work through your task efficiently and intuitively.</p>

          <Formik
            initialValues={{
              full_name: "",
              account_name: "",
              email_address: "",
              password: "",
              plan: null,
              sign_agree_terms: "on"

            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const payload = {
                ...values,
                plan: values.plan.value,
              };
              console.log("FORM VALUES:", payload);

              axios.post("https://bondifycrm.com/api/bondify/create-account", payload).then((res) => {
                
                if (res.status === 200 ||res.status=== 201) {
                  // window.location.href = res.data.account_url;
                        toast.success(
          `Created Account successfully!`
        );
                }
              })
              .catch((error) => {
                console.log(error);
                        toast.error(error.response?.data?.message || "An error occurred");

              });
            }}


                >
                {({ setFieldValue, values, errors, touched }) => (
          <Form className="flex flex-col gap-4">

            <div className="flex flex-col">
              <label className="font-medium mb-1">Full Name</label>
              <Field
                name="full_name"
                type="text"
                className="border rounded-lg p-3 outline-none focus:border-[#6772e5]"
                placeholder="Enter your name"
              />
              <ErrorMessage name="full_name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">User Name</label>
              <Field
                name="account_name"
                type="text"
                className="border rounded-lg p-3 outline-none focus:border-[#6772e5]"
                placeholder="@account_name"
              />
              <ErrorMessage name="account_name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">Email Address</label>
              <Field
                name="email_address"
                type="email_address"
                className="border rounded-lg p-3 outline-none focus:border-[#6772e5]"
                placeholder="Enter your email_address"
              />
              <ErrorMessage name="email_address" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">Password</label>
              <Field
                name="password"
                type="password"
                className="border rounded-lg p-3 outline-none focus:border-[#6772e5]"
                placeholder="Create a password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">Select plane</label>
              <Select
                options={planOption}
                value={values.plan}
                onChange={(option) => setFieldValue("plan", option)}
                className="react-select-container"
              />
              {errors.plan && touched.plan && (
                <div className="text-red-500 text-sm mt-1">{errors.plan}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#6772e5] hover:bg-[#5a63d8] text-white font-semibold py-3 rounded-lg mt-2 transition-all"
            >
              Create Account
            </button>

          </Form>
            )}
        </Formik>

        {/* <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#6772e5] font-semibold hover:underline">
            Sign in
          </a>
        </p> */}
      </div>
            <ToastContainer style={{ marginTop: "80px" }} />

    </div>
    </div >
  );
}
