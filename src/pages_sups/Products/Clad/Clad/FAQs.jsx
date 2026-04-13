import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function FAQs() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const faqs = cladcut(lang).sections.FAQs.items;

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container py-5">

            {/* TITLE */}
            <h2 className="text-center mb-5 fw-bold">
                {cladcut(lang).sections.FAQs.title}
            </h2>

            {/* ACCORDION */}
            <div>

                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded mb-3 overflow-hidden"
                    >

                        {/* QUESTION */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-100 text-start p-3 fw-semibold bg-white border-0 d-flex justify-content-between align-items-center"
                            style={{ outline: "none" }}
                        >
                            {item.question}

                            <span
                                style={{
                                    transform:
                                        activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "0.3s",
                                }}
                            >
                                ▼
                            </span>
                        </button>

                        {/* ANSWER */}
                        <div
                            style={{
                                maxHeight: activeIndex === index ? "200px" : "0px",
                                overflow: "hidden",
                                transition: "0.3s ease",
                            }}
                        >
                            <div className="p-3 text-muted">
                                {item.answer}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}