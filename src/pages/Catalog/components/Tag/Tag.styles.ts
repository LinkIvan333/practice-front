import styled from "styled-components";

export const CategoryTag = styled.div`
  width: 100%;
  //border: 1px gray solid;
  //display: flex;
  // align-items: center;
  //padding: 0.3rem;
  position: relative;

  padding: 0.7rem 1.4rem;
  border: 1px solid white;
  border-radius: 5px;
  text-align: center;

  transition: transform 0.3s ease-in-out;

  &:hover {
    border: 1px solid #ff0000;
  }
`

export const TextPart = styled.div`
  display: flex;
  flex-direction: column;

`

export const TagImage = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  background: red;
  margin-right: 1rem;

`

export const TagName = styled.div`
  font-size: 16px;
  font-weight: 300;

`

export const TagCount = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: gray;

`
