import styled from "styled-components";
import background from  './img/workShop.png';

export const NewsWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 2rem;
  color: white;
`;



export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: white;
  position: relative;
  margin-bottom: 3rem;

  &::after{
    content: '';
    display: block;
    position: relative;
    top: 0.5rem;
    left: 0;
    width: 100%;
    height: 3px;
    background: red;

  }
`

export const Text = styled.div`
  width: 100%;
  height: 100%;
  background:  url("${background}") no-repeat center / contain;
`;


