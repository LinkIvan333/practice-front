import * as React from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import {
  NewsBigBlock,
  NewsWrapper,
  NewsSmallBlock,
  Title,
  Text,
  ButtonMore,
} from './News.styles';

import './Swiper.scss';

const News = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
    null
  );
  return (
    <NewsWrapper>
      <>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <NewsBigBlock>
              <Title>Заголовок новости 1</Title>
              <Text>
                подробная информация о товаре и еще какой-то длинный очень
                длинный текст
              </Text>
              <ButtonMore>Подробнее...</ButtonMore>
            </NewsBigBlock>
          </SwiperSlide>
          <SwiperSlide>
            <NewsBigBlock>
              <Title>Заголовок новости 2</Title>
              <Text>
                подробная информация о товаре и еще какой-то длинный очень
                длинный текст
              </Text>
              <ButtonMore>Подробнее</ButtonMore>
            </NewsBigBlock>
          </SwiperSlide>
          <SwiperSlide>
            <NewsBigBlock>
              <Title>Заголовок новости 3</Title>
              <Text>
                подробная информация о товаре и еще какой-то длинный очень
                длинный текст
              </Text>
              <ButtonMore>Подробнее</ButtonMore>
            </NewsBigBlock>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={3}
          freeMode
          watchSlidesProgress
          navigation
          modules={[FreeMode, Navigation, Thumbs]}
          className="styledSwiper"
        >
          <SwiperSlide>
            <NewsSmallBlock>миниатюра новости 1</NewsSmallBlock>
          </SwiperSlide>
          <SwiperSlide>
            <NewsSmallBlock>миниатюра новости 2</NewsSmallBlock>
          </SwiperSlide>
          <SwiperSlide>
            <NewsSmallBlock>миниатюра новости 3</NewsSmallBlock>
          </SwiperSlide>
        </Swiper>
      </>
    </NewsWrapper>
  );
};

export default News;
