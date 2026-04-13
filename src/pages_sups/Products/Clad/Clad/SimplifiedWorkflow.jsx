import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

export default function SimplifiedWorkflow() {
    const { lang } = useSelector((state) => state.languageSlice);
    const { cladcut } = useSelector((state) => state.cladcutRed);

    const data = [
        {
            img: "/img/cladcut/simplified-step1.png",
            alt: "Step 1 - Upload Project Files",
            title: cladcut(lang).sections.SIMPLIFIED_WORKFLOW.step1,
            slogan: cladcut(lang).sections.SIMPLIFIED_WORKFLOW.step1_slogan,
        },
        {
            img: "/img/cladcut/simplified-step2.png",
            alt: "Step 2 - Define Specifications",
            title: cladcut(lang).sections.SIMPLIFIED_WORKFLOW.step2,
            slogan: cladcut(lang).sections.SIMPLIFIED_WORKFLOW.step2_slogan,
        },
        {
            img: "/img/cladcut/simplified-step3.png",
            alt: "Step 3 - Process & Export",
            title: cladcut(lang).sections.SIMPLIFIED_WORKFLOW.step3,
            slogan: cladcut(lang).sections.SIMPLIFIED_WORKFLOW.step3_slogan,
        },
    ];

    return (
        <section className="py-5">14
            <Container>

                {/* TITLE */}
                <h2 className="text-center mb-5" style={{ fontWeight: 700 }}>
                    {cladcut(lang).sections.SIMPLIFIED_WORKFLOW.title}
                </h2>

                <div className="row justify-content-center text-center">

                    {data.map((step, index) => (
                        <div key={index} className="col-md-4 mb-4">

                            <div className="card border-0 h-100 shadow-sm">

                                {/* IMAGE */}
                                <img
                                    src={step.img}
                                    alt={step.alt}
                                    className="card-img-top mx-auto d-block p-4"
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        objectFit: "contain",
                                    }}
                                />

                                {/* CONTENT */}
                                <div className="card-body">
                                    <h3 className="h5" style={{ fontWeight: 600 }}>
                                        {step.title}
                                    </h3>

                                    <p className="text-muted mb-0">
                                        {step.slogan}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
}