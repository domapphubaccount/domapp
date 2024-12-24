import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import quotes from "@/assets/images/Products_Page/Rd/quotes-left.svg";

const testimonials = [
  {
    name: "Helena",
    title: "Senior Marketing Manager, ABC Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet dolor nec arcu eleifend fermentum eget laoreet felis. Donec sagittis quam massa, quis tempor orci commodo quis. Praesent et sem eget augue posuere tempus.",
  },
  {
    name: "Helena",
    title: "Senior Marketing Manager, ABC Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet dolor nec arcu eleifend fermentum eget laoreet felis. Donec sagittis quam massa, quis tempor orci commodo quis. Praesent et sem eget augue posuere tempus.",
  },
];

const Carousel = () => {
  const { lang, dir } = useSelector((state) => state.languageSlice);
  const { home } = useSelector((state) => state.homeRed);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <Container>
      <Header>{home(lang).sections.review_title}</Header>
      <SliderWrapper>
        <Slider {...settings}>
          {home(lang).sections.review.map((testimonial, index) => (
            <div className="p-5 h-full" key={index}>
              <Card  className="h-full">
                <div className="flex justify-between mb-4">
                  <div>
                    <Name>{testimonial.name}</Name>
                    <Title>{testimonial.title}</Title>
                  </div>
                  <div>
                    <img
                      src={quotes.src}
                      style={{ width: "60px" }}
                      className="inline"
                      alt="qute"
                    />
                  </div>
                </div>
                <Quote className="p-3">{`"${testimonial.quote}"`}</Quote>
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 10%;
    right: 10%;
    height: 20px;
    background: rgba(200, 200, 255, 0.4);
    border-radius: 16px;
    z-index: 1;
    filter: blur(5px);
  }
`;

const Name = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Title = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Quote = styled.p`
  font-size: 16px;
  color: #6c757d;
  line-height: 1.6;
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
