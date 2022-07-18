import * as React from "react";
import {
    NewsBigBlock,
    NewsWrapper,
    NewsSmallBlock,
    Title,
    Text,
    ButtonMore
} from "pages/MainPage/components/News/News.styles";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {FreeMode, Navigation, Thumbs} from "swiper";

const News = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    return (
        <NewsWrapper>
            <>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <NewsBigBlock>
                            <Title>Заголовок новости 1</Title>
                            <Text>
                                подробная информация о товаре и еще какой-то длинный очень длинный текст
                            </Text>
                            <ButtonMore>Подробнее...</ButtonMore>
                        </NewsBigBlock>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsBigBlock>
                            <Title>Заголовок новости 2</Title>
                            <Text>
                                подробная информация о товаре и еще какой-то длинный очень длинный текст
                            </Text>
                            <ButtonMore>Подробнее</ButtonMore>
                        </NewsBigBlock>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsBigBlock>
                            <Title>Заголовок новости 3</Title>
                            <Text>
                                подробная информация о товаре и еще какой-то длинный очень длинный текст
                            </Text>
                            <ButtonMore>Подробнее</ButtonMore>
                        </NewsBigBlock>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    style={{
                        width: '70%',
                        "--swiper-navigation-color": "red",
                    }}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={5}
                    slidesPerView={3}
                    freeMode
                    watchSlidesProgress
                    navigation
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <NewsSmallBlock>
                            миниатюра новости 1
                        </NewsSmallBlock>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsSmallBlock>
                            миниатюра новости 2
                        </NewsSmallBlock>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsSmallBlock>
                            миниатюра новости 3
                        </NewsSmallBlock>
                    </SwiperSlide>

                </Swiper>
            </>
        </NewsWrapper>
    )
}

export default News;
