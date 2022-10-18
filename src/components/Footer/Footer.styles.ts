import styled, { css, keyframes } from 'styled-components';

import location from 'img/location.png';
import logo from 'img/logo.png';
import email from 'img/mail.png';
import phone from 'img/phone.png';
import tg from 'img/telegram.png';
import whatsApp from 'img/whatsapp.png';
import youTube from 'img/youTube.png';
import { DEVICE } from 'styles/sizes';

export const StyledFooter = styled.div`
  width: 100%;
  height: 20rem;
  background: #212121;
  color: #767676;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${DEVICE.mobileL} {
    padding: 2rem;
  }
`;
export const ColumnInfoTitle = styled.div`
  position: relative;

  &::after {
    content: '';
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
    margin-bottom: 1rem;
  }
`;

export const Contacts = styled.div`
  //width: 50%;
  //height: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${DEVICE.mobileL} {
    margin-bottom: 3rem;
  }
`;

export const Address = styled.div`
  &::before {
    content: '';
    padding: 12px;
    margin-right: 5px;
    background: url('${location}') no-repeat center / contain;
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
    background: url('${phone}') no-repeat center / contain;
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
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0;

  @media ${DEVICE.mobileL} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const WhatsAppIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
  background: url('${whatsApp}') no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-20%) scale(1.2);
  }

  @media ${DEVICE.mobileL} {
    margin: 0rem 3rem;
  }
`;

export const TgIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
  background: url('${tg}') no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-20%) scale(1.2);
  }

  @media ${DEVICE.mobileL} {
    margin: 0rem 3rem;
  }
`;

export const YouTubeIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
  background: url('${youTube}') no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-20%) scale(1.2);
  }

  @media ${DEVICE.mobileL} {
    margin: 0rem 3rem;
  }
`;

export const HorizontalWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;

  @media ${DEVICE.mobileL} {
    flex-direction: column;
    //align-items: flex-start;
    margin-bottom: 3rem;
  }
`;
