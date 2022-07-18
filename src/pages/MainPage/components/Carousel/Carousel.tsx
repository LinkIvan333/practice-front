import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import {SwiperWrapper} from "./Carousel.styles";
import {SLIDES} from "./config";
import SlideItem from "./components/SlideItem/SlideItem";

const Carousel = ()=> {
    return(
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
                {
                    SLIDES.map((item, index)=>(
                        <SwiperSlide>
                            <SlideItem image={item.image} title={item.title} key={index}>
                                {item.text}
                            </SlideItem>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </SwiperWrapper>
    )
}

export default Carousel;
