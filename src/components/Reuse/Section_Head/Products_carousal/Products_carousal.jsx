"use client"
import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Fab } from "@mui/material";

import Clad from '@/assets/images/Products_Page/products_carousal/clad.png'
import Wind from '@/assets/images/Products_Page/products_carousal/wind.png'
import RD from '@/assets/images/Products_Page/products_carousal/RD.png'
import Facade from '@/assets/images/Products_Page/products_carousal/facade.png'
import Chat from '@/assets/images/Products_Page/products_carousal/chat.png'
import Erp from '@/assets/images/Products_Page/products_carousal/erp.png'
import Image from "next/image";
import Link from "next/link";

const cardsData = [
  {
      src: Clad,
      link: '/cladCut'
  },
  {
      src: Wind,
      link: '/windload'
  },
  {
      src: RD,
      link: '/rd'
  },
  // {
  //     src: Facade,
  //     link: '/facade'
  // },
  {
      src: Erp,
      link: '/erp'
  },
  {
      src: Chat,
      link: '/chat'
  },
]


export default function Products_carousal(props) {
  const ref = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;

          return (
            <StackedCarousel
              className="products_carousal"
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
          color="gray"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          size="small"
          color="gray"
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
  const { src } = data[dataIndex];
  const { link } = data[dataIndex]

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <Link href={link} shallow>
        <Image src={src} alt={src} />
      </Link>
    </div>
  );
});
Card.displayName ='Card'