import styled from "styled-components";

export const CatalogWrapper = styled.div`
  height: 100%;
  min-height: 800px;
  width: 100%;
  padding: 2rem;
  background: black;
`

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);
  grid-template-rows: repeat(auto-fill, 1fr);
`
