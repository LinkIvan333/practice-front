import * as React from 'react';

import { RouteEnum } from '../../config/routes';

import { HeaderLinkWrapper, StyledHeaderLink } from './HeaderLink.styles';

type LinkProps = {
  children: React.ReactNode;
  to: string;
};

const HeaderLink: React.FC<LinkProps> = ({ children, to }: LinkProps) => {
  return <StyledHeaderLink to={to}>{children}</StyledHeaderLink>;
};

export default HeaderLink;
