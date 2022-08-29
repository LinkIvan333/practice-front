import styled, {css, keyframes} from 'styled-components';
import logo from 'img/logo.png';
import location from 'img/location.png';
import phone from 'img/phone.png';
import email from 'img/mail.png';

import whatsApp from 'img/whatsapp.png';
import tg from 'img/telegram.png';
import youTube from 'img/youTube.png';
import {DEVICE} from "styles/sizes";

export const StyledFooter = styled.div`
  width: 100%;
  height: 150px;
  background: #212121;
  color: #767676;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${DEVICE.mobileL} {
    height: 100%;
    flex-direction: column-reverse;
    padding: 10px 20px;
  }
  
  @media ${DEVICE.laptop} {
    padding: 10px 20px;
  }
`;

export const HalfSide = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;

  @media ${DEVICE.mobileL} {
    width: 100%;
    margin-bottom: 1rem;
    //align-items: center;
    //justify-content: center;
  }
`

export const RightSide = styled(HalfSide)`
  width: 60%;
  justify-content: space-around;

  @media ${DEVICE.mobileL} {
    width: 100%;
  }
`

export const Logo = styled.div`
  width: 6rem;
  height: 6rem;
  background: url("${logo}") no-repeat center / contain;
  margin-right: 2rem;

  @media ${DEVICE.tablet} {
    display: none;
  }

  @media ${DEVICE.laptop} {
    margin-right: 1rem;
  }
`;

export const InfoBLock = styled.div`
  //width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  max-width: 70%;
  @media ${DEVICE.laptop} {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 2rem;
  }

  @media ${DEVICE.mobileL} {
    align-items: flex-start;
    margin-right: 0;
    width: 100%;
  }

`;

const TitleHover = keyframes`
  0% {
    width: 0
  }
  100% {
    width: 100%
  }`
export const ColumnInfoTitle = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    height: 2px;
    width: 0;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media ${DEVICE.mobileL} {
    margin-bottom: 0.5rem;
  }
`;

export const ColumnInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Contacts = styled.div`
  //width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Address = styled.div`
  &::before {
    content: '';
    padding: 12px;
    margin-right: 5px;
    background: url("${location}") no-repeat center / contain;
  }

  @media ${DEVICE.mobileL} {
    margin-bottom: 0.5rem;
  }
`;

export const Phone = styled.div`
  &::before {
    content: '';
    padding: 12px;
    margin-right: 5px;
    background: url("${phone}") no-repeat center / contain;
  }

  @media ${DEVICE.mobileL} {
    margin-bottom: 0.5rem;
  }
`;

export const Email = styled.div`
  &::before {
    content: '';
    padding: 12px;
    margin-right: 5px;
    background: url("${email}") no-repeat center / contain;
  }

  @media ${DEVICE.mobileL} {
    margin-bottom: 0.5rem;
`;

export const Socials = styled.div`
  //width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;

  @media ${DEVICE.mobileL} {
    width: 100%;
    align-items: flex-end;
  }

  @media ${DEVICE.laptop} {
    flex-direction: column;
  }
`;

export const WhatsAppIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  background: url("${whatsApp}") no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-20%) scale(1.2);
  }

  @media ${DEVICE.mobileL} {
    margin-bottom: 1rem;
  }
`;

export const TgIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  background: url("${tg}") no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-20%) scale(1.2);
  }

  @media ${DEVICE.mobileL} {
    margin-bottom: 1rem;
  }
`;

export const YouTubeIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  background: url("${youTube}") no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-20%) scale(1.2);
  }
`;
