import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import quotes from "@/assets/images/Home_Page/testimoniols/coma-up.png";
import Section_head from "@/components/Reuse/Section_Head/Section_head";


const Dot = styled.div`
  width: 15px;
  height: 7px;
  background-color: #ccc;
  border-radius: 999px;
  transition: all 0.3s ease;
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  li.slick-active & ${Dot} {
    width: 30px;
    background-color: #444;
  }
`;


const Carousel = () => {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);

  const settings = {
    customPaging: function (i) {
      return (
        <DotContainer>
          <Dot />
        </DotContainer>
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container>
      {/* <Header className="mt-5">{home(lang).sections.review_title}</Header> */}
      <Section_head
        head={1}
        title_1={home(lang).sections.review_title.title}
        des_1={home(lang).sections.review_title.slogan}
      />
      <SliderWrapper>
        <Slider {...settings}>
          {home(lang).sections.review.map((testimonial, index) => (
            <div className="p-5 h-full mt-4 " key={index} dir={lang == "ar" ? "rtl" : "ltr"}>
              <Card className="h-full flex flex-column">
                <div id="testimoniol-qute-up">
                  <img loading="lazy"
                    src={quotes.src}
                    style={{
                      width: "40px",
                    }}
                    className="inline"
                    alt="qute"
                  />
                </div>

                <div id="testimoniol-qute-down">
                  <img loading="lazy"
                    src={quotes.src}
                    style={{
                      width: "40px",
                    }}
                    className="inline"
                    alt="qute"
                  />
                </div>

                <Quote className={`p-2 mb-5 pt-5 text-center flex-1 flex justify-center items-center`} dir={lang == "ar" ? "rtl" : "ltr"}>{testimonial.quote}</Quote>

                <div className="px-2">
                  <Name>{testimonial.name}</Name>
                  <Title>{testimonial.title}</Title>
                </div>

              </Card>
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

const CustomArrow = ({ className, style, onClick, direction }) => (
  <ArrowWrapper direction={direction} onClick={onClick} style={{ ...style }}>
    {direction === "next" ? (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </>
    ) : (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </>
    )}
  </ArrowWrapper>
);

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
  color: #495057;
`;

const Header = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px #ccc;
  text-align: left;
  position: relative;
  z-index: 2;
`;

const Name = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Title = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Quote = styled.p`
  font-size: 16px;
  color: #000;
  line-height: 1.6;
  font-weight: 200;
`;

const ArrowWrapper = styled.div`
  background-color: #fff;
  border-radius: 50%;
  color: #000;
  box-shadow: 0 5px 5px #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  ${({ direction }) =>
    direction === "next" ? `right: -50px;` : `left: -50px;`}

  &:hover {
    background: #9ca8c3;
  }

  svg {
    font-size: 16px;
  }
`;

export default Carousel;
