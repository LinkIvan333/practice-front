import { NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import close from 'img/close.png';
import colors from 'styles/colors';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-100%);
  }
  100% {
    opacity: 1;
    transform: translate(0%);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    z-index: 999;
    transform: translate(0%);
   
  }
  99% {
    opacity: 0;
    z-index: 999;
    transform: translate(-100%);
  }
  100% {
    z-index: -1;
    display: none;
  }
`;

export const SidebarWrapper = styled.div<{ show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 5rem 1.2rem 0;
  text-align: center;
  width: 100%;
  height: 100%;
  transform: translate(-100%);
  background: #171717;
  transition: opacity 500ms linear, transform 500ms linear;

  ${({ show }) =>
    show === true
      ? css`
          animation: 500ms ${fadeIn} ease-out forwards;
          z-index: 999;
        `
      : show === false
      ? css`
          animation: 500ms ${fadeOut} ease-in forwards;
        `
      : null}
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SidebarHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.red};
`;

export const CloseButton = styled.div`
  width: 4rem;
  height: 4rem;
  background: url('${close}') no-repeat center / contain;
  cursor: pointer;

  &:hover {
    color: var(--clr-red-light);
  }
`;

export const SidebarLogo = styled.div`
  width: 100%;
  height: 5rem;
  color: ${colors.white};
  font-weight: 500;
  font-size: 3.2rem;
  text-align: left;
`;

export const SidebarLink = styled(NavLink)`
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-weight: 500;
  font-size: 2rem;
  &:hover {
    background: ${colors.redLight};
  }
`;
