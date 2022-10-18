import styled from 'styled-components';

import background from './img/workShop.png';

export const WorkShopWrapper = styled.div`
  width: 100%;
  height: 70rem;
  padding: 0 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url('${background}') no-repeat right / cover;
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  position: relative;
  margin-bottom: 0.5rem;

  &::after {
    content: '';
    display: block;
    position: relative;
    top: 0.5rem;
    left: 0;
    width: 100%;
    height: 3px;
    background: red;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
`;
