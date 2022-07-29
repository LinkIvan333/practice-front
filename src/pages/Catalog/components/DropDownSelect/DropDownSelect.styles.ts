import styled from "styled-components";

export const DropDownSelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
`

export const Control = styled.button`
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  background: none;
  border-bottom: 1px white solid;
  text-align: left;
  font-family: inherit;
  font-size: 20px;
  font-weight: 300;
`;

export const Menu = styled.menu`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 1px 0 0;
  padding: 0;
  border: 1px solid #bebebe;
  width: 100%;
  
  max-height: 200px;
  overflow-y: auto;
`;
