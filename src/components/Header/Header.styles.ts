import styled from 'styled-components';

import colors from 'styles/colors';

export const BottomHeaderWrapper = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    position: fixed;
    top: 9rem;
    width: 100%;
    height: 5rem;
    padding: 0 3rem;
    align-items: center;
    justify-content: space-between;
    background: ${colors.red};
  }
`;
