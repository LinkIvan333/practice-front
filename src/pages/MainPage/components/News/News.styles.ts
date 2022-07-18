import styled from "styled-components";

export const NewsWrapper = styled.div`
  width: 100%;
  height: 850px;
`;


export const NewsBigBlock = styled.div`
  width: 100%;
  height: 700px;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 2rem;
  background: black;
  padding: 2rem;
  position: relative;
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

export const Text = styled.p`
  font-size: 1.5rem;
  color: white;
  font-weight: 300;
  width: 50%;
`

export const ButtonMore = styled.button`
  white-space: nowrap;
  border: white 1px solid;
  color: white;
  background: none;
  border-radius: 5px;
  padding: 5px 15px;
  position: absolute;
  bottom: 5rem;
  right: 5rem;
`

export const NewsSmallBlock = styled.div`
  width: 100%;
  height: 100px;
  background: #4f6035;
  color: white;
`;


