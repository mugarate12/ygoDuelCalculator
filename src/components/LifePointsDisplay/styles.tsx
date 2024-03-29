import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LifePoints = styled.h2`
  font-size: 24px;
  font-size: 1.5rem;

  @media (min-width: 450px) {
    font-size: 36px;
    font-size: 2.25rem;
  }
`