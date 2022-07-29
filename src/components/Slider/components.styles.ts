import styled from "@emotion/styled";

export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const ResultInput = styled.input`
  background: none;
  width: 50%;
  border: 1px solid white;
  padding: 0.3rem;
  color: white;
`

export const ResultInputLeft = styled(ResultInput)`
border-radius: 15px 0 0 15px;
`

export const ResultInputRight = styled(ResultInput)`
  border-radius: 0 15px 15px 0 ;
`
