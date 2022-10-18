import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Wrapper1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: #18a0fb;
  z-index: 1000;
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 9rem;

  @media (min-width: 992px) {
    padding-top: 14rem;
  }
`;
