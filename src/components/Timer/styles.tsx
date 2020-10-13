import styled from 'styled-components'

export const TimerMobileContainer = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: row;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #333;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #333;

  @media (min-width: 450px) {
    display: none;
  }
`

export const TimerContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #333;

  @media (min-width: 450px) {
    border: 0 none;
  }
`

export const TimerPlayerTwoContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(180deg);
`

export const TimerContent = styled.p`
  font-size: 16px;
  font-size: 1rem;

  @media (min-width: 450px) {
    font-size: 36px;
    font-size: 2.25rem;
  }
`