import * as React from 'react';

import { RouteEnum } from 'config/routes';
import basket from 'img/cart.png';
import favorite from 'img/heart-o.png';
import profile from 'img/user.png';

import {
  HeaderIconImage,
  HeaderIconsWrapper,
  HeaderIconWrapper,
  HeaderLogo,
  MenuIcon,
  MenuLogoWrapper,
  UpperHeaderWrapper,
} from './StickyHeader.styles';

type StickyHeaderProps = {
  onMenuClick: VoidFunction;
};

const StickyHeader: React.FC<StickyHeaderProps> = ({ onMenuClick }) => {
  return (
    <UpperHeaderWrapper>
      <MenuLogoWrapper>
        <MenuIcon onClick={onMenuClick} />
        <HeaderLogo to={RouteEnum.home} />
      </MenuLogoWrapper>

      <HeaderIconsWrapper>
        <HeaderIconWrapper>
          <HeaderIconImage src={favorite} />
        </HeaderIconWrapper>
        <HeaderIconWrapper>
          <HeaderIconImage src={basket} />
        </HeaderIconWrapper>
        <HeaderIconWrapper>
          <HeaderIconImage src={profile} />
        </HeaderIconWrapper>
      </HeaderIconsWrapper>
    </UpperHeaderWrapper>
  );
};

export default React.memo(StickyHeader);
