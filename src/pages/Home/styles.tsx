import styled from 'styled-components'
import {
  FaPlus,
  FaMinus,
  FaDice,
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix
} from 'react-icons/fa'

const iconsSize = '24px'

export const PlayerOnePointsContainer = styled.div`
  width: 100%;
  height: 10vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 450px) {
    height: 15vh;
  }
`

export const PlayerTwoPointsContainer = styled.div`
  width: 100%;
  height: 10vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  transform: rotate(180deg);

  @media (min-width: 450px) {
    height: 15vh;

    transform: rotate(0deg);
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const ActionButtonsContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 2px;
  margin-bottom: 2px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const CalculatorValueMobileContainer = styled.div`
  margin-top: 2px;

  @media (min-width: 450px) {
    display: none;
  }
`

export const CalculatorValueDesktopContainer = styled.div`
  width: 99%;
  margin: 2px;

  display: flex;
  flex-direction: row;

  @media (max-width: 450px) {
    display: none;
  }
`

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

// icons with buttons
export const PlusIcon = styled(FaPlus)`
  font-size: ${iconsSize};
`

export const MinusIcon = styled(FaMinus)`
  font-size: ${iconsSize};
`

export const GenericDice = styled(FaDice)`
  font-size: ${iconsSize};
`

export const DiceOne = styled(FaDiceOne)`
  font-size: ${iconsSize};
`

export const DiceTwo = styled(FaDiceTwo)`
  font-size: ${iconsSize};
`

export const DiceThree = styled(FaDiceThree)`
  font-size: ${iconsSize};
`

export const DiceFour = styled(FaDiceFour)`
  font-size: ${iconsSize};
`

export const DiceFive = styled(FaDiceFive)`
  font-size: ${iconsSize};
`

export const DiceSix = styled(FaDiceSix)`
  font-size: ${iconsSize};
`
