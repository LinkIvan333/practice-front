import * as React from 'react';
import { useNavigate } from 'react-router';

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
  const navigate = useNavigate();

  const handleNavigateCart = React.useCallback(() => {
    navigate(RouteEnum.cart);
  }, []);

  const handleNavigateFavorites = React.useCallback(() => {
    navigate(RouteEnum.favorites);
  }, []);

  return (
    <UpperHeaderWrapper>
      <MenuLogoWrapper>
        <MenuIcon onClick={onMenuClick} />
        <HeaderLogo to={RouteEnum.home} />
      </MenuLogoWrapper>

      <HeaderIconsWrapper>
        <HeaderIconWrapper>
          <HeaderIconImage onClick={handleNavigateFavorites} src={favorite} />
        </HeaderIconWrapper>
        <HeaderIconWrapper>
          <HeaderIconImage onClick={handleNavigateCart} src={basket} />
        </HeaderIconWrapper>
        <HeaderIconWrapper>
          <HeaderIconImage src={profile} />
        </HeaderIconWrapper>
      </HeaderIconsWrapper>
    </UpperHeaderWrapper>
  );
};

export default React.memo(StickyHeader);
