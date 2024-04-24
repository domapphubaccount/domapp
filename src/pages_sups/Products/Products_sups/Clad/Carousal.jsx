import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import S1 from '@/assets/images/Products_Page/Clad/Carousal/as1.png'
import S2 from '@/assets/images/Products_Page/Clad/Carousal/as2.png'
import S3 from '@/assets/images/Products_Page/Clad/Carousal/as3.png'
import S4 from '@/assets/images/Products_Page/Clad/Carousal/as4.png'

const items = [
  {
    src: S1.src,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: S2.src,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: S3.src,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
  {
    src: S4.src,
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4,
  },
];

function Clad(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ height: "400px", width: "350px", objectFit: "cover" }} />
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Clad;