import styled, {css} from "styled-components";
import close from 'img/close.png';

import sellicon from 'img/sell.png';


export const StyledModalCard = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: opacity 300ms ease-out;

`

export const ModalBody = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  width: 95%;
  padding: 1.6rem;
  background: #d3d3d3;
  border-radius: 1.8rem;
  transition: transform 300ms ease-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow-y: auto;
`

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ModalImage = styled.div`
  width: 70%;
  background: gray;

  &::before {
    content: '';
    display: block;
    padding-top: 40%;
  }
`

export const RightInfoWrapper = styled.div`
  width: 25%;
  height: 100%;
  //align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 2rem;
`

export const BigInfoText = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: black;
`

export const SmallInfoText = styled.div`
  font-size: 1.2rem;
  line-height: 2.6rem;
  color: #4f4f4f;
`


export const PriceAndBuyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`


export const PriceHelp = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 15rem;
  background: white;
  padding: 0.5rem;
  border-radius: 0.7rem;
  transform: translate(-50%, 100%);
  transition: opacity 300ms ease-in-out;

  font-weight: 300;
  line-height: 1rem;
  font-size: 0.7rem;
  color: black;
`

export const Price = styled(BigInfoText)<{ sell?: boolean }>`
  position: relative;
  
  &:hover ${PriceHelp}{
        opacity: 1;
      }

  ${({sell = false}) => sell && css`
    &:before {
      width: 1.2rem;
      height: 1.2rem;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(80%, -45%);
      background: url("${sellicon}") no-repeat center / contain;
    }
  `}
`


export const BuyButton = styled.button`
  width: 50%;
  background: red;
  border: 1px white solid;
  padding: 5px 10px;
  color: white;
  font-size: 1.2rem;
  line-height: 2.6rem;

  &:hover {
    background: #ce0e0e;
    border: 1px #000000 solid;
  }
`

export const ModalText = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: black;
  margin-bottom: 2rem;
`

export const BottomWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const AdditionBlock = styled.div`
  width: 100%;
  //height: 8rem;
`

export const AdditionSlide = styled.div`
  width: 100%;
  background: black;

  &::before {
    content: '';
    display: block;
    padding-top: 60%;
  }
`

export const CloseIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background: url("${close}") no-repeat center / contain;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  transform: translate(0%, 25%);
`
