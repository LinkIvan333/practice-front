import * as React from 'react';
import {createPortal} from 'react-dom';
import {Transition, TransitionStatus} from 'react-transition-group';

import {
    Background,
    ModalBody,
    CloseIcon,
    ModalText,
    StyledModalCard,
    ModalImage,
    RightInfoWrapper,
    SmallInfoText,
    UpperWrapper,
    BigInfoText,
    PriceAndBuyWrapper,
    BuyButton,
    BottomWrapper,
    AdditionBlock, AdditionSlide, Price, PriceHelp
} from "components/ModalCard/ModalCard.styles";
import {SLIDES} from "pages/MainPage/components/Carousel/config";
import {Swiper, SwiperSlide} from "swiper/react";

const backgroundTransitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 0.6},
    exiting: {opacity: 0},
    exited: {opacity: 0},
};

const bodyTransitionStyles = {
    entering: {
        transform: 'translate(-50%, 0%)',
        opacity: 0,
    },
    entered: {
        transform: 'translate(-50%, -50%)',
        opacity: 1,
    },
    exiting: {
        transform: 'translate(-50%, 100%)',
        opacity: 0,
    },
    exited: {
        transform: 'translate(-50%, 100%)',
        opacity: 0,
    },
};

type ModalCardProps = {
    show: boolean;
    onClose?: VoidFunction;
    title?: React.ReactNode;
    scale?: string;
    articule?: string;
    dimensions?: string;
    weight?: number;
    price?: number;
    sell?: boolean

};

const ModalCard: React.FC<ModalCardProps> = ({
                                                 title,
                                                 onClose,
                                                 show,
                                                 scale,
                                                 articule,
                                                 weight,
                                                 dimensions,
                                                 sell,
                                                 price
                                             }: ModalCardProps) => {

    return (
        <Transition in={show} timeout={300} mountOnEnter unmountOnExit>
            {(state: TransitionStatus) => (
                <StyledModalCard>
                    <Background style={{...backgroundTransitionStyles[state]}} onClick={onClose}/>
                    <ModalBody style={{...bodyTransitionStyles[state]}}>
                        {onClose && <CloseIcon onClick={onClose}/>}
                        <ModalText>{title}</ModalText>
                        <UpperWrapper>
                            <ModalImage/>
                            <RightInfoWrapper>
                                <BigInfoText>Характеристики</BigInfoText>
                                <SmallInfoText>Артикул:{articule}</SmallInfoText>
                                <SmallInfoText>Мастштаб:{scale}</SmallInfoText>
                                <SmallInfoText>Размеры:{dimensions}</SmallInfoText>
                                <SmallInfoText>Вес:{weight}</SmallInfoText>
                                <PriceAndBuyWrapper>
                                    <Price sell={sell}>{price}₽
                                        <PriceHelp>{sell ? 'На этот товар можно применить скидку' : 'К сожалению, на этот товар нельзя применить скидку'}</PriceHelp>
                                    </Price>
                                    <BuyButton>Купить</BuyButton>
                                </PriceAndBuyWrapper>
                            </RightInfoWrapper>
                        </UpperWrapper>
                        <BottomWrapper>
                            <BigInfoText>Описние:</BigInfoText>
                            <SmallInfoText>{title}</SmallInfoText>
                            <BigInfoText>Допы:</BigInfoText>
                            <AdditionBlock>

                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={12}
                                    loop={true}
                                    className="mySwiper"
                                >
                                    {
                                        SLIDES.map((item, index) => (
                                            <SwiperSlide>
                                                <AdditionSlide/>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>

                            </AdditionBlock>
                        </BottomWrapper>
                    </ModalBody>
                </StyledModalCard>
            )}
        </Transition>
    );
};

export default ModalCard;
