import * as React from 'react';
import { createPortal } from 'react-dom';
import { Transition, TransitionStatus } from 'react-transition-group';

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
  AdditionBlock,
  AdditionSlide,
  Price,
  PriceHelp,
} from 'components/ModalCard/ModalCard.styles';
import { SLIDES } from 'pages/MainPage/components/Carousel/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ModelType} from "store/globals/RootStore/types";

const backgroundTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0.6 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
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
  card: ModelType | undefined;
};

const ModalCard: React.FC<ModalCardProps> = ({
  card,
  onClose,
  show,

}: ModalCardProps) => {
  console.log('card', card);

  console.log(card?.article, card?.scale, card?.name);
  return (
    <Transition in={show} timeout={300} mountOnEnter unmountOnExit>
      {(state: TransitionStatus) => (
        <StyledModalCard>
          <Background style={{ ...backgroundTransitionStyles[state] }} onClick={onClose} />
          <ModalBody style={{ ...bodyTransitionStyles[state] }}>
            {onClose && <CloseIcon onClick={onClose} />}
            <ModalText>{card?.name}</ModalText>
            <UpperWrapper>
              <ModalImage />
              <RightInfoWrapper>
                <BigInfoText>Характеристики</BigInfoText>
                <SmallInfoText>Артикул:{card?.article}</SmallInfoText>
                <SmallInfoText>Мастштаб:{card?.scale}</SmallInfoText>
                <SmallInfoText>Размеры:{card?.dimensions}</SmallInfoText>
                <SmallInfoText>Вес:{card?.weight}</SmallInfoText>
                <PriceAndBuyWrapper>
                  <Price sell={card?.sell}>
                    {card?.price}₽
                    <PriceHelp>
                      {card?.sell
                        ? 'На этот товар можно применить скидку'
                        : 'К сожалению, на этот товар нельзя применить скидку'}
                    </PriceHelp>
                  </Price>
                  <BuyButton>Купить</BuyButton>
                </PriceAndBuyWrapper>
              </RightInfoWrapper>
            </UpperWrapper>
            <BottomWrapper>
              <BigInfoText>Описние:</BigInfoText>
              <SmallInfoText>{card?.name}</SmallInfoText>
              <BigInfoText>Допы:</BigInfoText>
              <AdditionBlock>
                <Swiper slidesPerView={5} spaceBetween={12} loop={true} className="mySwiper">
                  {SLIDES.map((item, index) => (
                    <SwiperSlide>
                      <AdditionSlide />
                    </SwiperSlide>
                  ))}
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
