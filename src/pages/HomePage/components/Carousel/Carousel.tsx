import * as React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import { SwiperWrapper } from './Carousel.styles';
import SlideItem from './components/SlideItem/SlideItem';
import { SLIDES } from './config';

const Carousel = () => {
  return (
    <SwiperWrapper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {SLIDES.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItem image={item.image} title={item.title} key={index}>
              {item.text}
            </SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default Carousel;
