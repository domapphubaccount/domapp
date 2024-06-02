import { Badge, Button } from '@material-tailwind/react'
import React from 'react'
import { Col } from 'reactstrap'

function Section_3() {
  return (
    <div>
      {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" /> */}
      <section className="relative pt-16 bg-blueGray-50">
      <div className="container mx-auto">
        <div className="row">
          <Col sm={12} md={5} >
            <div className="relative d-flex align-items-center bg-white h-100">
              <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" className="w-full align-middle rounded-t-lg" />
              <blockquote className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-white">
                 Enhanced Creativity and Flexibility
                </h4>
                <p className="text-md font-light mt-2 text-white">
                	Grasshopper’s parametric approach allows for rapid exploration of complex geometries and design variations, enabling more creative and innovative design solutions.
                </p>
              </blockquote>
            </div>
          </Col>

          <Col sm={12} md={7}>
            <div className="row">
                <div className="relative flex col-6 col-sm-12 col-md-6">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-sitemap"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Enhanced Creativity and Flexibility</h6>
                    <p className="mb-4 text-blueGray-500">
                    Grasshopper’s parametric approach allows for rapid exploration of complex geometries and design variations, enabling more creative and innovative design solutions.
                    </p>
                  </div>
                </div>

                <div className="relative flex col-6 col-sm-12 col-md-6">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-drafting-compass"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                    Efficiency and Productivity
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                    Automating repetitive tasks and creating reusable design logic significantly speeds up the design process, saving time and reducing errors.
                    </p>
                  </div>
                </div>

                <div className="relative flex col-6 col-sm-12 col-md-6">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-newspaper"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Precision and Control</h6>
                    <p className="mb-4 text-blueGray-500">
                      The ability to define precise relationships and dependencies between design elements ensures greater control over the final output, improving accuracy and quality.
                    </p>
                  </div>
                </div>

                <div className="relative flex col-6 col-sm-12 col-md-6">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Interdisciplinary Applications</h6>
                    <p className="mb-4 text-blueGray-500">
                    	Grasshopper is not limited to architectural design; it is used in various fields such as product design, engineering, art, and environmental analysis, making it a versatile tool for multiple disciplines.
                    </p>
                  </div>
                </div>
              </div>
          </Col>
        </div>
      </div>
      </section>                               
    </div>
  )
}

export default Section_3