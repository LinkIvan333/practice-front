import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const HeaderLinkWrapper = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.redLight};
  }
`;

export const StyledHeaderLink = styled(NavLink)`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: 500;
  font-size: 1.4rem;
  &:hover {
    background: ${colors.redLight};
  }
`;
