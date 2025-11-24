"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import { useSelector } from "react-redux";
import en from "@/stores/Language/en.json";
import ar from "@/stores/Language/ar.json";
import { useSearchParams } from "next/navigation";



export default function CreateAccount() {
  const [planOption, setPlanOption] = useState([]);
  const searchParams = useSearchParams();
const selectedPlanId = searchParams.get("planId");
const selectedType = searchParams.get("type");

const [preselectedPlan, setPreselectedPlan] = useState(null);

  const { lang, dir } = useSelector((state) => state.languageSlice);
  const translations = { en, ar };
  const section = translations[lang].BOUNDIFYCRM_CREATE_ACCOUNT;
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
              pricing: plan.pricing.monthly,
            },
            {
              value: `yearly_${plan.id}`,
              label: `${plan.name} - $${plan.pricing.yearly}/year`,
              planId: plan.id,
              type: "yearly",
              pricing: plan.pricing.yearly,
            },
          ]);
          setPlanOption(options);
      if (selectedPlanId && selectedType) {
  const preselected = options.find(
    (opt) =>
      opt.planId === Number(selectedPlanId) &&
      opt.type === selectedType
  );

  if (preselected) {
    setPreselectedPlan(preselected);
  }
}

        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  const validationSchema = Yup.object({
    full_name: Yup.string().required(
      lang === "ar" ? "الاسم الكامل مطلوب" : "Full Name is required"
    ),

    account_name: Yup.string()
      .matches(
        /^[a-zA-Z0-9]+$/,
        lang === "ar"
          ? "يجب أن يحتوي على حروف وأرقام فقط"
          : "must only contain letters and numbers"
      )
      .required(
        lang === "ar" ? "اسم المستخدم مطلوب" : "Account Name is required"
      ),

    email_address: Yup.string()
      .email(lang === "ar" ? "البريد الإلكتروني غير صالح" : "Email is invalid")
      .required(
        lang === "ar" ? "البريد الإلكتروني مطلوب" : "Email is required"
      ),

    password: Yup.string()
      .min(
        6,
        lang === "ar"
          ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
          : "Password must be a minimum of 6 characters"
      )
      .required(lang === "ar" ? "كلمة المرور مطلوبة" : "Password is required"),

    plan: Yup.object()
      .nullable()
      .required(lang === "ar" ? "الرجاء اختيار الباقة" : "Plan is required"),
  });

  return (
    <div className="bondifycrm-page pt-[100px] ">
      <Header />

      <div
        dir={dir}
        className="w-[60%] m-auto min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-5 overflow-hidden "
      >
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/CreatAcc.png"
            alt="Create Account"
            className="w-[80%] max-w-[550px] object-contain"
          />
        </div>

        {/* Form */}
        <div className=" md:w-1/2">
          <h2 className="text-3xl font-bold text-[#6772e5] ">
            {section.title}
          </h2>
          <p className="mb-[25px] text-[#797687]">{section.subtitle}</p>

          <Formik
            initialValues={{
              full_name: "",
              account_name: "",
              email_address: "",
              password: "",
              plan: preselectedPlan,
              // sign_agree_terms: "on",
              sign_agree_terms: false,
            }}
            enableReinitialize={true}

            validationSchema={validationSchema}
            onSubmit={(values) => {
              const payload = {
                ...values,
                plan: values.plan.value,
                sign_agree_terms: values.sign_agree_terms ? "on" : "off",
              };
              // console.log("FORM VALUES:", payload);

              axios
                .post(
                  "https://bondifycrm.com/api/bondify/create-account",
                  payload
                )
                .then((res) => {
                  if (res.status === 200 || res.status === 201) {

 const url = res.data.data.account_url;
    // console.log("URL:", url);
                    toast.success(
                      lang === "ar"
                        ? "تم إنشاء الحساب بنجاح!"
                        : "Created Account successfully!"
                    );
                       setTimeout(() => {

                       window.location.assign(url);


    

    }, 500);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toast.error(
                    error.response?.data?.message || "An error occurred"
                  );
                });
            }}
          >
            {({ setFieldValue, values, errors, touched }) => (
              <Form className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label className="font-medium mb-1">
                    {section.full_name_label}
                  </label>
                  <Field
                    name="full_name"
                    type="text"
                    className="border rounded-lg p-2 outline-none focus:border-[#6772e5]"
                    placeholder={section.full_name_placeholder}
                  />
                  <ErrorMessage
                    name="full_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-1">
                    {section.account_name_label}
                  </label>
                  <Field
                    name="account_name"
                    type="text"
                    className="border rounded-lg p-2 outline-none focus:border-[#6772e5]"
                    placeholder={section.account_name_placeholder}
                  />
                  <ErrorMessage
                    name="account_name"
                    component="div"
                    className="text-red-500 text-sm mt-1 mb-0"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-1">
                    {section.email_address_label}
                  </label>
                  <Field
                    name="email_address"
                    type="email"
                    className="border rounded-lg p-2 outline-none focus:border-[#6772e5]"
                    placeholder={section.email_address_placeholder}
                  />
                  <ErrorMessage
                    name="email_address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-1">
                    {section.password_label}
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="border rounded-lg p-2 outline-none focus:border-[#6772e5]"
                    placeholder={section.password_placeholder}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex items-center gap-2 mt-4">
  <input
    type="checkbox"
    name="sign_agree_terms"
    checked={values.sign_agree_terms}
    onChange={(e) => setFieldValue("sign_agree_terms", e.target.checked)}
    className="h-5 w-5 text-[#6772e5] rounded focus:ring-[#6772e5]"
  />
  <label className="text-sm cursor-pointer select-none">
    {lang === "ar" ? "أوافق على الشروط والأحكام" : "I agree to the terms & conditions"}
  </label>
</div>
{/* {values.plan?.value !== "Free plan" && (
                <div className="flex flex-col">
                  <label className="font-medium mb-1">
                    {section.plan_label}
                  </label>
                  <Select
                    options={planOption}
                    value={values.plan}
                    onChange={(option) => setFieldValue("plan", option)}
                    className="react-select-container"
                    isDisabled
                  />
                  {errors.plan && touched.plan && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.plan}
                    </div>
                  )}
                </div>
)} */}

               
                <button
  type="submit"
  disabled={!values.sign_agree_terms}
  className={`w-full text-white font-semibold py-3 rounded-lg mt-6 transition-all ${
    values.sign_agree_terms
      ? "bg-[#6772e5] hover:bg-[#5a63d8] cursor-pointer"
      : "bg-gray-400 cursor-not-allowed"
  }`}
>
  {section.create_account_button}
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
    </div>
  );
}
