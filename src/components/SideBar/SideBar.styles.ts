import styled, { css, keyframes } from 'styled-components';

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

export const SidebarWrapper = styled.div`
  text-align: center;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export const SidebarContainer = styled.aside<{ show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate(-100%);
  background: #18a0fb;
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

export const SidebarHeader = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.div`
  width: 4rem;
  height: 4rem;
  background: black;
  cursor: pointer;

  &:hover {
    color: var(--clr-red-light);
  }
`;

export const SidebarLogo = styled.div`
  width: 100%;
  height: 5rem;
  background: gray;
`;
