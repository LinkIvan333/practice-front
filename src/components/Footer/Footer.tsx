import * as React from 'react';

import {
  Address,
  Contacts,
  Email,
  ColumnInfoTitle,
  Phone,
  Socials,
  StyledFooter,
  TgIcon,
  YouTubeIcon,
  WhatsAppIcon,
  HorizontalWrapper,
} from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <HorizontalWrapper>
        <ColumnInfoTitle>Каталог</ColumnInfoTitle>
        <ColumnInfoTitle>Мастерская</ColumnInfoTitle>
        <ColumnInfoTitle>О нас</ColumnInfoTitle>
        <ColumnInfoTitle>Оплата и доставка</ColumnInfoTitle>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Contacts>
          <Address>улица Пушкина дом Колотушкина</Address>
          <Phone>+7 777 777 77 77</Phone>
          <Email>123456789@mail.ru</Email>
        </Contacts>
        <Socials>
          <TgIcon />
          <WhatsAppIcon />
          <YouTubeIcon />
        </Socials>
      </HorizontalWrapper>
    </StyledFooter>
  );
};

export default Footer;
