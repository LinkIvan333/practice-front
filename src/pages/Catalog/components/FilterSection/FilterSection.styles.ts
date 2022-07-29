import styled from "styled-components";

import list from 'img/list.png';
import grid from 'img/grid.png';
import lines from 'img/lines.png';


export const FilterWrapper = styled.div`
  margin-top: 135px; // отсуп для хеадера
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

export const CategoryPath = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
export const CategoryTagsWrapper = styled.div`
  margin: 0 auto 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 24%);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 0.3rem;
  justify-content: space-between;
  color: white;
`
export const MainFilterWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
`

export const ViewButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ViewButtonList = styled.div`
  width: 2rem;
  height: 2rem;
  background: url("${list}") no-repeat bottom / contain;
`

export const ViewButtonLines = styled.div`
  width: 2rem;
  height: 2rem;
  background: url("${lines}") no-repeat bottom / contain;
`

export const ViewButtonGrid = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background: url("${grid}") no-repeat bottom / contain;
`

export const GroupFilterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  border-bottom: 1px solid white;
  padding: 1rem 0;
`

export const FilterItemWrapper = styled.div`
  padding: 0.7rem 1.4rem;
  border: 1px solid white;
  border-radius: 5px;
  position: relative;
`

export const PriceDropDown = styled.div`
  width: 15rem;
  height: 10em;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  background: black;
`

