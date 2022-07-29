import styled, {css} from "styled-components";

export const ItemWrapper = styled.div`
  height: 100%;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const ItemImage = styled.div<{src?: string}>`
  margin-bottom: 1rem;
  background: gray;
  width: 100%;
  //height: 11rem;
  
  ${({src})=>src && css`
  background: url("${src}") no-repeat center / contain;
  `}
  transition: transform 0.5s ease;
  
  &::before {
    content: '';
    display: block;
    padding-top: 80%;
  }


  &:hover{
    transform: scale(1.1);
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Articule = styled.div`
  font-size: 12px;
  font-weight: 300;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
