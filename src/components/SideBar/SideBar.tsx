import * as React from 'react';

import { AboutAnchorEnum, RouteEnum } from '../../config/routes';

import {
  CloseButton,
  SidebarContainer,
  SidebarHeader,
  SidebarLink,
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
    <SidebarWrapper show={isSidebarOpen}>
      {/*<SidebarContainer>*/}
      <SidebarHeader>
        <SidebarLogo>Моделька</SidebarLogo>
        <CloseButton onClick={onClose} />
      </SidebarHeader>
      <SidebarLink onClick={onClose} to={RouteEnum.catalog}>
        Каталог
      </SidebarLink>
      <SidebarLink onClick={onClose} to={RouteEnum.catalog}>
        Мастерская
      </SidebarLink>
      <SidebarLink onClick={onClose} to={AboutAnchorEnum.payAndDelivery}>
        Оплата и Доставка
      </SidebarLink>
      <SidebarLink onClick={onClose} to={AboutAnchorEnum.contacts}>
        Контакты
      </SidebarLink>
      <SidebarLink onClick={onClose} to={AboutAnchorEnum.about}>
        О нас
      </SidebarLink>
      {/*</SidebarContainer>*/}
    </SidebarWrapper>
  );
};

export default SideBar;
