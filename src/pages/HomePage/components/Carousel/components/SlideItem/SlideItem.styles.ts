import styled, { css } from 'styled-components';

export const SlideWrapper = styled.div<{ src?: string }>`
  width: 100%;
  height: 500px;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  ${({ src }) =>
    src &&
    css`
      background: url('${src}') no-repeat center / cover;
    `}
`;

export const InfoWrapper = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SlideItemTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const SlideItemText = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const SlideItemImage = styled.div`
  background: black;
  width: 100%;
  height: 700px;
`;
