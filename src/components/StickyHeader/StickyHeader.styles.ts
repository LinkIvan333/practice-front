import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import logo from 'img/logo.png';
import colors from 'styles/colors';

export const UpperHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 9rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.lightBlack};
  z-index: 100;
`;

export const HeaderLogo = styled(Link)`
  width: 6rem;
  height: 6rem;
  background: url('${logo}') no-repeat center / cover;
`;

export const HeaderIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIconWrapper = styled.div`
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderIconImage = styled.div<{ src: string }>`
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;

  ${({ src }) => css`
    background: url('${src}') no-repeat center / cover;
  `}
`;

export const MenuLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuIcon = styled.button`
  width: 3rem;
  height: 3rem;
  background: red;
  margin-right: 2rem;

  @media (min-width: 992px) {
    display: none;
  }
`;
