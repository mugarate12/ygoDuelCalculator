import styled from 'styled-components'

export const Button = styled.button`
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

export const NumberText = styled.p`
  font-size: 24px;
  font-size: 1.5rem;

  color: ${props => props.color};

  @media (min-width: 450px) {
    font-size: 36px;
    font-size: 2.25rem;
  }
`