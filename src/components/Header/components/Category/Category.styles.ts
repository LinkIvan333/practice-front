import styled, {css, keyframes} from "styled-components";
import downArrow from 'img/downArrow.png';
import upArrow from 'img/upArrow.png';

export const CatalogCategory = styled.div`
  display: flex;
  flex-direction: column;
`

export const CatalogCategoryTitle = styled.div<{show: boolean}>`
  font-size: 26px;
  font-weight: 600;
  color: black;
  margin: 1rem 0;

  &:hover{
    color: red;
  }
  
  &:after{
    position: relative;
    top: 0;
    left: 0;
    transform: translate(50%, 100%);
    content: '';
    padding-left: 1rem ;
    margin-left: 1rem;
    background: url("${downArrow}") no-repeat center / contain;
  }

  ${({show = false})=>show && css`
    &:after{
      content: '';
      background: url("${upArrow}") no-repeat center / contain;
    }
  `}
`

const appearKeyFrames = keyframes`
0%{
  height: 0;
}
  
  50%
  {
    height: 50%;
  }
  
  100%{
    height: 100%;
  }
`

export const CatalogCategoryItemWrapper = styled.div<{show: boolean}>`
  display: flex;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  transition: height 500ms ease-out;
  
  ${({show = false})=>show &&  css`
    height: 100%;
    animation: ${appearKeyFrames} 500ms  ease-out backwards;
  `}
`

export const CatalogCategoryItem = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: black;
  margin: 0.2rem 0;

  &:hover{
    color: red;
  }
`
