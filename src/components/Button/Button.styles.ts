import styled, {css} from 'styled-components';

import downArrow from 'img/downArrow.svg';
import cross from 'img/cross.svg';

export const ButtonWrapper = styled.div<{isActive?: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 100%;
  border: 1px solid white;
  color: white;
  margin: 0 1rem;
  
  ${({isActive = false})=> isActive && css`
  background: red;
  `}
  
  &:hover{
    border: 1px solid red;
  }
`;

export const ButtonContent = styled.div`
  width: 80%;
  height: 100%;
`;

export const ButtonRight = styled.div<{isActive?: boolean}>`
  margin-left: 0.3rem;
  width: 1rem;
  height: 1rem;
  text-align: right;
  color: white;
  background: url('${downArrow}') no-repeat center / contain;

  ${({isActive = false})=> isActive && css`
    background: url('${cross}') no-repeat center / contain;
  `}
`;
