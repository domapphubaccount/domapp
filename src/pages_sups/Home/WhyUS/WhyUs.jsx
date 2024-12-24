import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useRef, useState } from "react";
import { about_section, why_us_section } from "@/Store/Main/links/links";
import { useSelector } from "react-redux";
import Section_head from "@/components/Reuse/Section_Head/Section_head";
import Slider from "react-slick/lib/slider";
import customer from "/public/Why_us/customer.jpg";
import tech from "/public/Why_us/tech.jpg";
import innovation from "/public/Why_us/innovation.jpg";
import solutions from "/public/Why_us/solutions.jpg";
import software from "/public/Why_us/software.jpg";
import { Container } from "reactstrap";
import { whyUs } from "@/Store/Main/IDs";

function WhyUs() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);

  const slides = [
    {
        image: software.src, // Replace with your image URL
      },
    {
      image: tech.src, // Replace with your image URL
    },
    {
      image: innovation.src, // Replace with your image URL
    },
    {
      image: solutions.src, // Replace with your image URL
    },
    {
        image: customer.src, // Replace with your image URL
    }

  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="whyus-main-section">
      <div className="section-holder">
        <Container>
          <div>
            <Section_head
              head={1}
              title_1={home(lang).sections.why_us.title}
              des_1={home(lang).sections.why_us.slogan}
              sectionId={whyUs}
            />
          </div>
          <div className="whyus-section" style={{ margin: "0 auto",width: "95%" }}>
            <div className="whyus-slider-text">
              <div className="relative">
                {/* Text Slider */}
                <Slider
                  {...settings}
                  asNavFor={nav2}
                  ref={(slider) => setNav1(slider)}
                  // arrows={true}
                >
                  {home(lang).sections.what_we_do.main.slices.map(
                    (item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          padding: "20px",
                          background: "#000",
                          color: "#fff",
                          borderRadius: "10px",
                        }}
                        dir={dir}
                      >
                        <h2
                          className="mb-4"
                          style={{ marginBottom: "10px", fontSize: "2.5rem" }}
                        >
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                      </div>
                    )
                  )}
                </Slider>
                {/* Arrows */}

                <div className="navigation-buttons d-flex">
                  <div
                    onClick={() => nav1?.slickPrev()}
                    className="rounded-circle border-2 p-2 mx-2 cursor-pointer"
                  >
                    <ArrowBack />
                  </div>
                  <div
                    onClick={() => nav1?.slickNext()}
                    className="rounded-circle border-2 p-2 mx-2 cursor-pointer"
                  >
                    <ArrowForward />
                  </div>
                </div>
              </div>
            </div>

            <div className="whyus-slider-image">
              {/* Image Slider */}
              <Slider
                {...settings}
                asNavFor={nav1}
                ref={(slider) => setNav2(slider)}
                arrows={false}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    style={{ position: "relative", borderRadius: "10px" }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        // objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default WhyUs;
