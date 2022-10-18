import * as React from 'react';

import { StyledHeaderLink } from './HeaderLink.styles';

type LinkProps = {
  children: React.ReactNode;
  to: string;
  onClick?: VoidFunction;
};

const HeaderLink: React.FC<LinkProps> = ({
  children,
  to,
  onClick,
}: LinkProps) => {
  return (
    <StyledHeaderLink onClick={onClick} to={to}>
      {children}
    </StyledHeaderLink>
  );
};

export default HeaderLink;
