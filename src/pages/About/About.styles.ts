import styled from 'styled-components';

import colors from 'styles/colors';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const DefaultWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16rem);
  padding: 3rem 3rem 0;
  background: ${colors.black};
`;

export const Title = styled.div`
  font-size: 3rem;
  color: ${colors.white};
  font-weight: 600;
  margin-bottom: 1.2rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.6rem;
    left: 0;
    height: 3px;
    width: 100%;
    background: ${colors.red};
  }
`;

export const Text = styled.div`
  font-size: 2rem;
  color: ${colors.white};
`;
