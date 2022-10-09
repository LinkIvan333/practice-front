import * as React from 'react';

import { AboutAnchorEnum, RouteEnum } from 'config/routes';

import HeaderLink from '../HeaderLink/HeaderLink';

import { BottomHeaderWrapper } from './Header.styles';

const Header = () => {
  return (
    <BottomHeaderWrapper>
      <HeaderLink to={RouteEnum.catalog}>Каталог</HeaderLink>
      <HeaderLink to={RouteEnum.catalog}>Мастерская</HeaderLink>
      <HeaderLink to={AboutAnchorEnum.payAndDelivery}>
        Оплата и Доставка
      </HeaderLink>
      <HeaderLink to={AboutAnchorEnum.contacts}>Контакты</HeaderLink>
      <HeaderLink to={AboutAnchorEnum.about}>О нас</HeaderLink>
    </BottomHeaderWrapper>
  );
};

export default React.memo(Header);
