import styled, {css, keyframes} from 'styled-components';
import logo from 'img/logo.png';
import location from 'img/location.png';
import phone from 'img/phone.png';
import email from 'img/mail.png';

import whatsApp from 'img/whatsapp.png';
import tg from 'img/telegram.png';
import youTube from 'img/youTube.png';

export const StyledFooter = styled.div`
  width: 100%;
  height: 150px;
  background: #212121;
  color: #767676;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HalfSide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
`

export const RightSide = styled(HalfSide)`
  width: 50%;
  justify-content: space-around;
`

export const Logo = styled.div`
  width: 6rem;
  height: 6rem;
  background: url("${logo}") no-repeat center / contain;
`;

export const InfoBLock = styled.div`
  //width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  max-width: 70%;
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
`;

export const Phone = styled.div`
  &::before {
    content: '';
    padding: 12px;
    margin-right: 5px;
    background: url("${phone}") no-repeat center / contain;

  }
`;

export const Email = styled.div`
  &::before {
    content: '';
    padding: 12px;
    margin-right: 5px;
    background: url("${email}") no-repeat center / contain;

  }
`;

export const Socials = styled.div`
  //width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
`;

export const WhatsAppIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  background: url("${whatsApp}") no-repeat center / contain;
  transition: transform 300ms ease-in-out;
  
  &:hover{
    transform: translateY(-20%) scale(1.2);
  }
`;

export const TgIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  background: url("${tg}") no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover{
    transform: translateY(-20%) scale(1.2);
  }
`;

export const YouTubeIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  background: url("${youTube}") no-repeat center / contain;
  transition: transform 300ms ease-in-out;

  &:hover{
    transform: translateY(-20%) scale(1.2);
  }
`;
