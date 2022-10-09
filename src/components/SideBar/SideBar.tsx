import * as React from 'react';

import { AboutAnchorEnum, RouteEnum } from '../../config/routes';
import HeaderLink from '../HeaderLink/HeaderLink';

import {
  CloseButton,
  SidebarContainer,
  SidebarHeader,
  SidebarLogo,
  SidebarWrapper,
} from './SideBar.styles';

type SideBarProps = {
  isSidebarOpen?: boolean;
  onClose: VoidFunction;
};

const SideBar: React.FC<SideBarProps> = ({
  isSidebarOpen,
  onClose,
}: SideBarProps) => {
  return (
    <SidebarWrapper>
      <SidebarContainer show={isSidebarOpen}>
        <SidebarHeader>
          <SidebarLogo />
          <CloseButton onClick={onClose} />
        </SidebarHeader>
        <HeaderLink to={RouteEnum.catalog}>Каталог</HeaderLink>
        <HeaderLink to={RouteEnum.catalog}>Мастерская</HeaderLink>
        <HeaderLink to={AboutAnchorEnum.payAndDelivery}>
          Оплата и Доставка
        </HeaderLink>
        <HeaderLink to={AboutAnchorEnum.contacts}>Контакты</HeaderLink>
        <HeaderLink to={AboutAnchorEnum.about}>О нас</HeaderLink>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default SideBar;
