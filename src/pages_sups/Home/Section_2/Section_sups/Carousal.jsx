"use client"
import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
// import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Fab } from "@mui/material";

const cardsData = [
        
  {
      title: 'Our mission',
      description: 'to enhance our customer’s success through unique solutions.     ',
      link: '/cladCut'
  },
  {
      title: 'Cutting-Edge Software',
      description: 'We specialize in developing applications that meets the needs of our clients with precision and creativity, utilizing the latest tech and frameworks.',
      link: '/cladCut'
  },
  {
      title: 'Tech Advancement',
      description: 'Embracing innovation in artificial intelligence, virtual reality, and big data analytics to drive our clients, businesses forward with creativity and expertise.' ,
      link: '/cladCut'
  },
  {
      title: 'Creative Innovation',
      description: 'From Cladcut to Chatplus, our projects showcase our commitment to pushing boundaries and creating groundbreaking solutions that make a difference. ',
      link: '/cladCut'
  },
  {
      title: 'Tailored Solutions',
      description: 'Crafting custom applications to fulfill unique requirements and objectives, ensuring our clients, success and business growth. ',
      link: '/cladCut'
  },
  {
      title: 'Client-Centric Approach',
      description: 'Putting our clients at the heart of everything we do, we strive to exceed expectations and deliver exceptional results that propel their success.',
      link: '/cladCut'
  },
]


export default function ResponsiveCarousel(props) {
  const ref = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          // if (parentWidth <= 1440) currentVisibleSlide = 5;
          // if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={400}
              carouselWidth={parentWidth}
              data={cardsData}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <Fab
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
          size="small"
          color="#9e9e9e"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          size="small"
          color="#9e9e9e"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <ArrowForwardIcon />
        </Fab>
      </>
    </div>
  );
}

export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { title } = data[dataIndex];
  const { description } = data[dataIndex];

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className="my-slide-component"
    >
        <div className="card_column p-4">
          <div className="home_section_2_card" style={{minHeight:'200px'}}>
            <h4>
              {title}
            </h4>
            <p>
              {description}
            </p>
          </div>
        </div>
    </div>
  );
});