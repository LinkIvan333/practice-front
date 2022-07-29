import * as React from "react";
import styled from "styled-components";

type TitleProps = {
    children: React.ReactNode;
}


const StyledTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: white;
  position: relative;
  margin-bottom: 3rem;

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
`

const Title: React.FC<TitleProps> = ({children}: TitleProps) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    );
};

export default Title;
