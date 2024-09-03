import React from 'react'
import blob from "@/assets/images/Byld/blob-tear.svg"
import sectionImg from "@/assets/images/Byld/img-1.png"

function Section_1() {
  return (
    <section className="py-12 md:py-16 lg:py-32 overflow-x-hidden" id="key-features">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <div data-aos="fade-up" className="lg:py-6 lg:pr-32 wow animate__ animate__fadeIn animated" data-wow-delay=".3s" style={{visibility: "visible" ,animationDelay: "0.3s" , animationName: "fadeIn"}}>
                                <div className="mb-4">
                                    <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__ animate__fadeInDown" data-wow-delay=".9s" style={{visibility: "visible" , animationDelay: "0.9s", animationName: "fadeInDown"}}>Why choose us</span>
                                    <h2 className="text-4xl mt-5 font-bold font-heading wow animate__ animate__fadeInUp" data-wow-delay=".3s" style={{visibility: "visible" , animationDelay: "0.3s" , animationName: "fadeInUp"}}>Key Features</h2>
                                </div>
                                <div className="flex items-start py-4 wow animate__ animate__fadeInUp" data-wow-delay=".5s" style={{visibility: "visible", animationDelay: "0.5s" , animationName: "fadeInUp"}}>
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading"> Compliance with the Saudi Building Code</h3>
                                        <p className="text-blueGray-400 leading-loose"> Eliminate any possibility of misunderstanding the requirements and avoiding reliance on unreliable sources.</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4 wow animate__ animate__fadeInUp" data-wow-delay=".7s" style={{visibility: "visible" , animationDelay: "0.7s" , animationName: "fadeInUp"}}>
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading">Continuous Updates And Additions</h3>
                                        <p className="text-blueGray-400 leading-loose">Monitoring all updates approved by relevant authorities for developing the Saudi Building Code ensures the continuous dissemination of accurate information. All requirements and codes are subject to addition.</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4 wow animate__ animate__fadeInUp" data-wow-delay=".9s" style={{visibility: "visible", animationDelay: "0.9s" , animationName: "fadeInUp"}}>
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading">Instant Responses</h3>
                                        <p className="text-blueGray-400 leading-loose">Immediate answers to your questions, ensuring ease of use.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="relative w-full lg:w-1/2 my-12 lg:my-0">
                            <div className="wow animate__ animate__fadeInRight animated" data-wow-delay=".5s" style={{visibility: "visible", animationDelay: "0.5s" , animationName: "fadeInRight"}}>
                                <img className="jump relative mx-auto rounded-xl w-full z-10" src={sectionImg.src} alt="" />
                                <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12" src={blob.src} alt="" />
                                <img className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src={blob.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Section_1