"use client";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { league } from "@/pages_sups/Home/Bannar/Bannar";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Link from "next/link";
import { useSelector } from "react-redux";
import useInitCountry from "@/stores/useInitCountry";

export default function Pricing() {
  const [plans, setPlans] = useState([{
            "id": 4,
            "name": "Free Plan",
            "type": "free",
            "featured": false,
            "pricing": {
                "monthly": 0,
                "yearly": 0
            },
            "limits": {
                "clients": 50,
                "projects": 50,
                "team": 50
            },
            "modules": {
                "projects": true,
                "tasks": true,
                "invoices": true,
                "leads": true,
                "knowledgebase": true,
                "estimates": true,
                "expense": true,
                "subscriptions": true,
                "tickets": true,
                "calendar": true,
                "timetracking": true,
                "reminders": true,
                "proposals": true,
                "contracts": true,
                "messages": true
            }
        },
        {
            "id": 5,
            "name": "Standard Plan",
            "type": "paid",
            "featured": true,
            "pricing": {
                "monthly": 226,
                "yearly": 180
            },
            "limits": {
                "clients": -1,
                "projects": -1,
                "team": 10
            },
            "modules": {
                "projects": true,
                "tasks": true,
                "invoices": true,
                "leads": true,
                "knowledgebase": true,
                "estimates": true,
                "expense": true,
                "subscriptions": true,
                "tickets": true,
                "calendar": true,
                "timetracking": true,
                "reminders": true,
                "proposals": true,
                "contracts": true,
                "messages": true
            }
        },
        {
            "id": 6,
            "name": "Enterprise Plan",
            "type": "paid",
            "featured": false,
            "pricing": {
                "monthly": 226,
                "yearly": 180
            },
            "limits": {
                "clients": -1,
                "projects": -1,
                "team": -1
            },
            "modules": {
                "projects": true,
                "tasks": true,
                "invoices": true,
                "leads": true,
                "knowledgebase": true,
                "estimates": true,
                "expense": true,
                "subscriptions": true,
                "tickets": true,
                "calendar": true,
                "timetracking": true,
                "reminders": true,
                "proposals": true,
                "contracts": true,
                "messages": true
            }
        }]);
  const [loading, setLoading] = useState(true);
  const [isMonthly, setIsMonthly] = useState(true);

  const { currency } = useSelector((state) => state.countryRed);
  const { lang, dir } = useSelector((state) => state.languageSlice);

  useInitCountry();

  // جلب الداتا من الـ API
  useEffect(() => {
    fetch("/api/pricing")
      .then(res => res.json())
      .then(result => {
        if (result.data) {
          setPlans(result.data.sort((a, b) => a.id - b.id));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getPrice = (plan) => {
    if (plan.type === null || plan === undefined) return "0";
    if (plan.id === 6) return "Custom"; // Enterprise
    if (plan.type === "free") return "0";

    const price = isMonthly ? plan.pricing?.monthly : plan.pricing?.yearly;
    return price > 0 ? price : "0";
  };

  if (loading) {
    return (
      <div className="bondifycrm-page pt-[120px] min-h-screen flex items-center justify-center">
        <Header />
        <div className="text-2xl text-[#5c65c7]">Loading...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bondifycrm-page pt-[120px]">
      <Header />

      <section className={league.className + " pricing-section mb-5 bondifycrm-page"}>
        <div className="py-3">
          <Container>
            <div className="text-center mb-16 px-4">
              <h2 className="text-[27px] font-bold text-[#5c5678] mb-1">
                {lang === "ar" ? "حجم عملك لا يهم — Bondify CRM مناسب للجميع": "Your Business Size Doesn’t Matter — bondify CRM Fits All"}
              </h2>
              <p className="text-[16px] text-[#5c5678] mb-8">
                {lang === "ar"
                  ? "مرن، قابل للتخصيص، ومصمم لكل الفرق — اختر الخطة التي تناسب طريقة عملك وأهداف عملك."
                  : "Flexible, customizable, and built for every team — choose the plan that fits your workflow and business goals."}
              </p>

              <div className="flex items-center justify-center gap-4">
                <span className={`text-[20px] font-semibold ${isMonthly ? "text-indigo-600" : "text-gray-600"}`}>
                  {lang === "ar" ? "شهري" : "Monthly"}
                </span>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={!isMonthly}
                    onChange={() => setIsMonthly(!isMonthly)}
                  />
                  <div className="w-16 h-5 bg-[#94a3b8] rounded-full 
                    peer-checked:bg-[#4f46e5]
                    after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                    after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all 
                    peer-checked:after:translate-x-11"></div>
                </label>

                <div className="flex items-center gap-2">
                  <span className={`text-[20px] font-semibold ${!isMonthly ? "text-indigo-600" : "text-gray-600"}`}>
                    {lang === "ar" ? "سنوي" : "Yearly"}
                  </span>
                  {!isMonthly && (
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                      Save 20%
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div dir={dir} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
              {plans.map((plan) => {
                const isStandard = plan.featured === true;
                const price = getPrice(plan);

                return (
                  <div
                    key={plan.id}
                    className={`rounded-2xl p-8 transition-all duration-300 border border-gray-200 ${
                      isStandard ? "bg-[#5c65c7] text-white z-10" : "bg-white text-gray-900"
                    }`}
                  >
                    <h2 className={`text-[24px] fw-bold ${isStandard ? "text-white" : "text-[#5c5678]"}`}>
                      {plan.name}
                    </h2>

                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-[28px] font-medium">
                          {plan.id === 6 ? "Custom" : `${currency} ${price}`}
                        </span>
                        {plan.id !== 6 && price !== "0" && (
                          <span className="text-[16px] ml-2 mr-2">
                            / {isMonthly ? (lang === "ar" ? "شهر" : "month") : (lang === "ar" ? "سنة" : "year")} / {plan.limits.team === -1 ? "Unlimited" : plan.limits.team} {lang === "ar" ? "مستخدم" : "user"}
                          </span>
                        )}
                      </div>
                    </div>

                    <h5 className={`text-[20px] mb-4 h-[50px] ${isStandard ? "text-white" : "text-[#5c5678]"}`}>
                      {lang === "ar"
                        ? plan.id === 4
                          ? "الخطة المجانية – جرّب جميع المميزات الأساسية مجانًا"
                          : plan.id === 5
                          ? "مناسبة لما يصل إلى 10 مستخدمين"
                          : "للشركات والمؤسسات التي تضم أكثر من 10 مستخدمين"
                        : plan.id === 4
                        ? "Free plan - explore all core features for free"
                        : plan.id === 5
                        ? "Suitable for up to 10 users"
                        : "For companies and enterprises with more than 10 users"}
                    </h5>

                    <div>
                      <h3 className={isStandard ? "text-white" : "text-gray-900"}>
                        {lang === "ar" ? "الحدود" : "Limits"}
                      </h3>
                      <ul className="m-0 p-0 mb-5 m-3">
                        {Object.entries(plan.limits || {}).map(([key, value]) => {
                          if (value === 0 || value === false) return null;

                          const label = {
                            clients: lang === "ar" ? "العملاء" : "Clients",
                            projects: lang === "ar" ? "المشاريع" : "Projects",
                            team: lang === "ar" ? "الفريق" : "Team Members",
                          }[key] || key;

                          const displayValue = value === -1 ? (lang === "ar" ? "غير محدود" : "Unlimited") : value;

                          return (
                            <li key={key} className="flex items-center mb-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${lang === "en" ? "mr-3" : "ml-3"} flex-shrink-0 ${isStandard ? "bg-white/20" : "bg-gray-200"}`}>
                                <Check color={isStandard ? "white" : "gray"} />
                              </div>
                              <span className={isStandard ? "text-white" : "text-gray-700"}>
                                {displayValue} {label}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

            
                    <div>
                      <h3 className={isStandard ? "text-white" : "text-gray-900"}>
                        {lang === "ar" ? "الوحدات المتاحة" : "Available Modules"}
                      </h3>
                      <ul className="m-0 p-0 mb-5 m-3">
                        {Object.entries(plan?.modules || {})
                          .filter(([_, v]) => v === true)
                          .map(([key]) => {
                            const names = {
                              projects: lang === "ar" ? "إدارة المشاريع" : "Projects",
                              tasks: lang === "ar" ? "المهام" : "Tasks",
                              invoices: lang === "ar" ? "الفواتير" : "Invoices",
                              leads: lang === "ar" ? "العملاء المحتملين" : "Leads",
                              knowledgebase: lang === "ar" ?  "قاعدة المعرفة" : "Knowledge Base",
                              estimates: lang === "ar" ? "عروض الأسعار" : "Estimates",
                              expense: lang === "ar" ? "المصروفات" : "Expenses",
                              subscriptions: lang === "ar" ? "الاشتراكات" : "Subscriptions",
                              tickets: lang === "ar" ? "تذاكر الدعم" : "Support Tickets",
                              calendar: lang === "ar" ? "التقويم" : "Calendar",
                              timetracking: lang === "ar" ? "تتبع الوقت" : "Time Tracking",
                              reminders: lang === "ar" ? "التذكيرات" : "Reminders",
                              proposals: lang === "ar" ? "العروض" : "Proposals",
                              contracts: lang === "ar" ? "العقود" : "Contracts",
                              messages: lang === "ar" ? "الرسائل الداخلية" : "Messages",
                            };

                            return (
                              <li key={key} className="flex items-center mb-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${lang === "en" ? "mr-3" : "ml-3"} flex-shrink-0 ${isStandard ? "bg-white/20" : "bg-gray-200"}`}>
                                  <Check color={isStandard ? "white" : "gray"} />
                                </div>
                                <span className={isStandard ? "text-white" : "text-gray-700"}>
                                  {names[key] || key}
                                </span>
                              </li>
                            );
                          })}
                      </ul>
                    </div>

                    <Link
                      href={plan.id === 6 ? "/contact" : `/signup?plan=${plan.id}`}
                      className={`
                        w-full flex justify-center items-center pt-2 pb-2 rounded-[12px] 
                        text-base font-semibold transition-all duration-300
                        ${isStandard
                          ? "bg-[#ebedfd] text-[#5c65c7] hover:bg-[#d8dbf7]"
                          : "bg-[#6772e5] text-white hover:bg-[#5a63d8]"
                        }
                        focus:outline-none text-decoration-none
                      `}
                    >
                      {plan.id === 6
                        ? lang === "ar" ? "تواصل معنا" : "Contact Us"
                        : lang === "ar" ? "ابدأ الآن" : "Get Started"}
                    </Link>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// نفس الأيقونة القديمة
function Check({ color = "currentColor" }) {
  return (
    <svg className="w-4 h-4" fill={color} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}