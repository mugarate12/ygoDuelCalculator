import styled from 'styled-components'

export const ButtonContainer = styled.button`
  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.color};

  border: 0 none;
  border-radius: 5%;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`
