import styled, {css} from "styled-components";

export const DropDownContainer = styled.div<{checked: boolean}>`
  padding: 0.4rem 0.7rem;
  font-size: 12px;
  font-weight: 300;
  border: 1px solid white;
  position: relative;
  margin: 0 1rem;
  color: white;
  
  &:hover{
    border: 1px solid red;
  }
  
  ${({checked})=> checked && css`

    background: #ff0000;

    //&:after{
    //  content: '✓';
    //  font-size: 10px;
    //  color: white;
    //  margin-left: 0.3rem;
    //}
  `}
`

export const DropDownItem = styled.div`
  width: 100%;
  min-width: 14rem;
  height: 10em;
  padding: 2rem;
  position: absolute;
  top: 105%;
  left: 0;
  background: black;
  color: white;
`

