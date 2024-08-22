import React, { useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Section_4() {
  const progressBarRef = useRef(null);
  const g1Ref = useRef(null);
  const g2Ref = useRef(null);
  const g3Ref = useRef(null);

  useGSAP(() => {
    gsap.to(progressBarRef.current, {
      height: '100%',
      scrollTrigger: {
        trigger: progressBarRef.current,
        start: 'top 60%', // Animation starts when the top of the trigger is 60% down the viewport
        scrub: true,
        onUpdate: (self) => {
          const progressHeight = self.progress * 100; // Get the progress of the scroll in percentage
          // Check if progressHeight is between 10 and 35
          if (progressHeight >= 10 && progressHeight < 35) {
            // Fade in the g_1 element
            gsap.to(g1Ref.current, { opacity: 1 });
            // Fade out the g_2 and g_3 elements
            // gsap.to([g2Ref.current, g3Ref.current], { opacity: 0 });
          } 
          // Check if progressHeight is between 35 and 70
          else if (progressHeight >= 35 && progressHeight < 70) {
            // Fade in the g_2 element
            gsap.to(g3Ref.current, { opacity: 1 });
            // Fade out the g_1 and g_3 elements
            // gsap.to([g1Ref.current, g3Ref.current], { opacity: 0 });
          } 
          // Check if progressHeight is between 70 and 100
          else if (progressHeight >= 70 && progressHeight <= 100) {
            // Fade in the g_3 element
            gsap.to(g2Ref.current, { opacity: 1 });
            // Fade out the g_1 and g_2 elements
            // gsap.to([g1Ref.current, g2Ref.current], { opacity: 0 });
          }
        }
      }
    })
  }, []);
  return (
    <div className='grass_features py-5'>
      <Container>
        <div className="section-heading text-center grass_whyus mb-5">
          <h2 className="subtitle text-white" style={{fontSize:'2.5rem'}}>Why Choose Us?</h2>
          <p className='m-0 p-5 py-3 text-secondary'>
            At DomApp, we have specialists in cutting-edge facade fabrication that combines the power of Grasshopper with our team of experienced engineers. Our advanced parametric design capabilities enable us to create stunning, efficient, and highly customizable facade solutions.
          </p>
        </div>
        {/* <div className='d-flex align-items-stretch pc_res'>
          <div className='d-flex justify-content-between flex-column whyus_container_card'>
            
            <div className='grass_whyUs_card mb-5' id="g_1" ref={g1Ref} style={{ opacity: 0 }}>
              <div>
                <span className='fw-bold text-white'> Innovative Solutions: </span> We are at the forefront of facade design and fabrication, offering innovative solutions that set your building apart.
              </div>
            </div>

            <div className='grass_whyUs_card mb-5' id="g_2" ref={g2Ref} style={{ opacity: 0 }}>
              <div>
              <span className='fw-bold text-white'>Client-Centric Approach: </span> Your satisfaction is our priority. We work closely with you to understand your needs and exceed your expectations.
              </div>
            </div>

          </div>
          <div className='progress_sidebar'>
            <div ref={progressBarRef} className='progress position-relative w-100' style={{height:'0'}}></div>
          </div>
          <div className='d-flex align-items-center whyus_container_card'>

            <div className='grass_whyUs_card mb-5' id="g_3" ref={g3Ref} style={{ opacity: 0 }}>
              <div>
                <span className='fw-bold text-white'>Experienced Team: </span> Our team combines technical expertise with creative vision, delivering exceptional results every time.
              </div>
            </div>

          </div>
        </div> */}

        <div className='mobile-res'>
            <div className='grass_whyUs_card mb-5' id="g_1" ref={g1Ref} style={{ opacity: 0 }}>
              <div>
                <span className='fw-bold text-white'> Innovative Solutions: </span> We are at the forefront of facade design and fabrication, offering innovative solutions that set your building apart.
              </div>
            </div>

            <div className='grass_whyUs_card mb-5' id="g_2" ref={g2Ref} style={{ opacity: 0 }}>
              <div>
              <span className='fw-bold text-white'>Client-Centric Approach: </span> Your satisfaction is our priority. We work closely with you to understand your needs and exceed your expectations.
              </div>
            </div>
            <div className='grass_whyUs_card' id="g_3" ref={g3Ref} style={{ opacity: 0 }}>
              <div>
                <span className='fw-bold text-white'>Experienced Team: </span> Our team combines technical expertise with creative vision, delivering exceptional results every time.
              </div>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Section_4;
